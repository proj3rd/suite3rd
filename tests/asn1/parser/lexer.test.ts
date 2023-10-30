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
    if (!asn1file.includes("36331")) {
      continue;
    }
    test(`Tokenize ${asn1file}`, () => {
      const content = readFileSync(
        resolve(__dirname, asn1ResourcePath, asn1file),
        "utf8"
      );
      const tokens = lexer.tokenize(content);
      if (tokens.errors.length) {
        console.log(tokens);
      }
      expect(tokens.errors.length).toBe(0);
    });
  }
});
