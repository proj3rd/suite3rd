import { Command } from "commander";
import { readFileSync, writeFileSync } from "fs";
import WordExtractor from "word-extractor";
import { selectDelimiters } from "./delimiters.js";
import { parse } from "path";

const NonTagPatterns: Array<string | RegExp> = [
  // Remove inline comment first
  /--\s*?.*?--/gi,
  /--\s*?\(.*$/gim,
  /--\s*?\d.*$/gim,
  /--\s*?[ab].*$/gim,
  /--\s*?cont.*$/gim,
  /--\s*?[d-m].*$/gim,
  /--\s*?[o-z].*$/gim,
];

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

      const asn1WithoutNonTag = NonTagPatterns.reduce(
        (asn1: string, pattern: string | RegExp) => asn1.replace(pattern, ""),
        lines.join("\n")
      );

      writeFileSync(`${name}.asn1`, asn1WithoutNonTag);
    });
}
