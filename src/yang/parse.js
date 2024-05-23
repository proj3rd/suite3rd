import { readFileSync } from "fs";
import Yang from "yang-js";

const content = readFileSync("3gpp.yang", "utf8");
const yang = Yang.parse(content);
// console.log(yang);
