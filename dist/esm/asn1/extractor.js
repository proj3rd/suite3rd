var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { readFileSync, writeFileSync } from "fs";
import WordExtractor from "word-extractor";
import { selectDelimiters } from "./delimiters.js";
import { parse } from "path";
function extractDoc(path) {
    return __awaiter(this, void 0, void 0, function* () {
        const wordExtractor = new WordExtractor();
        const extracted = yield wordExtractor.extract(path);
        return extracted.getBody();
    });
}
export function setExtractCommand(program) {
    program
        .command("extract")
        .argument("<path>", "Path to text file containing ASN.1 definition")
        .action((path) => __awaiter(this, void 0, void 0, function* () {
        const { name, ext } = parse(path);
        const content = ext.startsWith(".doc")
            ? yield extractDoc(path)
            : readFileSync(path, "utf8");
        const delimiters = selectDelimiters(content);
        if (!delimiters) {
            console.error(`Cannot select ASN.1 delimiters for ${path}. Exit.`);
            return;
        }
        const { Starter, Terminator } = delimiters;
        const lines = [];
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
            lines.push(content.substring(starterMatch.index, terminaterMatch.index + terminaterMatch[0].length));
        }
        writeFileSync(`${name}.asn1`, lines.join("\n"));
    }));
}
