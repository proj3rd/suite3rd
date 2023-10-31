import { CstParser } from "chevrotain";
import {
  APOSTROPHE,
  ASSIGNMENT,
  AUTOMATIC,
  BEGIN,
  BIT,
  BOOLEAN,
  CHOICE,
  COMMA,
  CURLY_LEFT,
  CURLY_RIGHT,
  DBRACKET_LEFT,
  DBRACKET_RIGHT,
  DEFAULT,
  DEFINITIONS,
  ELLIPSIS,
  END,
  ENUMERATED,
  EXPLICIT,
  FROM,
  IMPLICIT,
  IMPORTS,
  INTEGER,
  identifier,
  NULL,
  number,
  OCTET,
  OPTIONAL,
  PAREN_LEFT,
  PAREN_RIGHT,
  VERTICAL_LINE,
  RANGE_SEPARATOR,
  SEMICOLON,
  SEQUENCE,
  STRING,
  TAGS,
  typereference,
  tokens,
  BIT_STRING_VALUE_QUOTED,
  SIZE,
  HYPHEN_MINUS,
  OF,
  CLASS,
  word,
  objectclassreference,
  AMPERSAND,
} from "./lexer";

const unimpl = () => {
  throw Error("unimplemented");
};

export class Asn1Parser extends CstParser {
  constructor() {
    super(tokens);
    const $ = this;
    const $$ = $ as any;

    /**
     * Implementation hacks
     */
    $.RULE("Objectclassreference", () => {
      $.OR([
        { ALT: () => $.CONSUME(word) },
        { ALT: () => $.CONSUME(objectclassreference) },
      ]);
    });
    $.RULE("Typereference", () => {
      $.OR([
        { ALT: () => $.SUBRULE($$.Objectclassreference) },
        { ALT: () => $.SUBRULE($$.Typereference) },
      ]);
    });

    /**
     * ModuleDefinitionList ::= ModuleDefinition+
     */
    $.RULE("ModuleDefinitionList", () => {
      $.AT_LEAST_ONE({
        DEF: () => {
          $.SUBRULE($$.ModuleDefinition);
        },
      });
    });

    /**
     * ModuleDefinition ::=
     *   ModuleIdentifier
     *   DEFINITIONS
     *   EncodingReferenceDefault
     *   TagDefault
     *   ExtensionDefault
     *   '::='
     *   BEGIN
     *   ModuleBody
     *   EncodingControlSections
     *   END
     */
    $.RULE("ModuleDefinition", () => {
      $.SUBRULE($$.ModuleIdentifier);
      $.CONSUME(DEFINITIONS);
      // $.SUBRULE($$.EncodingReferenceDefault)
      $.SUBRULE($$.TagDefault);
      // $.SUBRULE($$.ExtensionDefault)
      $.CONSUME(ASSIGNMENT);
      $.CONSUME(BEGIN);
      $.SUBRULE($$.ModuleBody);
      // $.SUBRULE($$.EncodingControlSections)
      $.CONSUME(END);
    });

    /**
     * ModuleIdentifier ::=
     *   modulereference
     *   DefinitiveIdentification
     */
    $.RULE("ModuleIdentifier", () => {
      $.SUBRULE($$.Typereference);
      $.SUBRULE($$.DefinitiveIdentification);
    });

    /**
     * DefinitiveIdentification ::=
     * | DefinitiveOID
     * | DefinitiveOIDandIRI
     * | empty
     */
    $.RULE("DefinitiveIdentification", () => {
      $.OPTION(() => {
        $.OR([
          { ALT: () => $.SUBRULE($$.DefinitiveOID) },
          // Others are omitted
        ]);
      });
    });

    /**
     * DefinitiveOID ::=
     *   "{" DefinitiveObjIdComponentList "}"
     */
    $.RULE("DefinitiveOID", () => {
      $.CONSUME(CURLY_LEFT);
      $.SUBRULE($$.DefinitiveObjIdComponentList);
      $.CONSUME(CURLY_RIGHT);
    });

    /**
     * DefinitiveObjIdComponentList ::=
     *   DefinitiveObjIdComponent
     * | DefinitiveObjIdComponent DefinitiveObjIdComponentList
     */
    $.RULE("DefinitiveObjIdComponentList", () => {
      $.AT_LEAST_ONE(() => $.SUBRULE($$.DefinitiveObjIdComponent));
    });

    /**
     * DefinitiveObjIdComponent ::=
     *   NameForm
     * | DefinitiveNumberForm
     * | DefinitiveNamdAndNumberForm
     */
    $.RULE("DefinitiveObjIdComponent", () => {
      $.OR([
        { ALT: () => $.SUBRULE($$.DefinitiveNameAndNumberForm) },
        // Others are omitted
      ]);
    });

    /**
     * DefinitiveNumberForm ::= number
     */
    $.RULE("DefinitiveNumberForm", () => {
      $.CONSUME(number);
    });

    /**
     * DefinitiveNameAndNumberForm ::= identifier "(" DefinitiveNumberForm ")"
     */
    $.RULE("DefinitiveNameAndNumberForm", () => {
      $.CONSUME(identifier);
      $.CONSUME(PAREN_LEFT);
      $.SUBRULE($$.DefinitiveNumberForm);
      $.CONSUME(PAREN_RIGHT);
    });

    /**
     * TagDefault ::=
     *   EXPLICIT TAGS
     * | IMPLICIT TAGS
     * | AUTOMATIC TAGS
     * | empty
     */
    $.RULE("TagDefault", () => {
      $.OPTION(() => {
        $.OR([
          // { ALT: () => $.CONSUME(EXPLICIT) },
          // { ALT: () => $.CONSUME(IMPLICIT) },
          { ALT: () => $.CONSUME(AUTOMATIC) },
        ]);
        $.CONSUME(TAGS);
      });
    });

    /**
     * ModuleBody ::=
     *   Exports Imports AssignmentList
     * | empty
     */
    $.RULE("ModuleBody", () => {
      $.OPTION(() => {
        // $.SUBRULE($$.Exports)
        $.SUBRULE($$.Imports);
        $.SUBRULE($$.AssignmentList);
      });
    });

    /**
     * Imports :=
     *   IMPORTS SymbolsImported ";"
     * | empty
     */
    $.RULE("Imports", () => {
      $.OPTION(() => {
        $.CONSUME(IMPORTS);
        $.SUBRULE($$.SymbolsImported);
        $.CONSUME(SEMICOLON);
      });
    });

    /**
     * SymbolsImported ::=
     *   SymbolsFromModuleList
     * | empty
     */
    $.RULE("SymbolsImported", () => {
      $.OPTION(() => {
        $.SUBRULE($$.SymbolsFromModuleList);
      });
    });

    /**
     * SymbolsFromModuleList ::=
     *   SymbolsFromModule
     * | SymbolsFromModuleList SymbolsFromModule
     */
    $.RULE("SymbolsFromModuleList", () => {
      $.AT_LEAST_ONE({
        DEF: () => {
          $.SUBRULE($$.SymbolsFromModule);
        },
      });
    });

    /**
     * SymbolsFromModule ::=
     *   SymbolList FROM GlobalModuleReference
     */
    $.RULE("SymbolsFromModule", () => {
      $.SUBRULE($$.SymbolList);
      $.CONSUME(FROM);
      $.SUBRULE($$.GlobalModuleReference);
    });

    /**
     * GlobalModuleReference ::=
     *   modulereference AssignedIdentifier
     */
    $.RULE("GlobalModuleReference", () => {
      $.SUBRULE($$.Typereference);
      // $.SUBRULE($$.AssignedIdentifier)
    });

    /**
     * SymbolList ::=
     *   Symbol
     * | SymbolList "," Symbol
     */
    $.RULE("SymbolList", () => {
      $.AT_LEAST_ONE_SEP({
        DEF: () => {
          $.SUBRULE($$.Symbol);
        },
        SEP: COMMA,
      });
    });

    /**
     * Symbol ::=
     *   Reference
     * | ParameterizedReference
     *
     * NOTE: Modified to equivalent rule
     * Symbol ::=
     *   Reference
     * | Reference "{" "}"
     */
    $.RULE("Symbol", () => {
      $.SUBRULE($$.Reference);
      $.OPTION(() => {
        $.CONSUME(CURLY_LEFT);
        $.CONSUME(CURLY_RIGHT);
      });
    });

    /**
     * Reference ::=
     *   typereference
     * | valuereference
     * | objectclassreference
     * | objectreference
     * | objectsetreference
     */
    $.RULE("Reference", () => {
      $.OR([
        { ALT: () => $.SUBRULE($$.Typereference) },
        // valuereference is equivalent to identifier
        { ALT: () => $.CONSUME(identifier) },
        // Others are omitted
      ]);
    });

    /**
     * AssignmentList ::=
     *   Assignment
     * | AssignmentList Assignment
     */
    $.RULE("AssignmentList", () => {
      $.AT_LEAST_ONE({
        DEF: () => {
          $.SUBRULE($$.Assignment);
        },
      });
    });

    /**
     * Assignment ::=
     *   TypeAssignment
     * | ValueAssignment
     * | XMLValueAssignment
     * | VauleSetTypeAssignment
     * | ObjectClassAssignment
     * | ObjectAssignment
     * | ObjectSetAssignment
     * | ParameterizedAssignment
     */
    $.RULE("Assignment", () => {
      $.OR([
        { ALT: () => $.SUBRULE($$.TypeAssignment) },
        { ALT: () => $.SUBRULE($$.ValueAssignment) },
        { ALT: () => $.SUBRULE($$.ObjectClassAssignment) },
        // Others are omitted
      ]);
    });

    /**
     * DefinedType ::=
     *   ExternalTypeReference
     * | typereference
     * | ParameterizedType
     * | ParameterizedValueSetType
     */
    $.RULE("DefinedType", () => {
      $.OR([
        { ALT: () => $.SUBRULE($$.Typereference) },
        // Others are omitted
      ]);
    });

    /**
     * DefinedValue ::=
     *   ExternalValueReference
     * | valuereference
     * | ParameterizedValue
     */
    $.RULE("DefinedValue", () => {
      $.OR([
        // valuereference is equivalent to identifier
        { ALT: () => $.CONSUME(identifier) },
        // Others are omitted
      ]);
    });

    /**
     * TypeAssignment ::=
     *   typereference
     *   '::='
     *   Type
     */
    $.RULE("TypeAssignment", () => {
      $.SUBRULE($$.Typereference);
      $.CONSUME(ASSIGNMENT);
      $.SUBRULE($$.Type);
    });

    /**
     * ValueAssignment ::=
     *   valuereference
     *   Type
     *   '::='
     *   Value
     */
    $.RULE("ValueAssignment", () => {
      $.CONSUME(identifier);
      $.SUBRULE($$.Type);
      $.CONSUME(ASSIGNMENT);
      $.SUBRULE($$.Value);
    });

    /**
     * Original (with left recursion)
     * Type ::= BuiltinType | ReferencedType | ConstrainedType
     *
     * Modified (without left recursion)
     * Type ::=
     *   BuiltinType Constraint?
     * | ReferencedType Constraint?
     * | ConstrainedType (== TypeWithConstraint)
     */
    $.RULE("Type", () => {
      $.OR([
        {
          ALT: () => {
            $.SUBRULE($$.BuiltinType);
            // Brought Constraint from ConstrainedType -> Type Constraint to resolve left recursion
            $.OPTION(() => {
              $.SUBRULE($$.Constraint);
            });
          },
        },
        {
          ALT: () => {
            $.SUBRULE($$.ReferencedType);
            // Brought Constraint from ConstrainedType -> Type Constraint to resolve left recursion
            $.OPTION1(() => {
              $.SUBRULE1($$.Constraint);
            });
          },
        },
        { ALT: () => $.SUBRULE($$.ConstrainedType) },
      ]);
    });

    /**
     * BuiltinType ::=
     *   BitstringType
     * | BooleanType
     * ...
     * | ChoiceType
     * ...
     * | EnumeratedType
     * ...
     * | IntegerType
     * ...
     * | NullType
     * ...
     * | OctetStringType
     * ...
     * | SequenceType
     * ...
     */
    $.RULE("BuiltinType", () => {
      $.OR([
        { ALT: () => $.SUBRULE($$.BitStringType) },
        { ALT: () => $.SUBRULE($$.BooleanType) },
        { ALT: () => $.SUBRULE($$.ChoiceType) },
        { ALT: () => $.SUBRULE($$.EnumeratedType) },
        { ALT: () => $.SUBRULE($$.IntegerType) },
        { ALT: () => $.SUBRULE($$.NullType) },
        { ALT: () => $.SUBRULE($$.OctetStringType) },
        { ALT: () => $.SUBRULE($$.SequenceType) },
        // Others are omitted
      ]);
    });

    /**
     * ReferencedType ::=
     *   DefinedType
     * | UsefulType
     * | SelectionType
     * | TypeFromObject
     * | ValueSetFromObjects
     */
    $.RULE("ReferencedType", () => {
      $.OR([
        { ALT: () => $.SUBRULE($$.DefinedType) },
        // Others are omitted
      ]);
    });

    /**
     * NamedType ::= identifier Type
     */
    $.RULE("NamedType", () => {
      $.CONSUME(identifier);
      $.SUBRULE($$.Type);
    });

    /**
     * Value ::=
     *   BuiltinValue
     * | ReferencedValue
     * | ObjectClassFieldValue
     */
    $.RULE("Value", () => {
      $.OR([
        { ALT: () => $.SUBRULE($$.BuiltinValue) },
        { ALT: () => $.SUBRULE($$.ReferencedValue) },
        // { ALT: () => $.SUBRULE($$.ObjectClassFieldValue) },
      ]);
    });

    /**
     * BuiltinValue ::=
     *   BitStringValue
     * ...
     * | IntegerValue
     * ...
     */
    $.RULE("BuiltinValue", () => {
      $.OR([
        { ALT: () => $.SUBRULE($$.BitStringValue) },
        { ALT: () => $.SUBRULE($$.IntegerValue) },
        // Others are omitted
      ]);
    });

    /**
     * ReferencedValue ::=
     *   DefinedValue
     * | ValueFromObject
     */
    $.RULE("ReferencedValue", () => {
      $.OR([
        { ALT: () => $.SUBRULE($$.DefinedValue) },
        // Others are omitted
      ]);
    });

    /**
     * BooleanType ::= BOOLEAN
     */
    $.RULE("BooleanType", () => {
      $.CONSUME(BOOLEAN);
    });

    /**
     * IntegerType ::=
     *   INTEGER
     * | INTEGER "{" NamedNumberList "}"
     */
    $.RULE("IntegerType", () => {
      $.CONSUME(INTEGER);
      // $.OPTION(() => {
      //   $.CONSUME(CURLY_LEFT);
      //   $.SUBRULE($$.NamedNumberList);
      //   $.CONSUME(CURLY_RIGHT);
      // });
    });

    /**
     * SignedNumber ::=
     *   number
     * | "-" number
     */
    $.RULE("SignedNumber", () => {
      $.OPTION(() => $.CONSUME(HYPHEN_MINUS));
      $.CONSUME(number);
    });

    /**
     * IntegerValue ::=
     *   SingedNumber
     * | identifier
     */
    $.RULE("IntegerValue", () => {
      $.OR([
        { ALT: () => $.SUBRULE($$.SignedNumber) },
        // { ALT: () => $.CONSUME(identifier) },
      ]);
    });

    /**
     * EnumeratedType ::=
     *   ENUMERATED "{" Enumerations "}"
     */
    $.RULE("EnumeratedType", () => {
      $.CONSUME(ENUMERATED);
      $.CONSUME(CURLY_LEFT);
      $.SUBRULE($$.Enumerations);
      $.CONSUME(CURLY_RIGHT);
    });

    /**
     * Enumerations ::=
     *   RootEnumeration
     * | RootEnumeration "," "..." ExceptionSpec
     * | RootEnumeration "," "..." ExceptionSpec "," AdditionalEnumerations
     */
    $.RULE("Enumerations", () => {
      $.SUBRULE($$.RootEnumeration);
      $.OPTION(() => {
        $.CONSUME(COMMA);
        $.CONSUME(ELLIPSIS);
        // $.SUBRULE($$.ExceptionSpec);
        $.OPTION1(() => {
          $.CONSUME1(COMMA);
          $.SUBRULE($$.AdditionalEnumeration);
        });
      });
    });

    /**
     * RootEnumeration ::= Enumeration
     */
    $.RULE("RootEnumeration", () => {
      $.SUBRULE($$.Enumeration);
    });

    /**
     * AdditionalEnumeration ::= Enumeration
     */
    $.RULE("AdditionalEnumeration", () => {
      $.SUBRULE($$.Enumeration);
    });

    /**
     * Enumeration ::= EnumerationItem | EnumerationItem "," Enumeration
     */
    $.RULE("Enumeration", () => {
      $.AT_LEAST_ONE_SEP({
        DEF: () => $.SUBRULE($$.EnumerationItem),
        SEP: COMMA,
      });
    });

    /**
     * EnumerationItem ::= identifier | NamedNumber
     */
    $.RULE("EnumerationItem", () => {
      $.OR([
        { ALT: () => $.CONSUME(identifier) },
        // Others are omitted
      ]);
    });

    /**
     * BitStringType ::=
     *   BIT STRING
     * | BIT STRING "(" NamedBitList ")"
     */
    $.RULE("BitStringType", () => {
      $.CONSUME(BIT);
      $.CONSUME(STRING);
      // $.OPTION(() => {
      //   $.CONSUME(PAREN_LEFT);
      //   $.SUBRULE($$.NamedBitList);
      //   $.CONSUME(PAREN_RIGHT);
      // });
    });

    /**
     * BitStringValue ::=
     *   bstring
     * ...
     */
    $.RULE("BitStringValue", () => {
      $.CONSUME(BIT_STRING_VALUE_QUOTED);
    });

    /**
     * OctetStringType ::= OCTET STRING
     */
    $.RULE("OctetStringType", () => {
      $.CONSUME(OCTET);
      $.CONSUME(STRING);
    });

    /**
     * NullType ::= NULL
     */
    $.RULE("NullType", () => {
      $.CONSUME(NULL);
    });

    /**
     * Original
     * SequenceType ::=
     *   SEQUENCE "{" "}"
     * | SEQUENCE "{" ExtensionAndException OptionalExtensionMarker "}"
     * | SEQUENCE "{" ComponentTypeLists "}"
     *
     * Modified
     * SequenceType ::=
     * SEQUENCE "{" RootComponentTypeList                                                                                           "}"
     * SEQUENCE "{" RootComponentTypeList "," ExtensionAndException ExtensionAdditions OptionalExtensionMarker                      "}"
     * SEQUENCE "{" RootComponentTypeList "," ExtensionAndException ExtensionAdditions ExtensionEndMarker "," RootComponentTypeList "}"
     * SEQUENCE "{"                           ExtensionAndException ExtensionAdditions ExtensionEndMarker "," RootComponentTypeList "}"
     * SEQUENCE "{"                           ExtensionAndException ExtensionAdditions OptionalExtensionMarker                      "}"
     * SEQUENCE "{"                           ExtensionAndException                    OptionalExtensionMarker                      "}"
     * SEQUENCE "{"                                                                                                                 "}"
     *
     * Reduced scope
     * SequenceType ::=
     * SEQUENCE "{" RootComponentTypeList                                                                                           "}"
     * SEQUENCE "{" RootComponentTypeList "," ExtensionAndException ExtensionAdditions                                              "}"
     */
    $.RULE("SequenceType", () => {
      $.CONSUME(SEQUENCE);
      $.CONSUME(CURLY_LEFT);
      $.OR([
        {
          ALT: () => {
            $.SUBRULE($$.RootComponentTypeList);
            $.OPTION(() => {
              $.CONSUME(COMMA);
              $.SUBRULE($$.ExtensionAndException);
              $.SUBRULE($$.ExtensionAdditions);
              // $.OR([
              //   { ALT: () => $.SUBRULE($$.OptionalExtensionMarker) },
              //   {
              //     ALT: () => {
              //       $.SUBRULE($$.ExtensionEndMarker);
              //       $.CONSUME(COMMA);
              //       $.SUBRULE($$.RootComponentTypeList);
              //     },
              //   },
              // ]);
            });
          },
        },
        { ALT: () => {} },
      ]);
      // $.OPTION(() => {
      //   $.OR([
      //     {
      //       ALT: () => {
      //         $.SUBRULE($$.ExtensionAndException);
      //         $.SUBRULE($$.OptionalExtensionMarker);
      //       },
      //     },
      //     {
      //       ALT: () => $.SUBRULE($$.ComponentTypeLists),
      //     },
      //   ]);
      // });
      $.CONSUME(CURLY_RIGHT);
    });

    /**
     * ExtensionAndException ::= "..." | "..." ExceptionSpec
     */
    $.RULE("ExtensionAndException", () => {
      $.CONSUME(ELLIPSIS);
      // $.OPTION(() => {
      //   $.SUBRULE($$.ExceptionSpec);
      // });
    });

    /**
     * OptionalExtensionMarker ::= "," "..." | empty
     */
    $.RULE("OptionalExtensionMarker", () => {
      $.OPTION(() => {
        $.CONSUME(COMMA);
        $.CONSUME(ELLIPSIS);
      });
    });

    /**
     * ComponentTypeLists ::=
     *   RootComponentTypeList
     * | RootComponentTypeList "," ExtensionAndException ExtensionAdditions
     *     OptionalExtensionMarker
     * | RootComponentTypeList "," ExtensionAndException ExtensionAdditions
     *     ExtensionEndMarker "," RootComponentTypeList
     * | ExtensionAndException ExtensionAdditions ExtensionEndMarker ","
     *     RootComponentTypeList
     * | ExtensionAndException ExtensionAdditions OptionalExtensionMarker
     */
    // $.RULE("ComponentTypeLists", () => {
    //   $.OR([
    //     { ALT: () => $.SUBRULE($$.RootComponentTypeList) },
    //     {
    //       ALT: () => {
    //         $.OPTION(() => {
    //           $.SUBRULE1($$.RootComponentTypeList);
    //           $.CONSUME(COMMA);
    //         });
    //         $.SUBRULE($$.ExtensionAndException);
    //         $.SUBRULE($$.ExtensionAdditions);
    //         // $.OR([
    //         //   { ALT: () => $.SUBRULE($$.OptionalExtensionMarker) },
    //         //   {
    //         //     ALT: () => {
    //         //       $.SUBRULE($$.ExtensionEndMarker);
    //         //       $.CONSUME(COMMA);
    //         //       $.SUBRULE($$.RootComponentTypeList);
    //         //     },
    //         //   },
    //         // ]);
    //       },
    //     },
    //   ]);
    // });

    /**
     * RootComponentTypeList ::= ComponentTypeList
     */
    $.RULE("RootComponentTypeList", () => {
      $.SUBRULE($$.ComponentTypeList);
    });

    /**
     * ExtensionEndMarker ::= "," "..."
     */
    $.RULE("ExtensionEndMarker", () => {
      $.CONSUME(COMMA);
      $.CONSUME(ELLIPSIS);
    });

    /**
     * ExtensionAdditions ::=
     *   "," ExtensionAdditionList
     * | empty
     */
    $.RULE("ExtensionAdditions", () => {
      $.OPTION(() => {
        $.CONSUME(COMMA);
        $.SUBRULE($$.ExtensionAdditionList);
      });
    });

    /**
     * ExtensionAdditionList ::=
     *   ExtensionAddition
     * | ExtensionAdditionList "," ExtensionAddition
     */
    $.RULE("ExtensionAdditionList", () => {
      $.AT_LEAST_ONE_SEP({
        DEF: () => {
          $.SUBRULE($$.ExtensionAddition);
        },
        SEP: COMMA,
      });
    });

    /**
     * ExtensionAddition ::=
     *   ComponentType
     * | ExtensionAdditionGroup
     */
    $.RULE("ExtensionAddition", () => {
      $.OR([
        { ALT: () => $.SUBRULE($$.ComponentType) },
        { ALT: () => $.SUBRULE($$.ExtensionAdditionGroup) },
      ]);
    });

    /**
     * ExtensionAdditionGroup ::= "[[" VersionNumber ComponentTypeList "]]""
     */
    $.RULE("ExtensionAdditionGroup", () => {
      $.CONSUME(DBRACKET_LEFT);
      // $.SUBRULE($$.VersionNumber)
      $.SUBRULE($$.ComponentTypeList);
      $.CONSUME(DBRACKET_RIGHT);
    });

    /**
     * ComponentTypeList ::=
     *   ComponentType
     * | ComponentTypeList "," ComponentType
     */
    $.RULE("ComponentTypeList", () => {
      $.AT_LEAST_ONE_SEP({
        DEF: () => $.SUBRULE($$.ComponentType),
        SEP: COMMA,
      });
    });

    /**
     * ComponentType ::=
     *   NamedType
     * | NamedType OPTIONAL
     * | NamedType DEFAULT Value
     * | COMPONENTS OF Type
     */
    $.RULE("ComponentType", () => {
      $.OR([
        {
          ALT: () => {
            $.SUBRULE($$.NamedType);
            $.OPTION(() => {
              $.OR1([
                { ALT: () => $.CONSUME(OPTIONAL) },
                {
                  ALT: () => {
                    $.CONSUME(DEFAULT);
                    $.SUBRULE($$.Value);
                  },
                },
              ]);
            });
          },
        },
        // Others are omitted
      ]);
    });

    /**
     * ChoiceType ::= CHOICE "{" AlternativeTypeLists "}"
     */
    $.RULE("ChoiceType", () => {
      $.CONSUME(CHOICE);
      $.CONSUME(CURLY_LEFT);
      $.SUBRULE($$.AlternativeTypeLists);
      $.CONSUME(CURLY_RIGHT);
    });

    /**
     * AlternativeTypeLists ::=
     *   RootAlternativeTypeList
     * | RootAlternativeTypeList ","
     *     ExtensionAndException ExtensionAdditionAlternatives
     *     OptionalExtensionMarker
     */
    $.RULE("AlternativeTypeLists", () => {
      $.SUBRULE($$.RootAlternativeTypeList);
      $.OPTION(() => {
        $.CONSUME(COMMA);
        $.SUBRULE($$.ExtensionAndException);
        $.SUBRULE($$.ExtensionAdditionAlternatives);
        $.SUBRULE($$.OptionalExtensionMarker);
      });
    });

    /**
     * RootAlternativeTypeList ::= AlternativeTypeList
     */
    $.RULE("RootAlternativeTypeList", () => {
      $.SUBRULE($$.AlternativeTypeList);
    });

    /**
     * ExtensionAdditionAlternatives ::=
     *   "," ExtensionAdditionAlternativesList
     * | empty
     */
    $.RULE("ExtensionAdditionAlternatives", () => {
      $.OPTION(() => {
        $.CONSUME(COMMA);
        $.SUBRULE($$.ExtensionAdditionAlternativesList);
      });
    });

    /**
     * ExtensionAdditionAlternativesList ::=
     *   ExtensionAdditionAlternative
     * | ExtensionAdditionAlternativesList "," ExtensionAdditionAlternative"
     */
    $.RULE("ExtensionAdditionAlternativesList", () => {
      $.AT_LEAST_ONE_SEP({
        DEF: () => {
          $.SUBRULE($$.ExtensionAdditionAlternative);
        },
        SEP: COMMA,
      });
    });

    /**
     * ExtensionAdditionAlternative ::=
     *   ExtensionAdditionAlternativesGroup
     * | NamedType
     */
    $.RULE("ExtensionAdditionAlternative", () => {
      $.OR([
        { ALT: () => $.SUBRULE($$.ExtensionAdditionAlternativesGroup) },
        { ALT: () => $.SUBRULE($$.NamedType) },
      ]);
    });

    /**
     * ExtensionAdditionAlternativesGroup ::=
     *   "[[" VersionNumber AlternativeTypeList "]]"
     */
    $.RULE("ExtensionAdditionAlternativesGroup", () => {
      $.CONSUME(DBRACKET_LEFT);
      // $.SUBRULE($$.VersionNumber);
      $.SUBRULE($$.AlternativeTypeList);
      $.CONSUME(DBRACKET_RIGHT);
    });

    /**
     * AlternativeTypeList ::=
     *   NamedType
     * | AlternativeTypeList "," NamedType
     */
    $.RULE("AlternativeTypeList", () => {
      $.AT_LEAST_ONE_SEP({
        DEF: () => {
          $.SUBRULE($$.NamedType);
        },
        SEP: COMMA,
      });
    });

    /**
     * ConstrainedType ::=
     *   Type Constraint
     * | TypeWithConstraint
     */
    $.RULE("ConstrainedType", () => {
      $.OR([
        // Left recursion due to Type -> ConstrainedType -> Type Constraint
        // Moved Constraint directly next to Type and made it optionsl
        // {
        //   ALT: () => {
        //     $.SUBRULE($$.Type);
        //     $.SUBRULE($$.Constraint);
        //   },
        // },
        {
          ALT: () => $.SUBRULE($$.TypeWithConstraint),
        },
      ]);
    });

    /**
     * TypeWithConstraint ::=
     *   SET Constraint OF Type
     * | SET SizeConstraint OF Type
     * | SEQUENCE Constraint OF Type
     * | SEQUENCE SizeConstraint OF Type
     * | SET Constraint OF NamedType
     * | SET SizeConstraint OF NamedType
     * | SEQUENCE Constraint OF NamedType
     * | SEQUENCE SizeConstraint Of NamedType
     */
    $.RULE("TypeWithConstraint", () => {
      $.OR([
        { ALT: () => $.CONSUME(SEQUENCE) },
        // Others are omitted
      ]);
      $.OR1([
        { ALT: () => $.SUBRULE($$.Constraint) },
        // { ALT: () => $.SUBRULE($$.SizeConstraint) },
      ]);
      $.CONSUME(OF);
      $.OR2([
        { ALT: () => $.SUBRULE($$.Type) },
        { ALT: () => $.SUBRULE($$.NamedType) },
      ]);
    });

    /**
     * Constraint ::= "(" ConstraintSpec ExceptionSpec ")"
     */
    $.RULE("Constraint", () => {
      $.CONSUME(PAREN_LEFT);
      $.SUBRULE($$.ConstraintSpec);
      // $.SUBRULE($$.ExceptionSpec);
      $.CONSUME(PAREN_RIGHT);
    });

    /**
     * ConstraintSpec ::= SubtypeConstraint
     * \                  GenralConstraint
     */
    $.RULE("ConstraintSpec", () => {
      $.OR([
        { ALT: () => $.SUBRULE($$.SubtypeConstraint) },
        // { ALT: () => $.SUBRULE($$.GenralConstraint) },
      ]);
    });

    /**
     * SubtypeConsraint ::= ElementSetSpecs
     */
    $.RULE("SubtypeConstraint", () => {
      $.SUBRULE($$.ElementSetSpecs);
    });

    /**
     * ElementSetSpecs ::=
     *   RootElementSetSpec
     * | RootElementSetSpec "," "..."
     * | RootElementSetSpec "," "..." "," AdditionalElementSetSpec
     */
    $.RULE("ElementSetSpecs", () => {
      $.SUBRULE($$.RootElementSetSpec);
      // $.OPTION(() => {
      //   $.CONSUME(COMMA);
      //   $.CONSUME(ELLIPSIS);
      //   $.OPTION(() => {
      //     $.CONSUME(COMMA);
      //     $.SUBRULE($$.AdditionalElementSetSpec);
      //   });
      // });
    });

    /**
     * RootElementSetSpec ::= ElementSetSpec
     */
    $.RULE("RootElementSetSpec", () => {
      $.SUBRULE($$.ElementSetSpec);
    });

    /**
     * ElementSetSpec ::= Unions
     * |                  ALL Exclusions
     */
    $.RULE("ElementSetSpec", () => {
      $.OR([
        { ALT: () => $.SUBRULE($$.Unions) },
        // Others are omitted
      ]);
    });

    /**
     * Unions ::=
     *   Intersections
     * | UElems UnionMark Intersections
     *
     * NOTE: Modified to equivalent rule
     * Unions ::=
     *   Intersections
     * | Unions UnionMark Intersections
     */
    $.RULE("Unions", () => {
      // Without left recursion
      $.AT_LEAST_ONE_SEP({
        DEF: () => $.SUBRULE($$.Intersections),
        // TODO: Use UnionMark rule instead of VERTICAL_LinE token
        SEP: VERTICAL_LINE,
      });
    });

    /**
     * Intersections ::= IntersectionElements
     * |                 IElems IntersectinMark IntersectionElements
     */
    $.RULE("Intersections", () => {
      $.OR([
        { ALT: () => $.SUBRULE($$.IntersectionElements) },
        // Others are omitted
      ]);
    });

    /**
     * IntersectionElements ::= Elements | Elems Exclusions
     */
    $.RULE("IntersectionElements", () => {
      $.OR([
        { ALT: () => $.SUBRULE($$.Elements) },
        // Others are omitted
      ]);
    });

    /**
     * Elements ::=
     *   SubtypeElements
     * | ObjectSetElements
     * | "(" ElementSetSpec ")"
     */
    $.RULE("Elements", () => {
      $.OR([
        { ALT: () => $.SUBRULE($$.SubtypeElements) },
        // Others are omitted
      ]);
    });

    /**
     * SubtypeElements ::=
     *   SingleValue
     * ...
     * | ValueRange
     * ...
     * | SizeConstraint
     * ...
     */
    $.RULE("SubtypeElements", () => {
      $.OR([
        // ValueRange has longer match than SingleValue
        { ALT: () => $.SUBRULE($$.ValueRange) },
        { ALT: () => $.SUBRULE($$.SingleValue) },
        { ALT: () => $.SUBRULE($$.SizeConstraint) },
        // Others are omitted
      ]);
    });

    /**
     * SingleValue ::= Value
     */
    $.RULE("SingleValue", () => {
      $.SUBRULE($$.Value);
    });

    /**
     * ValueRange ::= LowerEndPoint ".." UpperEndPoint
     */
    $.RULE("ValueRange", () => {
      $.SUBRULE($$.LowerEndPoint);
      $.CONSUME(RANGE_SEPARATOR);
      $.SUBRULE($$.UpperEndPoint);
    });

    /**
     * LowerEndPoint ::= LowerEndValue | LowerEndValue "<"
     */
    $.RULE("LowerEndPoint", () => {
      $.SUBRULE($$.LowerEndValue);
      // $.OPTION(() => {});
    });

    /**
     * UpperEndPoint ::= UpperEndValue | "<" UpperEndValue
     */
    $.RULE("UpperEndPoint", () => {
      // $.OPTION(() => {});
      $.SUBRULE($$.UpperEndValue);
    });

    /**
     * LowerEndValue ::= Value | MIN
     */
    $.RULE("LowerEndValue", () => {
      $.OR([
        { ALT: () => $.SUBRULE($$.Value) },
        // Others are omitted
      ]);
    });

    /**
     * UpperEndValue ::= Value | MAX
     */
    $.RULE("UpperEndValue", () => {
      $.OR([
        { ALT: () => $.SUBRULE($$.Value) },
        // Others are omitted
      ]);
    });

    /**
     * SizeConstraint ::= SIZE Constraint
     */
    $.RULE("SizeConstraint", () => {
      $.CONSUME(SIZE);
      $.SUBRULE($$.Constraint);
    });

    /**
     * X.681
     */
    $.RULE("typefieldreference", () => {
      $.CONSUME(AMPERSAND);
      $.SUBRULE($$.Typereference);
    });

    /**
     * ObjectClassAssignment ::=
     *   objectclassreference
     *   "::="
     *   ObjectClass
     */
    $.RULE("ObjectClassAssignment", () => {
      $.SUBRULE($$.Objectclassreference);
      $.CONSUME(ASSIGNMENT);
      $.SUBRULE($$.ObjectClass);
    });

    /**
     * ObjectClass ::=
     *   DefinedObjectClass
     * | ObjectClassDefn
     * | ParameterizedObjectClass
     */
    $.RULE("ObjectClass", () => {
      $.OR([
        { ALT: () => $.SUBRULE($$.ObjectClassDefn) },
        // Others are omitted
      ]);
    });

    /**
     * ObjectClassDefn ::=
     *   CLASS
     *   "{" FieldSpec "," + "}"
     *   WithSyntaxSpec?
     */
    $.RULE("ObjectClassDefn", () => {
      $.CONSUME(CLASS);
      $.CONSUME(CURLY_LEFT);
      $.AT_LEAST_ONE_SEP({
        DEF: () => $.SUBRULE($$.FieldSpec),
        SEP: COMMA,
      });
      $.CONSUME(CURLY_RIGHT);
      $.OPTION(() => {
        $.SUBRULE($$.WithSyntaxSpec);
      });
    });

    /**
     * FieldSpec ::=
     *   TypeFieldSpec
     * ...
     */
    $.RULE("FieldSpec", () => {
      $.OR([
        { ALT: () => $.SUBRULE($$.TypeFieldSpec) },
        // Others are omitted
      ]);
    });

    /**
     * TypeFieldSpec ::=
     *   typefieldreference
     *   TypeOptionalitySpec?
     */
    $.RULE("TypeFieldSpec", () => {
      $.SUBRULE($$.typefieldreference);
      $.OPTION(() => {
        $.SUBRULE($$.TypeOptionalitySpec);
      });
    });

    /**
     * TypeOptionalitySpec ::= OPTIONAL | DEFAULT Type
     */
    $.RULE("TypeOptionalitySpec", () => {
      $.OR([
        { ALT: () => $.CONSUME(OPTIONAL) },
        {
          ALT: () => {
            $.CONSUME(DEFAULT), $.SUBRULE($$.Type);
          },
        },
      ]);
    });

    /**
     * X.683
     */

    /**
     * ParameterizedReference ::=
     *   Reference | Reference "{" "}"
     *
     * NOTE: Merged to Symbol
     */
    // $.RULE("ParameterizedReference", () => {
    //   $.SUBRULE($$.Reference);
    //   $.OPTION(() => {
    //     $.CONSUME(CURLY_LEFT);
    //     $.CONSUME(CURLY_RIGHT );
    //   });
    // });

    this.performSelfAnalysis();
  }
}
