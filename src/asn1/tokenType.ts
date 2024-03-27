export enum TokenType {
  EOF,
  // Token types are defined in the same order as in X.680 clause 12
  TypeReference,
  Identifier,
  ValueReference, // Not used. `Identifier` is used instead
  ModuleReference, // Not used. `TypeReference` is used instead
  Comment,
  Empty, // Not used
  Number,
  RealNumber, // Not used
  Bstring, // Not used
  XmlBstring, // Not used
  Hstring, // Not used
  XmlHstring, // Not used
  Cstring, // Not used
  XmlCstring, // Not used
  SimpleString, // Not used
  Tstring, // Not used
  XmlTstring, // Not used
  PsName, // Not used
  Assignment,
  RangeSeparator,
  Ellipsis,
  VersionBracketLeft,
  VersionBracketRight,
  EncodingReference, // Not used
  IntegerUnicodeLabel, // Not used
  NonIntegerUnicodeLabel, // Not used
  XmlEndTagStartItem, // Not used
  XmlSingleTagEndItem, // Not used
  XmlBooleanTrueItem, // Not used
  XmlBooleanExtendedTrueItem, // Not used
  XmlBooleanFalseItem, // Not used
  XmlBooleanExtendedFalseItem, // Not used
  XmlRealNotaNumberItem, // Not used
  XmlRealInfinityItem, // Not used
  XmlAsn1TypeName, // Not used
  CurlyBraceLeft,
  CurlyBraceRight,
  AngleBracketLeft, // Not used
  AngleBracketRight, // Not used
  Comma,
  Period,
  Slash, // Not used
  ParenthesisLeft,
  ParenthesisRight,
  BracketLeft,
  BracketRight,
  HyphenMinus,
  Colon,
  Equal, // Not used
  QuotationMark, // Not used
  Apostrophe, // Not used
  Semicolon,
  AtSign,
  VerticalBar,
  ExclamationMark, // Not used
  Caret, // Not used
  // Reserved words
  Absent,
  AbstractSyntax,
  All,
  Application,
  Automatic,
  Begin,
  Bit,
  BmpString,
  Boolean,
  By,
  Character,
  Choice,
  Class,
  Component,
  Components,
  Constrained,
  Containing,
  Date,
  DateTime,
  Default,
  Definitions,
  Duration,
  Embedded,
  Encoded,
  EncodingControl,
  End,
  Enumerated,
  Except,
  Explicit,
  Exports,
  Extensibility,
  External,
  False,
  From,
  GeneralizedTime,
  GeneralString,
  GraphicString,
  Ia5String,
  IdentifierLiteral,
  Implicit,
  Implied,
  Imports,
  Includes,
  Instance,
  Instructions,
  Integer,
  Intersection,
  Iso646String,
  Max,
  Min,
  MinusInfinity,
  NotaNumber,
  Null,
  NumericString,
  Object,
  ObjectDescriptor,
  Octet,
  Of,
  OidIri,
  Optional,
  Pattern,
  Pdv,
  PlusInfinity,
  Present,
  PrintableString,
  Private,
  Real,
  RelativeOid,
  RelativeOidIri,
  Sequence,
  Set,
  Settings,
  Size,
  String,
  Syntax,
  T61String,
  Tags,
  TeletexString,
  Time,
  TimeOfDay,
  True,
  TypeIdentifier,
  Union,
  Unique,
  Universal,
  UniversalString,
  UtcTime,
  Utf8String,
  VideotexString,
  VisibleString,
  With,
}
