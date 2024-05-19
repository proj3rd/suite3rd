import { compare } from "../../../3gpp/version.js";
import { TestCase } from "./testCase.js";

export const testCases: TestCase[] = [
  (definitions, specNum, version) => {
    // Handover Cause IE in HO Report message (9.3.3.39) should point Cause IE (9.3.1.2)
    if (specNum !== "38413") {
      return;
    }
    if (compare(version, [16, 2, 0]) < 0) {
      return;
    }
    const definition = definitions.findDefinition("9.3.3.39");
    if (!definition) {
      throw Error(
        `Clause 9.3.3.39 is not found in ${specNum} ${version.join(".")}`
      );
    }
    const element = definition.elementList.find(
      (element) => element.name === "Handover Cause"
    );
    if (!element) {
      throw Error(
        `Handover Cause IE is not found in clause 9.3.3.39 of ${specNum} ${version.join(
          "."
        )}`
      );
    }
    if (!element.reference.match(/\b9\.3\.1\.2\b/)) {
      element.reference = "9.3.1.2";
      console.info(
        `Reference of Handover Cause IE in clause 9.3.3.39 of of ${specNum} ${version.join(
          "."
        )} has been replace with 9.3.1.2`
      );
    }
  },
];
