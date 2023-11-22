import { setExtractCommand } from "./extractor.js";
export function setAsn1Command(program) {
    const asn1Command = program.command("asn1");
    setExtractCommand(asn1Command);
}
