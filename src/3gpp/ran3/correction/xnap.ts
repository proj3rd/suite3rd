import { compare } from "../../../3gpp/version.js";
import { TestCase } from "./testCase.js";

const SPEC_NUM = "38423";

export const testCases: TestCase[] = [
  (definitions, specNum, version) => {
    // SN UL PDCP UP TNL Information IE of PDU Session Resource Setup Response Info (9.2.1.6) should point 9.2.3.76
    const VERSION: [number, number, number] = [15, 2, 0];
    const CLAUSE = "9.2.1.6";
    const IE_NAME = "SN UL PDCP UP TNL Information";
    const PATTERN_TO_TEST = /\b9\.2\.3\.76\b/;
    const REPLACEMENT = "9.2.3.76";
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
        `${IE_NAME}} IE is not found in clause ${CLAUSE} of ${specNum} ${version.join(
          "."
        )}`
      );
    }
    if (!element.reference.match(PATTERN_TO_TEST)) {
      element.reference = REPLACEMENT;
      console.info(
        `Reference of ${IE_NAME} IE in clause ${CLAUSE} of of ${specNum} ${version.join(
          "."
        )} has been replace with ${REPLACEMENT}`
      );
    }
  },
];
