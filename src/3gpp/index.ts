import { Command } from "commander";
import { setFetchCommand } from "./fetcher.js";

export function set3gppCommand(program: Command) {
  const threegppCommand = program.command("3gpp");
  setFetchCommand(threegppCommand);
}
