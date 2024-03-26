import { describe, expect, it } from "vitest";
import { Lexer } from "../../src/asn1/lexer";
import { TokenType } from "../../src/asn1/tokenType";

describe("ASN.1 lexer", () => {
  it("Should lex ASN.1 definition", () => {
    const content = `::= [ ] : , -- comment 1
-- comment 2 -- { } ... - i-d3ntifier 0 123 ( ) . .. Type-R3ference [[ ]]
AUTOMATIC BEGIN BIT BOOLEAN CHOICE CONTAINING DEFAULT DEFINITIONS
END ENUMERATED EXPORTS FROM IMPORTS INTEGER NULL OCTET OF OPTIONAL
SEQUENCE SIZE STRING TRUE UNIQUE WITH`;
    const lexer = new Lexer(content);
    const tokens = lexer.scanTokens();
    const tokenTypes = tokens.map((token) => token.type);
    expect(tokenTypes).toEqual([
      TokenType.Assignment,
      TokenType.BracketLeft,
      TokenType.BracketRight,
      TokenType.Colon,
      TokenType.Comma,
      TokenType.Comment,
      TokenType.Comment,
      TokenType.CurlyBraceLeft,
      TokenType.CurlyBraceRight,
      TokenType.Ellipsis,
      TokenType.HyphenMinus,
      TokenType.Identifier,
      TokenType.Number,
      TokenType.Number,
      TokenType.ParenthesisLeft,
      TokenType.ParenthesisRight,
      TokenType.Period,
      TokenType.RangeSeparator,
      TokenType.TypeReference,
      TokenType.VersionBracketLeft,
      TokenType.VersionBracketRight,
      TokenType.Automatic,
      TokenType.Begin,
      TokenType.Bit,
      TokenType.Boolean,
      TokenType.Choice,
      TokenType.Containing,
      TokenType.Default,
      TokenType.Definitions,
      TokenType.End,
      TokenType.Enumerated,
      TokenType.Exports,
      TokenType.From,
      TokenType.Imports,
      TokenType.Integer,
      TokenType.Null,
      TokenType.Octet,
      TokenType.Of,
      TokenType.Optional,
      TokenType.Sequence,
      TokenType.Size,
      TokenType.String,
      TokenType.True,
      TokenType.Unique,
      TokenType.With,
      TokenType.EOF,
    ]);
  });
});
