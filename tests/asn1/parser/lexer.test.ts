import { describe, expect, test } from "vitest";
import { lexer } from "../../../src/asn1/parser/lexer";
import { readFileSync, readdirSync } from "fs";
import { resolve } from "path";

const asn1ResourcePath = "../../../resources/asn1";

describe("ASN.1 lexer", () => {
  const asn1files = readdirSync(resolve(__dirname, asn1ResourcePath)).filter(
    (file) => file.endsWith(".asn1")
  );
  for (let i = 0; i < asn1files.length; i++) {
    const asn1file = asn1files[i];
    test(`Tokenize ${asn1file}`, () => {
      const content = readFileSync(
        resolve(__dirname, asn1ResourcePath, asn1file),
        "utf8"
      );

      const lexingResult = lexer.tokenize(content);
      if (lexingResult.errors.length) {
        console.log(lexingResult);
      }
      expect(lexingResult.errors.length).toBe(0);
    });
  }
});
