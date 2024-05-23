import { readFileSync, readdirSync, writeFileSync } from "fs";
import Topo from "@hapi/topo";
import Yang from "yang-js";

const MODULE_PATTERN = /^\s*?(sub)?module\s+?(.+?)\s*?\{/gm;
const IMPORT_PATTERN = /^\s*?import\s+?(.+?)\s*?\{/gm;

const sortedModules = new Topo.Sorter<string>();

const yangFiles = readdirSync(".", {
  encoding: "utf8",
  recursive: true,
}).filter((file) => file.endsWith(".yang"));

yangFiles.forEach((file) => {
  const content = readFileSync(file, "utf8");
  const modules = Array.from(content.matchAll(MODULE_PATTERN)).map((result) => [
    result[2],
    result.index,
  ]);
  const imports = Array.from(content.matchAll(IMPORT_PATTERN)).map((result) => [
    result[1],
    result.index,
  ]);
  if (modules.length !== 1) {
    throw Error(
      `Handling of zero module or multiple modules is not yet implemented`
    );
  }
  sortedModules.add(file, {
    group: modules[0][0] as string,
    after: imports.map((imp) => imp[0]) as string[],
  });
});

const textList: string[] = [];
sortedModules.nodes.forEach((node) => {
  const content = readFileSync(node, "utf8");
  textList.push(content);
});
writeFileSync("3gpp.yang", textList.join("\n"));
