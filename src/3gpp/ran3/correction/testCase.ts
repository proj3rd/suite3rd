import { Definitions } from "../tabular/classes/definitions.js";

export type TestCase = (
  def: Definitions,
  specNum: string,
  version: [number, number, number]
) => void;
