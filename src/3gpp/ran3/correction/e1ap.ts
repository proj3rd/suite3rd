import { compare } from "../../../3gpp/version.js";
import { TestCase } from "./testCase.js";

const SPEC_NUM = "38463";
const SPEC_NUM_R17 = "37483";

export const testCases: TestCase[] = [
  (definitions, specNum, version) => {
    // Maximum Integrity Protected Data Rate IE (9.3.1.57) should exist
    const VERSION: [number, number, number] = [15, 2, 0];
    const VERSION_R17: [number, number, number] = [17, 0, 0];
    const CLAUSE = "9.3.1.57";
    if (
      ((specNum !== SPEC_NUM || compare(version, VERSION) < 0) &&
        specNum !== SPEC_NUM_R17) ||
      compare(version, VERSION_R17) < 0
    ) {
      return;
    }
    const definition = definitions.findDefinition(CLAUSE);
    if (!definition) {
      throw Error(
        `Clause ${CLAUSE} is not found in ${specNum} ${version.join(".")}`
      );
    }
  },
  (definitions, specNum, version) => {
    // Redundant QoS Flow Indicator IE (9.3.1.74) should exist
    const VERSION: [number, number, number] = [16, 2, 0];
    const VERSION_R17: [number, number, number] = [17, 0, 0];
    const CLAUSE = "9.3.1.74";
    if (
      ((specNum !== SPEC_NUM || compare(version, VERSION) < 0) &&
        specNum !== SPEC_NUM_R17) ||
      compare(version, VERSION_R17) < 0
    ) {
      return;
    }
    const definition = definitions.findDefinition(CLAUSE);
    if (!definition) {
      throw Error(
        `Clause ${CLAUSE} is not found in ${specNum} ${version.join(".")}`
      );
    }
  },
  (definitions, specNum, version) => {
    /**
    // Trace Collection Entity IP Address IE in CELL TRAFFIC TRACE (9.2.3.3) should point 9.3.2.4
     * From 16.3.0
     */
    const VERSION: [number, number, number] = [16, 3, 0];
    const VERSION_R17: [number, number, number] = [17, 0, 0];
    const CLAUSE = "9.2.3.3";
    const IE_NAME = "Trace Collection Entity IP Address";
    const PATTERN_TO_TEST = /\b9\.3\.2\.4\b/;
    const REPLACEMENT = "9.3.2.4";
    if (
      ((specNum !== SPEC_NUM || compare(version, VERSION) < 0) &&
        specNum !== SPEC_NUM_R17) ||
      compare(version, VERSION_R17) < 0
    ) {
      return;
    }
    const definition = definitions.findDefinition(CLAUSE);
    if (!definition) {
      throw Error(
        `Clause ${CLAUSE} is not found in ${specNum} ${version.join(".")}`
      );
    }
    const element = definition.elementList.find((elem) => {
      const { name } = elem;
      return name === IE_NAME;
    });
    if (!element) {
      throw Error(
        `${IE_NAME} IE is not found in clause ${CLAUSE} of ${specNum} ${version.join(
          "."
        )}`
      );
    }
    const { reference } = element;
    if (!element.reference.match(PATTERN_TO_TEST)) {
      element.reference = REPLACEMENT;
      console.warn(
        `${IE_NAME} IE in clause ${CLAUSE} of ${specNum} ${version.join(
          "."
        )} has been replace with ${CLAUSE}`
      );
    }
  },
];
