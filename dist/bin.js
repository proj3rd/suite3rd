#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const repo_1 = require("./std/repo");
const program = new commander_1.Command();
program
    .command("get-spec")
    .argument("<specNumber>")
    .argument("<release>")
    .argument("<date>")
    .action(async (specNumber, release, date) => {
    const rel = Number(release);
    if (isNaN(rel)) {
        throw Error();
    }
    await (0, repo_1.getSpec)(specNumber, +release, date);
});
program.parse();
//# sourceMappingURL=bin.js.map