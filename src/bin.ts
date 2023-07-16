#!/usr/bin/env node

import { Command } from "commander";
import { getSpec } from "./std/repo";

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

program.parse();
