import { Lexer, createToken } from "chevrotain";

export const WHITESPACE = createToken({
  name: "Whitespace",
  pattern: /\s+/,
  group: Lexer.SKIPPED,
});

export const TypeReference = createToken({
  name: "Type reference",
  pattern: /[A-Z][A-Za-z0-9]*(-[A-Za-z0-9]+)*/,
});
export const Identifier = createToken({
  name: "Identifier",
  pattern: /[a-z][A-Za-z0-9]*(-[A-Za-z0-9]+)*/,
});
export const Number = createToken({ name: "Number", pattern: /0|[1-9][0-9]*/ });

export const AMPERSAND = createToken({ name: "Ampersand", pattern: "&" });
export const APOSTROPHE = createToken({ name: "Apostrophe", pattern: /'/ });
export const ASSIGNMENT = createToken({ name: "Assignment", pattern: "::=" });
export const AT = createToken({ name: "At", pattern: "@" });
export const COLON = createToken({ name: "Colon", pattern: ":" });
export const COMMA = createToken({ name: "Comma", pattern: "," });
export const COMMENT_CLOSED = createToken({
  name: "Closed comment",
  pattern: /--.*--/,
  group: Lexer.SKIPPED,
});
// Open comment is not skipped because it is possibly 3GPP tag comment
export const COMMENT_OPEN = createToken({ name: "Open comment", pattern: /--.*/ });
export const CURLY_LEFT = createToken({ name: "Left curly brace", pattern: "{" });
export const CURLY_RIGHT = createToken({ name: "Right curly brace", pattern: "}" });
export const DOT = createToken({ name: "Dot", pattern: "." });
export const DBRACKET_LEFT = createToken({
  name: "Left double bracket",
  pattern: "[[",
});
export const DBRACKET_RIGHT = createToken({
  name: "Right double bracket",
  pattern: "]]",
});
export const ELLIPSIS = createToken({ name: "Ellipsis", pattern: "..." });
export const RangeSeparator = createToken({ name: "Range separator", pattern: ".." });
export const MINUS = createToken({ name: "Minus", pattern: "-" });
export const PAREN_LEFT = createToken({ name: "Left parenthesis", pattern: "(" });
export const PAREN_RIGHT = createToken({ name: "Right parenthesis", pattern: ")" });
export const SEMICOLON = createToken({ name: "Semicolon", pattern: ";" });
export const PIPE = createToken({ name: "Pipe", pattern: "|" });

export const AUTOMATIC = createToken({
  name: "AUTOMATIC",
  pattern: "AUTOMATIC",
  longer_alt: TypeReference,
});
export const BEGIN = createToken({
  name: "BEGIN",
  pattern: "BEGIN",
  longer_alt: TypeReference,
});
export const BIT = createToken({
  name: "BIT",
  pattern: "BIT",
  longer_alt: TypeReference,
});
export const BOOLEAN = createToken({
  name: "BOOLEAN",
  pattern: "BOOLEAN",
  longer_alt: TypeReference,
});
export const CHOICE = createToken({
  name: "CHOICE",
  pattern: "CHOICE",
  longer_alt: TypeReference,
});
export const COMPONENTS = createToken({
  name: "COMPONENTS",
  pattern: "COMPONENTS",
  longer_alt: TypeReference,
});
export const CONTAINING = createToken({
  name: "CONTAINING",
  pattern: "CONTAINING",
  longer_alt: TypeReference,
});
export const DEFAULT = createToken({
  name: "DEFAULT",
  pattern: "DEFAULT",
  longer_alt: TypeReference,
});
export const DEFINITIONS = createToken({
  name: "DEFINITIONS",
  pattern: "DEFINITIONS",
  longer_alt: TypeReference,
});
export const END = createToken({
  name: "END",
  pattern: "END",
  longer_alt: TypeReference,
});
export const ENUMERATED = createToken({
  name: "ENUMERATED",
  pattern: "ENUMERATED",
  longer_alt: TypeReference,
});
export const EXPLICIT = createToken({
  name: "EXPLICIT",
  pattern: "EXPLICIT",
  longer_alt: TypeReference,
});
export const EXPORTS = createToken({
  name: "EXPORTS",
  pattern: "EXPORTS",
  longer_alt: TypeReference,
});
export const FALSE = createToken({
  name: "FALSE",
  pattern: "FALSE",
  longer_alt: TypeReference,
});
export const FROM = createToken({
  name: "FROM",
  pattern: "FROM",
  longer_alt: TypeReference,
});
export const IMPLICIT = createToken({
  name: "IMPLICIT",
  pattern: "IMPLICIT",
  longer_alt: TypeReference,
});
export const IMPORTS = createToken({
  name: "IMPORTS",
  pattern: "IMPORTS",
  longer_alt: TypeReference,
});
export const INTEGER = createToken({
  name: "INTEGER",
  pattern: "INTEGER",
  longer_alt: TypeReference,
});
export const NULL = createToken({
  name: "NULL",
  pattern: "NULL",
  longer_alt: TypeReference,
});
export const OCTET = createToken({
  name: "OCTET",
  pattern: "OCTET",
  longer_alt: TypeReference,
});
export const OF = createToken({
  name: "OF",
  pattern: "OF",
  longer_alt: TypeReference,
});
export const OPTIONAL = createToken({
  name: "OPTIONAL",
  pattern: "OPTIONAL",
  longer_alt: TypeReference,
});
export const PrintableString = createToken({
  name: "PrintableString",
  pattern: "PrintableString",
  longer_alt: TypeReference,
});
export const SEQUENCE = createToken({
  name: "SEQUENCE",
  pattern: "SEQUENCE",
  longer_alt: TypeReference,
});
export const SIZE = createToken({
  name: "SIZE",
  pattern: "SIZE",
  longer_alt: TypeReference,
});
export const STRING = createToken({
  name: "STRING",
  pattern: "STRING",
  longer_alt: TypeReference,
});
export const TAGS = createToken({
  name: "TAGS",
  pattern: "TAGS",
  longer_alt: TypeReference,
});
export const TRUE = createToken({
  name: "TRUE",
  pattern: "TRUE",
  longer_alt: TypeReference,
});
export const UTF8String = createToken({
  name: "UTF8String",
  pattern: "UTF8String",
  longer_alt: TypeReference,
});
export const VisibleString = createToken({
  name: "VisibleString",
  pattern: "VisibleString",
  longer_alt: TypeReference,
});
export const WITH = createToken({
  name: "WITH",
  pattern: "WITH",
  longer_alt: TypeReference,
});

// NOTE: Chevrotain chooses the first match
export const tokens = [
  WHITESPACE,
  COMMENT_CLOSED,
  COMMENT_OPEN,
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
