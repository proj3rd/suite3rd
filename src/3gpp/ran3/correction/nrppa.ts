import { compare } from "../../../3gpp/version.js";
import { TestCase } from "./testCase.js";

const SPEC_NUM = "38455";

export const testCases: TestCase[] = [
  (definitions, specNum, version) => {
    // Search Window Information IE (9.2.26) should exist
    const VERSION: [number, number, number] = [16, 1, 0];
    const CLAUSE = "9.2.26";
    if (specNum !== SPEC_NUM) {
      return;
    }
    if (compare(version, VERSION) < 0) {
      return;
    }
    const definition = definitions.findDefinition(CLAUSE);
    if (!definition) {
      throw Error(
        `Clause ${CLAUSE} is not found in ${specNum} ${version.join(".")}`
      );
    }
  },
];
