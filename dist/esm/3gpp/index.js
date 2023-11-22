import { setFetchCommand } from "./fetcher.js";
export function set3gppCommand(program) {
    const threegppCommand = program.command("3gpp");
    setFetchCommand(threegppCommand);
}
