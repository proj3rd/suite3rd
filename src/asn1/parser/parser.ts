import { createToken } from "chevrotain";

// NOTE: Chevrotain chooses the first match

const AMPERSAND = createToken({ name: "Ampersand", pattern: "&" });
const ASSIGNMENT = createToken({ name: "Assignment", pattern: "::=" });
const AT = createToken({ name: "At", pattern: "@" });
const AUTOMATIC = createToken({ name: "AUTOMATIC", pattern: "AUTOMATIC" });
const BEGIN = createToken({ name: "BEGIN", pattern: "BEGIN" });
const BIT = createToken({ name: "BIT", pattern: "BIT" });
const CHOICE = createToken({ name: "CHOICE", pattern: "CHOICE" });
const COLON = createToken({ name: "Colon", pattern: ":" });
const COMMA = createToken({ name: "Comma", pattern: "," });
const COMPONENTS = createToken({ name: "COMPONENTS", pattern: "COMPONENTS" });
const CONTAINING = createToken({ name: "CONTAINING", pattern: "CONTAINING" });
const CURLY_LEFT = createToken({ name: "Left curly brace", pattern: "{" });
const CURLY_RIGHT = createToken({ name: "Right curly brace", pattern: "}" });
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
const IMPLICIT = createToken({ name: "IMPLICIT", pattern: "IMPLICIT" });
const IMPORTS = createToken({ name: "IMPORTS", pattern: "IMPORTS" });
const INTEGER = createToken({ name: "INTEGER", pattern: "INTEGER" });
const NULL = createToken({ name: "NULL", pattern: "NULL" });
const MINUS = createToken({ name: "Minus", pattern: "-" });
const OCTET = createToken({ name: "OCTET", pattern: "OCTET" });
const OF = createToken({ name: "OF", pattern: "OF" });
const PAREN_LEFT = createToken({ name: "Left parenthesis", pattern: "(" });
const PAREN_RIGHT = createToken({ name: "Right parenthesis", pattern: ")" });
const SEMICOLON = createToken({ name: "Semicolon", pattern: ";" });
const SEQUENCE = createToken({ name: "SEQUENCE", pattern: "SEQUENCE" });
const STRING = createToken({ name: "STRING", pattern: "STRING" });
const TAGS = createToken({ name: "TAGS", pattern: "TAGS" });
