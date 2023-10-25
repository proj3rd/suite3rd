import { program } from "commander";
import { setAsn1Command } from "./asn1/index.js";
import { set3gppCommand } from "./3gpp/index.js";

setAsn1Command(program);
set3gppCommand(program);

program.parse();
