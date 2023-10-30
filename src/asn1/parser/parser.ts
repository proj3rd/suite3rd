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
  Identifier,
  NULL,
  Number,
  OCTET,
  OPTIONAL,
  PAREN_LEFT,
  PAREN_RIGHT,
  SEMICOLON,
  SEQUENCE,
  STRING,
  TAGS,
  TypeReference,
  tokens,
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
      $.CONSUME(TypeReference);
      // $.SUBRULE($$.DefinitiveIdentification);
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
      $.CONSUME(TypeReference);
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
     */
    $.RULE("Symbol", () => {
      $.OR([
        { ALT: () => $.SUBRULE($$.Reference) },
        // { ALT: () => $.SUBRULE($$.ParameterizedReference) },
      ]);
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
        { ALT: () => $.CONSUME(TypeReference) },
        // valuereference is equivalent to identifier
        { ALT: () => $.CONSUME(Identifier) },
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
        { ALT: () => $.CONSUME(TypeReference) },
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
        { ALT: () => $.CONSUME(Identifier) },
      ]);
    });

    /**
     * TypeAssignment ::=
     *   typereference
     *   '::='
     *   Type
     */
    $.RULE("TypeAssignment", () => {
      $.CONSUME(TypeReference);
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
      $.CONSUME(Identifier);
      $.SUBRULE($$.Type);
      $.CONSUME(ASSIGNMENT);
      $.SUBRULE($$.Value);
    });

    /**
     * Type ::= BuiltinType | ReferencedType | ConstrainedType
     */
    $.RULE("Type", () => {
      $.OR([
        { ALT: () => $.SUBRULE($$.BuiltinType) },
        { ALT: () => $.SUBRULE($$.ReferencedType) },
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
      $.CONSUME(Identifier);
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
     */
    $.RULE("BuiltinValue", () => {
      $.OR([
        // TODO: uncomment { ALT: () => $.SUBRULE($$.BitStringValue) },
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
        $.OPTION(() => {
          $.CONSUME(COMMA);
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
        { ALT: () => $.CONSUME(Identifier) },
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
     * SequenceType ::=
     *   SEQUENCE "{" "}"
     * | SEQUENCE "{" ExtensionAndException OptionalExtensionMarker "}"
     * | SEQUENCE "{" ComponentTypeLists "}"
     */
    $.RULE("SequenceType", () => {
      $.CONSUME(SEQUENCE);
      $.CONSUME(CURLY_LEFT);
      $.OPTION(() => {
        $.OR([
          {
            ALT: () => {
              $.SUBRULE($$.ExtensionAndException);
              $.SUBRULE($$.OptionalExtensionMarker);
            },
          },
          {
            ALT: () => $.SUBRULE($$.ComponentTypeLists),
          },
        ]);
      });
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
    $.RULE("ComponentTypeLists", () => {
      $.OR([
        { ALT: () => $.SUBRULE($$.RootComponentTypeList) },
        {
          ALT: () => {
            $.OPTION(() => {
              $.SUBRULE($$.RootComponentTypeList);
              $.CONSUME(COMMA);
            });
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
          },
        },
      ]);
    });

    /**
     * RootComponentTypeList ::= ComponentTypeList
     */
    $.RULE("RootComponentTypeList", () => {
      $.SUBRULE($$.ComponentTypeList);
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
            $.OR([
              { ALT: () => $.CONSUME(OPTIONAL) },
              {
                ALT: () => {
                  $.CONSUME(DEFAULT);
                  $.SUBRULE($$.Value);
                },
              },
            ]);
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
        {
          ALT: () => {
            $.SUBRULE($$.Type);
            $.SUBRULE($$.Constraint);
          },
        },
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
     * | SEQUENCE SizeConstraint Of Type
     * | SET Constraint OF NamedType
     * | SET SizeConstraint OF NamedType
     * | SEQUENCE Constraint OF NamedType
     * | SEQUENCE SizeConstraint Of NamedType
     */
    $.RULE("TypeWithConstraint", () => {
      $.OR([{ ALT: () => $.CONSUME(SEQUENCE) }]);
      $.OR([
        { ALT: () => $.SUBRULE($$.Constraint) },
        // { ALT: () => $.SUBRULE($$.SizeConstraint) },
      ]);
      $.OR([
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

    this.performSelfAnalysis();
  }
}
