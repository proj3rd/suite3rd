import { describe, expect, it } from "vitest";
import { extract } from "../../lib/src/asn1/extractor";

describe("ASN.1 extractor", () => {
  it("Should extract ASN.1 definition with type 1 delimiter", () => {
    const content = `Text before ASN.1 definition
-- ASN1START
ASN.1 definition
-- ASN1STOP
Text after ASN.1 definition`;
    const extracted = extract(content)?.trim();
    expect(extracted).toBe("ASN.1 definition");
  });

  it("Should extract ASN.1 definition with type 2 delimiter", () => {
    const content = `Text before ASN.1 definition
-- **************************************************************
ASN.1 definition
END
-- **************************************************************
    `;
    const extracted = extract(content)?.trim();
    expect(extracted)
      .toBe(`-- **************************************************************
ASN.1 definition
END`);
  });
});
