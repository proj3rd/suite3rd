import { describe, expect, it } from "vitest";
import { tokenize } from "../../src/asn1/tokenizer";
import { TokenType } from "../../src/asn1/tokenType";

describe("ASN.1 lexer", () => {
  it("Should tokenize ASN.1 definition", () => {
    const content = `
Type-R3ference i-d3ntifier -- comment 1
-- comment 2 -- 0 123 ::= .. ... [[ ]] { } , . ( ) [ ] - : ; @ |
ABSENT ABSTRACT-SYNTAX ALL APPLICATION AUTOMATIC BEGIN BIT BMPString
BOOLEAN BY CHARACTER CHOICE CLASS COMPONENT COMPONENTS CONSTRAINED
CONTAINING DATE DATE-TIME DEFAULT DEFINITIONS DURATION EMBEDDED
ENCODED ENCODING-CONTROL END ENUMERATED EXCEPT EXPLICIT EXPORTS
EXTENSIBILITY EXTERNAL FALSE FROM GeneralizedTime GeneralString
GraphicString IA5String IDENTIFIER IMPLICIT IMPLIED IMPORTS INCLUDES
INSTANCE INSTRUCTIONS INTEGER INTERSECTION ISO646String MAX MIN
MINUS-INFINITY NOT-A-NUMBER NULL NumericString OBJECT ObjectDescriptor
OCTET OF OID-IRI OPTIONAL PATTERN PDV PLUS-INFINITY PRESENT PrintableString
PRIVATE REAL RELATIVE-OID RELATIVE-OID-IRI SEQUENCE SET SETTINGS
SIZE STRING SYNTAX T61String TAGS TeletexString TIME TIME-OF-DAY
TRUE TYPE-IDENTIFIER UNION UNIQUE UNIVERSAL UniversalString UTCTime
UTF8String VideotexString VisibleString WITH
`;
    const tokens = tokenize(content);
    const tokenTypes = tokens.map((token) => token.type);
    expect(tokenTypes).toEqual([
      TokenType.TypeReference,
      TokenType.Identifier,
      TokenType.Comment,
      TokenType.Comment,
      TokenType.Number,
      TokenType.Number,
      TokenType.Assignment,
      TokenType.RangeSeparator,
      TokenType.Ellipsis,
      TokenType.VersionBracketLeft,
      TokenType.VersionBracketRight,
      TokenType.CurlyBraceLeft,
      TokenType.CurlyBraceRight,
      TokenType.Comma,
      TokenType.Period,
      TokenType.ParenthesisLeft,
      TokenType.ParenthesisRight,
      TokenType.BracketLeft,
      TokenType.BracketRight,
      TokenType.HyphenMinus,
      TokenType.Colon,
      TokenType.Semicolon,
      TokenType.AtSign,
      TokenType.VerticalBar,

      TokenType.Absent,
      TokenType.AbstractSyntax,
      TokenType.All,
      TokenType.Application,
      TokenType.Automatic,
      TokenType.Begin,
      TokenType.Bit,
      TokenType.BmpString,
      TokenType.Boolean,
      TokenType.By,
      TokenType.Character,
      TokenType.Choice,
      TokenType.Class,
      TokenType.Component,
      TokenType.Components,
      TokenType.Constrained,
      TokenType.Containing,
      TokenType.Date,
      TokenType.DateTime,
      TokenType.Default,
      TokenType.Definitions,
      TokenType.Duration,
      TokenType.Embedded,
      TokenType.Encoded,
      TokenType.EncodingControl,
      TokenType.End,
      TokenType.Enumerated,
      TokenType.Except,
      TokenType.Explicit,
      TokenType.Exports,
      TokenType.Extensibility,
      TokenType.External,
      TokenType.False,
      TokenType.From,
      TokenType.GeneralizedTime,
      TokenType.GeneralString,
      TokenType.GraphicString,
      TokenType.Ia5String,
      TokenType.IdentifierLiteral,
      TokenType.Implicit,
      TokenType.Implied,
      TokenType.Imports,
      TokenType.Includes,
      TokenType.Instance,
      TokenType.Instructions,
      TokenType.Integer,
      TokenType.Intersection,
      TokenType.Iso646String,
      TokenType.Max,
      TokenType.Min,
      TokenType.MinusInfinity,
      TokenType.NotaNumber,
      TokenType.Null,
      TokenType.NumericString,
      TokenType.Object,
      TokenType.ObjectDescriptor,
      TokenType.Octet,
      TokenType.Of,
      TokenType.OidIri,
      TokenType.Optional,
      TokenType.Pattern,
      TokenType.Pdv,
      TokenType.PlusInfinity,
      TokenType.Present,
      TokenType.PrintableString,
      TokenType.Private,
      TokenType.Real,
      TokenType.RelativeOid,
      TokenType.RelativeOidIri,
      TokenType.Sequence,
      TokenType.Set,
      TokenType.Settings,
      TokenType.Size,
      TokenType.String,
      TokenType.Syntax,
      TokenType.T61String,
      TokenType.Tags,
      TokenType.TeletexString,
      TokenType.Time,
      TokenType.TimeOfDay,
      TokenType.True,
      TokenType.TypeIdentifier,
      TokenType.Union,
      TokenType.Unique,
      TokenType.Universal,
      TokenType.UniversalString,
      TokenType.UtcTime,
      TokenType.Utf8String,
      TokenType.VideotexString,
      TokenType.VisibleString,
      TokenType.With,
      TokenType.EOF,
    ]);
  });

  it("Should not tokenize number with leading zero", () => {
    const content = "0123";
    const tokens = tokenize(content);
    expect(tokens).toHaveLength(1);
  });
});
