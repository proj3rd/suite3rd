#!/usr/bin/env node

import { readFileSync } from "node:fs";
import { argv, exit } from "node:process";
import { extract } from "@lib/asn1/extractor";

function main() {
  const [, , path] = argv;
  if (!path) {
    console.log("path is required");
    exit(-1);
  }
  const content = readFileSync(path, "utf8");
  console.log(extract(content));
}

main();
