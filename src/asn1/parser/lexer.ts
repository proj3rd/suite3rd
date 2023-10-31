import { Lexer, createToken } from "chevrotain";

export const whitespace = createToken({
  name: "whitespace",
  pattern: /\s+/,
  group: Lexer.SKIPPED,
});

// word: upper-case letters and hyphen
export const word = createToken({
  name: "word",
  pattern: /[A-Z][A-Z]*(-[A-Z]+)*/,
});
// objectclassreference: word + digits
// NOTE: Parser rule Objectclasreference should be used
export const objectclassreference = createToken({
  name: "objectclassreference",
  pattern: /[A-Z][A-Z0-9]*(-[A-Z0-9]+)*/,
});
// typereference: objectlcassreference + lower-case letters
// NOTE: Parser rule Typereference should be used
export const typereference = createToken({
  name: "typereference",
  pattern: /[A-Z][A-Za-z0-9]*(-[A-Za-z0-9]+)*/,
});
export const identifier = createToken({
  name: "identifier",
  pattern: /[a-z][A-Za-z0-9]*(-[A-Za-z0-9]+)*/,
});
export const number = createToken({ name: "number", pattern: /0|[1-9][0-9]*/ });

export const AMPERSAND = createToken({ name: "AMPERSAND", pattern: "&" });
export const APOSTROPHE = createToken({ name: "APOSTROPHE", pattern: /'/ });
export const ASSIGNMENT = createToken({ name: "ASSIGNMENT", pattern: "::=" });
export const AT = createToken({ name: "COMMERCIAL AT", pattern: "@" });
export const BIT_STRING_VALUE_QUOTED = createToken({
  name: "BIT_STRING_VALUE_QUOTED",
  pattern: /'[01]+'B/,
});
export const COLON = createToken({ name: "COLON", pattern: ":" });
export const COMMA = createToken({ name: "COMMA", pattern: "," });
export const COMMENT_CLOSED = createToken({
  name: "Closed comment",
  pattern: /--.*--/,
  group: Lexer.SKIPPED,
});
// Open comment is not skipped because it is possibly 3GPP tag comment
export const COMMENT_OPEN = createToken({
  name: "Open comment",
  pattern: /--.*/,
});
export const CURLY_LEFT = createToken({
  name: "LEFT CURLY BRACKET",
  pattern: "{",
});
export const CURLY_RIGHT = createToken({
  name: "RIGHT CURLY BRACKET",
  pattern: "}",
});
export const FULL_STOP = createToken({ name: "FULL STOP", pattern: "." });
export const DBRACKET_LEFT = createToken({
  name: "LEFT DOUBLE SQUARE BRACKET",
  pattern: "[[",
});
export const DBRACKET_RIGHT = createToken({
  name: "RIGHT DOUBLE SQUARE BRACKET",
  pattern: "]]",
});
export const BRACKET_LEFT = createToken({
  name: "LEFT SQUARE BRACKET",
  pattern: "[",
});
export const BRACKET_RIGHT = createToken({
  name: "RIGHT SQUARE BRACKET",
  pattern: "]",
});
export const ELLIPSIS = createToken({ name: "ELLIPSIS", pattern: "..." });
export const RANGE_SEPARATOR = createToken({
  name: "RANGE SEPARATOR",
  pattern: "..",
});
export const HYPHEN_MINUS = createToken({ name: "HYPHEN-MINUS", pattern: "-" });
export const PAREN_LEFT = createToken({
  name: "LEFT PARENTHESIS",
  pattern: "(",
});
export const PAREN_RIGHT = createToken({
  name: "RIGHT PARENTHESIS",
  pattern: ")",
});
export const SEMICOLON = createToken({ name: "SEMICOLON", pattern: ";" });
export const VERTICAL_LINE = createToken({
  name: "VERTICAL LINE",
  pattern: "|",
});

export const AUTOMATIC = createToken({
  name: "AUTOMATIC",
  pattern: "AUTOMATIC",
  longer_alt: [word, objectclassreference, typereference],
});
export const BEGIN = createToken({
  name: "BEGIN",
  pattern: "BEGIN",
  longer_alt: [word, objectclassreference, typereference],
});
export const BIT = createToken({
  name: "BIT",
  pattern: "BIT",
  longer_alt: [word, objectclassreference, typereference],
});
export const BOOLEAN = createToken({
  name: "BOOLEAN",
  pattern: "BOOLEAN",
  longer_alt: [word, objectclassreference, typereference],
});
export const CHOICE = createToken({
  name: "CHOICE",
  pattern: "CHOICE",
  longer_alt: [word, objectclassreference, typereference],
});
export const CLASS = createToken({
  name: "CLASS",
  pattern: "CLASS",
  longer_alt: [word, objectclassreference, typereference],
});
export const COMPONENTS = createToken({
  name: "COMPONENTS",
  pattern: "COMPONENTS",
  longer_alt: [word, objectclassreference, typereference],
});
export const CONTAINING = createToken({
  name: "CONTAINING",
  pattern: "CONTAINING",
  longer_alt: [word, objectclassreference, typereference],
});
export const DEFAULT = createToken({
  name: "DEFAULT",
  pattern: "DEFAULT",
  longer_alt: [word, objectclassreference, typereference],
});
export const DEFINITIONS = createToken({
  name: "DEFINITIONS",
  pattern: "DEFINITIONS",
  longer_alt: [word, objectclassreference, typereference],
});
export const END = createToken({
  name: "END",
  pattern: "END",
  longer_alt: [word, objectclassreference, typereference],
});
export const ENUMERATED = createToken({
  name: "ENUMERATED",
  pattern: "ENUMERATED",
  longer_alt: [word, objectclassreference, typereference],
});
export const EXPLICIT = createToken({
  name: "EXPLICIT",
  pattern: "EXPLICIT",
  longer_alt: [word, objectclassreference, typereference],
});
export const EXPORTS = createToken({
  name: "EXPORTS",
  pattern: "EXPORTS",
  longer_alt: [word, objectclassreference, typereference],
});
export const FALSE = createToken({
  name: "FALSE",
  pattern: "FALSE",
  longer_alt: [word, objectclassreference, typereference],
});
export const FROM = createToken({
  name: "FROM",
  pattern: "FROM",
  longer_alt: [word, objectclassreference, typereference],
});
export const IMPLICIT = createToken({
  name: "IMPLICIT",
  pattern: "IMPLICIT",
  longer_alt: [word, objectclassreference, typereference],
});
export const IMPORTS = createToken({
  name: "IMPORTS",
  pattern: "IMPORTS",
  longer_alt: [word, objectclassreference, typereference],
});
export const INTEGER = createToken({
  name: "INTEGER",
  pattern: "INTEGER",
  longer_alt: [word, objectclassreference, typereference],
});
export const NULL = createToken({
  name: "NULL",
  pattern: "NULL",
  longer_alt: [word, objectclassreference, typereference],
});
export const OCTET = createToken({
  name: "OCTET",
  pattern: "OCTET",
  longer_alt: [word, objectclassreference, typereference],
});
export const OF = createToken({
  name: "OF",
  pattern: "OF",
  longer_alt: [word, objectclassreference, typereference],
});
export const OPTIONAL = createToken({
  name: "OPTIONAL",
  pattern: "OPTIONAL",
  longer_alt: [word, objectclassreference, typereference],
});
export const PrintableString = createToken({
  name: "PrintableString",
  pattern: "PrintableString",
  longer_alt: [word, objectclassreference, typereference],
});
export const SEQUENCE = createToken({
  name: "SEQUENCE",
  pattern: "SEQUENCE",
  longer_alt: [word, objectclassreference, typereference],
});
export const SIZE = createToken({
  name: "SIZE",
  pattern: "SIZE",
  longer_alt: [word, objectclassreference, typereference],
});
export const STRING = createToken({
  name: "STRING",
  pattern: "STRING",
  longer_alt: [word, objectclassreference, typereference],
});
export const TAGS = createToken({
  name: "TAGS",
  pattern: "TAGS",
  longer_alt: [word, objectclassreference, typereference],
});
export const TRUE = createToken({
  name: "TRUE",
  pattern: "TRUE",
  longer_alt: [word, objectclassreference, typereference],
});
export const UTF8String = createToken({
  name: "UTF8String",
  pattern: "UTF8String",
  longer_alt: [word, objectclassreference, typereference],
});
export const VisibleString = createToken({
  name: "VisibleString",
  pattern: "VisibleString",
  longer_alt: [word, objectclassreference, typereference],
});
export const WITH = createToken({
  name: "WITH",
  pattern: "WITH",
  longer_alt: [word, objectclassreference, typereference],
});

// NOTE: Chevrotain chooses the first match
export const tokens = [
  whitespace,
  COMMENT_CLOSED,
  COMMENT_OPEN,
  AMPERSAND,
  BIT_STRING_VALUE_QUOTED,
  APOSTROPHE,
  ASSIGNMENT,
  AT,
  AUTOMATIC,
  BEGIN,
  BIT,
  BOOLEAN,
  CHOICE,
  CLASS,
  COLON,
  COMMA,
  COMPONENTS,
  CONTAINING,
  CURLY_LEFT,
  CURLY_RIGHT,
  DEFAULT,
  DEFINITIONS,
  FULL_STOP,
  DBRACKET_LEFT,
  DBRACKET_RIGHT,
  BRACKET_LEFT,
  BRACKET_RIGHT,
  END,
  ELLIPSIS,
  RANGE_SEPARATOR,
  ENUMERATED,
  EXPLICIT,
  EXPORTS,
  FALSE,
  FROM,
  IMPLICIT,
  IMPORTS,
  INTEGER,
  NULL,
  HYPHEN_MINUS,
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
  VERTICAL_LINE,
  UTF8String,
  VisibleString,
  WITH,
  identifier,
  word,
  objectclassreference,
  typereference,
  number,
];
export const lexer = new Lexer(tokens);
