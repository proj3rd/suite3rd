import { Lexer, createToken } from "chevrotain";

const WHITESPACE = createToken({
  name: "Whitespace",
  pattern: /\s+/,
  group: Lexer.SKIPPED,
});

const TypeReference = createToken({
  name: "Type reference",
  pattern: /[A-Z][A-Za-z0-9]*(-[A-Za-z0-9]+)*/,
});
const Identifier = createToken({
  name: "Identifier",
  pattern: /[a-z][A-Za-z0-9]*(-[A-Za-z0-9]+)*/,
});
const Number = createToken({ name: "Number", pattern: /0|[1-9][0-9]*/ });

const AMPERSAND = createToken({ name: "Ampersand", pattern: "&" });
const APOSTROPHE = createToken({ name: "Apostrophe", pattern: /'/ });
const ASSIGNMENT = createToken({ name: "Assignment", pattern: "::=" });
const AT = createToken({ name: "At", pattern: "@" });
const COLON = createToken({ name: "Colon", pattern: ":" });
const COMMA = createToken({ name: "Comma", pattern: "," });
const CURLY_LEFT = createToken({ name: "Left curly brace", pattern: "{" });
const CURLY_RIGHT = createToken({ name: "Right curly brace", pattern: "}" });
const DOT = createToken({ name: "Dot", pattern: "." });
const DBRACKET_LEFT = createToken({
  name: "Left double bracket",
  pattern: "[[",
});
const DBRACKET_RIGHT = createToken({
  name: "Right double bracket",
  pattern: "]]",
});
const ELLIPSIS = createToken({ name: "Ellipsis", pattern: "..." });
const RangeSeparator = createToken({ name: "Range separator", pattern: ".." });
const MINUS = createToken({ name: "Minus", pattern: "-" });
const PAREN_LEFT = createToken({ name: "Left parenthesis", pattern: "(" });
const PAREN_RIGHT = createToken({ name: "Right parenthesis", pattern: ")" });
const SEMICOLON = createToken({ name: "Semicolon", pattern: ";" });
const PIPE = createToken({ name: "Pipe", pattern: "|" });

const AUTOMATIC = createToken({
  name: "AUTOMATIC",
  pattern: "AUTOMATIC",
  longer_alt: TypeReference,
});
const BEGIN = createToken({
  name: "BEGIN",
  pattern: "BEGIN",
  longer_alt: TypeReference,
});
const BIT = createToken({
  name: "BIT",
  pattern: "BIT",
  longer_alt: TypeReference,
});
const BOOLEAN = createToken({
  name: "BOOLEAN",
  pattern: "BOOLEAN",
  longer_alt: TypeReference,
});
const CHOICE = createToken({
  name: "CHOICE",
  pattern: "CHOICE",
  longer_alt: TypeReference,
});
const COMPONENTS = createToken({
  name: "COMPONENTS",
  pattern: "COMPONENTS",
  longer_alt: TypeReference,
});
const CONTAINING = createToken({
  name: "CONTAINING",
  pattern: "CONTAINING",
  longer_alt: TypeReference,
});
const DEFAULT = createToken({
  name: "DEFAULT",
  pattern: "DEFAULT",
  longer_alt: TypeReference,
});
const DEFINITIONS = createToken({
  name: "DEFINITIONS",
  pattern: "DEFINITIONS",
  longer_alt: TypeReference,
});
const END = createToken({
  name: "END",
  pattern: "END",
  longer_alt: TypeReference,
});
const ENUMERATED = createToken({
  name: "ENUMERATED",
  pattern: "ENUMERATED",
  longer_alt: TypeReference,
});
const EXPLICIT = createToken({
  name: "EXPLICIT",
  pattern: "EXPLICIT",
  longer_alt: TypeReference,
});
const EXPORTS = createToken({
  name: "EXPORTS",
  pattern: "EXPORTS",
  longer_alt: TypeReference,
});
const FALSE = createToken({
  name: "FALSE",
  pattern: "FALSE",
  longer_alt: TypeReference,
});
const FROM = createToken({
  name: "FROM",
  pattern: "FROM",
  longer_alt: TypeReference,
});
const IMPLICIT = createToken({
  name: "IMPLICIT",
  pattern: "IMPLICIT",
  longer_alt: TypeReference,
});
const IMPORTS = createToken({
  name: "IMPORTS",
  pattern: "IMPORTS",
  longer_alt: TypeReference,
});
const INTEGER = createToken({
  name: "INTEGER",
  pattern: "INTEGER",
  longer_alt: TypeReference,
});
const NULL = createToken({
  name: "NULL",
  pattern: "NULL",
  longer_alt: TypeReference,
});
const OCTET = createToken({
  name: "OCTET",
  pattern: "OCTET",
  longer_alt: TypeReference,
});
const OF = createToken({
  name: "OF",
  pattern: "OF",
  longer_alt: TypeReference,
});
const OPTIONAL = createToken({
  name: "OPTIONAL",
  pattern: "OPTIONAL",
  longer_alt: TypeReference,
});
const PrintableString = createToken({
  name: "PrintableString",
  pattern: "PrintableString",
  longer_alt: TypeReference,
});
const SEQUENCE = createToken({
  name: "SEQUENCE",
  pattern: "SEQUENCE",
  longer_alt: TypeReference,
});
const SIZE = createToken({
  name: "SIZE",
  pattern: "SIZE",
  longer_alt: TypeReference,
});
const STRING = createToken({
  name: "STRING",
  pattern: "STRING",
  longer_alt: TypeReference,
});
const TAGS = createToken({
  name: "TAGS",
  pattern: "TAGS",
  longer_alt: TypeReference,
});
const TRUE = createToken({
  name: "TRUE",
  pattern: "TRUE",
  longer_alt: TypeReference,
});
const UTF8String = createToken({
  name: "UTF8String",
  pattern: "UTF8String",
  longer_alt: TypeReference,
});
const VisibleString = createToken({
  name: "VisibleString",
  pattern: "VisibleString",
  longer_alt: TypeReference,
});
const WITH = createToken({
  name: "WITH",
  pattern: "WITH",
  longer_alt: TypeReference,
});

// NOTE: Chevrotain chooses the first match
const tokens = [
  WHITESPACE,
  AMPERSAND,
  APOSTROPHE,
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
  RangeSeparator,
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
  Identifier,
  TypeReference,
  Number,
];
export const lexer = new Lexer(tokens);
