import { Lexer, createToken } from "chevrotain";

// TODO: Add identifier tokens
// TODO: Add `longer_alt` property
const AMPERSAND = createToken({ name: "Ampersand", pattern: "&" });
const ASSIGNMENT = createToken({ name: "Assignment", pattern: "::=" });
const AT = createToken({ name: "At", pattern: "@" });
const AUTOMATIC = createToken({ name: "AUTOMATIC", pattern: "AUTOMATIC" });
const BEGIN = createToken({ name: "BEGIN", pattern: "BEGIN" });
const BIT = createToken({ name: "BIT", pattern: "BIT" });
const BOOLEAN = createToken({ name: "BOOLEAN", pattern: "BOOLEAN" });
const CHOICE = createToken({ name: "CHOICE", pattern: "CHOICE" });
const COLON = createToken({ name: "Colon", pattern: ":" });
const COMMA = createToken({ name: "Comma", pattern: "," });
const COMPONENTS = createToken({ name: "COMPONENTS", pattern: "COMPONENTS" });
const CONTAINING = createToken({ name: "CONTAINING", pattern: "CONTAINING" });
const CURLY_LEFT = createToken({ name: "Left curly brace", pattern: "{" });
const CURLY_RIGHT = createToken({ name: "Right curly brace", pattern: "}" });
const DEFAULT = createToken({ name: "DEFAULT", pattern: "DEFAULT" });
const DEFINITIONS = createToken({
  name: "DEFINITIONS",
  pattern: "DEFINITIONS",
});
const DOT = createToken({ name: "Dot", pattern: "." });
const DBRACKET_LEFT = createToken({
  name: "Left double bracket",
  pattern: "[[",
});
const DBRACKET_RIGHT = createToken({
  name: "Right double bracket",
  pattern: "]]",
});
const END = createToken({ name: "END", pattern: "END" });
const ELLIPSIS = createToken({ name: "Ellipsis", pattern: "..." });
const ENUMERATED = createToken({ name: "ENUMERATED", pattern: "ENUMERATED" });
const EXPLICIT = createToken({ name: "EXPLICIT", pattern: "EXPLICIT" });
const EXPORTS = createToken({ name: "EXPORTS", pattern: "EXPORTS" });
const FALSE = createToken({ name: "FALSE", pattern: "FALSE" });
const FROM = createToken({ name: "FROM", pattern: "FROM" });
const IMPLICIT = createToken({ name: "IMPLICIT", pattern: "IMPLICIT" });
const IMPORTS = createToken({ name: "IMPORTS", pattern: "IMPORTS" });
const INTEGER = createToken({ name: "INTEGER", pattern: "INTEGER" });
const NULL = createToken({ name: "NULL", pattern: "NULL" });
const MINUS = createToken({ name: "Minus", pattern: "-" });
const OCTET = createToken({ name: "OCTET", pattern: "OCTET" });
const OF = createToken({ name: "OF", pattern: "OF" });
const OPTIONAL = createToken({ name: "OPTIONAL", pattern: "OPTIONAL" });
const PAREN_LEFT = createToken({ name: "Left parenthesis", pattern: "(" });
const PAREN_RIGHT = createToken({ name: "Right parenthesis", pattern: ")" });
const PrintableString = createToken({
  name: "PrintableString",
  pattern: "PrintableString",
});
const SEMICOLON = createToken({ name: "Semicolon", pattern: ";" });
const SEQUENCE = createToken({ name: "SEQUENCE", pattern: "SEQUENCE" });
const SIZE = createToken({ name: "SIZE", pattern: "SIZE" });
const STRING = createToken({ name: "STRING", pattern: "STRING" });
const TAGS = createToken({ name: "TAGS", pattern: "TAGS" });
const TRUE = createToken({ name: "TRUE", pattern: "TRUE" });
const PIPE = createToken({ name: "Pipe", pattern: "|" });
const UTF8String = createToken({ name: "UTF8String", pattern: "UTF8String" });
const VisibleString = createToken({
  name: "VisibleString",
  pattern: "VisibleString",
});
const WHITESPACE = createToken({
  name: "Whitespace",
  pattern: /\s+/,
  group: Lexer.SKIPPED,
});
const WITH = createToken({ name: "WITH", pattern: "WITH" });

// NOTE: Chevrotain chooses the first match
const tokens = [
  WHITESPACE,
  AMPERSAND,
  ASSIGNMENT,
  AT,
  AUTOMATIC,
  BEGIN,
  BIT,
  BOOLEAN,
  CHOICE,
  COLON,
  COMMA,
  COMPONENTS,
  CONTAINING,
  CURLY_LEFT,
  CURLY_RIGHT,
  DEFAULT,
  DEFINITIONS,
  DOT,
  DBRACKET_LEFT,
  DBRACKET_RIGHT,
  END,
  ELLIPSIS,
  ENUMERATED,
  EXPLICIT,
  EXPORTS,
  FALSE,
  FROM,
  IMPLICIT,
  IMPORTS,
  INTEGER,
  NULL,
  MINUS,
  OCTET,
  OF,
  OPTIONAL,
  PAREN_LEFT,
  PAREN_RIGHT,
  PrintableString,
  SEMICOLON,
  SEQUENCE,
  SIZE,
  STRING,
  TAGS,
  TRUE,
  PIPE,
  UTF8String,
  VisibleString,
  WITH,
];
export const lexer = new Lexer(tokens);
