import { Command } from "commander";
import { readFileSync, writeFileSync } from "fs";
import WordExtractor from "word-extractor";
import { selectDelimiters } from "./delimiters.js";
import { parse } from "path";

async function extractDoc(path: string) {
  const wordExtractor = new WordExtractor();
  const extracted = await wordExtractor.extract(path);
  return extracted.getBody();
}

export function setExtractCommand(program: Command) {
  program
    .command("extract")
    .argument("<path>", "Path to text file containing ASN.1 definition")
    .action(async (path: string) => {
      const { name, ext } = parse(path);

      const content = ext.startsWith(".doc")
        ? await extractDoc(path)
        : readFileSync(path, "utf8");

      const delimiters = selectDelimiters(content);
      if (!delimiters) {
        console.error(`Cannot select ASN.1 delimiters for ${path}. Exit.`);
        return;
      }
      const { Starter, Terminator } = delimiters;

      const lines: string[] = [];
      while (true) {
        const starterMatch = Starter.exec(content);
        if (!starterMatch) {
          break;
        }
        Terminator.lastIndex = starterMatch.index + starterMatch[0].length;

        const terminaterMatch = Terminator.exec(content);
        if (!terminaterMatch) {
          break;
        }
        Starter.lastIndex = terminaterMatch.index + terminaterMatch[0].length;

        lines.push(
          content.substring(
            starterMatch.index,
            terminaterMatch.index + terminaterMatch[0].length
          )
        );
      }

      writeFileSync(`${name}.asn1`, lines.join("\n"));
    });
}
