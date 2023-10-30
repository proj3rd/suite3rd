import { describe, expect, test } from "vitest";
import { Asn1Parser } from "../../../src/asn1/parser/parser";

const asn1ResourcePath = "../../../resources/asn1";

describe("ASN.1 parser", () => {
  test("Parser self analysis", () => {
    const parser = new Asn1Parser();
    expect(parser).toBeDefined();
  });
});
