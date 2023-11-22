import { describe, expect, test } from "vitest";
import { Asn1Parser } from "../../../src/asn1/parser/parser";
import { readFileSync, readdirSync, writeFileSync } from "fs";
import { resolve } from "path";
import { lexer } from "../../../src/asn1/parser/lexer";
import { preprocess } from "../../../src/asn1/parser/preprocessor";
import { createSyntaxDiagramsCode } from "chevrotain";

const asn1ResourcePath = "../../../resources/asn1";

describe("ASN.1 parser", () => {
  test("Parser self analysis", () => {
    const parser = new Asn1Parser();
    expect(parser).toBeDefined();

    const grammar = parser.getSerializedGastProductions();
    const diagram = createSyntaxDiagramsCode(grammar);
    writeFileSync(resolve(__dirname, "grammar.html"), diagram);
  });

  const asn1files = readdirSync(resolve(__dirname, asn1ResourcePath)).filter(
    (file) => file.endsWith(".asn1")
  );
  for (let i = 0; i < asn1files.length; i++) {
    const asn1file = asn1files[i];

    const skipCondition = !asn1file.includes("38331");

    test.skipIf(skipCondition)(`Parsing ${asn1file}`, () => {
      const content = preprocess(
        readFileSync(resolve(__dirname, asn1ResourcePath, asn1file), "utf8")
      );

      const lexingResult = lexer.tokenize(content);
      const parser = new Asn1Parser();
      parser.input = lexingResult.tokens;
      (parser as any).ModuleDefinitionList();
      parser.errors.forEach((error) => {
        console.error(error);
      });
      expect(parser.errors.length).toBe(0);
    });
  }
});
