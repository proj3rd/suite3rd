#!/usr/bin/env node

import { Command } from "commander";
import { getSpec } from "./std/repo";
import WordExtractor from "word-extractor";
import { extract } from "./asn1/extractor";
import { parse } from "path";
import { readFile } from "node:fs";

const program = new Command();

program
  .command("get-spec")
  .argument("<specNumber>")
  .argument("<release>")
  .argument("<date>")
  .action(async (specNumber: string, release: string, date: string) => {
    const rel = Number(release);
    if (isNaN(rel)) {
      throw Error();
    }
    await getSpec(specNumber, +release, date);
  });
const asn1 = program.command("asn1");
asn1
  .command("extract")
  .argument("<filepath>")
  .option("--exclude-non-tag-comment")
  .action(async (filepath: string, options) => {
    async function extractAndWrite(text: string, options: any) {
      const extracted = (await extract(text, options))
        // repalce '혻' (U+D63B) with whitespace
        .replace(/\uD63B/g, " ");
      process.stdout.write(extracted);
    }

    const { ext } = parse(filepath);
    switch (ext.toLocaleLowerCase()) {
      case ".doc":
      case ".docx":
        const extractor = new WordExtractor();
        extractor
          .extract(filepath)
          .then((doc) => {
            const text = doc.getBody();
            extractAndWrite(text, options);
          })
          .catch((reason) => {
            throw reason;
          });
        break;
      default:
        readFile(filepath, { encoding: "utf8" }, (err, text) => {
          if (err) {
            throw err;
          }
          extractAndWrite(text, options);
        });
    }
  });

program.parse();
