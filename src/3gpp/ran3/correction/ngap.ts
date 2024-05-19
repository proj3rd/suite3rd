import { compare } from "../../../3gpp/version.js";
import { TestCase } from "./testCase.js";

const SPEC_NUM = "38413";

export const testCases: TestCase[] = [
  (definitions, specNum, version) => {
    // Handover Cause IE in HO Report message (9.3.3.39) should point Cause IE (9.3.1.2)
    const VERSION: [number, number, number] = [16, 2, 0];
    const CLAUSE = "9.3.3.39";
    const IE_NAME = "Handover Cause";
    const PATTERN_TO_TEST = /\b9\.3\.1\.2\b/;
    const REPLACEMENT = "9.3.1.2";
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
    const element = definition.elementList.find(
      (element) => element.name === IE_NAME
    );
    if (!element) {
      throw Error(
        `${IE_NAME} IE is not found in clause ${CLAUSE} of ${specNum} ${version.join(
          "."
        )}`
      );
    }
    if (!element.reference.match(PATTERN_TO_TEST)) {
      element.reference = REPLACEMENT;
      console.info(
        `Reference of ${IE_NAME} IE in clause ${CLAUSE} of ${specNum} ${version.join(
          "."
        )} has been replace with ${REPLACEMENT}`
      );
    }
  },
];
