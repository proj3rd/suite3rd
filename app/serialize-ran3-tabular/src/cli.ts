#!/usr/bin/env node

import { readFileSync, writeFileSync } from "node:fs";
import { parse as parsePath } from "node:path";
import { argv } from "node:process";
import { program } from "commander";
import { parse as parseRan3Tabular } from "../../../src/3gpp/ran3/tabular";

function main() {
  program
    .argument("<path>", "Path to file to serialize RAN3 tabular")
    .action((path, options) => {
      const { name } = parsePath(path);
      const content = readFileSync(path);
      const parsed = parseRan3Tabular(content);
      // TODO: Correction
      writeFileSync(`${name}.tabular.json`, JSON.stringify(parsed));
    });
  program.parse(argv);
}

main();
