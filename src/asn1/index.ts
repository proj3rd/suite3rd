import { Command } from "commander";
import { setExtractCommand } from "./extractor.js";

export function setAsn1Command(program: Command) {
  const asn1Command = program.command("asn1");
  setExtractCommand(asn1Command);
}
