#!/usr/bin/env node

import { readFileSync } from "node:fs";
import { argv, exit } from "node:process";
import { extract } from "@lib/asn1/extractor";
import { program } from "commander";

function main() {
  program
    .argument("<path>", "Path to file to extract ASN.1 definition")
    .option("--exclude-non-tag-comment", "Exclude 3GPP non-tag comment")
    .action((path, options) => {
      const content = readFileSync(path, "utf8");
      const excludeNonTagComment = options.excludeNonTagComment as boolean;
      console.log(extract(content, { excludeNonTagComment }));
    });
  program.parse(argv);
}

main();
