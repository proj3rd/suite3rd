import { describe, expect, test } from "vitest";
import { Asn1Parser } from "../../../src/asn1/parser/parser";
import { readFileSync, readdirSync } from "fs";
import { resolve } from "path";
import { lexer } from "../../../src/asn1/parser/lexer";

const asn1ResourcePath = "../../../resources/asn1";

describe("ASN.1 parser", () => {
  test("Parser self analysis", () => {
    const parser = new Asn1Parser();
    expect(parser).toBeDefined();
  });

  const asn1files = readdirSync(resolve(__dirname, asn1ResourcePath)).filter(
    (file) => file.endsWith(".asn1")
  );
  for (let i = 0; i < asn1files.length; i++) {
    const asn1file = asn1files[i];
    test(`Parsing ${asn1file}`, () => {
      const content = readFileSync(
        resolve(__dirname, asn1ResourcePath, asn1file),
        "utf8"
      );

      const lexingResult = lexer.tokenize(content);
    });
  }
});
