// https://gist.github.com/commonquail/6084444fe418b422c286
// Adjust path to wordconv.exe
const WORDCONV_PATH = "C:\\Program Files\\Microsoft Office\\root\\Office16";

import { createReadStream, readFileSync, readdirSync, writeFileSync } from "fs";
import { Extract } from "unzipper";
import { z } from "zod";
import { getSpec } from "../std/repo";
import { exec } from "child_process";
import WordExtractor from "word-extractor";
import { extract } from "../asn1/extractor";
import { normalize, parse } from "lib3rd/dist/asn1";

const SpecNumber = z.string();
const Release = z.coerce.number().int().positive();
const YearMonth = z.string().length(7);
const Type = z.enum(["asn1", "tabular", "both"]);
const Input = z.tuple([SpecNumber, Release, YearMonth, Type]);
const InputList = z.array(Input);

async function serialize() {
  const extractor = new WordExtractor();

  // Input line format: specNumber release yyyy-mm type, e.g.:
  // 36.331 16 2022-09 asn1
  // 36.413 16 2022-09 both
  const inputList = InputList.parse(
    readFileSync("input", "utf8")
      .split("\n")
      .filter(Boolean)
      .map((line) => line.split(" "))
  );

  for (let i = 0; i < inputList.length; i++) {
    const input = inputList[i];
    if (!input) {
      break;
    }
    const [specNumber, release, date, type] = input;

    // Get spec
    const downloadedPath = await getSpec(specNumber, release, date);
    if (!downloadedPath) {
      console.error(`Failed to download: ${input}`);
      continue;
    }

    // Unzip
    const extractDir = downloadedPath.replace(".zip", "");
    createReadStream(downloadedPath).pipe(Extract({ path: extractDir }));
    // Check uniqueness of file
    const docFileList = readdirSync(extractDir).filter((file) =>
      file.startsWith(`${specNumber}.doc`)
    );
    if (docFileList.length !== 1) {
      console.error(`More than one file are extracted: ${input}`);
    }
    const docFile = docFileList[0];
    if (!docFile) {
      throw Error("unreachable");
    }

    // Convert
    const docxFile = docFile.replace(/doc$/, "docx");
    if (docFile !== docxFile) {
      exec(
        [
          `"${WORDCONV_PATH}"`,
          "-oice",
          "-nme",
          `"${extractDir}\\${docFile}"`,
          `"${extractDir}\\${docxFile}"`,
        ].join(" ")
      );
    }

    if (type === "asn1" || type === "both") {
      const asn1File = docxFile.replace("docx", "asn1.json");
      // Extract
      const doc = await extractor.extract(`${extractDir}/${docxFile}`);
      const text = doc.getBody();
      const extracted = await extract(text, {
        excludeNonTagComment: true,
      });
      // Parse
      const parsed = parse(normalize(extracted));
      // Serialize
      const serialized = JSON.stringify(parsed);
      writeFileSync(`${extractDir}/${asn1File}`, serialized);
    }
    if (type === "tabular" || type === "both") {
      const tabularfile = docxFile.replace("docx", "tabular.json");
      // Serialize
    }
  }
}

serialize();
