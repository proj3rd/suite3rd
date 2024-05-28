// Generated from src/asn1/antlr/asn1.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import asn1Listener from "./asn1Listener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class asn1Parser extends Parser {
	public static readonly TAG = 1;
	public static readonly A_ROND = 2;
	public static readonly STAR = 3;
	public static readonly ASSIGN_OP = 4;
	public static readonly BOOLEAN_LITERAL = 5;
	public static readonly TRUE_LITERAL = 6;
	public static readonly FALSE_LITERAL = 7;
	public static readonly DOT = 8;
	public static readonly DOUBLE_DOT = 9;
	public static readonly ELLIPSIS = 10;
	public static readonly APOSTROPHE = 11;
	public static readonly AMPERSAND = 12;
	public static readonly LESS_THAN = 13;
	public static readonly GREATER_THAN = 14;
	public static readonly LESS_THAN_SLASH = 15;
	public static readonly SLASH_GREATER_THAN = 16;
	public static readonly TRUE_SMALL_LITERAL = 17;
	public static readonly FALSE_SMALL_LITERAL = 18;
	public static readonly INTEGER_LITERAL = 19;
	public static readonly L_BRACE = 20;
	public static readonly R_BRACE = 21;
	public static readonly COMMA = 22;
	public static readonly L_PARAN = 23;
	public static readonly R_PARAN = 24;
	public static readonly MINUS = 25;
	public static readonly BMP_STRING_LITERAL = 26;
	public static readonly GENREAL_STRING_LITERAL = 27;
	public static readonly GRAPHIC_STRING_LITERAL = 28;
	public static readonly IA5_STRING_LITERAL = 29;
	public static readonly ISO646_STRING_LITERAL = 30;
	public static readonly NUMERIC_STRING_LITERAL = 31;
	public static readonly PRINTABLE_STRING_LITERAL = 32;
	public static readonly TELETEXT_STRING_LITERAL = 33;
	public static readonly T61_STRING_LITERAL = 34;
	public static readonly UNIVERSAL_STRING_LITERAL = 35;
	public static readonly UTF8_STRING_LITERAL = 36;
	public static readonly VIDEOTEX_STRING_LITERAL = 37;
	public static readonly VISIBLE_STRING_LITERAL = 38;
	public static readonly ENUMERATED_LITERAL = 39;
	public static readonly REAL_LITERAL = 40;
	public static readonly PLUS_INFINITY_LITERAL = 41;
	public static readonly MINUS_INFINITY_LITERAL = 42;
	public static readonly BIT_LITERAL = 43;
	public static readonly STRING_LITERAL = 44;
	public static readonly CONTAINING_LITERAL = 45;
	public static readonly OCTET_LITERAL = 46;
	public static readonly NULL_LITERAL = 47;
	public static readonly SEQUENCE_LITERAL = 48;
	public static readonly OPTIONAL_LITERAL = 49;
	public static readonly DEFAULT_LITERAL = 50;
	public static readonly COMPONENTS_LITERAL = 51;
	public static readonly OF_LITERAL = 52;
	public static readonly SET_LITERAL = 53;
	public static readonly EXCLAM = 54;
	public static readonly ALL_LITERAL = 55;
	public static readonly EXCEPT_LITERAL = 56;
	public static readonly POWER = 57;
	public static readonly PIPE = 58;
	public static readonly UNION_LITERAL = 59;
	public static readonly INTERSECTION_LITERAL = 60;
	public static readonly INCLUDES_LITERAL = 61;
	public static readonly MIN_LITERAL = 62;
	public static readonly MAX_LITERAL = 63;
	public static readonly SIZE_LITERAL = 64;
	public static readonly FROM_LITERAL = 65;
	public static readonly WITH_LITERAL = 66;
	public static readonly COMPONENT_LITERAL = 67;
	public static readonly PRESENT_LITERAL = 68;
	public static readonly ABSENT_LITERAL = 69;
	public static readonly PATTERN_LITERAL = 70;
	public static readonly TYPE_IDENTIFIER_LITERAL = 71;
	public static readonly ABSTRACT_SYNTAX_LITERAL = 72;
	public static readonly CLASS_LITERAL = 73;
	public static readonly UNIQUE_LITERAL = 74;
	public static readonly SYNTAX_LITERAL = 75;
	public static readonly L_BRACKET = 76;
	public static readonly R_BRACKET = 77;
	public static readonly INSTANCE_LITERAL = 78;
	public static readonly SEMI_COLON = 79;
	public static readonly IMPORTS_LITERAL = 80;
	public static readonly EXPORTS_LITERAL = 81;
	public static readonly EXTENSIBILITY_LITERAL = 82;
	public static readonly IMPLIED_LITERAL = 83;
	public static readonly EXPLICIT_LITERAL = 84;
	public static readonly TAGS_LITERAL = 85;
	public static readonly IMPLICIT_LITERAL = 86;
	public static readonly AUTOMATIC_LITERAL = 87;
	public static readonly DEFINITIONS_LITERAL = 88;
	public static readonly BEGIN_LITERAL = 89;
	public static readonly END_LITERAL = 90;
	public static readonly DOUBLE_L_BRACKET = 91;
	public static readonly DOUBLE_R_BRACKET = 92;
	public static readonly COLON = 93;
	public static readonly CHOICE_LITERAL = 94;
	public static readonly UNIVERSAL_LITERAL = 95;
	public static readonly APPLICATION_LITERAL = 96;
	public static readonly PRIVATE_LITERAL = 97;
	public static readonly EMBEDDED_LITERAL = 98;
	public static readonly PDV_LITERAL = 99;
	public static readonly EXTERNAL_LITERAL = 100;
	public static readonly OBJECT_LITERAL = 101;
	public static readonly IDENTIFIER_LITERAL = 102;
	public static readonly RELATIVE_OID_LITERAL = 103;
	public static readonly CHARACTER_LITERAL = 104;
	public static readonly CONSTRAINED_LITERAL = 105;
	public static readonly BY_LITERAL = 106;
	public static readonly A_ROND_DOT = 107;
	public static readonly ENCODED_LITERAL = 108;
	public static readonly COMMENT = 109;
	public static readonly UNRESTRICTEDCHARACTERSTRINGTYPE = 110;
	public static readonly EXTENSTIONENDMARKER = 111;
	public static readonly NUMBER = 112;
	public static readonly WS = 113;
	public static readonly LINE_COMMENT = 114;
	public static readonly BSTRING = 115;
	public static readonly HSTRING = 116;
	public static readonly CSTRING = 117;
	public static readonly IDENTIFIER = 118;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_modules = 0;
	public static readonly RULE_moduleDefinition = 1;
	public static readonly RULE_tagDefault = 2;
	public static readonly RULE_extensionDefault = 3;
	public static readonly RULE_moduleBody = 4;
	public static readonly RULE_exports = 5;
	public static readonly RULE_symbolsExported = 6;
	public static readonly RULE_imports = 7;
	public static readonly RULE_symbolsImported = 8;
	public static readonly RULE_symbolsFromModuleList = 9;
	public static readonly RULE_symbolsFromModule = 10;
	public static readonly RULE_globalModuleReference = 11;
	public static readonly RULE_assignedIdentifier = 12;
	public static readonly RULE_symbolList = 13;
	public static readonly RULE_symbol = 14;
	public static readonly RULE_assignmentList = 15;
	public static readonly RULE_assignment = 16;
	public static readonly RULE_sequenceType = 17;
	public static readonly RULE_extensionAndException = 18;
	public static readonly RULE_optionalExtensionMarker = 19;
	public static readonly RULE_componentTypeLists = 20;
	public static readonly RULE_rootComponentTypeList = 21;
	public static readonly RULE_componentTypeList = 22;
	public static readonly RULE_componentType = 23;
	public static readonly RULE_tag = 24;
	public static readonly RULE_extensionAdditions = 25;
	public static readonly RULE_extensionAdditionList = 26;
	public static readonly RULE_extensionAddition = 27;
	public static readonly RULE_extensionAdditionGroup = 28;
	public static readonly RULE_versionNumber = 29;
	public static readonly RULE_sequenceOfType = 30;
	public static readonly RULE_sizeConstraint = 31;
	public static readonly RULE_parameterizedAssignment = 32;
	public static readonly RULE_parameterList = 33;
	public static readonly RULE_parameter = 34;
	public static readonly RULE_paramGovernor = 35;
	public static readonly RULE_governor = 36;
	public static readonly RULE_objectClassAssignment = 37;
	public static readonly RULE_objectClass = 38;
	public static readonly RULE_definedObjectClass = 39;
	public static readonly RULE_usefulObjectClassReference = 40;
	public static readonly RULE_externalObjectClassReference = 41;
	public static readonly RULE_objectClassDefn = 42;
	public static readonly RULE_withSyntaxSpec = 43;
	public static readonly RULE_syntaxList = 44;
	public static readonly RULE_tokenOrGroupSpec = 45;
	public static readonly RULE_optionalGroup = 46;
	public static readonly RULE_requiredToken = 47;
	public static readonly RULE_literal = 48;
	public static readonly RULE_primitiveFieldName = 49;
	public static readonly RULE_fieldSpec = 50;
	public static readonly RULE_typeFieldSpec = 51;
	public static readonly RULE_typeOptionalitySpec = 52;
	public static readonly RULE_fixedTypeValueFieldSpec = 53;
	public static readonly RULE_valueOptionalitySpec = 54;
	public static readonly RULE_variableTypeValueFieldSpec = 55;
	public static readonly RULE_fixedTypeValueSetFieldSpec = 56;
	public static readonly RULE_valueSetOptionalitySpec = 57;
	public static readonly RULE_object = 58;
	public static readonly RULE_parameterizedObject = 59;
	public static readonly RULE_definedObject = 60;
	public static readonly RULE_objectSet = 61;
	public static readonly RULE_objectSetSpec = 62;
	public static readonly RULE_fieldName = 63;
	public static readonly RULE_valueSet = 64;
	public static readonly RULE_elementSetSpecs = 65;
	public static readonly RULE_rootElementSetSpec = 66;
	public static readonly RULE_additionalElementSetSpec = 67;
	public static readonly RULE_elementSetSpec = 68;
	public static readonly RULE_unions = 69;
	public static readonly RULE_exclusions = 70;
	public static readonly RULE_intersections = 71;
	public static readonly RULE_unionMark = 72;
	public static readonly RULE_intersectionMark = 73;
	public static readonly RULE_elements = 74;
	public static readonly RULE_objectSetElements = 75;
	public static readonly RULE_intersectionElements = 76;
	public static readonly RULE_subtypeElements = 77;
	public static readonly RULE_variableTypeValueSetFieldSpec = 78;
	public static readonly RULE_objectFieldSpec = 79;
	public static readonly RULE_objectOptionalitySpec = 80;
	public static readonly RULE_objectSetFieldSpec = 81;
	public static readonly RULE_objectSetOptionalitySpec = 82;
	public static readonly RULE_typeAssignment = 83;
	public static readonly RULE_valueAssignment = 84;
	public static readonly RULE_asnType = 85;
	public static readonly RULE_builtinType = 86;
	public static readonly RULE_characterStringType = 87;
	public static readonly RULE_restrictedCharacterStringType = 88;
	public static readonly RULE_objectClassFieldType = 89;
	public static readonly RULE_setType = 90;
	public static readonly RULE_setOfType = 91;
	public static readonly RULE_referencedType = 92;
	public static readonly RULE_definedType = 93;
	public static readonly RULE_constraint = 94;
	public static readonly RULE_constraintSpec = 95;
	public static readonly RULE_userDefinedConstraint = 96;
	public static readonly RULE_generalConstraint = 97;
	public static readonly RULE_userDefinedConstraintParameter = 98;
	public static readonly RULE_tableConstraint = 99;
	public static readonly RULE_simpleTableConstraint = 100;
	public static readonly RULE_contentsConstraint = 101;
	public static readonly RULE_componentPresenceLists = 102;
	public static readonly RULE_componentPresenceList = 103;
	public static readonly RULE_componentPresence = 104;
	public static readonly RULE_subtypeConstraint = 105;
	public static readonly RULE_value = 106;
	public static readonly RULE_builtinValue = 107;
	public static readonly RULE_objectIdentifierValue = 108;
	public static readonly RULE_objIdComponentsList = 109;
	public static readonly RULE_objIdComponents = 110;
	public static readonly RULE_integerValue = 111;
	public static readonly RULE_choiceValue = 112;
	public static readonly RULE_enumeratedValue = 113;
	public static readonly RULE_signedNumber = 114;
	public static readonly RULE_choiceType = 115;
	public static readonly RULE_alternativeTypeLists = 116;
	public static readonly RULE_extensionAdditionAlternatives = 117;
	public static readonly RULE_extensionAdditionAlternativesList = 118;
	public static readonly RULE_extensionAdditionAlternative = 119;
	public static readonly RULE_extensionAdditionAlternativesGroup = 120;
	public static readonly RULE_rootAlternativeTypeList = 121;
	public static readonly RULE_alternativeTypeList = 122;
	public static readonly RULE_namedType = 123;
	public static readonly RULE_enumeratedType = 124;
	public static readonly RULE_enumerations = 125;
	public static readonly RULE_rootEnumeration = 126;
	public static readonly RULE_enumeration = 127;
	public static readonly RULE_enumerationItem = 128;
	public static readonly RULE_namedNumber = 129;
	public static readonly RULE_definedValue = 130;
	public static readonly RULE_parameterizedValue = 131;
	public static readonly RULE_simpleDefinedValue = 132;
	public static readonly RULE_actualParameterList = 133;
	public static readonly RULE_actualParameter = 134;
	public static readonly RULE_exceptionSpec = 135;
	public static readonly RULE_exceptionIdentification = 136;
	public static readonly RULE_additionalEnumeration = 137;
	public static readonly RULE_integerType = 138;
	public static readonly RULE_namedNumberList = 139;
	public static readonly RULE_objectIdentifierType = 140;
	public static readonly RULE_componentRelationConstraint = 141;
	public static readonly RULE_atNotation = 142;
	public static readonly RULE_level = 143;
	public static readonly RULE_componentIdList = 144;
	public static readonly RULE_octetStringType = 145;
	public static readonly RULE_bitStringType = 146;
	public static readonly RULE_namedBitList = 147;
	public static readonly RULE_namedBit = 148;
	public static readonly RULE_booleanValue = 149;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            "'@'", "'*'", 
                                                            "'::='", "'BOOLEAN'", 
                                                            "'TRUE'", "'FALSE'", 
                                                            "'.'", "'..'", 
                                                            "'...'", "'''", 
                                                            "'&'", "'<'", 
                                                            "'>'", "'</'", 
                                                            "'/>'", "'true'", 
                                                            "'false'", "'INTEGER'", 
                                                            "'{'", "'}'", 
                                                            "','", "'('", 
                                                            "')'", "'-'", 
                                                            "'BMPString'", 
                                                            "'GeneralString'", 
                                                            "'GraphicString'", 
                                                            "'IA5String'", 
                                                            "'ISO646String'", 
                                                            "'NumericString'", 
                                                            "'PrintableString'", 
                                                            "'TeletexString'", 
                                                            "'T61String'", 
                                                            "'UniversalString'", 
                                                            "'UTF8String'", 
                                                            "'VideotexString'", 
                                                            "'VisibleString'", 
                                                            "'ENUMERATED'", 
                                                            "'REAL'", "'PLUS-INFINITY'", 
                                                            "'MINUS-INFINITY'", 
                                                            "'BIT'", "'STRING'", 
                                                            "'CONTAINING'", 
                                                            "'OCTET'", "'NULL'", 
                                                            "'SEQUENCE'", 
                                                            "'OPTIONAL'", 
                                                            "'DEFAULT'", 
                                                            "'COMPONENTS'", 
                                                            "'OF'", "'SET'", 
                                                            "'!'", "'ALL'", 
                                                            "'EXCEPT'", 
                                                            "'^'", "'|'", 
                                                            "'UNION'", "'INTERSECTION'", 
                                                            "'INCLUDES'", 
                                                            "'MIN'", "'MAX'", 
                                                            "'SIZE'", "'FROM'", 
                                                            "'WITH'", "'COMPONENT'", 
                                                            "'PRESENT'", 
                                                            "'ABSENT'", 
                                                            "'PATTERN'", 
                                                            "'TYPE-Identifier'", 
                                                            "'ABSTRACT-SYNTAX'", 
                                                            "'CLASS'", "'UNIQUE'", 
                                                            "'SYNTAX'", 
                                                            "'['", "']'", 
                                                            "'INSTANCE'", 
                                                            "';'", "'IMPORTS'", 
                                                            "'EXPORTS'", 
                                                            "'EXTENSIBILITY'", 
                                                            "'IMPLIED'", 
                                                            "'EXPLICIT'", 
                                                            "'TAGS'", "'IMPLICIT'", 
                                                            "'AUTOMATIC'", 
                                                            "'DEFINITIONS'", 
                                                            "'BEGIN'", "'END'", 
                                                            "'[['", "']]'", 
                                                            "':'", "'CHOICE'", 
                                                            "'UNIVERSAL'", 
                                                            "'APPLICATION'", 
                                                            "'PRIVATE'", 
                                                            "'EMBEDDED'", 
                                                            "'PDV'", "'EXTERNAL'", 
                                                            "'OBJECT'", 
                                                            "'IDENTIFIER'", 
                                                            "'RELATIVE-OID'", 
                                                            "'CHARACTER'", 
                                                            "'CONSTRAINED'", 
                                                            "'BY'", "'@.'", 
                                                            "'ENCODED'", 
                                                            "'--'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "TAG", 
                                                             "A_ROND", "STAR", 
                                                             "ASSIGN_OP", 
                                                             "BOOLEAN_LITERAL", 
                                                             "TRUE_LITERAL", 
                                                             "FALSE_LITERAL", 
                                                             "DOT", "DOUBLE_DOT", 
                                                             "ELLIPSIS", 
                                                             "APOSTROPHE", 
                                                             "AMPERSAND", 
                                                             "LESS_THAN", 
                                                             "GREATER_THAN", 
                                                             "LESS_THAN_SLASH", 
                                                             "SLASH_GREATER_THAN", 
                                                             "TRUE_SMALL_LITERAL", 
                                                             "FALSE_SMALL_LITERAL", 
                                                             "INTEGER_LITERAL", 
                                                             "L_BRACE", 
                                                             "R_BRACE", 
                                                             "COMMA", "L_PARAN", 
                                                             "R_PARAN", 
                                                             "MINUS", "BMP_STRING_LITERAL", 
                                                             "GENREAL_STRING_LITERAL", 
                                                             "GRAPHIC_STRING_LITERAL", 
                                                             "IA5_STRING_LITERAL", 
                                                             "ISO646_STRING_LITERAL", 
                                                             "NUMERIC_STRING_LITERAL", 
                                                             "PRINTABLE_STRING_LITERAL", 
                                                             "TELETEXT_STRING_LITERAL", 
                                                             "T61_STRING_LITERAL", 
                                                             "UNIVERSAL_STRING_LITERAL", 
                                                             "UTF8_STRING_LITERAL", 
                                                             "VIDEOTEX_STRING_LITERAL", 
                                                             "VISIBLE_STRING_LITERAL", 
                                                             "ENUMERATED_LITERAL", 
                                                             "REAL_LITERAL", 
                                                             "PLUS_INFINITY_LITERAL", 
                                                             "MINUS_INFINITY_LITERAL", 
                                                             "BIT_LITERAL", 
                                                             "STRING_LITERAL", 
                                                             "CONTAINING_LITERAL", 
                                                             "OCTET_LITERAL", 
                                                             "NULL_LITERAL", 
                                                             "SEQUENCE_LITERAL", 
                                                             "OPTIONAL_LITERAL", 
                                                             "DEFAULT_LITERAL", 
                                                             "COMPONENTS_LITERAL", 
                                                             "OF_LITERAL", 
                                                             "SET_LITERAL", 
                                                             "EXCLAM", "ALL_LITERAL", 
                                                             "EXCEPT_LITERAL", 
                                                             "POWER", "PIPE", 
                                                             "UNION_LITERAL", 
                                                             "INTERSECTION_LITERAL", 
                                                             "INCLUDES_LITERAL", 
                                                             "MIN_LITERAL", 
                                                             "MAX_LITERAL", 
                                                             "SIZE_LITERAL", 
                                                             "FROM_LITERAL", 
                                                             "WITH_LITERAL", 
                                                             "COMPONENT_LITERAL", 
                                                             "PRESENT_LITERAL", 
                                                             "ABSENT_LITERAL", 
                                                             "PATTERN_LITERAL", 
                                                             "TYPE_IDENTIFIER_LITERAL", 
                                                             "ABSTRACT_SYNTAX_LITERAL", 
                                                             "CLASS_LITERAL", 
                                                             "UNIQUE_LITERAL", 
                                                             "SYNTAX_LITERAL", 
                                                             "L_BRACKET", 
                                                             "R_BRACKET", 
                                                             "INSTANCE_LITERAL", 
                                                             "SEMI_COLON", 
                                                             "IMPORTS_LITERAL", 
                                                             "EXPORTS_LITERAL", 
                                                             "EXTENSIBILITY_LITERAL", 
                                                             "IMPLIED_LITERAL", 
                                                             "EXPLICIT_LITERAL", 
                                                             "TAGS_LITERAL", 
                                                             "IMPLICIT_LITERAL", 
                                                             "AUTOMATIC_LITERAL", 
                                                             "DEFINITIONS_LITERAL", 
                                                             "BEGIN_LITERAL", 
                                                             "END_LITERAL", 
                                                             "DOUBLE_L_BRACKET", 
                                                             "DOUBLE_R_BRACKET", 
                                                             "COLON", "CHOICE_LITERAL", 
                                                             "UNIVERSAL_LITERAL", 
                                                             "APPLICATION_LITERAL", 
                                                             "PRIVATE_LITERAL", 
                                                             "EMBEDDED_LITERAL", 
                                                             "PDV_LITERAL", 
                                                             "EXTERNAL_LITERAL", 
                                                             "OBJECT_LITERAL", 
                                                             "IDENTIFIER_LITERAL", 
                                                             "RELATIVE_OID_LITERAL", 
                                                             "CHARACTER_LITERAL", 
                                                             "CONSTRAINED_LITERAL", 
                                                             "BY_LITERAL", 
                                                             "A_ROND_DOT", 
                                                             "ENCODED_LITERAL", 
                                                             "COMMENT", 
                                                             "UNRESTRICTEDCHARACTERSTRINGTYPE", 
                                                             "EXTENSTIONENDMARKER", 
                                                             "NUMBER", "WS", 
                                                             "LINE_COMMENT", 
                                                             "BSTRING", 
                                                             "HSTRING", 
                                                             "CSTRING", 
                                                             "IDENTIFIER" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"modules", "moduleDefinition", "tagDefault", "extensionDefault", "moduleBody", 
		"exports", "symbolsExported", "imports", "symbolsImported", "symbolsFromModuleList", 
		"symbolsFromModule", "globalModuleReference", "assignedIdentifier", "symbolList", 
		"symbol", "assignmentList", "assignment", "sequenceType", "extensionAndException", 
		"optionalExtensionMarker", "componentTypeLists", "rootComponentTypeList", 
		"componentTypeList", "componentType", "tag", "extensionAdditions", "extensionAdditionList", 
		"extensionAddition", "extensionAdditionGroup", "versionNumber", "sequenceOfType", 
		"sizeConstraint", "parameterizedAssignment", "parameterList", "parameter", 
		"paramGovernor", "governor", "objectClassAssignment", "objectClass", "definedObjectClass", 
		"usefulObjectClassReference", "externalObjectClassReference", "objectClassDefn", 
		"withSyntaxSpec", "syntaxList", "tokenOrGroupSpec", "optionalGroup", "requiredToken", 
		"literal", "primitiveFieldName", "fieldSpec", "typeFieldSpec", "typeOptionalitySpec", 
		"fixedTypeValueFieldSpec", "valueOptionalitySpec", "variableTypeValueFieldSpec", 
		"fixedTypeValueSetFieldSpec", "valueSetOptionalitySpec", "object", "parameterizedObject", 
		"definedObject", "objectSet", "objectSetSpec", "fieldName", "valueSet", 
		"elementSetSpecs", "rootElementSetSpec", "additionalElementSetSpec", "elementSetSpec", 
		"unions", "exclusions", "intersections", "unionMark", "intersectionMark", 
		"elements", "objectSetElements", "intersectionElements", "subtypeElements", 
		"variableTypeValueSetFieldSpec", "objectFieldSpec", "objectOptionalitySpec", 
		"objectSetFieldSpec", "objectSetOptionalitySpec", "typeAssignment", "valueAssignment", 
		"asnType", "builtinType", "characterStringType", "restrictedCharacterStringType", 
		"objectClassFieldType", "setType", "setOfType", "referencedType", "definedType", 
		"constraint", "constraintSpec", "userDefinedConstraint", "generalConstraint", 
		"userDefinedConstraintParameter", "tableConstraint", "simpleTableConstraint", 
		"contentsConstraint", "componentPresenceLists", "componentPresenceList", 
		"componentPresence", "subtypeConstraint", "value", "builtinValue", "objectIdentifierValue", 
		"objIdComponentsList", "objIdComponents", "integerValue", "choiceValue", 
		"enumeratedValue", "signedNumber", "choiceType", "alternativeTypeLists", 
		"extensionAdditionAlternatives", "extensionAdditionAlternativesList", 
		"extensionAdditionAlternative", "extensionAdditionAlternativesGroup", 
		"rootAlternativeTypeList", "alternativeTypeList", "namedType", "enumeratedType", 
		"enumerations", "rootEnumeration", "enumeration", "enumerationItem", "namedNumber", 
		"definedValue", "parameterizedValue", "simpleDefinedValue", "actualParameterList", 
		"actualParameter", "exceptionSpec", "exceptionIdentification", "additionalEnumeration", 
		"integerType", "namedNumberList", "objectIdentifierType", "componentRelationConstraint", 
		"atNotation", "level", "componentIdList", "octetStringType", "bitStringType", 
		"namedBitList", "namedBit", "booleanValue",
	];
	public get grammarFileName(): string { return "asn1.g4"; }
	public get literalNames(): (string | null)[] { return asn1Parser.literalNames; }
	public get symbolicNames(): (string | null)[] { return asn1Parser.symbolicNames; }
	public get ruleNames(): string[] { return asn1Parser.ruleNames; }
	public get serializedATN(): number[] { return asn1Parser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, asn1Parser._ATN, asn1Parser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public modules(): ModulesContext {
		let localctx: ModulesContext = new ModulesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, asn1Parser.RULE_modules);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 301;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 300;
				this.moduleDefinition();
				}
				}
				this.state = 303;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===118);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public moduleDefinition(): ModuleDefinitionContext {
		let localctx: ModuleDefinitionContext = new ModuleDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, asn1Parser.RULE_moduleDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 305;
			this.match(asn1Parser.IDENTIFIER);
			this.state = 317;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===20) {
				{
				this.state = 306;
				this.match(asn1Parser.L_BRACE);
				this.state = 313;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===118) {
					{
					{
					this.state = 307;
					this.match(asn1Parser.IDENTIFIER);
					this.state = 308;
					this.match(asn1Parser.L_PARAN);
					this.state = 309;
					this.match(asn1Parser.NUMBER);
					this.state = 310;
					this.match(asn1Parser.R_PARAN);
					}
					}
					this.state = 315;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 316;
				this.match(asn1Parser.R_BRACE);
				}
			}

			this.state = 319;
			this.match(asn1Parser.DEFINITIONS_LITERAL);
			this.state = 320;
			this.tagDefault();
			this.state = 321;
			this.extensionDefault();
			this.state = 322;
			this.match(asn1Parser.ASSIGN_OP);
			this.state = 323;
			this.match(asn1Parser.BEGIN_LITERAL);
			this.state = 324;
			this.moduleBody();
			this.state = 325;
			this.match(asn1Parser.END_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tagDefault(): TagDefaultContext {
		let localctx: TagDefaultContext = new TagDefaultContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, asn1Parser.RULE_tagDefault);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 329;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 13) !== 0)) {
				{
				this.state = 327;
				_la = this._input.LA(1);
				if(!(((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 13) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 328;
				this.match(asn1Parser.TAGS_LITERAL);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public extensionDefault(): ExtensionDefaultContext {
		let localctx: ExtensionDefaultContext = new ExtensionDefaultContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, asn1Parser.RULE_extensionDefault);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 333;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===82) {
				{
				this.state = 331;
				this.match(asn1Parser.EXTENSIBILITY_LITERAL);
				this.state = 332;
				this.match(asn1Parser.IMPLIED_LITERAL);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public moduleBody(): ModuleBodyContext {
		let localctx: ModuleBodyContext = new ModuleBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, asn1Parser.RULE_moduleBody);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 339;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===80 || _la===81 || _la===118) {
				{
				this.state = 335;
				this.exports();
				this.state = 336;
				this.imports();
				this.state = 337;
				this.assignmentList();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public exports(): ExportsContext {
		let localctx: ExportsContext = new ExportsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, asn1Parser.RULE_exports);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 348;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 341;
				this.match(asn1Parser.EXPORTS_LITERAL);
				this.state = 342;
				this.symbolsExported();
				this.state = 343;
				this.match(asn1Parser.SEMI_COLON);
				}
				break;
			case 2:
				{
				this.state = 345;
				this.match(asn1Parser.EXPORTS_LITERAL);
				this.state = 346;
				this.match(asn1Parser.ALL_LITERAL);
				this.state = 347;
				this.match(asn1Parser.SEMI_COLON);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public symbolsExported(): SymbolsExportedContext {
		let localctx: SymbolsExportedContext = new SymbolsExportedContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, asn1Parser.RULE_symbolsExported);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 351;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===118) {
				{
				this.state = 350;
				this.symbolList();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public imports(): ImportsContext {
		let localctx: ImportsContext = new ImportsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, asn1Parser.RULE_imports);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 357;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===80) {
				{
				this.state = 353;
				this.match(asn1Parser.IMPORTS_LITERAL);
				this.state = 354;
				this.symbolsImported();
				this.state = 355;
				this.match(asn1Parser.SEMI_COLON);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public symbolsImported(): SymbolsImportedContext {
		let localctx: SymbolsImportedContext = new SymbolsImportedContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, asn1Parser.RULE_symbolsImported);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 360;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===118) {
				{
				this.state = 359;
				this.symbolsFromModuleList();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public symbolsFromModuleList(): SymbolsFromModuleListContext {
		let localctx: SymbolsFromModuleListContext = new SymbolsFromModuleListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, asn1Parser.RULE_symbolsFromModuleList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 362;
			this.symbolsFromModule();
			}
			this.state = 366;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===118) {
				{
				{
				this.state = 363;
				this.symbolsFromModule();
				}
				}
				this.state = 368;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public symbolsFromModule(): SymbolsFromModuleContext {
		let localctx: SymbolsFromModuleContext = new SymbolsFromModuleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, asn1Parser.RULE_symbolsFromModule);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 369;
			this.symbolList();
			this.state = 370;
			this.match(asn1Parser.FROM_LITERAL);
			this.state = 371;
			this.globalModuleReference();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public globalModuleReference(): GlobalModuleReferenceContext {
		let localctx: GlobalModuleReferenceContext = new GlobalModuleReferenceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, asn1Parser.RULE_globalModuleReference);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 373;
			this.match(asn1Parser.IDENTIFIER);
			this.state = 374;
			this.assignedIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assignedIdentifier(): AssignedIdentifierContext {
		let localctx: AssignedIdentifierContext = new AssignedIdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, asn1Parser.RULE_assignedIdentifier);
		try {
			this.enterOuterAlt(localctx, 1);
			// tslint:disable-next-line:no-empty
			{
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public symbolList(): SymbolListContext {
		let localctx: SymbolListContext = new SymbolListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, asn1Parser.RULE_symbolList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 378;
			this.symbol_();
			}
			this.state = 383;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===22) {
				{
				{
				this.state = 379;
				this.match(asn1Parser.COMMA);
				this.state = 380;
				this.symbol_();
				}
				}
				this.state = 385;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public symbol_(): SymbolContext {
		let localctx: SymbolContext = new SymbolContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, asn1Parser.RULE_symbol);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 386;
			this.match(asn1Parser.IDENTIFIER);
			this.state = 389;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===20) {
				{
				{
				this.state = 387;
				this.match(asn1Parser.L_BRACE);
				this.state = 388;
				this.match(asn1Parser.R_BRACE);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assignmentList(): AssignmentListContext {
		let localctx: AssignmentListContext = new AssignmentListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, asn1Parser.RULE_assignmentList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 391;
			this.assignment();
			}
			this.state = 395;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===118) {
				{
				{
				this.state = 392;
				this.assignment();
				}
				}
				this.state = 397;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assignment(): AssignmentContext {
		let localctx: AssignmentContext = new AssignmentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, asn1Parser.RULE_assignment);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 398;
			this.match(asn1Parser.IDENTIFIER);
			this.state = 403;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				this.state = 399;
				this.valueAssignment();
				}
				break;
			case 2:
				{
				this.state = 400;
				this.typeAssignment();
				}
				break;
			case 3:
				{
				this.state = 401;
				this.parameterizedAssignment();
				}
				break;
			case 4:
				{
				this.state = 402;
				this.objectClassAssignment();
				}
				break;
			}
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sequenceType(): SequenceTypeContext {
		let localctx: SequenceTypeContext = new SequenceTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, asn1Parser.RULE_sequenceType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 405;
			this.match(asn1Parser.SEQUENCE_LITERAL);
			this.state = 406;
			this.match(asn1Parser.L_BRACE);
			this.state = 411;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				{
				this.state = 407;
				this.extensionAndException();
				this.state = 408;
				this.optionalExtensionMarker();
				}
				break;
			case 2:
				{
				this.state = 410;
				this.componentTypeLists();
				}
				break;
			}
			this.state = 413;
			this.match(asn1Parser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public extensionAndException(): ExtensionAndExceptionContext {
		let localctx: ExtensionAndExceptionContext = new ExtensionAndExceptionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, asn1Parser.RULE_extensionAndException);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 415;
			this.match(asn1Parser.ELLIPSIS);
			this.state = 417;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===54) {
				{
				this.state = 416;
				this.exceptionSpec();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public optionalExtensionMarker(): OptionalExtensionMarkerContext {
		let localctx: OptionalExtensionMarkerContext = new OptionalExtensionMarkerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, asn1Parser.RULE_optionalExtensionMarker);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 421;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===22) {
				{
				this.state = 419;
				this.match(asn1Parser.COMMA);
				this.state = 420;
				this.match(asn1Parser.ELLIPSIS);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public componentTypeLists(): ComponentTypeListsContext {
		let localctx: ComponentTypeListsContext = new ComponentTypeListsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, asn1Parser.RULE_componentTypeLists);
		let _la: number;
		try {
			this.state = 477;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 423;
				this.rootComponentTypeList();
				this.state = 425;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===1) {
					{
					this.state = 424;
					this.tag();
					}
				}

				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 427;
				this.rootComponentTypeList();
				this.state = 428;
				this.match(asn1Parser.COMMA);
				this.state = 430;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===1) {
					{
					this.state = 429;
					this.tag();
					}
				}

				this.state = 432;
				this.extensionAndException();
				this.state = 433;
				this.extensionAdditions();
				this.state = 435;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===1) {
					{
					this.state = 434;
					this.tag();
					}
				}

				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 437;
				this.rootComponentTypeList();
				this.state = 438;
				this.match(asn1Parser.COMMA);
				this.state = 440;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===1) {
					{
					this.state = 439;
					this.tag();
					}
				}

				this.state = 442;
				this.extensionAndException();
				this.state = 443;
				this.extensionAdditions();
				this.state = 456;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===22) {
					{
					this.state = 444;
					this.match(asn1Parser.COMMA);
					this.state = 446;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===1) {
						{
						this.state = 445;
						this.tag();
						}
					}

					this.state = 448;
					this.match(asn1Parser.ELLIPSIS);
					this.state = 454;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===22) {
						{
						this.state = 449;
						this.match(asn1Parser.COMMA);
						this.state = 450;
						this.rootComponentTypeList();
						this.state = 452;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===1) {
							{
							this.state = 451;
							this.tag();
							}
						}

						}
					}

					}
				}

				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 458;
				this.extensionAndException();
				this.state = 459;
				this.extensionAdditions();
				this.state = 461;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===1) {
					{
					this.state = 460;
					this.tag();
					}
				}

				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 463;
				this.extensionAndException();
				this.state = 464;
				this.extensionAdditions();
				this.state = 475;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===22) {
					{
					this.state = 465;
					this.match(asn1Parser.COMMA);
					this.state = 467;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===1) {
						{
						this.state = 466;
						this.tag();
						}
					}

					this.state = 469;
					this.match(asn1Parser.ELLIPSIS);
					{
					this.state = 470;
					this.match(asn1Parser.COMMA);
					this.state = 471;
					this.rootComponentTypeList();
					this.state = 473;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===1) {
						{
						this.state = 472;
						this.tag();
						}
					}

					}
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public rootComponentTypeList(): RootComponentTypeListContext {
		let localctx: RootComponentTypeListContext = new RootComponentTypeListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, asn1Parser.RULE_rootComponentTypeList);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 479;
			this.componentTypeList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public componentTypeList(): ComponentTypeListContext {
		let localctx: ComponentTypeListContext = new ComponentTypeListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, asn1Parser.RULE_componentTypeList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 481;
			this.componentType();
			}
			this.state = 489;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 32, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 482;
					this.match(asn1Parser.COMMA);
					this.state = 484;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===1) {
						{
						this.state = 483;
						this.tag();
						}
					}

					this.state = 486;
					this.componentType();
					}
					}
				}
				this.state = 491;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 32, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public componentType(): ComponentTypeContext {
		let localctx: ComponentTypeContext = new ComponentTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, asn1Parser.RULE_componentType);
		try {
			this.state = 501;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 118:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 492;
				this.namedType();
				this.state = 496;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 49:
					{
					this.state = 493;
					this.match(asn1Parser.OPTIONAL_LITERAL);
					}
					break;
				case 50:
					{
					this.state = 494;
					this.match(asn1Parser.DEFAULT_LITERAL);
					this.state = 495;
					this.value();
					}
					break;
				case 1:
				case 21:
				case 22:
				case 92:
					break;
				default:
					break;
				}
				}
				break;
			case 51:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 498;
				this.match(asn1Parser.COMPONENTS_LITERAL);
				this.state = 499;
				this.match(asn1Parser.OF_LITERAL);
				this.state = 500;
				this.asnType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tag(): TagContext {
		let localctx: TagContext = new TagContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, asn1Parser.RULE_tag);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 503;
			this.match(asn1Parser.TAG);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public extensionAdditions(): ExtensionAdditionsContext {
		let localctx: ExtensionAdditionsContext = new ExtensionAdditionsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, asn1Parser.RULE_extensionAdditions);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 507;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				{
				this.state = 505;
				this.match(asn1Parser.COMMA);
				this.state = 506;
				this.extensionAdditionList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public extensionAdditionList(): ExtensionAdditionListContext {
		let localctx: ExtensionAdditionListContext = new ExtensionAdditionListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, asn1Parser.RULE_extensionAdditionList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 509;
			this.extensionAddition();
			}
			this.state = 517;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 37, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 510;
					this.match(asn1Parser.COMMA);
					this.state = 512;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===1) {
						{
						this.state = 511;
						this.tag();
						}
					}

					this.state = 514;
					this.extensionAddition();
					}
					}
				}
				this.state = 519;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 37, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public extensionAddition(): ExtensionAdditionContext {
		let localctx: ExtensionAdditionContext = new ExtensionAdditionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, asn1Parser.RULE_extensionAddition);
		try {
			this.state = 522;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 51:
			case 118:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 520;
				this.componentType();
				}
				break;
			case 91:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 521;
				this.extensionAdditionGroup();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public extensionAdditionGroup(): ExtensionAdditionGroupContext {
		let localctx: ExtensionAdditionGroupContext = new ExtensionAdditionGroupContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, asn1Parser.RULE_extensionAdditionGroup);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 524;
			this.match(asn1Parser.DOUBLE_L_BRACKET);
			this.state = 525;
			this.versionNumber();
			this.state = 526;
			this.componentTypeList();
			this.state = 528;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 527;
				this.tag();
				}
			}

			this.state = 530;
			this.match(asn1Parser.DOUBLE_R_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public versionNumber(): VersionNumberContext {
		let localctx: VersionNumberContext = new VersionNumberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, asn1Parser.RULE_versionNumber);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 534;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===112) {
				{
				this.state = 532;
				this.match(asn1Parser.NUMBER);
				this.state = 533;
				this.match(asn1Parser.COLON);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sequenceOfType(): SequenceOfTypeContext {
		let localctx: SequenceOfTypeContext = new SequenceOfTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, asn1Parser.RULE_sequenceOfType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 536;
			this.match(asn1Parser.SEQUENCE_LITERAL);
			this.state = 544;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===23) {
				{
				this.state = 537;
				this.match(asn1Parser.L_PARAN);
				this.state = 540;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 23:
					{
					this.state = 538;
					this.constraint();
					}
					break;
				case 64:
					{
					this.state = 539;
					this.sizeConstraint();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 542;
				this.match(asn1Parser.R_PARAN);
				}
			}

			this.state = 546;
			this.match(asn1Parser.OF_LITERAL);
			this.state = 549;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				{
				this.state = 547;
				this.asnType();
				}
				break;
			case 2:
				{
				this.state = 548;
				this.namedType();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sizeConstraint(): SizeConstraintContext {
		let localctx: SizeConstraintContext = new SizeConstraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, asn1Parser.RULE_sizeConstraint);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 551;
			this.match(asn1Parser.SIZE_LITERAL);
			this.state = 552;
			this.constraint();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameterizedAssignment(): ParameterizedAssignmentContext {
		let localctx: ParameterizedAssignmentContext = new ParameterizedAssignmentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, asn1Parser.RULE_parameterizedAssignment);
		try {
			this.state = 568;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 20:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 554;
				this.parameterList();
				{
				this.state = 555;
				this.match(asn1Parser.ASSIGN_OP);
				this.state = 559;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 44, this._ctx) ) {
				case 1:
					{
					this.state = 556;
					this.asnType();
					}
					break;
				case 2:
					{
					this.state = 557;
					this.value();
					}
					break;
				case 3:
					{
					this.state = 558;
					this.valueSet();
					}
					break;
				}
				}
				}
				break;
			case 71:
			case 72:
			case 118:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 561;
				this.definedObjectClass();
				this.state = 562;
				this.match(asn1Parser.ASSIGN_OP);
				this.state = 566;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 45, this._ctx) ) {
				case 1:
					{
					this.state = 563;
					this.object();
					}
					break;
				case 2:
					{
					this.state = 564;
					this.objectClass();
					}
					break;
				case 3:
					{
					this.state = 565;
					this.objectSet();
					}
					break;
				}
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameterList(): ParameterListContext {
		let localctx: ParameterListContext = new ParameterListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, asn1Parser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 570;
			this.match(asn1Parser.L_BRACE);
			this.state = 571;
			this.parameter();
			this.state = 576;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===22) {
				{
				{
				this.state = 572;
				this.match(asn1Parser.COMMA);
				this.state = 573;
				this.parameter();
				}
				}
				this.state = 578;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 579;
			this.match(asn1Parser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let localctx: ParameterContext = new ParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, asn1Parser.RULE_parameter);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 584;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				{
				this.state = 581;
				this.paramGovernor();
				this.state = 582;
				this.match(asn1Parser.COLON);
				}
				break;
			}
			this.state = 586;
			this.match(asn1Parser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public paramGovernor(): ParamGovernorContext {
		let localctx: ParamGovernorContext = new ParamGovernorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, asn1Parser.RULE_paramGovernor);
		try {
			this.state = 590;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 588;
				this.governor();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 589;
				this.match(asn1Parser.IDENTIFIER);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public governor(): GovernorContext {
		let localctx: GovernorContext = new GovernorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, asn1Parser.RULE_governor);
		try {
			this.state = 594;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 592;
				this.asnType();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 593;
				this.definedObjectClass();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public objectClassAssignment(): ObjectClassAssignmentContext {
		let localctx: ObjectClassAssignmentContext = new ObjectClassAssignmentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, asn1Parser.RULE_objectClassAssignment);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 596;
			this.match(asn1Parser.ASSIGN_OP);
			this.state = 597;
			this.objectClass();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public objectClass(): ObjectClassContext {
		let localctx: ObjectClassContext = new ObjectClassContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, asn1Parser.RULE_objectClass);
		try {
			this.state = 601;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 71:
			case 72:
			case 118:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 599;
				this.definedObjectClass();
				}
				break;
			case 73:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 600;
				this.objectClassDefn();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public definedObjectClass(): DefinedObjectClassContext {
		let localctx: DefinedObjectClassContext = new DefinedObjectClassContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, asn1Parser.RULE_definedObjectClass);
		try {
			this.state = 610;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 118:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 605;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 52, this._ctx) ) {
				case 1:
					{
					this.state = 603;
					this.match(asn1Parser.IDENTIFIER);
					this.state = 604;
					this.match(asn1Parser.DOT);
					}
					break;
				}
				this.state = 607;
				this.match(asn1Parser.IDENTIFIER);
				}
				break;
			case 71:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 608;
				this.match(asn1Parser.TYPE_IDENTIFIER_LITERAL);
				}
				break;
			case 72:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 609;
				this.match(asn1Parser.ABSTRACT_SYNTAX_LITERAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public usefulObjectClassReference(): UsefulObjectClassReferenceContext {
		let localctx: UsefulObjectClassReferenceContext = new UsefulObjectClassReferenceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, asn1Parser.RULE_usefulObjectClassReference);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 612;
			_la = this._input.LA(1);
			if(!(_la===71 || _la===72)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public externalObjectClassReference(): ExternalObjectClassReferenceContext {
		let localctx: ExternalObjectClassReferenceContext = new ExternalObjectClassReferenceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, asn1Parser.RULE_externalObjectClassReference);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 614;
			this.match(asn1Parser.IDENTIFIER);
			this.state = 615;
			this.match(asn1Parser.DOT);
			this.state = 616;
			this.match(asn1Parser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public objectClassDefn(): ObjectClassDefnContext {
		let localctx: ObjectClassDefnContext = new ObjectClassDefnContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, asn1Parser.RULE_objectClassDefn);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 618;
			this.match(asn1Parser.CLASS_LITERAL);
			this.state = 619;
			this.match(asn1Parser.L_BRACE);
			this.state = 620;
			this.fieldSpec();
			this.state = 625;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===22) {
				{
				{
				this.state = 621;
				this.match(asn1Parser.COMMA);
				this.state = 622;
				this.fieldSpec();
				}
				}
				this.state = 627;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 628;
			this.match(asn1Parser.R_BRACE);
			this.state = 630;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===66) {
				{
				this.state = 629;
				this.withSyntaxSpec();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public withSyntaxSpec(): WithSyntaxSpecContext {
		let localctx: WithSyntaxSpecContext = new WithSyntaxSpecContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, asn1Parser.RULE_withSyntaxSpec);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 632;
			this.match(asn1Parser.WITH_LITERAL);
			this.state = 633;
			this.match(asn1Parser.SYNTAX_LITERAL);
			this.state = 634;
			this.syntaxList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public syntaxList(): SyntaxListContext {
		let localctx: SyntaxListContext = new SyntaxListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, asn1Parser.RULE_syntaxList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 636;
			this.match(asn1Parser.L_BRACE);
			this.state = 638;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 637;
				this.tokenOrGroupSpec();
				}
				}
				this.state = 640;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===12 || _la===22 || _la===76 || _la===118);
			this.state = 642;
			this.match(asn1Parser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tokenOrGroupSpec(): TokenOrGroupSpecContext {
		let localctx: TokenOrGroupSpecContext = new TokenOrGroupSpecContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, asn1Parser.RULE_tokenOrGroupSpec);
		try {
			this.state = 646;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 12:
			case 22:
			case 118:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 644;
				this.requiredToken();
				}
				break;
			case 76:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 645;
				this.optionalGroup();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public optionalGroup(): OptionalGroupContext {
		let localctx: OptionalGroupContext = new OptionalGroupContext(this, this._ctx, this.state);
		this.enterRule(localctx, 92, asn1Parser.RULE_optionalGroup);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 648;
			this.match(asn1Parser.L_BRACKET);
			this.state = 650;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 649;
				this.tokenOrGroupSpec();
				}
				}
				this.state = 652;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===12 || _la===22 || _la===76 || _la===118);
			this.state = 654;
			this.match(asn1Parser.R_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public requiredToken(): RequiredTokenContext {
		let localctx: RequiredTokenContext = new RequiredTokenContext(this, this._ctx, this.state);
		this.enterRule(localctx, 94, asn1Parser.RULE_requiredToken);
		try {
			this.state = 658;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 22:
			case 118:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 656;
				this.literal();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 657;
				this.primitiveFieldName();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let localctx: LiteralContext = new LiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 96, asn1Parser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 660;
			_la = this._input.LA(1);
			if(!(_la===22 || _la===118)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public primitiveFieldName(): PrimitiveFieldNameContext {
		let localctx: PrimitiveFieldNameContext = new PrimitiveFieldNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 98, asn1Parser.RULE_primitiveFieldName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 662;
			this.match(asn1Parser.AMPERSAND);
			this.state = 663;
			this.match(asn1Parser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fieldSpec(): FieldSpecContext {
		let localctx: FieldSpecContext = new FieldSpecContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, asn1Parser.RULE_fieldSpec);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 665;
			this.match(asn1Parser.AMPERSAND);
			this.state = 666;
			this.match(asn1Parser.IDENTIFIER);
			this.state = 700;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				{
				this.state = 668;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===49 || _la===50) {
					{
					this.state = 667;
					this.typeOptionalitySpec();
					}
				}

				}
				break;
			case 2:
				{
				this.state = 670;
				this.asnType();
				this.state = 680;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 64, this._ctx) ) {
				case 1:
					{
					this.state = 672;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===49 || _la===50) {
						{
						this.state = 671;
						this.valueSetOptionalitySpec();
						}
					}

					}
					break;
				case 2:
					{
					this.state = 675;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===74) {
						{
						this.state = 674;
						this.match(asn1Parser.UNIQUE_LITERAL);
						}
					}

					this.state = 678;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===49 || _la===50) {
						{
						this.state = 677;
						this.valueOptionalitySpec();
						}
					}

					}
					break;
				}
				}
				break;
			case 3:
				{
				this.state = 682;
				this.fieldName();
				this.state = 689;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 49:
					{
					this.state = 683;
					this.match(asn1Parser.OPTIONAL_LITERAL);
					}
					break;
				case 50:
					{
					{
					this.state = 684;
					this.match(asn1Parser.DEFAULT_LITERAL);
					this.state = 687;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 65, this._ctx) ) {
					case 1:
						{
						this.state = 685;
						this.valueSet();
						}
						break;
					case 2:
						{
						this.state = 686;
						this.value();
						}
						break;
					}
					}
					}
					break;
				case 21:
				case 22:
					break;
				default:
					break;
				}
				}
				break;
			case 4:
				{
				this.state = 691;
				this.definedObjectClass();
				this.state = 698;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 49:
					{
					this.state = 692;
					this.match(asn1Parser.OPTIONAL_LITERAL);
					}
					break;
				case 50:
					{
					{
					this.state = 693;
					this.match(asn1Parser.DEFAULT_LITERAL);
					this.state = 696;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 20:
						{
						this.state = 694;
						this.objectSet();
						}
						break;
					case 118:
						{
						this.state = 695;
						this.object();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
					break;
				case 21:
				case 22:
					break;
				default:
					break;
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeFieldSpec(): TypeFieldSpecContext {
		let localctx: TypeFieldSpecContext = new TypeFieldSpecContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, asn1Parser.RULE_typeFieldSpec);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 702;
			this.match(asn1Parser.AMPERSAND);
			this.state = 703;
			this.match(asn1Parser.IDENTIFIER);
			this.state = 705;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===49 || _la===50) {
				{
				this.state = 704;
				this.typeOptionalitySpec();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeOptionalitySpec(): TypeOptionalitySpecContext {
		let localctx: TypeOptionalitySpecContext = new TypeOptionalitySpecContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, asn1Parser.RULE_typeOptionalitySpec);
		try {
			this.state = 710;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 49:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 707;
				this.match(asn1Parser.OPTIONAL_LITERAL);
				}
				break;
			case 50:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 708;
				this.match(asn1Parser.DEFAULT_LITERAL);
				this.state = 709;
				this.asnType();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fixedTypeValueFieldSpec(): FixedTypeValueFieldSpecContext {
		let localctx: FixedTypeValueFieldSpecContext = new FixedTypeValueFieldSpecContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, asn1Parser.RULE_fixedTypeValueFieldSpec);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 712;
			this.match(asn1Parser.AMPERSAND);
			this.state = 713;
			this.match(asn1Parser.IDENTIFIER);
			this.state = 714;
			this.asnType();
			this.state = 716;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===74) {
				{
				this.state = 715;
				this.match(asn1Parser.UNIQUE_LITERAL);
				}
			}

			this.state = 719;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===49 || _la===50) {
				{
				this.state = 718;
				this.valueOptionalitySpec();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public valueOptionalitySpec(): ValueOptionalitySpecContext {
		let localctx: ValueOptionalitySpecContext = new ValueOptionalitySpecContext(this, this._ctx, this.state);
		this.enterRule(localctx, 108, asn1Parser.RULE_valueOptionalitySpec);
		try {
			this.state = 724;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 49:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 721;
				this.match(asn1Parser.OPTIONAL_LITERAL);
				}
				break;
			case 50:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 722;
				this.match(asn1Parser.DEFAULT_LITERAL);
				this.state = 723;
				this.value();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableTypeValueFieldSpec(): VariableTypeValueFieldSpecContext {
		let localctx: VariableTypeValueFieldSpecContext = new VariableTypeValueFieldSpecContext(this, this._ctx, this.state);
		this.enterRule(localctx, 110, asn1Parser.RULE_variableTypeValueFieldSpec);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 726;
			this.match(asn1Parser.AMPERSAND);
			this.state = 727;
			this.match(asn1Parser.IDENTIFIER);
			this.state = 728;
			this.fieldName();
			this.state = 730;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===49 || _la===50) {
				{
				this.state = 729;
				this.valueOptionalitySpec();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fixedTypeValueSetFieldSpec(): FixedTypeValueSetFieldSpecContext {
		let localctx: FixedTypeValueSetFieldSpecContext = new FixedTypeValueSetFieldSpecContext(this, this._ctx, this.state);
		this.enterRule(localctx, 112, asn1Parser.RULE_fixedTypeValueSetFieldSpec);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 732;
			this.match(asn1Parser.AMPERSAND);
			this.state = 733;
			this.match(asn1Parser.IDENTIFIER);
			this.state = 734;
			this.asnType();
			this.state = 736;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===49 || _la===50) {
				{
				this.state = 735;
				this.valueSetOptionalitySpec();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public valueSetOptionalitySpec(): ValueSetOptionalitySpecContext {
		let localctx: ValueSetOptionalitySpecContext = new ValueSetOptionalitySpecContext(this, this._ctx, this.state);
		this.enterRule(localctx, 114, asn1Parser.RULE_valueSetOptionalitySpec);
		try {
			this.state = 741;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 49:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 738;
				this.match(asn1Parser.OPTIONAL_LITERAL);
				}
				break;
			case 50:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 739;
				this.match(asn1Parser.DEFAULT_LITERAL);
				this.state = 740;
				this.valueSet();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public object(): ObjectContext {
		let localctx: ObjectContext = new ObjectContext(this, this._ctx, this.state);
		this.enterRule(localctx, 116, asn1Parser.RULE_object);
		try {
			this.state = 745;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 78, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 743;
				this.definedObject();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 744;
				this.parameterizedObject();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameterizedObject(): ParameterizedObjectContext {
		let localctx: ParameterizedObjectContext = new ParameterizedObjectContext(this, this._ctx, this.state);
		this.enterRule(localctx, 118, asn1Parser.RULE_parameterizedObject);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 747;
			this.definedObject();
			this.state = 748;
			this.actualParameterList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public definedObject(): DefinedObjectContext {
		let localctx: DefinedObjectContext = new DefinedObjectContext(this, this._ctx, this.state);
		this.enterRule(localctx, 120, asn1Parser.RULE_definedObject);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 750;
			this.match(asn1Parser.IDENTIFIER);
			this.state = 752;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===8) {
				{
				this.state = 751;
				this.match(asn1Parser.DOT);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public objectSet(): ObjectSetContext {
		let localctx: ObjectSetContext = new ObjectSetContext(this, this._ctx, this.state);
		this.enterRule(localctx, 122, asn1Parser.RULE_objectSet);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 754;
			this.match(asn1Parser.L_BRACE);
			this.state = 755;
			this.objectSetSpec();
			this.state = 756;
			this.match(asn1Parser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public objectSetSpec(): ObjectSetSpecContext {
		let localctx: ObjectSetSpecContext = new ObjectSetSpecContext(this, this._ctx, this.state);
		this.enterRule(localctx, 124, asn1Parser.RULE_objectSetSpec);
		let _la: number;
		try {
			this.state = 772;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 6:
			case 7:
			case 17:
			case 18:
			case 20:
			case 25:
			case 55:
			case 62:
			case 64:
			case 70:
			case 112:
			case 115:
			case 117:
			case 118:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 758;
				this.rootElementSetSpec();
				this.state = 765;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===22) {
					{
					this.state = 759;
					this.match(asn1Parser.COMMA);
					this.state = 760;
					this.match(asn1Parser.ELLIPSIS);
					this.state = 763;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===22) {
						{
						this.state = 761;
						this.match(asn1Parser.COMMA);
						this.state = 762;
						this.additionalElementSetSpec();
						}
					}

					}
				}

				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 767;
				this.match(asn1Parser.ELLIPSIS);
				this.state = 770;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===22) {
					{
					this.state = 768;
					this.match(asn1Parser.COMMA);
					this.state = 769;
					this.additionalElementSetSpec();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fieldName(): FieldNameContext {
		let localctx: FieldNameContext = new FieldNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 126, asn1Parser.RULE_fieldName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 774;
			this.match(asn1Parser.AMPERSAND);
			this.state = 775;
			this.match(asn1Parser.IDENTIFIER);
			}
			this.state = 782;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===8) {
				{
				{
				this.state = 777;
				this.match(asn1Parser.DOT);
				this.state = 778;
				this.match(asn1Parser.AMPERSAND);
				this.state = 779;
				this.match(asn1Parser.IDENTIFIER);
				}
				}
				this.state = 784;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public valueSet(): ValueSetContext {
		let localctx: ValueSetContext = new ValueSetContext(this, this._ctx, this.state);
		this.enterRule(localctx, 128, asn1Parser.RULE_valueSet);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 785;
			this.match(asn1Parser.L_BRACE);
			this.state = 786;
			this.elementSetSpecs();
			this.state = 787;
			this.match(asn1Parser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public elementSetSpecs(): ElementSetSpecsContext {
		let localctx: ElementSetSpecsContext = new ElementSetSpecsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 130, asn1Parser.RULE_elementSetSpecs);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 789;
			this.rootElementSetSpec();
			this.state = 796;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===22) {
				{
				this.state = 790;
				this.match(asn1Parser.COMMA);
				this.state = 791;
				this.match(asn1Parser.ELLIPSIS);
				this.state = 794;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===22) {
					{
					this.state = 792;
					this.match(asn1Parser.COMMA);
					this.state = 793;
					this.additionalElementSetSpec();
					}
				}

				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public rootElementSetSpec(): RootElementSetSpecContext {
		let localctx: RootElementSetSpecContext = new RootElementSetSpecContext(this, this._ctx, this.state);
		this.enterRule(localctx, 132, asn1Parser.RULE_rootElementSetSpec);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 798;
			this.elementSetSpec();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public additionalElementSetSpec(): AdditionalElementSetSpecContext {
		let localctx: AdditionalElementSetSpecContext = new AdditionalElementSetSpecContext(this, this._ctx, this.state);
		this.enterRule(localctx, 134, asn1Parser.RULE_additionalElementSetSpec);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 800;
			this.elementSetSpec();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public elementSetSpec(): ElementSetSpecContext {
		let localctx: ElementSetSpecContext = new ElementSetSpecContext(this, this._ctx, this.state);
		this.enterRule(localctx, 136, asn1Parser.RULE_elementSetSpec);
		try {
			this.state = 805;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 6:
			case 7:
			case 17:
			case 18:
			case 20:
			case 25:
			case 62:
			case 64:
			case 70:
			case 112:
			case 115:
			case 117:
			case 118:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 802;
				this.unions();
				}
				break;
			case 55:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 803;
				this.match(asn1Parser.ALL_LITERAL);
				this.state = 804;
				this.exclusions();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unions(): UnionsContext {
		let localctx: UnionsContext = new UnionsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 138, asn1Parser.RULE_unions);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 807;
			this.intersections();
			}
			this.state = 813;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===58 || _la===59) {
				{
				{
				this.state = 808;
				this.unionMark();
				this.state = 809;
				this.intersections();
				}
				}
				this.state = 815;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public exclusions(): ExclusionsContext {
		let localctx: ExclusionsContext = new ExclusionsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 140, asn1Parser.RULE_exclusions);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 816;
			this.match(asn1Parser.EXCEPT_LITERAL);
			this.state = 817;
			this.elements();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public intersections(): IntersectionsContext {
		let localctx: IntersectionsContext = new IntersectionsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 142, asn1Parser.RULE_intersections);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 819;
			this.intersectionElements();
			}
			this.state = 825;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===57 || _la===60) {
				{
				{
				this.state = 820;
				this.intersectionMark();
				this.state = 821;
				this.intersectionElements();
				}
				}
				this.state = 827;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unionMark(): UnionMarkContext {
		let localctx: UnionMarkContext = new UnionMarkContext(this, this._ctx, this.state);
		this.enterRule(localctx, 144, asn1Parser.RULE_unionMark);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 828;
			_la = this._input.LA(1);
			if(!(_la===58 || _la===59)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public intersectionMark(): IntersectionMarkContext {
		let localctx: IntersectionMarkContext = new IntersectionMarkContext(this, this._ctx, this.state);
		this.enterRule(localctx, 146, asn1Parser.RULE_intersectionMark);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 830;
			_la = this._input.LA(1);
			if(!(_la===57 || _la===60)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public elements(): ElementsContext {
		let localctx: ElementsContext = new ElementsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 148, asn1Parser.RULE_elements);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 832;
			this.subtypeElements();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public objectSetElements(): ObjectSetElementsContext {
		let localctx: ObjectSetElementsContext = new ObjectSetElementsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 150, asn1Parser.RULE_objectSetElements);
		try {
			this.state = 836;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 90, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 834;
				this.object();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 835;
				this.definedObject();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public intersectionElements(): IntersectionElementsContext {
		let localctx: IntersectionElementsContext = new IntersectionElementsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 152, asn1Parser.RULE_intersectionElements);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 838;
			this.elements();
			this.state = 840;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===56) {
				{
				this.state = 839;
				this.exclusions();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public subtypeElements(): SubtypeElementsContext {
		let localctx: SubtypeElementsContext = new SubtypeElementsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 154, asn1Parser.RULE_subtypeElements);
		let _la: number;
		try {
			this.state = 861;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 96, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 844;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 6:
				case 7:
				case 17:
				case 18:
				case 20:
				case 25:
				case 112:
				case 115:
				case 117:
				case 118:
					{
					this.state = 842;
					this.value();
					}
					break;
				case 62:
					{
					this.state = 843;
					this.match(asn1Parser.MIN_LITERAL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 847;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===13) {
					{
					this.state = 846;
					this.match(asn1Parser.LESS_THAN);
					}
				}

				this.state = 849;
				this.match(asn1Parser.DOUBLE_DOT);
				this.state = 851;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===13) {
					{
					this.state = 850;
					this.match(asn1Parser.LESS_THAN);
					}
				}

				this.state = 855;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 6:
				case 7:
				case 17:
				case 18:
				case 20:
				case 25:
				case 112:
				case 115:
				case 117:
				case 118:
					{
					this.state = 853;
					this.value();
					}
					break;
				case 63:
					{
					this.state = 854;
					this.match(asn1Parser.MAX_LITERAL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 857;
				this.sizeConstraint();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				{
				this.state = 858;
				this.match(asn1Parser.PATTERN_LITERAL);
				this.state = 859;
				this.value();
				}
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 860;
				this.value();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableTypeValueSetFieldSpec(): VariableTypeValueSetFieldSpecContext {
		let localctx: VariableTypeValueSetFieldSpecContext = new VariableTypeValueSetFieldSpecContext(this, this._ctx, this.state);
		this.enterRule(localctx, 156, asn1Parser.RULE_variableTypeValueSetFieldSpec);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 863;
			this.match(asn1Parser.AMPERSAND);
			this.state = 864;
			this.match(asn1Parser.IDENTIFIER);
			this.state = 865;
			this.fieldName();
			this.state = 867;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===49 || _la===50) {
				{
				this.state = 866;
				this.valueSetOptionalitySpec();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public objectFieldSpec(): ObjectFieldSpecContext {
		let localctx: ObjectFieldSpecContext = new ObjectFieldSpecContext(this, this._ctx, this.state);
		this.enterRule(localctx, 158, asn1Parser.RULE_objectFieldSpec);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 869;
			this.match(asn1Parser.AMPERSAND);
			this.state = 870;
			this.match(asn1Parser.IDENTIFIER);
			this.state = 871;
			this.definedObjectClass();
			this.state = 873;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===49 || _la===50) {
				{
				this.state = 872;
				this.objectOptionalitySpec();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public objectOptionalitySpec(): ObjectOptionalitySpecContext {
		let localctx: ObjectOptionalitySpecContext = new ObjectOptionalitySpecContext(this, this._ctx, this.state);
		this.enterRule(localctx, 160, asn1Parser.RULE_objectOptionalitySpec);
		try {
			this.state = 878;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 49:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 875;
				this.match(asn1Parser.OPTIONAL_LITERAL);
				}
				break;
			case 50:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 876;
				this.match(asn1Parser.DEFAULT_LITERAL);
				this.state = 877;
				this.object();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public objectSetFieldSpec(): ObjectSetFieldSpecContext {
		let localctx: ObjectSetFieldSpecContext = new ObjectSetFieldSpecContext(this, this._ctx, this.state);
		this.enterRule(localctx, 162, asn1Parser.RULE_objectSetFieldSpec);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 880;
			this.match(asn1Parser.AMPERSAND);
			this.state = 881;
			this.match(asn1Parser.IDENTIFIER);
			this.state = 882;
			this.definedObjectClass();
			this.state = 884;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===49 || _la===50) {
				{
				this.state = 883;
				this.objectSetOptionalitySpec();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public objectSetOptionalitySpec(): ObjectSetOptionalitySpecContext {
		let localctx: ObjectSetOptionalitySpecContext = new ObjectSetOptionalitySpecContext(this, this._ctx, this.state);
		this.enterRule(localctx, 164, asn1Parser.RULE_objectSetOptionalitySpec);
		try {
			this.state = 889;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 49:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 886;
				this.match(asn1Parser.OPTIONAL_LITERAL);
				}
				break;
			case 50:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 887;
				this.match(asn1Parser.DEFAULT_LITERAL);
				this.state = 888;
				this.objectSet();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeAssignment(): TypeAssignmentContext {
		let localctx: TypeAssignmentContext = new TypeAssignmentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 166, asn1Parser.RULE_typeAssignment);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 891;
			this.match(asn1Parser.ASSIGN_OP);
			this.state = 892;
			this.asnType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public valueAssignment(): ValueAssignmentContext {
		let localctx: ValueAssignmentContext = new ValueAssignmentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 168, asn1Parser.RULE_valueAssignment);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 894;
			this.asnType();
			this.state = 895;
			this.match(asn1Parser.ASSIGN_OP);
			this.state = 896;
			this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public asnType(): AsnTypeContext {
		let localctx: AsnTypeContext = new AsnTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 170, asn1Parser.RULE_asnType);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 900;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 102, this._ctx) ) {
			case 1:
				{
				this.state = 898;
				this.builtinType();
				}
				break;
			case 2:
				{
				this.state = 899;
				this.referencedType();
				}
				break;
			}
			this.state = 905;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 103, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 902;
					this.constraint();
					}
					}
				}
				this.state = 907;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 103, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public builtinType(): BuiltinTypeContext {
		let localctx: BuiltinTypeContext = new BuiltinTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 172, asn1Parser.RULE_builtinType);
		try {
			this.state = 922;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 104, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 908;
				this.octetStringType();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 909;
				this.bitStringType();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 910;
				this.characterStringType();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 911;
				this.choiceType();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 912;
				this.enumeratedType();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 913;
				this.integerType();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 914;
				this.sequenceType();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 915;
				this.sequenceOfType();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 916;
				this.setType();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 917;
				this.setOfType();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 918;
				this.objectIdentifierType();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 919;
				this.objectClassFieldType();
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 920;
				this.match(asn1Parser.BOOLEAN_LITERAL);
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 921;
				this.match(asn1Parser.NULL_LITERAL);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public characterStringType(): CharacterStringTypeContext {
		let localctx: CharacterStringTypeContext = new CharacterStringTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 174, asn1Parser.RULE_characterStringType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 924;
			this.restrictedCharacterStringType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public restrictedCharacterStringType(): RestrictedCharacterStringTypeContext {
		let localctx: RestrictedCharacterStringTypeContext = new RestrictedCharacterStringTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 176, asn1Parser.RULE_restrictedCharacterStringType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 926;
			_la = this._input.LA(1);
			if(!(((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & 8189) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public objectClassFieldType(): ObjectClassFieldTypeContext {
		let localctx: ObjectClassFieldTypeContext = new ObjectClassFieldTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 178, asn1Parser.RULE_objectClassFieldType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 928;
			this.definedObjectClass();
			this.state = 929;
			this.match(asn1Parser.DOT);
			this.state = 930;
			this.fieldName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public setType(): SetTypeContext {
		let localctx: SetTypeContext = new SetTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 180, asn1Parser.RULE_setType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 932;
			this.match(asn1Parser.SET_LITERAL);
			this.state = 933;
			this.match(asn1Parser.L_BRACE);
			this.state = 938;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 105, this._ctx) ) {
			case 1:
				{
				this.state = 934;
				this.extensionAndException();
				this.state = 935;
				this.optionalExtensionMarker();
				}
				break;
			case 2:
				{
				this.state = 937;
				this.componentTypeLists();
				}
				break;
			}
			this.state = 940;
			this.match(asn1Parser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public setOfType(): SetOfTypeContext {
		let localctx: SetOfTypeContext = new SetOfTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 182, asn1Parser.RULE_setOfType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 942;
			this.match(asn1Parser.SET_LITERAL);
			this.state = 945;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 23:
				{
				this.state = 943;
				this.constraint();
				}
				break;
			case 64:
				{
				this.state = 944;
				this.sizeConstraint();
				}
				break;
			case 52:
				break;
			default:
				break;
			}
			this.state = 947;
			this.match(asn1Parser.OF_LITERAL);
			this.state = 950;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 107, this._ctx) ) {
			case 1:
				{
				this.state = 948;
				this.asnType();
				}
				break;
			case 2:
				{
				this.state = 949;
				this.namedType();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public referencedType(): ReferencedTypeContext {
		let localctx: ReferencedTypeContext = new ReferencedTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 184, asn1Parser.RULE_referencedType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 952;
			this.definedType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public definedType(): DefinedTypeContext {
		let localctx: DefinedTypeContext = new DefinedTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 186, asn1Parser.RULE_definedType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 954;
			this.match(asn1Parser.IDENTIFIER);
			this.state = 957;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===8) {
				{
				this.state = 955;
				this.match(asn1Parser.DOT);
				this.state = 956;
				this.match(asn1Parser.IDENTIFIER);
				}
			}

			this.state = 960;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 109, this._ctx) ) {
			case 1:
				{
				this.state = 959;
				this.actualParameterList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constraint(): ConstraintContext {
		let localctx: ConstraintContext = new ConstraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 188, asn1Parser.RULE_constraint);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 962;
			this.match(asn1Parser.L_PARAN);
			this.state = 963;
			this.constraintSpec();
			this.state = 965;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===54) {
				{
				this.state = 964;
				this.exceptionSpec();
				}
			}

			this.state = 967;
			this.match(asn1Parser.R_PARAN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constraintSpec(): ConstraintSpecContext {
		let localctx: ConstraintSpecContext = new ConstraintSpecContext(this, this._ctx, this.state);
		this.enterRule(localctx, 190, asn1Parser.RULE_constraintSpec);
		try {
			this.state = 971;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 111, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 969;
				this.generalConstraint();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 970;
				this.subtypeConstraint();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public userDefinedConstraint(): UserDefinedConstraintContext {
		let localctx: UserDefinedConstraintContext = new UserDefinedConstraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 192, asn1Parser.RULE_userDefinedConstraint);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 973;
			this.match(asn1Parser.CONSTRAINED_LITERAL);
			this.state = 974;
			this.match(asn1Parser.BY_LITERAL);
			this.state = 975;
			this.match(asn1Parser.L_BRACE);
			this.state = 976;
			this.userDefinedConstraintParameter();
			this.state = 981;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===22) {
				{
				{
				this.state = 977;
				this.match(asn1Parser.COMMA);
				this.state = 978;
				this.userDefinedConstraintParameter();
				}
				}
				this.state = 983;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 984;
			this.match(asn1Parser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public generalConstraint(): GeneralConstraintContext {
		let localctx: GeneralConstraintContext = new GeneralConstraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 194, asn1Parser.RULE_generalConstraint);
		try {
			this.state = 989;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 105:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 986;
				this.userDefinedConstraint();
				}
				break;
			case 20:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 987;
				this.tableConstraint();
				}
				break;
			case 45:
			case 66:
			case 108:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 988;
				this.contentsConstraint();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public userDefinedConstraintParameter(): UserDefinedConstraintParameterContext {
		let localctx: UserDefinedConstraintParameterContext = new UserDefinedConstraintParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 196, asn1Parser.RULE_userDefinedConstraintParameter);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 991;
			this.governor();
			this.state = 997;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 114, this._ctx) ) {
			case 1:
				{
				this.state = 992;
				this.match(asn1Parser.COLON);
				this.state = 993;
				this.value();
				}
				break;
			case 2:
				{
				this.state = 994;
				this.valueSet();
				}
				break;
			case 3:
				{
				this.state = 995;
				this.object();
				}
				break;
			case 4:
				{
				this.state = 996;
				this.objectSet();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tableConstraint(): TableConstraintContext {
		let localctx: TableConstraintContext = new TableConstraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 198, asn1Parser.RULE_tableConstraint);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 999;
			this.componentRelationConstraint();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public simpleTableConstraint(): SimpleTableConstraintContext {
		let localctx: SimpleTableConstraintContext = new SimpleTableConstraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 200, asn1Parser.RULE_simpleTableConstraint);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1001;
			this.objectSet();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public contentsConstraint(): ContentsConstraintContext {
		let localctx: ContentsConstraintContext = new ContentsConstraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 202, asn1Parser.RULE_contentsConstraint);
		try {
			this.state = 1020;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 115, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1003;
				this.match(asn1Parser.CONTAINING_LITERAL);
				this.state = 1004;
				this.asnType();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1005;
				this.match(asn1Parser.ENCODED_LITERAL);
				this.state = 1006;
				this.match(asn1Parser.BY_LITERAL);
				this.state = 1007;
				this.value();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1008;
				this.match(asn1Parser.CONTAINING_LITERAL);
				this.state = 1009;
				this.asnType();
				this.state = 1010;
				this.match(asn1Parser.ENCODED_LITERAL);
				this.state = 1011;
				this.match(asn1Parser.BY_LITERAL);
				this.state = 1012;
				this.value();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1014;
				this.match(asn1Parser.WITH_LITERAL);
				this.state = 1015;
				this.match(asn1Parser.COMPONENTS_LITERAL);
				this.state = 1016;
				this.match(asn1Parser.L_BRACE);
				this.state = 1017;
				this.componentPresenceLists();
				this.state = 1018;
				this.match(asn1Parser.R_BRACE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public componentPresenceLists(): ComponentPresenceListsContext {
		let localctx: ComponentPresenceListsContext = new ComponentPresenceListsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 204, asn1Parser.RULE_componentPresenceLists);
		let _la: number;
		try {
			this.state = 1038;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 21:
			case 22:
			case 118:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1023;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===118) {
					{
					this.state = 1022;
					this.componentPresenceList();
					}
				}

				this.state = 1031;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===22) {
					{
					this.state = 1025;
					this.match(asn1Parser.COMMA);
					this.state = 1026;
					this.match(asn1Parser.ELLIPSIS);
					this.state = 1029;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===22) {
						{
						this.state = 1027;
						this.match(asn1Parser.COMMA);
						this.state = 1028;
						this.componentPresenceList();
						}
					}

					}
				}

				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1033;
				this.match(asn1Parser.ELLIPSIS);
				this.state = 1036;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===22) {
					{
					this.state = 1034;
					this.match(asn1Parser.COMMA);
					this.state = 1035;
					this.componentPresenceList();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public componentPresenceList(): ComponentPresenceListContext {
		let localctx: ComponentPresenceListContext = new ComponentPresenceListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 206, asn1Parser.RULE_componentPresenceList);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 1040;
			this.componentPresence();
			}
			this.state = 1045;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 121, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1041;
					this.match(asn1Parser.COMMA);
					this.state = 1042;
					this.componentPresence();
					}
					}
				}
				this.state = 1047;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 121, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public componentPresence(): ComponentPresenceContext {
		let localctx: ComponentPresenceContext = new ComponentPresenceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 208, asn1Parser.RULE_componentPresence);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1048;
			this.match(asn1Parser.IDENTIFIER);
			this.state = 1049;
			_la = this._input.LA(1);
			if(!(_la===68 || _la===69)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public subtypeConstraint(): SubtypeConstraintContext {
		let localctx: SubtypeConstraintContext = new SubtypeConstraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 210, asn1Parser.RULE_subtypeConstraint);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1051;
			this.elementSetSpecs();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let localctx: ValueContext = new ValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 212, asn1Parser.RULE_value);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1053;
			this.builtinValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public builtinValue(): BuiltinValueContext {
		let localctx: BuiltinValueContext = new BuiltinValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 214, asn1Parser.RULE_builtinValue);
		try {
			this.state = 1062;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 122, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1055;
				this.enumeratedValue();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1056;
				this.integerValue();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1057;
				this.choiceValue();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1058;
				this.objectIdentifierValue();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1059;
				this.booleanValue();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1060;
				this.match(asn1Parser.CSTRING);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1061;
				this.match(asn1Parser.BSTRING);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public objectIdentifierValue(): ObjectIdentifierValueContext {
		let localctx: ObjectIdentifierValueContext = new ObjectIdentifierValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 216, asn1Parser.RULE_objectIdentifierValue);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1064;
			this.match(asn1Parser.L_BRACE);
			this.state = 1065;
			this.objIdComponentsList();
			this.state = 1066;
			this.match(asn1Parser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public objIdComponentsList(): ObjIdComponentsListContext {
		let localctx: ObjIdComponentsListContext = new ObjIdComponentsListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 218, asn1Parser.RULE_objIdComponentsList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 1068;
			this.objIdComponents();
			}
			this.state = 1072;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4094165024) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2214143) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 1082130435) !== 0) || _la===112 || _la===118) {
				{
				{
				this.state = 1069;
				this.objIdComponents();
				}
				}
				this.state = 1074;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public objIdComponents(): ObjIdComponentsContext {
		let localctx: ObjIdComponentsContext = new ObjIdComponentsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 220, asn1Parser.RULE_objIdComponents);
		let _la: number;
		try {
			this.state = 1090;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 127, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1075;
				this.match(asn1Parser.NUMBER);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1076;
				this.match(asn1Parser.IDENTIFIER);
				this.state = 1083;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===23) {
					{
					this.state = 1077;
					this.match(asn1Parser.L_PARAN);
					this.state = 1080;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 112:
						{
						this.state = 1078;
						this.match(asn1Parser.NUMBER);
						}
						break;
					case 118:
						{
						this.state = 1079;
						this.definedValue();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1082;
					this.match(asn1Parser.R_PARAN);
					}
				}

				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1085;
				this.definedValue();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1086;
				this.builtinType();
				this.state = 1088;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===23) {
					{
					this.state = 1087;
					this.constraint();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public integerValue(): IntegerValueContext {
		let localctx: IntegerValueContext = new IntegerValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 222, asn1Parser.RULE_integerValue);
		try {
			this.state = 1094;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 25:
			case 112:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1092;
				this.signedNumber();
				}
				break;
			case 118:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1093;
				this.match(asn1Parser.IDENTIFIER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public choiceValue(): ChoiceValueContext {
		let localctx: ChoiceValueContext = new ChoiceValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 224, asn1Parser.RULE_choiceValue);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1096;
			this.match(asn1Parser.IDENTIFIER);
			this.state = 1097;
			this.match(asn1Parser.COLON);
			this.state = 1098;
			this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumeratedValue(): EnumeratedValueContext {
		let localctx: EnumeratedValueContext = new EnumeratedValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 226, asn1Parser.RULE_enumeratedValue);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1100;
			this.match(asn1Parser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public signedNumber(): SignedNumberContext {
		let localctx: SignedNumberContext = new SignedNumberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 228, asn1Parser.RULE_signedNumber);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1103;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===25) {
				{
				this.state = 1102;
				this.match(asn1Parser.MINUS);
				}
			}

			this.state = 1105;
			this.match(asn1Parser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public choiceType(): ChoiceTypeContext {
		let localctx: ChoiceTypeContext = new ChoiceTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 230, asn1Parser.RULE_choiceType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1107;
			this.match(asn1Parser.CHOICE_LITERAL);
			this.state = 1108;
			this.match(asn1Parser.L_BRACE);
			this.state = 1109;
			this.alternativeTypeLists();
			this.state = 1110;
			this.match(asn1Parser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public alternativeTypeLists(): AlternativeTypeListsContext {
		let localctx: AlternativeTypeListsContext = new AlternativeTypeListsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 232, asn1Parser.RULE_alternativeTypeLists);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1112;
			this.rootAlternativeTypeList();
			this.state = 1118;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===22) {
				{
				this.state = 1113;
				this.match(asn1Parser.COMMA);
				this.state = 1114;
				this.extensionAndException();
				this.state = 1115;
				this.extensionAdditionAlternatives();
				this.state = 1116;
				this.optionalExtensionMarker();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public extensionAdditionAlternatives(): ExtensionAdditionAlternativesContext {
		let localctx: ExtensionAdditionAlternativesContext = new ExtensionAdditionAlternativesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 234, asn1Parser.RULE_extensionAdditionAlternatives);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1122;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 131, this._ctx) ) {
			case 1:
				{
				this.state = 1120;
				this.match(asn1Parser.COMMA);
				this.state = 1121;
				this.extensionAdditionAlternativesList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public extensionAdditionAlternativesList(): ExtensionAdditionAlternativesListContext {
		let localctx: ExtensionAdditionAlternativesListContext = new ExtensionAdditionAlternativesListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 236, asn1Parser.RULE_extensionAdditionAlternativesList);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 1124;
			this.extensionAdditionAlternative();
			}
			this.state = 1129;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 132, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1125;
					this.match(asn1Parser.COMMA);
					this.state = 1126;
					this.extensionAdditionAlternative();
					}
					}
				}
				this.state = 1131;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 132, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public extensionAdditionAlternative(): ExtensionAdditionAlternativeContext {
		let localctx: ExtensionAdditionAlternativeContext = new ExtensionAdditionAlternativeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 238, asn1Parser.RULE_extensionAdditionAlternative);
		try {
			this.state = 1134;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 91:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1132;
				this.extensionAdditionAlternativesGroup();
				}
				break;
			case 118:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1133;
				this.namedType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public extensionAdditionAlternativesGroup(): ExtensionAdditionAlternativesGroupContext {
		let localctx: ExtensionAdditionAlternativesGroupContext = new ExtensionAdditionAlternativesGroupContext(this, this._ctx, this.state);
		this.enterRule(localctx, 240, asn1Parser.RULE_extensionAdditionAlternativesGroup);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1136;
			this.match(asn1Parser.DOUBLE_L_BRACKET);
			this.state = 1137;
			this.versionNumber();
			this.state = 1138;
			this.alternativeTypeList();
			this.state = 1139;
			this.match(asn1Parser.DOUBLE_R_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public rootAlternativeTypeList(): RootAlternativeTypeListContext {
		let localctx: RootAlternativeTypeListContext = new RootAlternativeTypeListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 242, asn1Parser.RULE_rootAlternativeTypeList);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1141;
			this.alternativeTypeList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public alternativeTypeList(): AlternativeTypeListContext {
		let localctx: AlternativeTypeListContext = new AlternativeTypeListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 244, asn1Parser.RULE_alternativeTypeList);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 1143;
			this.namedType();
			}
			this.state = 1148;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 134, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1144;
					this.match(asn1Parser.COMMA);
					this.state = 1145;
					this.namedType();
					}
					}
				}
				this.state = 1150;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 134, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public namedType(): NamedTypeContext {
		let localctx: NamedTypeContext = new NamedTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 246, asn1Parser.RULE_namedType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1151;
			this.match(asn1Parser.IDENTIFIER);
			this.state = 1152;
			this.asnType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumeratedType(): EnumeratedTypeContext {
		let localctx: EnumeratedTypeContext = new EnumeratedTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 248, asn1Parser.RULE_enumeratedType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1154;
			this.match(asn1Parser.ENUMERATED_LITERAL);
			this.state = 1155;
			this.match(asn1Parser.L_BRACE);
			this.state = 1156;
			this.enumerations();
			this.state = 1157;
			this.match(asn1Parser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumerations(): EnumerationsContext {
		let localctx: EnumerationsContext = new EnumerationsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 250, asn1Parser.RULE_enumerations);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1159;
			this.rootEnumeration();
			this.state = 1169;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===22) {
				{
				this.state = 1160;
				this.match(asn1Parser.COMMA);
				this.state = 1161;
				this.match(asn1Parser.ELLIPSIS);
				this.state = 1163;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===54) {
					{
					this.state = 1162;
					this.exceptionSpec();
					}
				}

				this.state = 1167;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===22) {
					{
					this.state = 1165;
					this.match(asn1Parser.COMMA);
					this.state = 1166;
					this.additionalEnumeration();
					}
				}

				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public rootEnumeration(): RootEnumerationContext {
		let localctx: RootEnumerationContext = new RootEnumerationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 252, asn1Parser.RULE_rootEnumeration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1171;
			this.enumeration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumeration(): EnumerationContext {
		let localctx: EnumerationContext = new EnumerationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 254, asn1Parser.RULE_enumeration);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1173;
			this.enumerationItem();
			this.state = 1178;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 138, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1174;
					this.match(asn1Parser.COMMA);
					this.state = 1175;
					this.enumerationItem();
					}
					}
				}
				this.state = 1180;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 138, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumerationItem(): EnumerationItemContext {
		let localctx: EnumerationItemContext = new EnumerationItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 256, asn1Parser.RULE_enumerationItem);
		try {
			this.state = 1184;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 139, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1181;
				this.match(asn1Parser.IDENTIFIER);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1182;
				this.namedNumber();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1183;
				this.value();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public namedNumber(): NamedNumberContext {
		let localctx: NamedNumberContext = new NamedNumberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 258, asn1Parser.RULE_namedNumber);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1186;
			this.match(asn1Parser.IDENTIFIER);
			this.state = 1187;
			this.match(asn1Parser.L_PARAN);
			this.state = 1190;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 25:
			case 112:
				{
				this.state = 1188;
				this.signedNumber();
				}
				break;
			case 118:
				{
				this.state = 1189;
				this.definedValue();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1192;
			this.match(asn1Parser.R_PARAN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public definedValue(): DefinedValueContext {
		let localctx: DefinedValueContext = new DefinedValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 260, asn1Parser.RULE_definedValue);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1194;
			this.parameterizedValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameterizedValue(): ParameterizedValueContext {
		let localctx: ParameterizedValueContext = new ParameterizedValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 262, asn1Parser.RULE_parameterizedValue);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1196;
			this.simpleDefinedValue();
			this.state = 1198;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===20) {
				{
				this.state = 1197;
				this.actualParameterList();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public simpleDefinedValue(): SimpleDefinedValueContext {
		let localctx: SimpleDefinedValueContext = new SimpleDefinedValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 264, asn1Parser.RULE_simpleDefinedValue);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1200;
			this.match(asn1Parser.IDENTIFIER);
			this.state = 1203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===8) {
				{
				this.state = 1201;
				this.match(asn1Parser.DOT);
				this.state = 1202;
				this.match(asn1Parser.IDENTIFIER);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public actualParameterList(): ActualParameterListContext {
		let localctx: ActualParameterListContext = new ActualParameterListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 266, asn1Parser.RULE_actualParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1205;
			this.match(asn1Parser.L_BRACE);
			this.state = 1206;
			this.actualParameter();
			this.state = 1211;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===22) {
				{
				{
				this.state = 1207;
				this.match(asn1Parser.COMMA);
				this.state = 1208;
				this.actualParameter();
				}
				}
				this.state = 1213;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1214;
			this.match(asn1Parser.R_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public actualParameter(): ActualParameterContext {
		let localctx: ActualParameterContext = new ActualParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 268, asn1Parser.RULE_actualParameter);
		try {
			this.state = 1218;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 144, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1216;
				this.asnType();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1217;
				this.value();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public exceptionSpec(): ExceptionSpecContext {
		let localctx: ExceptionSpecContext = new ExceptionSpecContext(this, this._ctx, this.state);
		this.enterRule(localctx, 270, asn1Parser.RULE_exceptionSpec);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1220;
			this.match(asn1Parser.EXCLAM);
			this.state = 1221;
			this.exceptionIdentification();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public exceptionIdentification(): ExceptionIdentificationContext {
		let localctx: ExceptionIdentificationContext = new ExceptionIdentificationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 272, asn1Parser.RULE_exceptionIdentification);
		try {
			this.state = 1229;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 145, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1223;
				this.signedNumber();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1224;
				this.definedValue();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1225;
				this.asnType();
				this.state = 1226;
				this.match(asn1Parser.COLON);
				this.state = 1227;
				this.value();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public additionalEnumeration(): AdditionalEnumerationContext {
		let localctx: AdditionalEnumerationContext = new AdditionalEnumerationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 274, asn1Parser.RULE_additionalEnumeration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1231;
			this.enumeration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public integerType(): IntegerTypeContext {
		let localctx: IntegerTypeContext = new IntegerTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 276, asn1Parser.RULE_integerType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1233;
			this.match(asn1Parser.INTEGER_LITERAL);
			this.state = 1238;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 146, this._ctx) ) {
			case 1:
				{
				this.state = 1234;
				this.match(asn1Parser.L_BRACE);
				this.state = 1235;
				this.namedNumberList();
				this.state = 1236;
				this.match(asn1Parser.R_BRACE);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public namedNumberList(): NamedNumberListContext {
		let localctx: NamedNumberListContext = new NamedNumberListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 278, asn1Parser.RULE_namedNumberList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 1240;
			this.namedNumber();
			}
			this.state = 1245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===22) {
				{
				{
				this.state = 1241;
				this.match(asn1Parser.COMMA);
				this.state = 1242;
				this.namedNumber();
				}
				}
				this.state = 1247;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public objectIdentifierType(): ObjectIdentifierTypeContext {
		let localctx: ObjectIdentifierTypeContext = new ObjectIdentifierTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 280, asn1Parser.RULE_objectIdentifierType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1248;
			this.match(asn1Parser.OBJECT_LITERAL);
			this.state = 1249;
			this.match(asn1Parser.IDENTIFIER_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public componentRelationConstraint(): ComponentRelationConstraintContext {
		let localctx: ComponentRelationConstraintContext = new ComponentRelationConstraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 282, asn1Parser.RULE_componentRelationConstraint);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1251;
			this.match(asn1Parser.L_BRACE);
			{
			this.state = 1252;
			this.match(asn1Parser.IDENTIFIER);
			this.state = 1255;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===8) {
				{
				this.state = 1253;
				this.match(asn1Parser.DOT);
				this.state = 1254;
				this.match(asn1Parser.IDENTIFIER);
				}
			}

			}
			this.state = 1257;
			this.match(asn1Parser.R_BRACE);
			this.state = 1269;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===20) {
				{
				this.state = 1258;
				this.match(asn1Parser.L_BRACE);
				this.state = 1259;
				this.atNotation();
				this.state = 1264;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===22) {
					{
					{
					this.state = 1260;
					this.match(asn1Parser.COMMA);
					this.state = 1261;
					this.atNotation();
					}
					}
					this.state = 1266;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1267;
				this.match(asn1Parser.R_BRACE);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public atNotation(): AtNotationContext {
		let localctx: AtNotationContext = new AtNotationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 284, asn1Parser.RULE_atNotation);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1274;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 2:
				{
				this.state = 1271;
				this.match(asn1Parser.A_ROND);
				}
				break;
			case 107:
				{
				{
				this.state = 1272;
				this.match(asn1Parser.A_ROND_DOT);
				this.state = 1273;
				this.level();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1276;
			this.componentIdList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public level(): LevelContext {
		let localctx: LevelContext = new LevelContext(this, this._ctx, this.state);
		this.enterRule(localctx, 286, asn1Parser.RULE_level);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1280;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===8) {
				{
				this.state = 1278;
				this.match(asn1Parser.DOT);
				this.state = 1279;
				this.level();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public componentIdList(): ComponentIdListContext {
		let localctx: ComponentIdListContext = new ComponentIdListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 288, asn1Parser.RULE_componentIdList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1282;
			this.match(asn1Parser.IDENTIFIER);
			this.state = 1287;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===8) {
				{
				{
				this.state = 1283;
				this.match(asn1Parser.DOT);
				this.state = 1284;
				this.match(asn1Parser.IDENTIFIER);
				}
				}
				this.state = 1289;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public octetStringType(): OctetStringTypeContext {
		let localctx: OctetStringTypeContext = new OctetStringTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 290, asn1Parser.RULE_octetStringType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1290;
			this.match(asn1Parser.OCTET_LITERAL);
			this.state = 1291;
			this.match(asn1Parser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public bitStringType(): BitStringTypeContext {
		let localctx: BitStringTypeContext = new BitStringTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 292, asn1Parser.RULE_bitStringType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 1293;
			this.match(asn1Parser.BIT_LITERAL);
			this.state = 1294;
			this.match(asn1Parser.STRING_LITERAL);
			}
			this.state = 1300;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 154, this._ctx) ) {
			case 1:
				{
				this.state = 1296;
				this.match(asn1Parser.L_BRACE);
				this.state = 1297;
				this.namedBitList();
				this.state = 1298;
				this.match(asn1Parser.R_BRACE);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public namedBitList(): NamedBitListContext {
		let localctx: NamedBitListContext = new NamedBitListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 294, asn1Parser.RULE_namedBitList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 1302;
			this.namedBit();
			}
			this.state = 1307;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===22) {
				{
				{
				this.state = 1303;
				this.match(asn1Parser.COMMA);
				this.state = 1304;
				this.namedBit();
				}
				}
				this.state = 1309;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public namedBit(): NamedBitContext {
		let localctx: NamedBitContext = new NamedBitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 296, asn1Parser.RULE_namedBit);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1310;
			this.match(asn1Parser.IDENTIFIER);
			this.state = 1311;
			this.match(asn1Parser.L_PARAN);
			this.state = 1314;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 112:
				{
				this.state = 1312;
				this.match(asn1Parser.NUMBER);
				}
				break;
			case 118:
				{
				this.state = 1313;
				this.definedValue();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1316;
			this.match(asn1Parser.R_PARAN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public booleanValue(): BooleanValueContext {
		let localctx: BooleanValueContext = new BooleanValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 298, asn1Parser.RULE_booleanValue);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1318;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 393408) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,118,1321,2,0,7,0,
	2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,
	2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,
	17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,
	7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,
	31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,
	2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
	46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,
	7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,
	60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,
	2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,
	75,7,75,2,76,7,76,2,77,7,77,2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,
	7,82,2,83,7,83,2,84,7,84,2,85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,
	89,2,90,7,90,2,91,7,91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,
	2,97,7,97,2,98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,2,103,
	7,103,2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,2,109,
	7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,7,113,2,114,7,114,2,115,
	7,115,2,116,7,116,2,117,7,117,2,118,7,118,2,119,7,119,2,120,7,120,2,121,
	7,121,2,122,7,122,2,123,7,123,2,124,7,124,2,125,7,125,2,126,7,126,2,127,
	7,127,2,128,7,128,2,129,7,129,2,130,7,130,2,131,7,131,2,132,7,132,2,133,
	7,133,2,134,7,134,2,135,7,135,2,136,7,136,2,137,7,137,2,138,7,138,2,139,
	7,139,2,140,7,140,2,141,7,141,2,142,7,142,2,143,7,143,2,144,7,144,2,145,
	7,145,2,146,7,146,2,147,7,147,2,148,7,148,2,149,7,149,1,0,4,0,302,8,0,11,
	0,12,0,303,1,1,1,1,1,1,1,1,1,1,1,1,5,1,312,8,1,10,1,12,1,315,9,1,1,1,3,
	1,318,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,3,2,330,8,2,1,3,1,3,3,
	3,334,8,3,1,4,1,4,1,4,1,4,3,4,340,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,349,
	8,5,1,6,3,6,352,8,6,1,7,1,7,1,7,1,7,3,7,358,8,7,1,8,3,8,361,8,8,1,9,1,9,
	5,9,365,8,9,10,9,12,9,368,9,9,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,12,1,
	12,1,13,1,13,1,13,5,13,382,8,13,10,13,12,13,385,9,13,1,14,1,14,1,14,3,14,
	390,8,14,1,15,1,15,5,15,394,8,15,10,15,12,15,397,9,15,1,16,1,16,1,16,1,
	16,1,16,3,16,404,8,16,1,17,1,17,1,17,1,17,1,17,1,17,3,17,412,8,17,1,17,
	1,17,1,18,1,18,3,18,418,8,18,1,19,1,19,3,19,422,8,19,1,20,1,20,3,20,426,
	8,20,1,20,1,20,1,20,3,20,431,8,20,1,20,1,20,1,20,3,20,436,8,20,1,20,1,20,
	1,20,3,20,441,8,20,1,20,1,20,1,20,1,20,3,20,447,8,20,1,20,1,20,1,20,1,20,
	3,20,453,8,20,3,20,455,8,20,3,20,457,8,20,1,20,1,20,1,20,3,20,462,8,20,
	1,20,1,20,1,20,1,20,3,20,468,8,20,1,20,1,20,1,20,1,20,3,20,474,8,20,3,20,
	476,8,20,3,20,478,8,20,1,21,1,21,1,22,1,22,1,22,3,22,485,8,22,1,22,5,22,
	488,8,22,10,22,12,22,491,9,22,1,23,1,23,1,23,1,23,3,23,497,8,23,1,23,1,
	23,1,23,3,23,502,8,23,1,24,1,24,1,25,1,25,3,25,508,8,25,1,26,1,26,1,26,
	3,26,513,8,26,1,26,5,26,516,8,26,10,26,12,26,519,9,26,1,27,1,27,3,27,523,
	8,27,1,28,1,28,1,28,1,28,3,28,529,8,28,1,28,1,28,1,29,1,29,3,29,535,8,29,
	1,30,1,30,1,30,1,30,3,30,541,8,30,1,30,1,30,3,30,545,8,30,1,30,1,30,1,30,
	3,30,550,8,30,1,31,1,31,1,31,1,32,1,32,1,32,1,32,1,32,3,32,560,8,32,1,32,
	1,32,1,32,1,32,1,32,3,32,567,8,32,3,32,569,8,32,1,33,1,33,1,33,1,33,5,33,
	575,8,33,10,33,12,33,578,9,33,1,33,1,33,1,34,1,34,1,34,3,34,585,8,34,1,
	34,1,34,1,35,1,35,3,35,591,8,35,1,36,1,36,3,36,595,8,36,1,37,1,37,1,37,
	1,38,1,38,3,38,602,8,38,1,39,1,39,3,39,606,8,39,1,39,1,39,1,39,3,39,611,
	8,39,1,40,1,40,1,41,1,41,1,41,1,41,1,42,1,42,1,42,1,42,1,42,5,42,624,8,
	42,10,42,12,42,627,9,42,1,42,1,42,3,42,631,8,42,1,43,1,43,1,43,1,43,1,44,
	1,44,4,44,639,8,44,11,44,12,44,640,1,44,1,44,1,45,1,45,3,45,647,8,45,1,
	46,1,46,4,46,651,8,46,11,46,12,46,652,1,46,1,46,1,47,1,47,3,47,659,8,47,
	1,48,1,48,1,49,1,49,1,49,1,50,1,50,1,50,3,50,669,8,50,1,50,1,50,3,50,673,
	8,50,1,50,3,50,676,8,50,1,50,3,50,679,8,50,3,50,681,8,50,1,50,1,50,1,50,
	1,50,1,50,3,50,688,8,50,3,50,690,8,50,1,50,1,50,1,50,1,50,1,50,3,50,697,
	8,50,3,50,699,8,50,3,50,701,8,50,1,51,1,51,1,51,3,51,706,8,51,1,52,1,52,
	1,52,3,52,711,8,52,1,53,1,53,1,53,1,53,3,53,717,8,53,1,53,3,53,720,8,53,
	1,54,1,54,1,54,3,54,725,8,54,1,55,1,55,1,55,1,55,3,55,731,8,55,1,56,1,56,
	1,56,1,56,3,56,737,8,56,1,57,1,57,1,57,3,57,742,8,57,1,58,1,58,3,58,746,
	8,58,1,59,1,59,1,59,1,60,1,60,3,60,753,8,60,1,61,1,61,1,61,1,61,1,62,1,
	62,1,62,1,62,1,62,3,62,764,8,62,3,62,766,8,62,1,62,1,62,1,62,3,62,771,8,
	62,3,62,773,8,62,1,63,1,63,1,63,1,63,1,63,1,63,5,63,781,8,63,10,63,12,63,
	784,9,63,1,64,1,64,1,64,1,64,1,65,1,65,1,65,1,65,1,65,3,65,795,8,65,3,65,
	797,8,65,1,66,1,66,1,67,1,67,1,68,1,68,1,68,3,68,806,8,68,1,69,1,69,1,69,
	1,69,5,69,812,8,69,10,69,12,69,815,9,69,1,70,1,70,1,70,1,71,1,71,1,71,1,
	71,5,71,824,8,71,10,71,12,71,827,9,71,1,72,1,72,1,73,1,73,1,74,1,74,1,75,
	1,75,3,75,837,8,75,1,76,1,76,3,76,841,8,76,1,77,1,77,3,77,845,8,77,1,77,
	3,77,848,8,77,1,77,1,77,3,77,852,8,77,1,77,1,77,3,77,856,8,77,1,77,1,77,
	1,77,1,77,3,77,862,8,77,1,78,1,78,1,78,1,78,3,78,868,8,78,1,79,1,79,1,79,
	1,79,3,79,874,8,79,1,80,1,80,1,80,3,80,879,8,80,1,81,1,81,1,81,1,81,3,81,
	885,8,81,1,82,1,82,1,82,3,82,890,8,82,1,83,1,83,1,83,1,84,1,84,1,84,1,84,
	1,85,1,85,3,85,901,8,85,1,85,5,85,904,8,85,10,85,12,85,907,9,85,1,86,1,
	86,1,86,1,86,1,86,1,86,1,86,1,86,1,86,1,86,1,86,1,86,1,86,1,86,3,86,923,
	8,86,1,87,1,87,1,88,1,88,1,89,1,89,1,89,1,89,1,90,1,90,1,90,1,90,1,90,1,
	90,3,90,939,8,90,1,90,1,90,1,91,1,91,1,91,3,91,946,8,91,1,91,1,91,1,91,
	3,91,951,8,91,1,92,1,92,1,93,1,93,1,93,3,93,958,8,93,1,93,3,93,961,8,93,
	1,94,1,94,1,94,3,94,966,8,94,1,94,1,94,1,95,1,95,3,95,972,8,95,1,96,1,96,
	1,96,1,96,1,96,1,96,5,96,980,8,96,10,96,12,96,983,9,96,1,96,1,96,1,97,1,
	97,1,97,3,97,990,8,97,1,98,1,98,1,98,1,98,1,98,1,98,3,98,998,8,98,1,99,
	1,99,1,100,1,100,1,101,1,101,1,101,1,101,1,101,1,101,1,101,1,101,1,101,
	1,101,1,101,1,101,1,101,1,101,1,101,1,101,1,101,3,101,1021,8,101,1,102,
	3,102,1024,8,102,1,102,1,102,1,102,1,102,3,102,1030,8,102,3,102,1032,8,
	102,1,102,1,102,1,102,3,102,1037,8,102,3,102,1039,8,102,1,103,1,103,1,103,
	5,103,1044,8,103,10,103,12,103,1047,9,103,1,104,1,104,1,104,1,105,1,105,
	1,106,1,106,1,107,1,107,1,107,1,107,1,107,1,107,1,107,3,107,1063,8,107,
	1,108,1,108,1,108,1,108,1,109,1,109,5,109,1071,8,109,10,109,12,109,1074,
	9,109,1,110,1,110,1,110,1,110,1,110,3,110,1081,8,110,1,110,3,110,1084,8,
	110,1,110,1,110,1,110,3,110,1089,8,110,3,110,1091,8,110,1,111,1,111,3,111,
	1095,8,111,1,112,1,112,1,112,1,112,1,113,1,113,1,114,3,114,1104,8,114,1,
	114,1,114,1,115,1,115,1,115,1,115,1,115,1,116,1,116,1,116,1,116,1,116,1,
	116,3,116,1119,8,116,1,117,1,117,3,117,1123,8,117,1,118,1,118,1,118,5,118,
	1128,8,118,10,118,12,118,1131,9,118,1,119,1,119,3,119,1135,8,119,1,120,
	1,120,1,120,1,120,1,120,1,121,1,121,1,122,1,122,1,122,5,122,1147,8,122,
	10,122,12,122,1150,9,122,1,123,1,123,1,123,1,124,1,124,1,124,1,124,1,124,
	1,125,1,125,1,125,1,125,3,125,1164,8,125,1,125,1,125,3,125,1168,8,125,3,
	125,1170,8,125,1,126,1,126,1,127,1,127,1,127,5,127,1177,8,127,10,127,12,
	127,1180,9,127,1,128,1,128,1,128,3,128,1185,8,128,1,129,1,129,1,129,1,129,
	3,129,1191,8,129,1,129,1,129,1,130,1,130,1,131,1,131,3,131,1199,8,131,1,
	132,1,132,1,132,3,132,1204,8,132,1,133,1,133,1,133,1,133,5,133,1210,8,133,
	10,133,12,133,1213,9,133,1,133,1,133,1,134,1,134,3,134,1219,8,134,1,135,
	1,135,1,135,1,136,1,136,1,136,1,136,1,136,1,136,3,136,1230,8,136,1,137,
	1,137,1,138,1,138,1,138,1,138,1,138,3,138,1239,8,138,1,139,1,139,1,139,
	5,139,1244,8,139,10,139,12,139,1247,9,139,1,140,1,140,1,140,1,141,1,141,
	1,141,1,141,3,141,1256,8,141,1,141,1,141,1,141,1,141,1,141,5,141,1263,8,
	141,10,141,12,141,1266,9,141,1,141,1,141,3,141,1270,8,141,1,142,1,142,1,
	142,3,142,1275,8,142,1,142,1,142,1,143,1,143,3,143,1281,8,143,1,144,1,144,
	1,144,5,144,1286,8,144,10,144,12,144,1289,9,144,1,145,1,145,1,145,1,146,
	1,146,1,146,1,146,1,146,1,146,1,146,3,146,1301,8,146,1,147,1,147,1,147,
	5,147,1306,8,147,10,147,12,147,1309,9,147,1,148,1,148,1,148,1,148,3,148,
	1315,8,148,1,148,1,148,1,149,1,149,1,149,0,0,150,0,2,4,6,8,10,12,14,16,
	18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,
	66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,
	110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,
	146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,
	182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,214,216,
	218,220,222,224,226,228,230,232,234,236,238,240,242,244,246,248,250,252,
	254,256,258,260,262,264,266,268,270,272,274,276,278,280,282,284,286,288,
	290,292,294,296,298,0,8,2,0,84,84,86,87,1,0,71,72,2,0,22,22,118,118,1,0,
	58,59,2,0,57,57,60,60,2,0,26,26,28,38,1,0,68,69,2,0,6,7,17,18,1373,0,301,
	1,0,0,0,2,305,1,0,0,0,4,329,1,0,0,0,6,333,1,0,0,0,8,339,1,0,0,0,10,348,
	1,0,0,0,12,351,1,0,0,0,14,357,1,0,0,0,16,360,1,0,0,0,18,362,1,0,0,0,20,
	369,1,0,0,0,22,373,1,0,0,0,24,376,1,0,0,0,26,378,1,0,0,0,28,386,1,0,0,0,
	30,391,1,0,0,0,32,398,1,0,0,0,34,405,1,0,0,0,36,415,1,0,0,0,38,421,1,0,
	0,0,40,477,1,0,0,0,42,479,1,0,0,0,44,481,1,0,0,0,46,501,1,0,0,0,48,503,
	1,0,0,0,50,507,1,0,0,0,52,509,1,0,0,0,54,522,1,0,0,0,56,524,1,0,0,0,58,
	534,1,0,0,0,60,536,1,0,0,0,62,551,1,0,0,0,64,568,1,0,0,0,66,570,1,0,0,0,
	68,584,1,0,0,0,70,590,1,0,0,0,72,594,1,0,0,0,74,596,1,0,0,0,76,601,1,0,
	0,0,78,610,1,0,0,0,80,612,1,0,0,0,82,614,1,0,0,0,84,618,1,0,0,0,86,632,
	1,0,0,0,88,636,1,0,0,0,90,646,1,0,0,0,92,648,1,0,0,0,94,658,1,0,0,0,96,
	660,1,0,0,0,98,662,1,0,0,0,100,665,1,0,0,0,102,702,1,0,0,0,104,710,1,0,
	0,0,106,712,1,0,0,0,108,724,1,0,0,0,110,726,1,0,0,0,112,732,1,0,0,0,114,
	741,1,0,0,0,116,745,1,0,0,0,118,747,1,0,0,0,120,750,1,0,0,0,122,754,1,0,
	0,0,124,772,1,0,0,0,126,774,1,0,0,0,128,785,1,0,0,0,130,789,1,0,0,0,132,
	798,1,0,0,0,134,800,1,0,0,0,136,805,1,0,0,0,138,807,1,0,0,0,140,816,1,0,
	0,0,142,819,1,0,0,0,144,828,1,0,0,0,146,830,1,0,0,0,148,832,1,0,0,0,150,
	836,1,0,0,0,152,838,1,0,0,0,154,861,1,0,0,0,156,863,1,0,0,0,158,869,1,0,
	0,0,160,878,1,0,0,0,162,880,1,0,0,0,164,889,1,0,0,0,166,891,1,0,0,0,168,
	894,1,0,0,0,170,900,1,0,0,0,172,922,1,0,0,0,174,924,1,0,0,0,176,926,1,0,
	0,0,178,928,1,0,0,0,180,932,1,0,0,0,182,942,1,0,0,0,184,952,1,0,0,0,186,
	954,1,0,0,0,188,962,1,0,0,0,190,971,1,0,0,0,192,973,1,0,0,0,194,989,1,0,
	0,0,196,991,1,0,0,0,198,999,1,0,0,0,200,1001,1,0,0,0,202,1020,1,0,0,0,204,
	1038,1,0,0,0,206,1040,1,0,0,0,208,1048,1,0,0,0,210,1051,1,0,0,0,212,1053,
	1,0,0,0,214,1062,1,0,0,0,216,1064,1,0,0,0,218,1068,1,0,0,0,220,1090,1,0,
	0,0,222,1094,1,0,0,0,224,1096,1,0,0,0,226,1100,1,0,0,0,228,1103,1,0,0,0,
	230,1107,1,0,0,0,232,1112,1,0,0,0,234,1122,1,0,0,0,236,1124,1,0,0,0,238,
	1134,1,0,0,0,240,1136,1,0,0,0,242,1141,1,0,0,0,244,1143,1,0,0,0,246,1151,
	1,0,0,0,248,1154,1,0,0,0,250,1159,1,0,0,0,252,1171,1,0,0,0,254,1173,1,0,
	0,0,256,1184,1,0,0,0,258,1186,1,0,0,0,260,1194,1,0,0,0,262,1196,1,0,0,0,
	264,1200,1,0,0,0,266,1205,1,0,0,0,268,1218,1,0,0,0,270,1220,1,0,0,0,272,
	1229,1,0,0,0,274,1231,1,0,0,0,276,1233,1,0,0,0,278,1240,1,0,0,0,280,1248,
	1,0,0,0,282,1251,1,0,0,0,284,1274,1,0,0,0,286,1280,1,0,0,0,288,1282,1,0,
	0,0,290,1290,1,0,0,0,292,1293,1,0,0,0,294,1302,1,0,0,0,296,1310,1,0,0,0,
	298,1318,1,0,0,0,300,302,3,2,1,0,301,300,1,0,0,0,302,303,1,0,0,0,303,301,
	1,0,0,0,303,304,1,0,0,0,304,1,1,0,0,0,305,317,5,118,0,0,306,313,5,20,0,
	0,307,308,5,118,0,0,308,309,5,23,0,0,309,310,5,112,0,0,310,312,5,24,0,0,
	311,307,1,0,0,0,312,315,1,0,0,0,313,311,1,0,0,0,313,314,1,0,0,0,314,316,
	1,0,0,0,315,313,1,0,0,0,316,318,5,21,0,0,317,306,1,0,0,0,317,318,1,0,0,
	0,318,319,1,0,0,0,319,320,5,88,0,0,320,321,3,4,2,0,321,322,3,6,3,0,322,
	323,5,4,0,0,323,324,5,89,0,0,324,325,3,8,4,0,325,326,5,90,0,0,326,3,1,0,
	0,0,327,328,7,0,0,0,328,330,5,85,0,0,329,327,1,0,0,0,329,330,1,0,0,0,330,
	5,1,0,0,0,331,332,5,82,0,0,332,334,5,83,0,0,333,331,1,0,0,0,333,334,1,0,
	0,0,334,7,1,0,0,0,335,336,3,10,5,0,336,337,3,14,7,0,337,338,3,30,15,0,338,
	340,1,0,0,0,339,335,1,0,0,0,339,340,1,0,0,0,340,9,1,0,0,0,341,342,5,81,
	0,0,342,343,3,12,6,0,343,344,5,79,0,0,344,349,1,0,0,0,345,346,5,81,0,0,
	346,347,5,55,0,0,347,349,5,79,0,0,348,341,1,0,0,0,348,345,1,0,0,0,348,349,
	1,0,0,0,349,11,1,0,0,0,350,352,3,26,13,0,351,350,1,0,0,0,351,352,1,0,0,
	0,352,13,1,0,0,0,353,354,5,80,0,0,354,355,3,16,8,0,355,356,5,79,0,0,356,
	358,1,0,0,0,357,353,1,0,0,0,357,358,1,0,0,0,358,15,1,0,0,0,359,361,3,18,
	9,0,360,359,1,0,0,0,360,361,1,0,0,0,361,17,1,0,0,0,362,366,3,20,10,0,363,
	365,3,20,10,0,364,363,1,0,0,0,365,368,1,0,0,0,366,364,1,0,0,0,366,367,1,
	0,0,0,367,19,1,0,0,0,368,366,1,0,0,0,369,370,3,26,13,0,370,371,5,65,0,0,
	371,372,3,22,11,0,372,21,1,0,0,0,373,374,5,118,0,0,374,375,3,24,12,0,375,
	23,1,0,0,0,376,377,1,0,0,0,377,25,1,0,0,0,378,383,3,28,14,0,379,380,5,22,
	0,0,380,382,3,28,14,0,381,379,1,0,0,0,382,385,1,0,0,0,383,381,1,0,0,0,383,
	384,1,0,0,0,384,27,1,0,0,0,385,383,1,0,0,0,386,389,5,118,0,0,387,388,5,
	20,0,0,388,390,5,21,0,0,389,387,1,0,0,0,389,390,1,0,0,0,390,29,1,0,0,0,
	391,395,3,32,16,0,392,394,3,32,16,0,393,392,1,0,0,0,394,397,1,0,0,0,395,
	393,1,0,0,0,395,396,1,0,0,0,396,31,1,0,0,0,397,395,1,0,0,0,398,403,5,118,
	0,0,399,404,3,168,84,0,400,404,3,166,83,0,401,404,3,64,32,0,402,404,3,74,
	37,0,403,399,1,0,0,0,403,400,1,0,0,0,403,401,1,0,0,0,403,402,1,0,0,0,404,
	33,1,0,0,0,405,406,5,48,0,0,406,411,5,20,0,0,407,408,3,36,18,0,408,409,
	3,38,19,0,409,412,1,0,0,0,410,412,3,40,20,0,411,407,1,0,0,0,411,410,1,0,
	0,0,411,412,1,0,0,0,412,413,1,0,0,0,413,414,5,21,0,0,414,35,1,0,0,0,415,
	417,5,10,0,0,416,418,3,270,135,0,417,416,1,0,0,0,417,418,1,0,0,0,418,37,
	1,0,0,0,419,420,5,22,0,0,420,422,5,10,0,0,421,419,1,0,0,0,421,422,1,0,0,
	0,422,39,1,0,0,0,423,425,3,42,21,0,424,426,3,48,24,0,425,424,1,0,0,0,425,
	426,1,0,0,0,426,478,1,0,0,0,427,428,3,42,21,0,428,430,5,22,0,0,429,431,
	3,48,24,0,430,429,1,0,0,0,430,431,1,0,0,0,431,432,1,0,0,0,432,433,3,36,
	18,0,433,435,3,50,25,0,434,436,3,48,24,0,435,434,1,0,0,0,435,436,1,0,0,
	0,436,478,1,0,0,0,437,438,3,42,21,0,438,440,5,22,0,0,439,441,3,48,24,0,
	440,439,1,0,0,0,440,441,1,0,0,0,441,442,1,0,0,0,442,443,3,36,18,0,443,456,
	3,50,25,0,444,446,5,22,0,0,445,447,3,48,24,0,446,445,1,0,0,0,446,447,1,
	0,0,0,447,448,1,0,0,0,448,454,5,10,0,0,449,450,5,22,0,0,450,452,3,42,21,
	0,451,453,3,48,24,0,452,451,1,0,0,0,452,453,1,0,0,0,453,455,1,0,0,0,454,
	449,1,0,0,0,454,455,1,0,0,0,455,457,1,0,0,0,456,444,1,0,0,0,456,457,1,0,
	0,0,457,478,1,0,0,0,458,459,3,36,18,0,459,461,3,50,25,0,460,462,3,48,24,
	0,461,460,1,0,0,0,461,462,1,0,0,0,462,478,1,0,0,0,463,464,3,36,18,0,464,
	475,3,50,25,0,465,467,5,22,0,0,466,468,3,48,24,0,467,466,1,0,0,0,467,468,
	1,0,0,0,468,469,1,0,0,0,469,470,5,10,0,0,470,471,5,22,0,0,471,473,3,42,
	21,0,472,474,3,48,24,0,473,472,1,0,0,0,473,474,1,0,0,0,474,476,1,0,0,0,
	475,465,1,0,0,0,475,476,1,0,0,0,476,478,1,0,0,0,477,423,1,0,0,0,477,427,
	1,0,0,0,477,437,1,0,0,0,477,458,1,0,0,0,477,463,1,0,0,0,478,41,1,0,0,0,
	479,480,3,44,22,0,480,43,1,0,0,0,481,489,3,46,23,0,482,484,5,22,0,0,483,
	485,3,48,24,0,484,483,1,0,0,0,484,485,1,0,0,0,485,486,1,0,0,0,486,488,3,
	46,23,0,487,482,1,0,0,0,488,491,1,0,0,0,489,487,1,0,0,0,489,490,1,0,0,0,
	490,45,1,0,0,0,491,489,1,0,0,0,492,496,3,246,123,0,493,497,5,49,0,0,494,
	495,5,50,0,0,495,497,3,212,106,0,496,493,1,0,0,0,496,494,1,0,0,0,496,497,
	1,0,0,0,497,502,1,0,0,0,498,499,5,51,0,0,499,500,5,52,0,0,500,502,3,170,
	85,0,501,492,1,0,0,0,501,498,1,0,0,0,502,47,1,0,0,0,503,504,5,1,0,0,504,
	49,1,0,0,0,505,506,5,22,0,0,506,508,3,52,26,0,507,505,1,0,0,0,507,508,1,
	0,0,0,508,51,1,0,0,0,509,517,3,54,27,0,510,512,5,22,0,0,511,513,3,48,24,
	0,512,511,1,0,0,0,512,513,1,0,0,0,513,514,1,0,0,0,514,516,3,54,27,0,515,
	510,1,0,0,0,516,519,1,0,0,0,517,515,1,0,0,0,517,518,1,0,0,0,518,53,1,0,
	0,0,519,517,1,0,0,0,520,523,3,46,23,0,521,523,3,56,28,0,522,520,1,0,0,0,
	522,521,1,0,0,0,523,55,1,0,0,0,524,525,5,91,0,0,525,526,3,58,29,0,526,528,
	3,44,22,0,527,529,3,48,24,0,528,527,1,0,0,0,528,529,1,0,0,0,529,530,1,0,
	0,0,530,531,5,92,0,0,531,57,1,0,0,0,532,533,5,112,0,0,533,535,5,93,0,0,
	534,532,1,0,0,0,534,535,1,0,0,0,535,59,1,0,0,0,536,544,5,48,0,0,537,540,
	5,23,0,0,538,541,3,188,94,0,539,541,3,62,31,0,540,538,1,0,0,0,540,539,1,
	0,0,0,541,542,1,0,0,0,542,543,5,24,0,0,543,545,1,0,0,0,544,537,1,0,0,0,
	544,545,1,0,0,0,545,546,1,0,0,0,546,549,5,52,0,0,547,550,3,170,85,0,548,
	550,3,246,123,0,549,547,1,0,0,0,549,548,1,0,0,0,550,61,1,0,0,0,551,552,
	5,64,0,0,552,553,3,188,94,0,553,63,1,0,0,0,554,555,3,66,33,0,555,559,5,
	4,0,0,556,560,3,170,85,0,557,560,3,212,106,0,558,560,3,128,64,0,559,556,
	1,0,0,0,559,557,1,0,0,0,559,558,1,0,0,0,560,569,1,0,0,0,561,562,3,78,39,
	0,562,566,5,4,0,0,563,567,3,116,58,0,564,567,3,76,38,0,565,567,3,122,61,
	0,566,563,1,0,0,0,566,564,1,0,0,0,566,565,1,0,0,0,567,569,1,0,0,0,568,554,
	1,0,0,0,568,561,1,0,0,0,569,65,1,0,0,0,570,571,5,20,0,0,571,576,3,68,34,
	0,572,573,5,22,0,0,573,575,3,68,34,0,574,572,1,0,0,0,575,578,1,0,0,0,576,
	574,1,0,0,0,576,577,1,0,0,0,577,579,1,0,0,0,578,576,1,0,0,0,579,580,5,21,
	0,0,580,67,1,0,0,0,581,582,3,70,35,0,582,583,5,93,0,0,583,585,1,0,0,0,584,
	581,1,0,0,0,584,585,1,0,0,0,585,586,1,0,0,0,586,587,5,118,0,0,587,69,1,
	0,0,0,588,591,3,72,36,0,589,591,5,118,0,0,590,588,1,0,0,0,590,589,1,0,0,
	0,591,71,1,0,0,0,592,595,3,170,85,0,593,595,3,78,39,0,594,592,1,0,0,0,594,
	593,1,0,0,0,595,73,1,0,0,0,596,597,5,4,0,0,597,598,3,76,38,0,598,75,1,0,
	0,0,599,602,3,78,39,0,600,602,3,84,42,0,601,599,1,0,0,0,601,600,1,0,0,0,
	602,77,1,0,0,0,603,604,5,118,0,0,604,606,5,8,0,0,605,603,1,0,0,0,605,606,
	1,0,0,0,606,607,1,0,0,0,607,611,5,118,0,0,608,611,5,71,0,0,609,611,5,72,
	0,0,610,605,1,0,0,0,610,608,1,0,0,0,610,609,1,0,0,0,611,79,1,0,0,0,612,
	613,7,1,0,0,613,81,1,0,0,0,614,615,5,118,0,0,615,616,5,8,0,0,616,617,5,
	118,0,0,617,83,1,0,0,0,618,619,5,73,0,0,619,620,5,20,0,0,620,625,3,100,
	50,0,621,622,5,22,0,0,622,624,3,100,50,0,623,621,1,0,0,0,624,627,1,0,0,
	0,625,623,1,0,0,0,625,626,1,0,0,0,626,628,1,0,0,0,627,625,1,0,0,0,628,630,
	5,21,0,0,629,631,3,86,43,0,630,629,1,0,0,0,630,631,1,0,0,0,631,85,1,0,0,
	0,632,633,5,66,0,0,633,634,5,75,0,0,634,635,3,88,44,0,635,87,1,0,0,0,636,
	638,5,20,0,0,637,639,3,90,45,0,638,637,1,0,0,0,639,640,1,0,0,0,640,638,
	1,0,0,0,640,641,1,0,0,0,641,642,1,0,0,0,642,643,5,21,0,0,643,89,1,0,0,0,
	644,647,3,94,47,0,645,647,3,92,46,0,646,644,1,0,0,0,646,645,1,0,0,0,647,
	91,1,0,0,0,648,650,5,76,0,0,649,651,3,90,45,0,650,649,1,0,0,0,651,652,1,
	0,0,0,652,650,1,0,0,0,652,653,1,0,0,0,653,654,1,0,0,0,654,655,5,77,0,0,
	655,93,1,0,0,0,656,659,3,96,48,0,657,659,3,98,49,0,658,656,1,0,0,0,658,
	657,1,0,0,0,659,95,1,0,0,0,660,661,7,2,0,0,661,97,1,0,0,0,662,663,5,12,
	0,0,663,664,5,118,0,0,664,99,1,0,0,0,665,666,5,12,0,0,666,700,5,118,0,0,
	667,669,3,104,52,0,668,667,1,0,0,0,668,669,1,0,0,0,669,701,1,0,0,0,670,
	680,3,170,85,0,671,673,3,114,57,0,672,671,1,0,0,0,672,673,1,0,0,0,673,681,
	1,0,0,0,674,676,5,74,0,0,675,674,1,0,0,0,675,676,1,0,0,0,676,678,1,0,0,
	0,677,679,3,108,54,0,678,677,1,0,0,0,678,679,1,0,0,0,679,681,1,0,0,0,680,
	672,1,0,0,0,680,675,1,0,0,0,681,701,1,0,0,0,682,689,3,126,63,0,683,690,
	5,49,0,0,684,687,5,50,0,0,685,688,3,128,64,0,686,688,3,212,106,0,687,685,
	1,0,0,0,687,686,1,0,0,0,688,690,1,0,0,0,689,683,1,0,0,0,689,684,1,0,0,0,
	689,690,1,0,0,0,690,701,1,0,0,0,691,698,3,78,39,0,692,699,5,49,0,0,693,
	696,5,50,0,0,694,697,3,122,61,0,695,697,3,116,58,0,696,694,1,0,0,0,696,
	695,1,0,0,0,697,699,1,0,0,0,698,692,1,0,0,0,698,693,1,0,0,0,698,699,1,0,
	0,0,699,701,1,0,0,0,700,668,1,0,0,0,700,670,1,0,0,0,700,682,1,0,0,0,700,
	691,1,0,0,0,701,101,1,0,0,0,702,703,5,12,0,0,703,705,5,118,0,0,704,706,
	3,104,52,0,705,704,1,0,0,0,705,706,1,0,0,0,706,103,1,0,0,0,707,711,5,49,
	0,0,708,709,5,50,0,0,709,711,3,170,85,0,710,707,1,0,0,0,710,708,1,0,0,0,
	711,105,1,0,0,0,712,713,5,12,0,0,713,714,5,118,0,0,714,716,3,170,85,0,715,
	717,5,74,0,0,716,715,1,0,0,0,716,717,1,0,0,0,717,719,1,0,0,0,718,720,3,
	108,54,0,719,718,1,0,0,0,719,720,1,0,0,0,720,107,1,0,0,0,721,725,5,49,0,
	0,722,723,5,50,0,0,723,725,3,212,106,0,724,721,1,0,0,0,724,722,1,0,0,0,
	725,109,1,0,0,0,726,727,5,12,0,0,727,728,5,118,0,0,728,730,3,126,63,0,729,
	731,3,108,54,0,730,729,1,0,0,0,730,731,1,0,0,0,731,111,1,0,0,0,732,733,
	5,12,0,0,733,734,5,118,0,0,734,736,3,170,85,0,735,737,3,114,57,0,736,735,
	1,0,0,0,736,737,1,0,0,0,737,113,1,0,0,0,738,742,5,49,0,0,739,740,5,50,0,
	0,740,742,3,128,64,0,741,738,1,0,0,0,741,739,1,0,0,0,742,115,1,0,0,0,743,
	746,3,120,60,0,744,746,3,118,59,0,745,743,1,0,0,0,745,744,1,0,0,0,746,117,
	1,0,0,0,747,748,3,120,60,0,748,749,3,266,133,0,749,119,1,0,0,0,750,752,
	5,118,0,0,751,753,5,8,0,0,752,751,1,0,0,0,752,753,1,0,0,0,753,121,1,0,0,
	0,754,755,5,20,0,0,755,756,3,124,62,0,756,757,5,21,0,0,757,123,1,0,0,0,
	758,765,3,132,66,0,759,760,5,22,0,0,760,763,5,10,0,0,761,762,5,22,0,0,762,
	764,3,134,67,0,763,761,1,0,0,0,763,764,1,0,0,0,764,766,1,0,0,0,765,759,
	1,0,0,0,765,766,1,0,0,0,766,773,1,0,0,0,767,770,5,10,0,0,768,769,5,22,0,
	0,769,771,3,134,67,0,770,768,1,0,0,0,770,771,1,0,0,0,771,773,1,0,0,0,772,
	758,1,0,0,0,772,767,1,0,0,0,773,125,1,0,0,0,774,775,5,12,0,0,775,776,5,
	118,0,0,776,782,1,0,0,0,777,778,5,8,0,0,778,779,5,12,0,0,779,781,5,118,
	0,0,780,777,1,0,0,0,781,784,1,0,0,0,782,780,1,0,0,0,782,783,1,0,0,0,783,
	127,1,0,0,0,784,782,1,0,0,0,785,786,5,20,0,0,786,787,3,130,65,0,787,788,
	5,21,0,0,788,129,1,0,0,0,789,796,3,132,66,0,790,791,5,22,0,0,791,794,5,
	10,0,0,792,793,5,22,0,0,793,795,3,134,67,0,794,792,1,0,0,0,794,795,1,0,
	0,0,795,797,1,0,0,0,796,790,1,0,0,0,796,797,1,0,0,0,797,131,1,0,0,0,798,
	799,3,136,68,0,799,133,1,0,0,0,800,801,3,136,68,0,801,135,1,0,0,0,802,806,
	3,138,69,0,803,804,5,55,0,0,804,806,3,140,70,0,805,802,1,0,0,0,805,803,
	1,0,0,0,806,137,1,0,0,0,807,813,3,142,71,0,808,809,3,144,72,0,809,810,3,
	142,71,0,810,812,1,0,0,0,811,808,1,0,0,0,812,815,1,0,0,0,813,811,1,0,0,
	0,813,814,1,0,0,0,814,139,1,0,0,0,815,813,1,0,0,0,816,817,5,56,0,0,817,
	818,3,148,74,0,818,141,1,0,0,0,819,825,3,152,76,0,820,821,3,146,73,0,821,
	822,3,152,76,0,822,824,1,0,0,0,823,820,1,0,0,0,824,827,1,0,0,0,825,823,
	1,0,0,0,825,826,1,0,0,0,826,143,1,0,0,0,827,825,1,0,0,0,828,829,7,3,0,0,
	829,145,1,0,0,0,830,831,7,4,0,0,831,147,1,0,0,0,832,833,3,154,77,0,833,
	149,1,0,0,0,834,837,3,116,58,0,835,837,3,120,60,0,836,834,1,0,0,0,836,835,
	1,0,0,0,837,151,1,0,0,0,838,840,3,148,74,0,839,841,3,140,70,0,840,839,1,
	0,0,0,840,841,1,0,0,0,841,153,1,0,0,0,842,845,3,212,106,0,843,845,5,62,
	0,0,844,842,1,0,0,0,844,843,1,0,0,0,845,847,1,0,0,0,846,848,5,13,0,0,847,
	846,1,0,0,0,847,848,1,0,0,0,848,849,1,0,0,0,849,851,5,9,0,0,850,852,5,13,
	0,0,851,850,1,0,0,0,851,852,1,0,0,0,852,855,1,0,0,0,853,856,3,212,106,0,
	854,856,5,63,0,0,855,853,1,0,0,0,855,854,1,0,0,0,856,862,1,0,0,0,857,862,
	3,62,31,0,858,859,5,70,0,0,859,862,3,212,106,0,860,862,3,212,106,0,861,
	844,1,0,0,0,861,857,1,0,0,0,861,858,1,0,0,0,861,860,1,0,0,0,862,155,1,0,
	0,0,863,864,5,12,0,0,864,865,5,118,0,0,865,867,3,126,63,0,866,868,3,114,
	57,0,867,866,1,0,0,0,867,868,1,0,0,0,868,157,1,0,0,0,869,870,5,12,0,0,870,
	871,5,118,0,0,871,873,3,78,39,0,872,874,3,160,80,0,873,872,1,0,0,0,873,
	874,1,0,0,0,874,159,1,0,0,0,875,879,5,49,0,0,876,877,5,50,0,0,877,879,3,
	116,58,0,878,875,1,0,0,0,878,876,1,0,0,0,879,161,1,0,0,0,880,881,5,12,0,
	0,881,882,5,118,0,0,882,884,3,78,39,0,883,885,3,164,82,0,884,883,1,0,0,
	0,884,885,1,0,0,0,885,163,1,0,0,0,886,890,5,49,0,0,887,888,5,50,0,0,888,
	890,3,122,61,0,889,886,1,0,0,0,889,887,1,0,0,0,890,165,1,0,0,0,891,892,
	5,4,0,0,892,893,3,170,85,0,893,167,1,0,0,0,894,895,3,170,85,0,895,896,5,
	4,0,0,896,897,3,212,106,0,897,169,1,0,0,0,898,901,3,172,86,0,899,901,3,
	184,92,0,900,898,1,0,0,0,900,899,1,0,0,0,901,905,1,0,0,0,902,904,3,188,
	94,0,903,902,1,0,0,0,904,907,1,0,0,0,905,903,1,0,0,0,905,906,1,0,0,0,906,
	171,1,0,0,0,907,905,1,0,0,0,908,923,3,290,145,0,909,923,3,292,146,0,910,
	923,3,174,87,0,911,923,3,230,115,0,912,923,3,248,124,0,913,923,3,276,138,
	0,914,923,3,34,17,0,915,923,3,60,30,0,916,923,3,180,90,0,917,923,3,182,
	91,0,918,923,3,280,140,0,919,923,3,178,89,0,920,923,5,5,0,0,921,923,5,47,
	0,0,922,908,1,0,0,0,922,909,1,0,0,0,922,910,1,0,0,0,922,911,1,0,0,0,922,
	912,1,0,0,0,922,913,1,0,0,0,922,914,1,0,0,0,922,915,1,0,0,0,922,916,1,0,
	0,0,922,917,1,0,0,0,922,918,1,0,0,0,922,919,1,0,0,0,922,920,1,0,0,0,922,
	921,1,0,0,0,923,173,1,0,0,0,924,925,3,176,88,0,925,175,1,0,0,0,926,927,
	7,5,0,0,927,177,1,0,0,0,928,929,3,78,39,0,929,930,5,8,0,0,930,931,3,126,
	63,0,931,179,1,0,0,0,932,933,5,53,0,0,933,938,5,20,0,0,934,935,3,36,18,
	0,935,936,3,38,19,0,936,939,1,0,0,0,937,939,3,40,20,0,938,934,1,0,0,0,938,
	937,1,0,0,0,938,939,1,0,0,0,939,940,1,0,0,0,940,941,5,21,0,0,941,181,1,
	0,0,0,942,945,5,53,0,0,943,946,3,188,94,0,944,946,3,62,31,0,945,943,1,0,
	0,0,945,944,1,0,0,0,945,946,1,0,0,0,946,947,1,0,0,0,947,950,5,52,0,0,948,
	951,3,170,85,0,949,951,3,246,123,0,950,948,1,0,0,0,950,949,1,0,0,0,951,
	183,1,0,0,0,952,953,3,186,93,0,953,185,1,0,0,0,954,957,5,118,0,0,955,956,
	5,8,0,0,956,958,5,118,0,0,957,955,1,0,0,0,957,958,1,0,0,0,958,960,1,0,0,
	0,959,961,3,266,133,0,960,959,1,0,0,0,960,961,1,0,0,0,961,187,1,0,0,0,962,
	963,5,23,0,0,963,965,3,190,95,0,964,966,3,270,135,0,965,964,1,0,0,0,965,
	966,1,0,0,0,966,967,1,0,0,0,967,968,5,24,0,0,968,189,1,0,0,0,969,972,3,
	194,97,0,970,972,3,210,105,0,971,969,1,0,0,0,971,970,1,0,0,0,972,191,1,
	0,0,0,973,974,5,105,0,0,974,975,5,106,0,0,975,976,5,20,0,0,976,981,3,196,
	98,0,977,978,5,22,0,0,978,980,3,196,98,0,979,977,1,0,0,0,980,983,1,0,0,
	0,981,979,1,0,0,0,981,982,1,0,0,0,982,984,1,0,0,0,983,981,1,0,0,0,984,985,
	5,21,0,0,985,193,1,0,0,0,986,990,3,192,96,0,987,990,3,198,99,0,988,990,
	3,202,101,0,989,986,1,0,0,0,989,987,1,0,0,0,989,988,1,0,0,0,990,195,1,0,
	0,0,991,997,3,72,36,0,992,993,5,93,0,0,993,998,3,212,106,0,994,998,3,128,
	64,0,995,998,3,116,58,0,996,998,3,122,61,0,997,992,1,0,0,0,997,994,1,0,
	0,0,997,995,1,0,0,0,997,996,1,0,0,0,997,998,1,0,0,0,998,197,1,0,0,0,999,
	1000,3,282,141,0,1000,199,1,0,0,0,1001,1002,3,122,61,0,1002,201,1,0,0,0,
	1003,1004,5,45,0,0,1004,1021,3,170,85,0,1005,1006,5,108,0,0,1006,1007,5,
	106,0,0,1007,1021,3,212,106,0,1008,1009,5,45,0,0,1009,1010,3,170,85,0,1010,
	1011,5,108,0,0,1011,1012,5,106,0,0,1012,1013,3,212,106,0,1013,1021,1,0,
	0,0,1014,1015,5,66,0,0,1015,1016,5,51,0,0,1016,1017,5,20,0,0,1017,1018,
	3,204,102,0,1018,1019,5,21,0,0,1019,1021,1,0,0,0,1020,1003,1,0,0,0,1020,
	1005,1,0,0,0,1020,1008,1,0,0,0,1020,1014,1,0,0,0,1021,203,1,0,0,0,1022,
	1024,3,206,103,0,1023,1022,1,0,0,0,1023,1024,1,0,0,0,1024,1031,1,0,0,0,
	1025,1026,5,22,0,0,1026,1029,5,10,0,0,1027,1028,5,22,0,0,1028,1030,3,206,
	103,0,1029,1027,1,0,0,0,1029,1030,1,0,0,0,1030,1032,1,0,0,0,1031,1025,1,
	0,0,0,1031,1032,1,0,0,0,1032,1039,1,0,0,0,1033,1036,5,10,0,0,1034,1035,
	5,22,0,0,1035,1037,3,206,103,0,1036,1034,1,0,0,0,1036,1037,1,0,0,0,1037,
	1039,1,0,0,0,1038,1023,1,0,0,0,1038,1033,1,0,0,0,1039,205,1,0,0,0,1040,
	1045,3,208,104,0,1041,1042,5,22,0,0,1042,1044,3,208,104,0,1043,1041,1,0,
	0,0,1044,1047,1,0,0,0,1045,1043,1,0,0,0,1045,1046,1,0,0,0,1046,207,1,0,
	0,0,1047,1045,1,0,0,0,1048,1049,5,118,0,0,1049,1050,7,6,0,0,1050,209,1,
	0,0,0,1051,1052,3,130,65,0,1052,211,1,0,0,0,1053,1054,3,214,107,0,1054,
	213,1,0,0,0,1055,1063,3,226,113,0,1056,1063,3,222,111,0,1057,1063,3,224,
	112,0,1058,1063,3,216,108,0,1059,1063,3,298,149,0,1060,1063,5,117,0,0,1061,
	1063,5,115,0,0,1062,1055,1,0,0,0,1062,1056,1,0,0,0,1062,1057,1,0,0,0,1062,
	1058,1,0,0,0,1062,1059,1,0,0,0,1062,1060,1,0,0,0,1062,1061,1,0,0,0,1063,
	215,1,0,0,0,1064,1065,5,20,0,0,1065,1066,3,218,109,0,1066,1067,5,21,0,0,
	1067,217,1,0,0,0,1068,1072,3,220,110,0,1069,1071,3,220,110,0,1070,1069,
	1,0,0,0,1071,1074,1,0,0,0,1072,1070,1,0,0,0,1072,1073,1,0,0,0,1073,219,
	1,0,0,0,1074,1072,1,0,0,0,1075,1091,5,112,0,0,1076,1083,5,118,0,0,1077,
	1080,5,23,0,0,1078,1081,5,112,0,0,1079,1081,3,260,130,0,1080,1078,1,0,0,
	0,1080,1079,1,0,0,0,1081,1082,1,0,0,0,1082,1084,5,24,0,0,1083,1077,1,0,
	0,0,1083,1084,1,0,0,0,1084,1091,1,0,0,0,1085,1091,3,260,130,0,1086,1088,
	3,172,86,0,1087,1089,3,188,94,0,1088,1087,1,0,0,0,1088,1089,1,0,0,0,1089,
	1091,1,0,0,0,1090,1075,1,0,0,0,1090,1076,1,0,0,0,1090,1085,1,0,0,0,1090,
	1086,1,0,0,0,1091,221,1,0,0,0,1092,1095,3,228,114,0,1093,1095,5,118,0,0,
	1094,1092,1,0,0,0,1094,1093,1,0,0,0,1095,223,1,0,0,0,1096,1097,5,118,0,
	0,1097,1098,5,93,0,0,1098,1099,3,212,106,0,1099,225,1,0,0,0,1100,1101,5,
	118,0,0,1101,227,1,0,0,0,1102,1104,5,25,0,0,1103,1102,1,0,0,0,1103,1104,
	1,0,0,0,1104,1105,1,0,0,0,1105,1106,5,112,0,0,1106,229,1,0,0,0,1107,1108,
	5,94,0,0,1108,1109,5,20,0,0,1109,1110,3,232,116,0,1110,1111,5,21,0,0,1111,
	231,1,0,0,0,1112,1118,3,242,121,0,1113,1114,5,22,0,0,1114,1115,3,36,18,
	0,1115,1116,3,234,117,0,1116,1117,3,38,19,0,1117,1119,1,0,0,0,1118,1113,
	1,0,0,0,1118,1119,1,0,0,0,1119,233,1,0,0,0,1120,1121,5,22,0,0,1121,1123,
	3,236,118,0,1122,1120,1,0,0,0,1122,1123,1,0,0,0,1123,235,1,0,0,0,1124,1129,
	3,238,119,0,1125,1126,5,22,0,0,1126,1128,3,238,119,0,1127,1125,1,0,0,0,
	1128,1131,1,0,0,0,1129,1127,1,0,0,0,1129,1130,1,0,0,0,1130,237,1,0,0,0,
	1131,1129,1,0,0,0,1132,1135,3,240,120,0,1133,1135,3,246,123,0,1134,1132,
	1,0,0,0,1134,1133,1,0,0,0,1135,239,1,0,0,0,1136,1137,5,91,0,0,1137,1138,
	3,58,29,0,1138,1139,3,244,122,0,1139,1140,5,92,0,0,1140,241,1,0,0,0,1141,
	1142,3,244,122,0,1142,243,1,0,0,0,1143,1148,3,246,123,0,1144,1145,5,22,
	0,0,1145,1147,3,246,123,0,1146,1144,1,0,0,0,1147,1150,1,0,0,0,1148,1146,
	1,0,0,0,1148,1149,1,0,0,0,1149,245,1,0,0,0,1150,1148,1,0,0,0,1151,1152,
	5,118,0,0,1152,1153,3,170,85,0,1153,247,1,0,0,0,1154,1155,5,39,0,0,1155,
	1156,5,20,0,0,1156,1157,3,250,125,0,1157,1158,5,21,0,0,1158,249,1,0,0,0,
	1159,1169,3,252,126,0,1160,1161,5,22,0,0,1161,1163,5,10,0,0,1162,1164,3,
	270,135,0,1163,1162,1,0,0,0,1163,1164,1,0,0,0,1164,1167,1,0,0,0,1165,1166,
	5,22,0,0,1166,1168,3,274,137,0,1167,1165,1,0,0,0,1167,1168,1,0,0,0,1168,
	1170,1,0,0,0,1169,1160,1,0,0,0,1169,1170,1,0,0,0,1170,251,1,0,0,0,1171,
	1172,3,254,127,0,1172,253,1,0,0,0,1173,1178,3,256,128,0,1174,1175,5,22,
	0,0,1175,1177,3,256,128,0,1176,1174,1,0,0,0,1177,1180,1,0,0,0,1178,1176,
	1,0,0,0,1178,1179,1,0,0,0,1179,255,1,0,0,0,1180,1178,1,0,0,0,1181,1185,
	5,118,0,0,1182,1185,3,258,129,0,1183,1185,3,212,106,0,1184,1181,1,0,0,0,
	1184,1182,1,0,0,0,1184,1183,1,0,0,0,1185,257,1,0,0,0,1186,1187,5,118,0,
	0,1187,1190,5,23,0,0,1188,1191,3,228,114,0,1189,1191,3,260,130,0,1190,1188,
	1,0,0,0,1190,1189,1,0,0,0,1191,1192,1,0,0,0,1192,1193,5,24,0,0,1193,259,
	1,0,0,0,1194,1195,3,262,131,0,1195,261,1,0,0,0,1196,1198,3,264,132,0,1197,
	1199,3,266,133,0,1198,1197,1,0,0,0,1198,1199,1,0,0,0,1199,263,1,0,0,0,1200,
	1203,5,118,0,0,1201,1202,5,8,0,0,1202,1204,5,118,0,0,1203,1201,1,0,0,0,
	1203,1204,1,0,0,0,1204,265,1,0,0,0,1205,1206,5,20,0,0,1206,1211,3,268,134,
	0,1207,1208,5,22,0,0,1208,1210,3,268,134,0,1209,1207,1,0,0,0,1210,1213,
	1,0,0,0,1211,1209,1,0,0,0,1211,1212,1,0,0,0,1212,1214,1,0,0,0,1213,1211,
	1,0,0,0,1214,1215,5,21,0,0,1215,267,1,0,0,0,1216,1219,3,170,85,0,1217,1219,
	3,212,106,0,1218,1216,1,0,0,0,1218,1217,1,0,0,0,1219,269,1,0,0,0,1220,1221,
	5,54,0,0,1221,1222,3,272,136,0,1222,271,1,0,0,0,1223,1230,3,228,114,0,1224,
	1230,3,260,130,0,1225,1226,3,170,85,0,1226,1227,5,93,0,0,1227,1228,3,212,
	106,0,1228,1230,1,0,0,0,1229,1223,1,0,0,0,1229,1224,1,0,0,0,1229,1225,1,
	0,0,0,1230,273,1,0,0,0,1231,1232,3,254,127,0,1232,275,1,0,0,0,1233,1238,
	5,19,0,0,1234,1235,5,20,0,0,1235,1236,3,278,139,0,1236,1237,5,21,0,0,1237,
	1239,1,0,0,0,1238,1234,1,0,0,0,1238,1239,1,0,0,0,1239,277,1,0,0,0,1240,
	1245,3,258,129,0,1241,1242,5,22,0,0,1242,1244,3,258,129,0,1243,1241,1,0,
	0,0,1244,1247,1,0,0,0,1245,1243,1,0,0,0,1245,1246,1,0,0,0,1246,279,1,0,
	0,0,1247,1245,1,0,0,0,1248,1249,5,101,0,0,1249,1250,5,102,0,0,1250,281,
	1,0,0,0,1251,1252,5,20,0,0,1252,1255,5,118,0,0,1253,1254,5,8,0,0,1254,1256,
	5,118,0,0,1255,1253,1,0,0,0,1255,1256,1,0,0,0,1256,1257,1,0,0,0,1257,1269,
	5,21,0,0,1258,1259,5,20,0,0,1259,1264,3,284,142,0,1260,1261,5,22,0,0,1261,
	1263,3,284,142,0,1262,1260,1,0,0,0,1263,1266,1,0,0,0,1264,1262,1,0,0,0,
	1264,1265,1,0,0,0,1265,1267,1,0,0,0,1266,1264,1,0,0,0,1267,1268,5,21,0,
	0,1268,1270,1,0,0,0,1269,1258,1,0,0,0,1269,1270,1,0,0,0,1270,283,1,0,0,
	0,1271,1275,5,2,0,0,1272,1273,5,107,0,0,1273,1275,3,286,143,0,1274,1271,
	1,0,0,0,1274,1272,1,0,0,0,1275,1276,1,0,0,0,1276,1277,3,288,144,0,1277,
	285,1,0,0,0,1278,1279,5,8,0,0,1279,1281,3,286,143,0,1280,1278,1,0,0,0,1280,
	1281,1,0,0,0,1281,287,1,0,0,0,1282,1287,5,118,0,0,1283,1284,5,8,0,0,1284,
	1286,5,118,0,0,1285,1283,1,0,0,0,1286,1289,1,0,0,0,1287,1285,1,0,0,0,1287,
	1288,1,0,0,0,1288,289,1,0,0,0,1289,1287,1,0,0,0,1290,1291,5,46,0,0,1291,
	1292,5,44,0,0,1292,291,1,0,0,0,1293,1294,5,43,0,0,1294,1295,5,44,0,0,1295,
	1300,1,0,0,0,1296,1297,5,20,0,0,1297,1298,3,294,147,0,1298,1299,5,21,0,
	0,1299,1301,1,0,0,0,1300,1296,1,0,0,0,1300,1301,1,0,0,0,1301,293,1,0,0,
	0,1302,1307,3,296,148,0,1303,1304,5,22,0,0,1304,1306,3,296,148,0,1305,1303,
	1,0,0,0,1306,1309,1,0,0,0,1307,1305,1,0,0,0,1307,1308,1,0,0,0,1308,295,
	1,0,0,0,1309,1307,1,0,0,0,1310,1311,5,118,0,0,1311,1314,5,23,0,0,1312,1315,
	5,112,0,0,1313,1315,3,260,130,0,1314,1312,1,0,0,0,1314,1313,1,0,0,0,1315,
	1316,1,0,0,0,1316,1317,5,24,0,0,1317,297,1,0,0,0,1318,1319,7,7,0,0,1319,
	299,1,0,0,0,157,303,313,317,329,333,339,348,351,357,360,366,383,389,395,
	403,411,417,421,425,430,435,440,446,452,454,456,461,467,473,475,477,484,
	489,496,501,507,512,517,522,528,534,540,544,549,559,566,568,576,584,590,
	594,601,605,610,625,630,640,646,652,658,668,672,675,678,680,687,689,696,
	698,700,705,710,716,719,724,730,736,741,745,752,763,765,770,772,782,794,
	796,805,813,825,836,840,844,847,851,855,861,867,873,878,884,889,900,905,
	922,938,945,950,957,960,965,971,981,989,997,1020,1023,1029,1031,1036,1038,
	1045,1062,1072,1080,1083,1088,1090,1094,1103,1118,1122,1129,1134,1148,1163,
	1167,1169,1178,1184,1190,1198,1203,1211,1218,1229,1238,1245,1255,1264,1269,
	1274,1280,1287,1300,1307,1314];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!asn1Parser.__ATN) {
			asn1Parser.__ATN = new ATNDeserializer().deserialize(asn1Parser._serializedATN);
		}

		return asn1Parser.__ATN;
	}


	static DecisionsToDFA = asn1Parser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ModulesContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public moduleDefinition_list(): ModuleDefinitionContext[] {
		return this.getTypedRuleContexts(ModuleDefinitionContext) as ModuleDefinitionContext[];
	}
	public moduleDefinition(i: number): ModuleDefinitionContext {
		return this.getTypedRuleContext(ModuleDefinitionContext, i) as ModuleDefinitionContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_modules;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterModules) {
	 		listener.enterModules(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitModules) {
	 		listener.exitModules(this);
		}
	}
}


export class ModuleDefinitionContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER_list(): TerminalNode[] {
	    	return this.getTokens(asn1Parser.IDENTIFIER);
	}
	public IDENTIFIER(i: number): TerminalNode {
		return this.getToken(asn1Parser.IDENTIFIER, i);
	}
	public DEFINITIONS_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.DEFINITIONS_LITERAL, 0);
	}
	public tagDefault(): TagDefaultContext {
		return this.getTypedRuleContext(TagDefaultContext, 0) as TagDefaultContext;
	}
	public extensionDefault(): ExtensionDefaultContext {
		return this.getTypedRuleContext(ExtensionDefaultContext, 0) as ExtensionDefaultContext;
	}
	public ASSIGN_OP(): TerminalNode {
		return this.getToken(asn1Parser.ASSIGN_OP, 0);
	}
	public BEGIN_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.BEGIN_LITERAL, 0);
	}
	public moduleBody(): ModuleBodyContext {
		return this.getTypedRuleContext(ModuleBodyContext, 0) as ModuleBodyContext;
	}
	public END_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.END_LITERAL, 0);
	}
	public L_BRACE(): TerminalNode {
		return this.getToken(asn1Parser.L_BRACE, 0);
	}
	public R_BRACE(): TerminalNode {
		return this.getToken(asn1Parser.R_BRACE, 0);
	}
	public L_PARAN_list(): TerminalNode[] {
	    	return this.getTokens(asn1Parser.L_PARAN);
	}
	public L_PARAN(i: number): TerminalNode {
		return this.getToken(asn1Parser.L_PARAN, i);
	}
	public NUMBER_list(): TerminalNode[] {
	    	return this.getTokens(asn1Parser.NUMBER);
	}
	public NUMBER(i: number): TerminalNode {
		return this.getToken(asn1Parser.NUMBER, i);
	}
	public R_PARAN_list(): TerminalNode[] {
	    	return this.getTokens(asn1Parser.R_PARAN);
	}
	public R_PARAN(i: number): TerminalNode {
		return this.getToken(asn1Parser.R_PARAN, i);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_moduleDefinition;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterModuleDefinition) {
	 		listener.enterModuleDefinition(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitModuleDefinition) {
	 		listener.exitModuleDefinition(this);
		}
	}
}


export class TagDefaultContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TAGS_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.TAGS_LITERAL, 0);
	}
	public EXPLICIT_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.EXPLICIT_LITERAL, 0);
	}
	public IMPLICIT_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.IMPLICIT_LITERAL, 0);
	}
	public AUTOMATIC_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.AUTOMATIC_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_tagDefault;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterTagDefault) {
	 		listener.enterTagDefault(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitTagDefault) {
	 		listener.exitTagDefault(this);
		}
	}
}


export class ExtensionDefaultContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXTENSIBILITY_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.EXTENSIBILITY_LITERAL, 0);
	}
	public IMPLIED_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.IMPLIED_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_extensionDefault;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterExtensionDefault) {
	 		listener.enterExtensionDefault(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitExtensionDefault) {
	 		listener.exitExtensionDefault(this);
		}
	}
}


export class ModuleBodyContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public exports(): ExportsContext {
		return this.getTypedRuleContext(ExportsContext, 0) as ExportsContext;
	}
	public imports(): ImportsContext {
		return this.getTypedRuleContext(ImportsContext, 0) as ImportsContext;
	}
	public assignmentList(): AssignmentListContext {
		return this.getTypedRuleContext(AssignmentListContext, 0) as AssignmentListContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_moduleBody;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterModuleBody) {
	 		listener.enterModuleBody(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitModuleBody) {
	 		listener.exitModuleBody(this);
		}
	}
}


export class ExportsContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXPORTS_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.EXPORTS_LITERAL, 0);
	}
	public symbolsExported(): SymbolsExportedContext {
		return this.getTypedRuleContext(SymbolsExportedContext, 0) as SymbolsExportedContext;
	}
	public SEMI_COLON(): TerminalNode {
		return this.getToken(asn1Parser.SEMI_COLON, 0);
	}
	public ALL_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.ALL_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_exports;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterExports) {
	 		listener.enterExports(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitExports) {
	 		listener.exitExports(this);
		}
	}
}


export class SymbolsExportedContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public symbolList(): SymbolListContext {
		return this.getTypedRuleContext(SymbolListContext, 0) as SymbolListContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_symbolsExported;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterSymbolsExported) {
	 		listener.enterSymbolsExported(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitSymbolsExported) {
	 		listener.exitSymbolsExported(this);
		}
	}
}


export class ImportsContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IMPORTS_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.IMPORTS_LITERAL, 0);
	}
	public symbolsImported(): SymbolsImportedContext {
		return this.getTypedRuleContext(SymbolsImportedContext, 0) as SymbolsImportedContext;
	}
	public SEMI_COLON(): TerminalNode {
		return this.getToken(asn1Parser.SEMI_COLON, 0);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_imports;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterImports) {
	 		listener.enterImports(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitImports) {
	 		listener.exitImports(this);
		}
	}
}


export class SymbolsImportedContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public symbolsFromModuleList(): SymbolsFromModuleListContext {
		return this.getTypedRuleContext(SymbolsFromModuleListContext, 0) as SymbolsFromModuleListContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_symbolsImported;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterSymbolsImported) {
	 		listener.enterSymbolsImported(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitSymbolsImported) {
	 		listener.exitSymbolsImported(this);
		}
	}
}


export class SymbolsFromModuleListContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public symbolsFromModule_list(): SymbolsFromModuleContext[] {
		return this.getTypedRuleContexts(SymbolsFromModuleContext) as SymbolsFromModuleContext[];
	}
	public symbolsFromModule(i: number): SymbolsFromModuleContext {
		return this.getTypedRuleContext(SymbolsFromModuleContext, i) as SymbolsFromModuleContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_symbolsFromModuleList;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterSymbolsFromModuleList) {
	 		listener.enterSymbolsFromModuleList(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitSymbolsFromModuleList) {
	 		listener.exitSymbolsFromModuleList(this);
		}
	}
}


export class SymbolsFromModuleContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public symbolList(): SymbolListContext {
		return this.getTypedRuleContext(SymbolListContext, 0) as SymbolListContext;
	}
	public FROM_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.FROM_LITERAL, 0);
	}
	public globalModuleReference(): GlobalModuleReferenceContext {
		return this.getTypedRuleContext(GlobalModuleReferenceContext, 0) as GlobalModuleReferenceContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_symbolsFromModule;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterSymbolsFromModule) {
	 		listener.enterSymbolsFromModule(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitSymbolsFromModule) {
	 		listener.exitSymbolsFromModule(this);
		}
	}
}


export class GlobalModuleReferenceContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(asn1Parser.IDENTIFIER, 0);
	}
	public assignedIdentifier(): AssignedIdentifierContext {
		return this.getTypedRuleContext(AssignedIdentifierContext, 0) as AssignedIdentifierContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_globalModuleReference;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterGlobalModuleReference) {
	 		listener.enterGlobalModuleReference(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitGlobalModuleReference) {
	 		listener.exitGlobalModuleReference(this);
		}
	}
}


export class AssignedIdentifierContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_assignedIdentifier;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterAssignedIdentifier) {
	 		listener.enterAssignedIdentifier(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitAssignedIdentifier) {
	 		listener.exitAssignedIdentifier(this);
		}
	}
}


export class SymbolListContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public symbol__list(): SymbolContext[] {
		return this.getTypedRuleContexts(SymbolContext) as SymbolContext[];
	}
	public symbol_(i: number): SymbolContext {
		return this.getTypedRuleContext(SymbolContext, i) as SymbolContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(asn1Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(asn1Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_symbolList;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterSymbolList) {
	 		listener.enterSymbolList(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitSymbolList) {
	 		listener.exitSymbolList(this);
		}
	}
}


export class SymbolContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(asn1Parser.IDENTIFIER, 0);
	}
	public L_BRACE(): TerminalNode {
		return this.getToken(asn1Parser.L_BRACE, 0);
	}
	public R_BRACE(): TerminalNode {
		return this.getToken(asn1Parser.R_BRACE, 0);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_symbol;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterSymbol) {
	 		listener.enterSymbol(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitSymbol) {
	 		listener.exitSymbol(this);
		}
	}
}


export class AssignmentListContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assignment_list(): AssignmentContext[] {
		return this.getTypedRuleContexts(AssignmentContext) as AssignmentContext[];
	}
	public assignment(i: number): AssignmentContext {
		return this.getTypedRuleContext(AssignmentContext, i) as AssignmentContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_assignmentList;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterAssignmentList) {
	 		listener.enterAssignmentList(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitAssignmentList) {
	 		listener.exitAssignmentList(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(asn1Parser.IDENTIFIER, 0);
	}
	public valueAssignment(): ValueAssignmentContext {
		return this.getTypedRuleContext(ValueAssignmentContext, 0) as ValueAssignmentContext;
	}
	public typeAssignment(): TypeAssignmentContext {
		return this.getTypedRuleContext(TypeAssignmentContext, 0) as TypeAssignmentContext;
	}
	public parameterizedAssignment(): ParameterizedAssignmentContext {
		return this.getTypedRuleContext(ParameterizedAssignmentContext, 0) as ParameterizedAssignmentContext;
	}
	public objectClassAssignment(): ObjectClassAssignmentContext {
		return this.getTypedRuleContext(ObjectClassAssignmentContext, 0) as ObjectClassAssignmentContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_assignment;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterAssignment) {
	 		listener.enterAssignment(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitAssignment) {
	 		listener.exitAssignment(this);
		}
	}
}


export class SequenceTypeContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SEQUENCE_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.SEQUENCE_LITERAL, 0);
	}
	public L_BRACE(): TerminalNode {
		return this.getToken(asn1Parser.L_BRACE, 0);
	}
	public R_BRACE(): TerminalNode {
		return this.getToken(asn1Parser.R_BRACE, 0);
	}
	public extensionAndException(): ExtensionAndExceptionContext {
		return this.getTypedRuleContext(ExtensionAndExceptionContext, 0) as ExtensionAndExceptionContext;
	}
	public optionalExtensionMarker(): OptionalExtensionMarkerContext {
		return this.getTypedRuleContext(OptionalExtensionMarkerContext, 0) as OptionalExtensionMarkerContext;
	}
	public componentTypeLists(): ComponentTypeListsContext {
		return this.getTypedRuleContext(ComponentTypeListsContext, 0) as ComponentTypeListsContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_sequenceType;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterSequenceType) {
	 		listener.enterSequenceType(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitSequenceType) {
	 		listener.exitSequenceType(this);
		}
	}
}


export class ExtensionAndExceptionContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ELLIPSIS(): TerminalNode {
		return this.getToken(asn1Parser.ELLIPSIS, 0);
	}
	public exceptionSpec(): ExceptionSpecContext {
		return this.getTypedRuleContext(ExceptionSpecContext, 0) as ExceptionSpecContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_extensionAndException;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterExtensionAndException) {
	 		listener.enterExtensionAndException(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitExtensionAndException) {
	 		listener.exitExtensionAndException(this);
		}
	}
}


export class OptionalExtensionMarkerContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COMMA(): TerminalNode {
		return this.getToken(asn1Parser.COMMA, 0);
	}
	public ELLIPSIS(): TerminalNode {
		return this.getToken(asn1Parser.ELLIPSIS, 0);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_optionalExtensionMarker;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterOptionalExtensionMarker) {
	 		listener.enterOptionalExtensionMarker(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitOptionalExtensionMarker) {
	 		listener.exitOptionalExtensionMarker(this);
		}
	}
}


export class ComponentTypeListsContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public rootComponentTypeList_list(): RootComponentTypeListContext[] {
		return this.getTypedRuleContexts(RootComponentTypeListContext) as RootComponentTypeListContext[];
	}
	public rootComponentTypeList(i: number): RootComponentTypeListContext {
		return this.getTypedRuleContext(RootComponentTypeListContext, i) as RootComponentTypeListContext;
	}
	public tag_list(): TagContext[] {
		return this.getTypedRuleContexts(TagContext) as TagContext[];
	}
	public tag(i: number): TagContext {
		return this.getTypedRuleContext(TagContext, i) as TagContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(asn1Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(asn1Parser.COMMA, i);
	}
	public extensionAndException(): ExtensionAndExceptionContext {
		return this.getTypedRuleContext(ExtensionAndExceptionContext, 0) as ExtensionAndExceptionContext;
	}
	public extensionAdditions(): ExtensionAdditionsContext {
		return this.getTypedRuleContext(ExtensionAdditionsContext, 0) as ExtensionAdditionsContext;
	}
	public ELLIPSIS(): TerminalNode {
		return this.getToken(asn1Parser.ELLIPSIS, 0);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_componentTypeLists;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterComponentTypeLists) {
	 		listener.enterComponentTypeLists(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitComponentTypeLists) {
	 		listener.exitComponentTypeLists(this);
		}
	}
}


export class RootComponentTypeListContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public componentTypeList(): ComponentTypeListContext {
		return this.getTypedRuleContext(ComponentTypeListContext, 0) as ComponentTypeListContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_rootComponentTypeList;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterRootComponentTypeList) {
	 		listener.enterRootComponentTypeList(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitRootComponentTypeList) {
	 		listener.exitRootComponentTypeList(this);
		}
	}
}


export class ComponentTypeListContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public componentType_list(): ComponentTypeContext[] {
		return this.getTypedRuleContexts(ComponentTypeContext) as ComponentTypeContext[];
	}
	public componentType(i: number): ComponentTypeContext {
		return this.getTypedRuleContext(ComponentTypeContext, i) as ComponentTypeContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(asn1Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(asn1Parser.COMMA, i);
	}
	public tag_list(): TagContext[] {
		return this.getTypedRuleContexts(TagContext) as TagContext[];
	}
	public tag(i: number): TagContext {
		return this.getTypedRuleContext(TagContext, i) as TagContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_componentTypeList;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterComponentTypeList) {
	 		listener.enterComponentTypeList(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitComponentTypeList) {
	 		listener.exitComponentTypeList(this);
		}
	}
}


export class ComponentTypeContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public namedType(): NamedTypeContext {
		return this.getTypedRuleContext(NamedTypeContext, 0) as NamedTypeContext;
	}
	public OPTIONAL_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.OPTIONAL_LITERAL, 0);
	}
	public DEFAULT_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.DEFAULT_LITERAL, 0);
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
	public COMPONENTS_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.COMPONENTS_LITERAL, 0);
	}
	public OF_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.OF_LITERAL, 0);
	}
	public asnType(): AsnTypeContext {
		return this.getTypedRuleContext(AsnTypeContext, 0) as AsnTypeContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_componentType;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterComponentType) {
	 		listener.enterComponentType(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitComponentType) {
	 		listener.exitComponentType(this);
		}
	}
}


export class TagContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TAG(): TerminalNode {
		return this.getToken(asn1Parser.TAG, 0);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_tag;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterTag) {
	 		listener.enterTag(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitTag) {
	 		listener.exitTag(this);
		}
	}
}


export class ExtensionAdditionsContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COMMA(): TerminalNode {
		return this.getToken(asn1Parser.COMMA, 0);
	}
	public extensionAdditionList(): ExtensionAdditionListContext {
		return this.getTypedRuleContext(ExtensionAdditionListContext, 0) as ExtensionAdditionListContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_extensionAdditions;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterExtensionAdditions) {
	 		listener.enterExtensionAdditions(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitExtensionAdditions) {
	 		listener.exitExtensionAdditions(this);
		}
	}
}


export class ExtensionAdditionListContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public extensionAddition_list(): ExtensionAdditionContext[] {
		return this.getTypedRuleContexts(ExtensionAdditionContext) as ExtensionAdditionContext[];
	}
	public extensionAddition(i: number): ExtensionAdditionContext {
		return this.getTypedRuleContext(ExtensionAdditionContext, i) as ExtensionAdditionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(asn1Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(asn1Parser.COMMA, i);
	}
	public tag_list(): TagContext[] {
		return this.getTypedRuleContexts(TagContext) as TagContext[];
	}
	public tag(i: number): TagContext {
		return this.getTypedRuleContext(TagContext, i) as TagContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_extensionAdditionList;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterExtensionAdditionList) {
	 		listener.enterExtensionAdditionList(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitExtensionAdditionList) {
	 		listener.exitExtensionAdditionList(this);
		}
	}
}


export class ExtensionAdditionContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public componentType(): ComponentTypeContext {
		return this.getTypedRuleContext(ComponentTypeContext, 0) as ComponentTypeContext;
	}
	public extensionAdditionGroup(): ExtensionAdditionGroupContext {
		return this.getTypedRuleContext(ExtensionAdditionGroupContext, 0) as ExtensionAdditionGroupContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_extensionAddition;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterExtensionAddition) {
	 		listener.enterExtensionAddition(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitExtensionAddition) {
	 		listener.exitExtensionAddition(this);
		}
	}
}


export class ExtensionAdditionGroupContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DOUBLE_L_BRACKET(): TerminalNode {
		return this.getToken(asn1Parser.DOUBLE_L_BRACKET, 0);
	}
	public versionNumber(): VersionNumberContext {
		return this.getTypedRuleContext(VersionNumberContext, 0) as VersionNumberContext;
	}
	public componentTypeList(): ComponentTypeListContext {
		return this.getTypedRuleContext(ComponentTypeListContext, 0) as ComponentTypeListContext;
	}
	public DOUBLE_R_BRACKET(): TerminalNode {
		return this.getToken(asn1Parser.DOUBLE_R_BRACKET, 0);
	}
	public tag(): TagContext {
		return this.getTypedRuleContext(TagContext, 0) as TagContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_extensionAdditionGroup;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterExtensionAdditionGroup) {
	 		listener.enterExtensionAdditionGroup(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitExtensionAdditionGroup) {
	 		listener.exitExtensionAdditionGroup(this);
		}
	}
}


export class VersionNumberContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NUMBER(): TerminalNode {
		return this.getToken(asn1Parser.NUMBER, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(asn1Parser.COLON, 0);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_versionNumber;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterVersionNumber) {
	 		listener.enterVersionNumber(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitVersionNumber) {
	 		listener.exitVersionNumber(this);
		}
	}
}


export class SequenceOfTypeContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SEQUENCE_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.SEQUENCE_LITERAL, 0);
	}
	public OF_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.OF_LITERAL, 0);
	}
	public asnType(): AsnTypeContext {
		return this.getTypedRuleContext(AsnTypeContext, 0) as AsnTypeContext;
	}
	public namedType(): NamedTypeContext {
		return this.getTypedRuleContext(NamedTypeContext, 0) as NamedTypeContext;
	}
	public L_PARAN(): TerminalNode {
		return this.getToken(asn1Parser.L_PARAN, 0);
	}
	public R_PARAN(): TerminalNode {
		return this.getToken(asn1Parser.R_PARAN, 0);
	}
	public constraint(): ConstraintContext {
		return this.getTypedRuleContext(ConstraintContext, 0) as ConstraintContext;
	}
	public sizeConstraint(): SizeConstraintContext {
		return this.getTypedRuleContext(SizeConstraintContext, 0) as SizeConstraintContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_sequenceOfType;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterSequenceOfType) {
	 		listener.enterSequenceOfType(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitSequenceOfType) {
	 		listener.exitSequenceOfType(this);
		}
	}
}


export class SizeConstraintContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SIZE_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.SIZE_LITERAL, 0);
	}
	public constraint(): ConstraintContext {
		return this.getTypedRuleContext(ConstraintContext, 0) as ConstraintContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_sizeConstraint;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterSizeConstraint) {
	 		listener.enterSizeConstraint(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitSizeConstraint) {
	 		listener.exitSizeConstraint(this);
		}
	}
}


export class ParameterizedAssignmentContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public parameterList(): ParameterListContext {
		return this.getTypedRuleContext(ParameterListContext, 0) as ParameterListContext;
	}
	public ASSIGN_OP(): TerminalNode {
		return this.getToken(asn1Parser.ASSIGN_OP, 0);
	}
	public asnType(): AsnTypeContext {
		return this.getTypedRuleContext(AsnTypeContext, 0) as AsnTypeContext;
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
	public valueSet(): ValueSetContext {
		return this.getTypedRuleContext(ValueSetContext, 0) as ValueSetContext;
	}
	public definedObjectClass(): DefinedObjectClassContext {
		return this.getTypedRuleContext(DefinedObjectClassContext, 0) as DefinedObjectClassContext;
	}
	public object(): ObjectContext {
		return this.getTypedRuleContext(ObjectContext, 0) as ObjectContext;
	}
	public objectClass(): ObjectClassContext {
		return this.getTypedRuleContext(ObjectClassContext, 0) as ObjectClassContext;
	}
	public objectSet(): ObjectSetContext {
		return this.getTypedRuleContext(ObjectSetContext, 0) as ObjectSetContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_parameterizedAssignment;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterParameterizedAssignment) {
	 		listener.enterParameterizedAssignment(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitParameterizedAssignment) {
	 		listener.exitParameterizedAssignment(this);
		}
	}
}


export class ParameterListContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public L_BRACE(): TerminalNode {
		return this.getToken(asn1Parser.L_BRACE, 0);
	}
	public parameter_list(): ParameterContext[] {
		return this.getTypedRuleContexts(ParameterContext) as ParameterContext[];
	}
	public parameter(i: number): ParameterContext {
		return this.getTypedRuleContext(ParameterContext, i) as ParameterContext;
	}
	public R_BRACE(): TerminalNode {
		return this.getToken(asn1Parser.R_BRACE, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(asn1Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(asn1Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_parameterList;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterParameterList) {
	 		listener.enterParameterList(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitParameterList) {
	 		listener.exitParameterList(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(asn1Parser.IDENTIFIER, 0);
	}
	public paramGovernor(): ParamGovernorContext {
		return this.getTypedRuleContext(ParamGovernorContext, 0) as ParamGovernorContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(asn1Parser.COLON, 0);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_parameter;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterParameter) {
	 		listener.enterParameter(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitParameter) {
	 		listener.exitParameter(this);
		}
	}
}


export class ParamGovernorContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public governor(): GovernorContext {
		return this.getTypedRuleContext(GovernorContext, 0) as GovernorContext;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(asn1Parser.IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_paramGovernor;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterParamGovernor) {
	 		listener.enterParamGovernor(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitParamGovernor) {
	 		listener.exitParamGovernor(this);
		}
	}
}


export class GovernorContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public asnType(): AsnTypeContext {
		return this.getTypedRuleContext(AsnTypeContext, 0) as AsnTypeContext;
	}
	public definedObjectClass(): DefinedObjectClassContext {
		return this.getTypedRuleContext(DefinedObjectClassContext, 0) as DefinedObjectClassContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_governor;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterGovernor) {
	 		listener.enterGovernor(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitGovernor) {
	 		listener.exitGovernor(this);
		}
	}
}


export class ObjectClassAssignmentContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ASSIGN_OP(): TerminalNode {
		return this.getToken(asn1Parser.ASSIGN_OP, 0);
	}
	public objectClass(): ObjectClassContext {
		return this.getTypedRuleContext(ObjectClassContext, 0) as ObjectClassContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_objectClassAssignment;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterObjectClassAssignment) {
	 		listener.enterObjectClassAssignment(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitObjectClassAssignment) {
	 		listener.exitObjectClassAssignment(this);
		}
	}
}


export class ObjectClassContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public definedObjectClass(): DefinedObjectClassContext {
		return this.getTypedRuleContext(DefinedObjectClassContext, 0) as DefinedObjectClassContext;
	}
	public objectClassDefn(): ObjectClassDefnContext {
		return this.getTypedRuleContext(ObjectClassDefnContext, 0) as ObjectClassDefnContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_objectClass;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterObjectClass) {
	 		listener.enterObjectClass(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitObjectClass) {
	 		listener.exitObjectClass(this);
		}
	}
}


export class DefinedObjectClassContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER_list(): TerminalNode[] {
	    	return this.getTokens(asn1Parser.IDENTIFIER);
	}
	public IDENTIFIER(i: number): TerminalNode {
		return this.getToken(asn1Parser.IDENTIFIER, i);
	}
	public DOT(): TerminalNode {
		return this.getToken(asn1Parser.DOT, 0);
	}
	public TYPE_IDENTIFIER_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.TYPE_IDENTIFIER_LITERAL, 0);
	}
	public ABSTRACT_SYNTAX_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.ABSTRACT_SYNTAX_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_definedObjectClass;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterDefinedObjectClass) {
	 		listener.enterDefinedObjectClass(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitDefinedObjectClass) {
	 		listener.exitDefinedObjectClass(this);
		}
	}
}


export class UsefulObjectClassReferenceContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TYPE_IDENTIFIER_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.TYPE_IDENTIFIER_LITERAL, 0);
	}
	public ABSTRACT_SYNTAX_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.ABSTRACT_SYNTAX_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_usefulObjectClassReference;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterUsefulObjectClassReference) {
	 		listener.enterUsefulObjectClassReference(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitUsefulObjectClassReference) {
	 		listener.exitUsefulObjectClassReference(this);
		}
	}
}


export class ExternalObjectClassReferenceContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER_list(): TerminalNode[] {
	    	return this.getTokens(asn1Parser.IDENTIFIER);
	}
	public IDENTIFIER(i: number): TerminalNode {
		return this.getToken(asn1Parser.IDENTIFIER, i);
	}
	public DOT(): TerminalNode {
		return this.getToken(asn1Parser.DOT, 0);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_externalObjectClassReference;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterExternalObjectClassReference) {
	 		listener.enterExternalObjectClassReference(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitExternalObjectClassReference) {
	 		listener.exitExternalObjectClassReference(this);
		}
	}
}


export class ObjectClassDefnContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CLASS_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.CLASS_LITERAL, 0);
	}
	public L_BRACE(): TerminalNode {
		return this.getToken(asn1Parser.L_BRACE, 0);
	}
	public fieldSpec_list(): FieldSpecContext[] {
		return this.getTypedRuleContexts(FieldSpecContext) as FieldSpecContext[];
	}
	public fieldSpec(i: number): FieldSpecContext {
		return this.getTypedRuleContext(FieldSpecContext, i) as FieldSpecContext;
	}
	public R_BRACE(): TerminalNode {
		return this.getToken(asn1Parser.R_BRACE, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(asn1Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(asn1Parser.COMMA, i);
	}
	public withSyntaxSpec(): WithSyntaxSpecContext {
		return this.getTypedRuleContext(WithSyntaxSpecContext, 0) as WithSyntaxSpecContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_objectClassDefn;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterObjectClassDefn) {
	 		listener.enterObjectClassDefn(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitObjectClassDefn) {
	 		listener.exitObjectClassDefn(this);
		}
	}
}


export class WithSyntaxSpecContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WITH_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.WITH_LITERAL, 0);
	}
	public SYNTAX_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.SYNTAX_LITERAL, 0);
	}
	public syntaxList(): SyntaxListContext {
		return this.getTypedRuleContext(SyntaxListContext, 0) as SyntaxListContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_withSyntaxSpec;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterWithSyntaxSpec) {
	 		listener.enterWithSyntaxSpec(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitWithSyntaxSpec) {
	 		listener.exitWithSyntaxSpec(this);
		}
	}
}


export class SyntaxListContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public L_BRACE(): TerminalNode {
		return this.getToken(asn1Parser.L_BRACE, 0);
	}
	public R_BRACE(): TerminalNode {
		return this.getToken(asn1Parser.R_BRACE, 0);
	}
	public tokenOrGroupSpec_list(): TokenOrGroupSpecContext[] {
		return this.getTypedRuleContexts(TokenOrGroupSpecContext) as TokenOrGroupSpecContext[];
	}
	public tokenOrGroupSpec(i: number): TokenOrGroupSpecContext {
		return this.getTypedRuleContext(TokenOrGroupSpecContext, i) as TokenOrGroupSpecContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_syntaxList;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterSyntaxList) {
	 		listener.enterSyntaxList(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitSyntaxList) {
	 		listener.exitSyntaxList(this);
		}
	}
}


export class TokenOrGroupSpecContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public requiredToken(): RequiredTokenContext {
		return this.getTypedRuleContext(RequiredTokenContext, 0) as RequiredTokenContext;
	}
	public optionalGroup(): OptionalGroupContext {
		return this.getTypedRuleContext(OptionalGroupContext, 0) as OptionalGroupContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_tokenOrGroupSpec;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterTokenOrGroupSpec) {
	 		listener.enterTokenOrGroupSpec(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitTokenOrGroupSpec) {
	 		listener.exitTokenOrGroupSpec(this);
		}
	}
}


export class OptionalGroupContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public L_BRACKET(): TerminalNode {
		return this.getToken(asn1Parser.L_BRACKET, 0);
	}
	public R_BRACKET(): TerminalNode {
		return this.getToken(asn1Parser.R_BRACKET, 0);
	}
	public tokenOrGroupSpec_list(): TokenOrGroupSpecContext[] {
		return this.getTypedRuleContexts(TokenOrGroupSpecContext) as TokenOrGroupSpecContext[];
	}
	public tokenOrGroupSpec(i: number): TokenOrGroupSpecContext {
		return this.getTypedRuleContext(TokenOrGroupSpecContext, i) as TokenOrGroupSpecContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_optionalGroup;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterOptionalGroup) {
	 		listener.enterOptionalGroup(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitOptionalGroup) {
	 		listener.exitOptionalGroup(this);
		}
	}
}


export class RequiredTokenContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public literal(): LiteralContext {
		return this.getTypedRuleContext(LiteralContext, 0) as LiteralContext;
	}
	public primitiveFieldName(): PrimitiveFieldNameContext {
		return this.getTypedRuleContext(PrimitiveFieldNameContext, 0) as PrimitiveFieldNameContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_requiredToken;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterRequiredToken) {
	 		listener.enterRequiredToken(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitRequiredToken) {
	 		listener.exitRequiredToken(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(asn1Parser.IDENTIFIER, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(asn1Parser.COMMA, 0);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_literal;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterLiteral) {
	 		listener.enterLiteral(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitLiteral) {
	 		listener.exitLiteral(this);
		}
	}
}


export class PrimitiveFieldNameContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AMPERSAND(): TerminalNode {
		return this.getToken(asn1Parser.AMPERSAND, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(asn1Parser.IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_primitiveFieldName;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterPrimitiveFieldName) {
	 		listener.enterPrimitiveFieldName(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitPrimitiveFieldName) {
	 		listener.exitPrimitiveFieldName(this);
		}
	}
}


export class FieldSpecContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AMPERSAND(): TerminalNode {
		return this.getToken(asn1Parser.AMPERSAND, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(asn1Parser.IDENTIFIER, 0);
	}
	public asnType(): AsnTypeContext {
		return this.getTypedRuleContext(AsnTypeContext, 0) as AsnTypeContext;
	}
	public fieldName(): FieldNameContext {
		return this.getTypedRuleContext(FieldNameContext, 0) as FieldNameContext;
	}
	public definedObjectClass(): DefinedObjectClassContext {
		return this.getTypedRuleContext(DefinedObjectClassContext, 0) as DefinedObjectClassContext;
	}
	public typeOptionalitySpec(): TypeOptionalitySpecContext {
		return this.getTypedRuleContext(TypeOptionalitySpecContext, 0) as TypeOptionalitySpecContext;
	}
	public OPTIONAL_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.OPTIONAL_LITERAL, 0);
	}
	public valueSetOptionalitySpec(): ValueSetOptionalitySpecContext {
		return this.getTypedRuleContext(ValueSetOptionalitySpecContext, 0) as ValueSetOptionalitySpecContext;
	}
	public UNIQUE_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.UNIQUE_LITERAL, 0);
	}
	public valueOptionalitySpec(): ValueOptionalitySpecContext {
		return this.getTypedRuleContext(ValueOptionalitySpecContext, 0) as ValueOptionalitySpecContext;
	}
	public DEFAULT_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.DEFAULT_LITERAL, 0);
	}
	public valueSet(): ValueSetContext {
		return this.getTypedRuleContext(ValueSetContext, 0) as ValueSetContext;
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
	public objectSet(): ObjectSetContext {
		return this.getTypedRuleContext(ObjectSetContext, 0) as ObjectSetContext;
	}
	public object(): ObjectContext {
		return this.getTypedRuleContext(ObjectContext, 0) as ObjectContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_fieldSpec;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterFieldSpec) {
	 		listener.enterFieldSpec(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitFieldSpec) {
	 		listener.exitFieldSpec(this);
		}
	}
}


export class TypeFieldSpecContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AMPERSAND(): TerminalNode {
		return this.getToken(asn1Parser.AMPERSAND, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(asn1Parser.IDENTIFIER, 0);
	}
	public typeOptionalitySpec(): TypeOptionalitySpecContext {
		return this.getTypedRuleContext(TypeOptionalitySpecContext, 0) as TypeOptionalitySpecContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_typeFieldSpec;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterTypeFieldSpec) {
	 		listener.enterTypeFieldSpec(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitTypeFieldSpec) {
	 		listener.exitTypeFieldSpec(this);
		}
	}
}


export class TypeOptionalitySpecContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPTIONAL_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.OPTIONAL_LITERAL, 0);
	}
	public DEFAULT_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.DEFAULT_LITERAL, 0);
	}
	public asnType(): AsnTypeContext {
		return this.getTypedRuleContext(AsnTypeContext, 0) as AsnTypeContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_typeOptionalitySpec;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterTypeOptionalitySpec) {
	 		listener.enterTypeOptionalitySpec(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitTypeOptionalitySpec) {
	 		listener.exitTypeOptionalitySpec(this);
		}
	}
}


export class FixedTypeValueFieldSpecContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AMPERSAND(): TerminalNode {
		return this.getToken(asn1Parser.AMPERSAND, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(asn1Parser.IDENTIFIER, 0);
	}
	public asnType(): AsnTypeContext {
		return this.getTypedRuleContext(AsnTypeContext, 0) as AsnTypeContext;
	}
	public UNIQUE_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.UNIQUE_LITERAL, 0);
	}
	public valueOptionalitySpec(): ValueOptionalitySpecContext {
		return this.getTypedRuleContext(ValueOptionalitySpecContext, 0) as ValueOptionalitySpecContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_fixedTypeValueFieldSpec;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterFixedTypeValueFieldSpec) {
	 		listener.enterFixedTypeValueFieldSpec(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitFixedTypeValueFieldSpec) {
	 		listener.exitFixedTypeValueFieldSpec(this);
		}
	}
}


export class ValueOptionalitySpecContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPTIONAL_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.OPTIONAL_LITERAL, 0);
	}
	public DEFAULT_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.DEFAULT_LITERAL, 0);
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_valueOptionalitySpec;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterValueOptionalitySpec) {
	 		listener.enterValueOptionalitySpec(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitValueOptionalitySpec) {
	 		listener.exitValueOptionalitySpec(this);
		}
	}
}


export class VariableTypeValueFieldSpecContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AMPERSAND(): TerminalNode {
		return this.getToken(asn1Parser.AMPERSAND, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(asn1Parser.IDENTIFIER, 0);
	}
	public fieldName(): FieldNameContext {
		return this.getTypedRuleContext(FieldNameContext, 0) as FieldNameContext;
	}
	public valueOptionalitySpec(): ValueOptionalitySpecContext {
		return this.getTypedRuleContext(ValueOptionalitySpecContext, 0) as ValueOptionalitySpecContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_variableTypeValueFieldSpec;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterVariableTypeValueFieldSpec) {
	 		listener.enterVariableTypeValueFieldSpec(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitVariableTypeValueFieldSpec) {
	 		listener.exitVariableTypeValueFieldSpec(this);
		}
	}
}


export class FixedTypeValueSetFieldSpecContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AMPERSAND(): TerminalNode {
		return this.getToken(asn1Parser.AMPERSAND, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(asn1Parser.IDENTIFIER, 0);
	}
	public asnType(): AsnTypeContext {
		return this.getTypedRuleContext(AsnTypeContext, 0) as AsnTypeContext;
	}
	public valueSetOptionalitySpec(): ValueSetOptionalitySpecContext {
		return this.getTypedRuleContext(ValueSetOptionalitySpecContext, 0) as ValueSetOptionalitySpecContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_fixedTypeValueSetFieldSpec;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterFixedTypeValueSetFieldSpec) {
	 		listener.enterFixedTypeValueSetFieldSpec(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitFixedTypeValueSetFieldSpec) {
	 		listener.exitFixedTypeValueSetFieldSpec(this);
		}
	}
}


export class ValueSetOptionalitySpecContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPTIONAL_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.OPTIONAL_LITERAL, 0);
	}
	public DEFAULT_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.DEFAULT_LITERAL, 0);
	}
	public valueSet(): ValueSetContext {
		return this.getTypedRuleContext(ValueSetContext, 0) as ValueSetContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_valueSetOptionalitySpec;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterValueSetOptionalitySpec) {
	 		listener.enterValueSetOptionalitySpec(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitValueSetOptionalitySpec) {
	 		listener.exitValueSetOptionalitySpec(this);
		}
	}
}


export class ObjectContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public definedObject(): DefinedObjectContext {
		return this.getTypedRuleContext(DefinedObjectContext, 0) as DefinedObjectContext;
	}
	public parameterizedObject(): ParameterizedObjectContext {
		return this.getTypedRuleContext(ParameterizedObjectContext, 0) as ParameterizedObjectContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_object;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterObject) {
	 		listener.enterObject(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitObject) {
	 		listener.exitObject(this);
		}
	}
}


export class ParameterizedObjectContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public definedObject(): DefinedObjectContext {
		return this.getTypedRuleContext(DefinedObjectContext, 0) as DefinedObjectContext;
	}
	public actualParameterList(): ActualParameterListContext {
		return this.getTypedRuleContext(ActualParameterListContext, 0) as ActualParameterListContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_parameterizedObject;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterParameterizedObject) {
	 		listener.enterParameterizedObject(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitParameterizedObject) {
	 		listener.exitParameterizedObject(this);
		}
	}
}


export class DefinedObjectContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(asn1Parser.IDENTIFIER, 0);
	}
	public DOT(): TerminalNode {
		return this.getToken(asn1Parser.DOT, 0);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_definedObject;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterDefinedObject) {
	 		listener.enterDefinedObject(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitDefinedObject) {
	 		listener.exitDefinedObject(this);
		}
	}
}


export class ObjectSetContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public L_BRACE(): TerminalNode {
		return this.getToken(asn1Parser.L_BRACE, 0);
	}
	public objectSetSpec(): ObjectSetSpecContext {
		return this.getTypedRuleContext(ObjectSetSpecContext, 0) as ObjectSetSpecContext;
	}
	public R_BRACE(): TerminalNode {
		return this.getToken(asn1Parser.R_BRACE, 0);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_objectSet;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterObjectSet) {
	 		listener.enterObjectSet(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitObjectSet) {
	 		listener.exitObjectSet(this);
		}
	}
}


export class ObjectSetSpecContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public rootElementSetSpec(): RootElementSetSpecContext {
		return this.getTypedRuleContext(RootElementSetSpecContext, 0) as RootElementSetSpecContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(asn1Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(asn1Parser.COMMA, i);
	}
	public ELLIPSIS(): TerminalNode {
		return this.getToken(asn1Parser.ELLIPSIS, 0);
	}
	public additionalElementSetSpec(): AdditionalElementSetSpecContext {
		return this.getTypedRuleContext(AdditionalElementSetSpecContext, 0) as AdditionalElementSetSpecContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_objectSetSpec;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterObjectSetSpec) {
	 		listener.enterObjectSetSpec(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitObjectSetSpec) {
	 		listener.exitObjectSetSpec(this);
		}
	}
}


export class FieldNameContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AMPERSAND_list(): TerminalNode[] {
	    	return this.getTokens(asn1Parser.AMPERSAND);
	}
	public AMPERSAND(i: number): TerminalNode {
		return this.getToken(asn1Parser.AMPERSAND, i);
	}
	public IDENTIFIER_list(): TerminalNode[] {
	    	return this.getTokens(asn1Parser.IDENTIFIER);
	}
	public IDENTIFIER(i: number): TerminalNode {
		return this.getToken(asn1Parser.IDENTIFIER, i);
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(asn1Parser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(asn1Parser.DOT, i);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_fieldName;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterFieldName) {
	 		listener.enterFieldName(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitFieldName) {
	 		listener.exitFieldName(this);
		}
	}
}


export class ValueSetContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public L_BRACE(): TerminalNode {
		return this.getToken(asn1Parser.L_BRACE, 0);
	}
	public elementSetSpecs(): ElementSetSpecsContext {
		return this.getTypedRuleContext(ElementSetSpecsContext, 0) as ElementSetSpecsContext;
	}
	public R_BRACE(): TerminalNode {
		return this.getToken(asn1Parser.R_BRACE, 0);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_valueSet;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterValueSet) {
	 		listener.enterValueSet(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitValueSet) {
	 		listener.exitValueSet(this);
		}
	}
}


export class ElementSetSpecsContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public rootElementSetSpec(): RootElementSetSpecContext {
		return this.getTypedRuleContext(RootElementSetSpecContext, 0) as RootElementSetSpecContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(asn1Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(asn1Parser.COMMA, i);
	}
	public ELLIPSIS(): TerminalNode {
		return this.getToken(asn1Parser.ELLIPSIS, 0);
	}
	public additionalElementSetSpec(): AdditionalElementSetSpecContext {
		return this.getTypedRuleContext(AdditionalElementSetSpecContext, 0) as AdditionalElementSetSpecContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_elementSetSpecs;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterElementSetSpecs) {
	 		listener.enterElementSetSpecs(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitElementSetSpecs) {
	 		listener.exitElementSetSpecs(this);
		}
	}
}


export class RootElementSetSpecContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public elementSetSpec(): ElementSetSpecContext {
		return this.getTypedRuleContext(ElementSetSpecContext, 0) as ElementSetSpecContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_rootElementSetSpec;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterRootElementSetSpec) {
	 		listener.enterRootElementSetSpec(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitRootElementSetSpec) {
	 		listener.exitRootElementSetSpec(this);
		}
	}
}


export class AdditionalElementSetSpecContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public elementSetSpec(): ElementSetSpecContext {
		return this.getTypedRuleContext(ElementSetSpecContext, 0) as ElementSetSpecContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_additionalElementSetSpec;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterAdditionalElementSetSpec) {
	 		listener.enterAdditionalElementSetSpec(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitAdditionalElementSetSpec) {
	 		listener.exitAdditionalElementSetSpec(this);
		}
	}
}


export class ElementSetSpecContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unions(): UnionsContext {
		return this.getTypedRuleContext(UnionsContext, 0) as UnionsContext;
	}
	public ALL_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.ALL_LITERAL, 0);
	}
	public exclusions(): ExclusionsContext {
		return this.getTypedRuleContext(ExclusionsContext, 0) as ExclusionsContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_elementSetSpec;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterElementSetSpec) {
	 		listener.enterElementSetSpec(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitElementSetSpec) {
	 		listener.exitElementSetSpec(this);
		}
	}
}


export class UnionsContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public intersections_list(): IntersectionsContext[] {
		return this.getTypedRuleContexts(IntersectionsContext) as IntersectionsContext[];
	}
	public intersections(i: number): IntersectionsContext {
		return this.getTypedRuleContext(IntersectionsContext, i) as IntersectionsContext;
	}
	public unionMark_list(): UnionMarkContext[] {
		return this.getTypedRuleContexts(UnionMarkContext) as UnionMarkContext[];
	}
	public unionMark(i: number): UnionMarkContext {
		return this.getTypedRuleContext(UnionMarkContext, i) as UnionMarkContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_unions;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterUnions) {
	 		listener.enterUnions(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitUnions) {
	 		listener.exitUnions(this);
		}
	}
}


export class ExclusionsContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXCEPT_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.EXCEPT_LITERAL, 0);
	}
	public elements(): ElementsContext {
		return this.getTypedRuleContext(ElementsContext, 0) as ElementsContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_exclusions;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterExclusions) {
	 		listener.enterExclusions(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitExclusions) {
	 		listener.exitExclusions(this);
		}
	}
}


export class IntersectionsContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public intersectionElements_list(): IntersectionElementsContext[] {
		return this.getTypedRuleContexts(IntersectionElementsContext) as IntersectionElementsContext[];
	}
	public intersectionElements(i: number): IntersectionElementsContext {
		return this.getTypedRuleContext(IntersectionElementsContext, i) as IntersectionElementsContext;
	}
	public intersectionMark_list(): IntersectionMarkContext[] {
		return this.getTypedRuleContexts(IntersectionMarkContext) as IntersectionMarkContext[];
	}
	public intersectionMark(i: number): IntersectionMarkContext {
		return this.getTypedRuleContext(IntersectionMarkContext, i) as IntersectionMarkContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_intersections;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterIntersections) {
	 		listener.enterIntersections(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitIntersections) {
	 		listener.exitIntersections(this);
		}
	}
}


export class UnionMarkContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PIPE(): TerminalNode {
		return this.getToken(asn1Parser.PIPE, 0);
	}
	public UNION_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.UNION_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_unionMark;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterUnionMark) {
	 		listener.enterUnionMark(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitUnionMark) {
	 		listener.exitUnionMark(this);
		}
	}
}


export class IntersectionMarkContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public POWER(): TerminalNode {
		return this.getToken(asn1Parser.POWER, 0);
	}
	public INTERSECTION_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.INTERSECTION_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_intersectionMark;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterIntersectionMark) {
	 		listener.enterIntersectionMark(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitIntersectionMark) {
	 		listener.exitIntersectionMark(this);
		}
	}
}


export class ElementsContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public subtypeElements(): SubtypeElementsContext {
		return this.getTypedRuleContext(SubtypeElementsContext, 0) as SubtypeElementsContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_elements;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterElements) {
	 		listener.enterElements(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitElements) {
	 		listener.exitElements(this);
		}
	}
}


export class ObjectSetElementsContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public object(): ObjectContext {
		return this.getTypedRuleContext(ObjectContext, 0) as ObjectContext;
	}
	public definedObject(): DefinedObjectContext {
		return this.getTypedRuleContext(DefinedObjectContext, 0) as DefinedObjectContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_objectSetElements;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterObjectSetElements) {
	 		listener.enterObjectSetElements(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitObjectSetElements) {
	 		listener.exitObjectSetElements(this);
		}
	}
}


export class IntersectionElementsContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public elements(): ElementsContext {
		return this.getTypedRuleContext(ElementsContext, 0) as ElementsContext;
	}
	public exclusions(): ExclusionsContext {
		return this.getTypedRuleContext(ExclusionsContext, 0) as ExclusionsContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_intersectionElements;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterIntersectionElements) {
	 		listener.enterIntersectionElements(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitIntersectionElements) {
	 		listener.exitIntersectionElements(this);
		}
	}
}


export class SubtypeElementsContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DOUBLE_DOT(): TerminalNode {
		return this.getToken(asn1Parser.DOUBLE_DOT, 0);
	}
	public value_list(): ValueContext[] {
		return this.getTypedRuleContexts(ValueContext) as ValueContext[];
	}
	public value(i: number): ValueContext {
		return this.getTypedRuleContext(ValueContext, i) as ValueContext;
	}
	public MIN_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.MIN_LITERAL, 0);
	}
	public MAX_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.MAX_LITERAL, 0);
	}
	public LESS_THAN_list(): TerminalNode[] {
	    	return this.getTokens(asn1Parser.LESS_THAN);
	}
	public LESS_THAN(i: number): TerminalNode {
		return this.getToken(asn1Parser.LESS_THAN, i);
	}
	public sizeConstraint(): SizeConstraintContext {
		return this.getTypedRuleContext(SizeConstraintContext, 0) as SizeConstraintContext;
	}
	public PATTERN_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.PATTERN_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_subtypeElements;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterSubtypeElements) {
	 		listener.enterSubtypeElements(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitSubtypeElements) {
	 		listener.exitSubtypeElements(this);
		}
	}
}


export class VariableTypeValueSetFieldSpecContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AMPERSAND(): TerminalNode {
		return this.getToken(asn1Parser.AMPERSAND, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(asn1Parser.IDENTIFIER, 0);
	}
	public fieldName(): FieldNameContext {
		return this.getTypedRuleContext(FieldNameContext, 0) as FieldNameContext;
	}
	public valueSetOptionalitySpec(): ValueSetOptionalitySpecContext {
		return this.getTypedRuleContext(ValueSetOptionalitySpecContext, 0) as ValueSetOptionalitySpecContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_variableTypeValueSetFieldSpec;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterVariableTypeValueSetFieldSpec) {
	 		listener.enterVariableTypeValueSetFieldSpec(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitVariableTypeValueSetFieldSpec) {
	 		listener.exitVariableTypeValueSetFieldSpec(this);
		}
	}
}


export class ObjectFieldSpecContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AMPERSAND(): TerminalNode {
		return this.getToken(asn1Parser.AMPERSAND, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(asn1Parser.IDENTIFIER, 0);
	}
	public definedObjectClass(): DefinedObjectClassContext {
		return this.getTypedRuleContext(DefinedObjectClassContext, 0) as DefinedObjectClassContext;
	}
	public objectOptionalitySpec(): ObjectOptionalitySpecContext {
		return this.getTypedRuleContext(ObjectOptionalitySpecContext, 0) as ObjectOptionalitySpecContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_objectFieldSpec;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterObjectFieldSpec) {
	 		listener.enterObjectFieldSpec(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitObjectFieldSpec) {
	 		listener.exitObjectFieldSpec(this);
		}
	}
}


export class ObjectOptionalitySpecContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPTIONAL_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.OPTIONAL_LITERAL, 0);
	}
	public DEFAULT_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.DEFAULT_LITERAL, 0);
	}
	public object(): ObjectContext {
		return this.getTypedRuleContext(ObjectContext, 0) as ObjectContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_objectOptionalitySpec;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterObjectOptionalitySpec) {
	 		listener.enterObjectOptionalitySpec(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitObjectOptionalitySpec) {
	 		listener.exitObjectOptionalitySpec(this);
		}
	}
}


export class ObjectSetFieldSpecContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AMPERSAND(): TerminalNode {
		return this.getToken(asn1Parser.AMPERSAND, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(asn1Parser.IDENTIFIER, 0);
	}
	public definedObjectClass(): DefinedObjectClassContext {
		return this.getTypedRuleContext(DefinedObjectClassContext, 0) as DefinedObjectClassContext;
	}
	public objectSetOptionalitySpec(): ObjectSetOptionalitySpecContext {
		return this.getTypedRuleContext(ObjectSetOptionalitySpecContext, 0) as ObjectSetOptionalitySpecContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_objectSetFieldSpec;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterObjectSetFieldSpec) {
	 		listener.enterObjectSetFieldSpec(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitObjectSetFieldSpec) {
	 		listener.exitObjectSetFieldSpec(this);
		}
	}
}


export class ObjectSetOptionalitySpecContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPTIONAL_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.OPTIONAL_LITERAL, 0);
	}
	public DEFAULT_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.DEFAULT_LITERAL, 0);
	}
	public objectSet(): ObjectSetContext {
		return this.getTypedRuleContext(ObjectSetContext, 0) as ObjectSetContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_objectSetOptionalitySpec;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterObjectSetOptionalitySpec) {
	 		listener.enterObjectSetOptionalitySpec(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitObjectSetOptionalitySpec) {
	 		listener.exitObjectSetOptionalitySpec(this);
		}
	}
}


export class TypeAssignmentContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ASSIGN_OP(): TerminalNode {
		return this.getToken(asn1Parser.ASSIGN_OP, 0);
	}
	public asnType(): AsnTypeContext {
		return this.getTypedRuleContext(AsnTypeContext, 0) as AsnTypeContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_typeAssignment;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterTypeAssignment) {
	 		listener.enterTypeAssignment(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitTypeAssignment) {
	 		listener.exitTypeAssignment(this);
		}
	}
}


export class ValueAssignmentContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public asnType(): AsnTypeContext {
		return this.getTypedRuleContext(AsnTypeContext, 0) as AsnTypeContext;
	}
	public ASSIGN_OP(): TerminalNode {
		return this.getToken(asn1Parser.ASSIGN_OP, 0);
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_valueAssignment;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterValueAssignment) {
	 		listener.enterValueAssignment(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitValueAssignment) {
	 		listener.exitValueAssignment(this);
		}
	}
}


export class AsnTypeContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public builtinType(): BuiltinTypeContext {
		return this.getTypedRuleContext(BuiltinTypeContext, 0) as BuiltinTypeContext;
	}
	public referencedType(): ReferencedTypeContext {
		return this.getTypedRuleContext(ReferencedTypeContext, 0) as ReferencedTypeContext;
	}
	public constraint_list(): ConstraintContext[] {
		return this.getTypedRuleContexts(ConstraintContext) as ConstraintContext[];
	}
	public constraint(i: number): ConstraintContext {
		return this.getTypedRuleContext(ConstraintContext, i) as ConstraintContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_asnType;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterAsnType) {
	 		listener.enterAsnType(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitAsnType) {
	 		listener.exitAsnType(this);
		}
	}
}


export class BuiltinTypeContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public octetStringType(): OctetStringTypeContext {
		return this.getTypedRuleContext(OctetStringTypeContext, 0) as OctetStringTypeContext;
	}
	public bitStringType(): BitStringTypeContext {
		return this.getTypedRuleContext(BitStringTypeContext, 0) as BitStringTypeContext;
	}
	public characterStringType(): CharacterStringTypeContext {
		return this.getTypedRuleContext(CharacterStringTypeContext, 0) as CharacterStringTypeContext;
	}
	public choiceType(): ChoiceTypeContext {
		return this.getTypedRuleContext(ChoiceTypeContext, 0) as ChoiceTypeContext;
	}
	public enumeratedType(): EnumeratedTypeContext {
		return this.getTypedRuleContext(EnumeratedTypeContext, 0) as EnumeratedTypeContext;
	}
	public integerType(): IntegerTypeContext {
		return this.getTypedRuleContext(IntegerTypeContext, 0) as IntegerTypeContext;
	}
	public sequenceType(): SequenceTypeContext {
		return this.getTypedRuleContext(SequenceTypeContext, 0) as SequenceTypeContext;
	}
	public sequenceOfType(): SequenceOfTypeContext {
		return this.getTypedRuleContext(SequenceOfTypeContext, 0) as SequenceOfTypeContext;
	}
	public setType(): SetTypeContext {
		return this.getTypedRuleContext(SetTypeContext, 0) as SetTypeContext;
	}
	public setOfType(): SetOfTypeContext {
		return this.getTypedRuleContext(SetOfTypeContext, 0) as SetOfTypeContext;
	}
	public objectIdentifierType(): ObjectIdentifierTypeContext {
		return this.getTypedRuleContext(ObjectIdentifierTypeContext, 0) as ObjectIdentifierTypeContext;
	}
	public objectClassFieldType(): ObjectClassFieldTypeContext {
		return this.getTypedRuleContext(ObjectClassFieldTypeContext, 0) as ObjectClassFieldTypeContext;
	}
	public BOOLEAN_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.BOOLEAN_LITERAL, 0);
	}
	public NULL_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.NULL_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_builtinType;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterBuiltinType) {
	 		listener.enterBuiltinType(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitBuiltinType) {
	 		listener.exitBuiltinType(this);
		}
	}
}


export class CharacterStringTypeContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public restrictedCharacterStringType(): RestrictedCharacterStringTypeContext {
		return this.getTypedRuleContext(RestrictedCharacterStringTypeContext, 0) as RestrictedCharacterStringTypeContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_characterStringType;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterCharacterStringType) {
	 		listener.enterCharacterStringType(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitCharacterStringType) {
	 		listener.exitCharacterStringType(this);
		}
	}
}


export class RestrictedCharacterStringTypeContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BMP_STRING_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.BMP_STRING_LITERAL, 0);
	}
	public GRAPHIC_STRING_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.GRAPHIC_STRING_LITERAL, 0);
	}
	public IA5_STRING_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.IA5_STRING_LITERAL, 0);
	}
	public ISO646_STRING_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.ISO646_STRING_LITERAL, 0);
	}
	public NUMERIC_STRING_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.NUMERIC_STRING_LITERAL, 0);
	}
	public PRINTABLE_STRING_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.PRINTABLE_STRING_LITERAL, 0);
	}
	public TELETEXT_STRING_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.TELETEXT_STRING_LITERAL, 0);
	}
	public T61_STRING_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.T61_STRING_LITERAL, 0);
	}
	public UNIVERSAL_STRING_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.UNIVERSAL_STRING_LITERAL, 0);
	}
	public UTF8_STRING_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.UTF8_STRING_LITERAL, 0);
	}
	public VIDEOTEX_STRING_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.VIDEOTEX_STRING_LITERAL, 0);
	}
	public VISIBLE_STRING_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.VISIBLE_STRING_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_restrictedCharacterStringType;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterRestrictedCharacterStringType) {
	 		listener.enterRestrictedCharacterStringType(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitRestrictedCharacterStringType) {
	 		listener.exitRestrictedCharacterStringType(this);
		}
	}
}


export class ObjectClassFieldTypeContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public definedObjectClass(): DefinedObjectClassContext {
		return this.getTypedRuleContext(DefinedObjectClassContext, 0) as DefinedObjectClassContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(asn1Parser.DOT, 0);
	}
	public fieldName(): FieldNameContext {
		return this.getTypedRuleContext(FieldNameContext, 0) as FieldNameContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_objectClassFieldType;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterObjectClassFieldType) {
	 		listener.enterObjectClassFieldType(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitObjectClassFieldType) {
	 		listener.exitObjectClassFieldType(this);
		}
	}
}


export class SetTypeContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SET_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.SET_LITERAL, 0);
	}
	public L_BRACE(): TerminalNode {
		return this.getToken(asn1Parser.L_BRACE, 0);
	}
	public R_BRACE(): TerminalNode {
		return this.getToken(asn1Parser.R_BRACE, 0);
	}
	public extensionAndException(): ExtensionAndExceptionContext {
		return this.getTypedRuleContext(ExtensionAndExceptionContext, 0) as ExtensionAndExceptionContext;
	}
	public optionalExtensionMarker(): OptionalExtensionMarkerContext {
		return this.getTypedRuleContext(OptionalExtensionMarkerContext, 0) as OptionalExtensionMarkerContext;
	}
	public componentTypeLists(): ComponentTypeListsContext {
		return this.getTypedRuleContext(ComponentTypeListsContext, 0) as ComponentTypeListsContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_setType;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterSetType) {
	 		listener.enterSetType(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitSetType) {
	 		listener.exitSetType(this);
		}
	}
}


export class SetOfTypeContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SET_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.SET_LITERAL, 0);
	}
	public OF_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.OF_LITERAL, 0);
	}
	public asnType(): AsnTypeContext {
		return this.getTypedRuleContext(AsnTypeContext, 0) as AsnTypeContext;
	}
	public namedType(): NamedTypeContext {
		return this.getTypedRuleContext(NamedTypeContext, 0) as NamedTypeContext;
	}
	public constraint(): ConstraintContext {
		return this.getTypedRuleContext(ConstraintContext, 0) as ConstraintContext;
	}
	public sizeConstraint(): SizeConstraintContext {
		return this.getTypedRuleContext(SizeConstraintContext, 0) as SizeConstraintContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_setOfType;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterSetOfType) {
	 		listener.enterSetOfType(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitSetOfType) {
	 		listener.exitSetOfType(this);
		}
	}
}


export class ReferencedTypeContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public definedType(): DefinedTypeContext {
		return this.getTypedRuleContext(DefinedTypeContext, 0) as DefinedTypeContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_referencedType;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterReferencedType) {
	 		listener.enterReferencedType(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitReferencedType) {
	 		listener.exitReferencedType(this);
		}
	}
}


export class DefinedTypeContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER_list(): TerminalNode[] {
	    	return this.getTokens(asn1Parser.IDENTIFIER);
	}
	public IDENTIFIER(i: number): TerminalNode {
		return this.getToken(asn1Parser.IDENTIFIER, i);
	}
	public DOT(): TerminalNode {
		return this.getToken(asn1Parser.DOT, 0);
	}
	public actualParameterList(): ActualParameterListContext {
		return this.getTypedRuleContext(ActualParameterListContext, 0) as ActualParameterListContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_definedType;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterDefinedType) {
	 		listener.enterDefinedType(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitDefinedType) {
	 		listener.exitDefinedType(this);
		}
	}
}


export class ConstraintContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public L_PARAN(): TerminalNode {
		return this.getToken(asn1Parser.L_PARAN, 0);
	}
	public constraintSpec(): ConstraintSpecContext {
		return this.getTypedRuleContext(ConstraintSpecContext, 0) as ConstraintSpecContext;
	}
	public R_PARAN(): TerminalNode {
		return this.getToken(asn1Parser.R_PARAN, 0);
	}
	public exceptionSpec(): ExceptionSpecContext {
		return this.getTypedRuleContext(ExceptionSpecContext, 0) as ExceptionSpecContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_constraint;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterConstraint) {
	 		listener.enterConstraint(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitConstraint) {
	 		listener.exitConstraint(this);
		}
	}
}


export class ConstraintSpecContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public generalConstraint(): GeneralConstraintContext {
		return this.getTypedRuleContext(GeneralConstraintContext, 0) as GeneralConstraintContext;
	}
	public subtypeConstraint(): SubtypeConstraintContext {
		return this.getTypedRuleContext(SubtypeConstraintContext, 0) as SubtypeConstraintContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_constraintSpec;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterConstraintSpec) {
	 		listener.enterConstraintSpec(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitConstraintSpec) {
	 		listener.exitConstraintSpec(this);
		}
	}
}


export class UserDefinedConstraintContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CONSTRAINED_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.CONSTRAINED_LITERAL, 0);
	}
	public BY_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.BY_LITERAL, 0);
	}
	public L_BRACE(): TerminalNode {
		return this.getToken(asn1Parser.L_BRACE, 0);
	}
	public userDefinedConstraintParameter_list(): UserDefinedConstraintParameterContext[] {
		return this.getTypedRuleContexts(UserDefinedConstraintParameterContext) as UserDefinedConstraintParameterContext[];
	}
	public userDefinedConstraintParameter(i: number): UserDefinedConstraintParameterContext {
		return this.getTypedRuleContext(UserDefinedConstraintParameterContext, i) as UserDefinedConstraintParameterContext;
	}
	public R_BRACE(): TerminalNode {
		return this.getToken(asn1Parser.R_BRACE, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(asn1Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(asn1Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_userDefinedConstraint;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterUserDefinedConstraint) {
	 		listener.enterUserDefinedConstraint(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitUserDefinedConstraint) {
	 		listener.exitUserDefinedConstraint(this);
		}
	}
}


export class GeneralConstraintContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public userDefinedConstraint(): UserDefinedConstraintContext {
		return this.getTypedRuleContext(UserDefinedConstraintContext, 0) as UserDefinedConstraintContext;
	}
	public tableConstraint(): TableConstraintContext {
		return this.getTypedRuleContext(TableConstraintContext, 0) as TableConstraintContext;
	}
	public contentsConstraint(): ContentsConstraintContext {
		return this.getTypedRuleContext(ContentsConstraintContext, 0) as ContentsConstraintContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_generalConstraint;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterGeneralConstraint) {
	 		listener.enterGeneralConstraint(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitGeneralConstraint) {
	 		listener.exitGeneralConstraint(this);
		}
	}
}


export class UserDefinedConstraintParameterContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public governor(): GovernorContext {
		return this.getTypedRuleContext(GovernorContext, 0) as GovernorContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(asn1Parser.COLON, 0);
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
	public valueSet(): ValueSetContext {
		return this.getTypedRuleContext(ValueSetContext, 0) as ValueSetContext;
	}
	public object(): ObjectContext {
		return this.getTypedRuleContext(ObjectContext, 0) as ObjectContext;
	}
	public objectSet(): ObjectSetContext {
		return this.getTypedRuleContext(ObjectSetContext, 0) as ObjectSetContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_userDefinedConstraintParameter;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterUserDefinedConstraintParameter) {
	 		listener.enterUserDefinedConstraintParameter(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitUserDefinedConstraintParameter) {
	 		listener.exitUserDefinedConstraintParameter(this);
		}
	}
}


export class TableConstraintContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public componentRelationConstraint(): ComponentRelationConstraintContext {
		return this.getTypedRuleContext(ComponentRelationConstraintContext, 0) as ComponentRelationConstraintContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_tableConstraint;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterTableConstraint) {
	 		listener.enterTableConstraint(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitTableConstraint) {
	 		listener.exitTableConstraint(this);
		}
	}
}


export class SimpleTableConstraintContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public objectSet(): ObjectSetContext {
		return this.getTypedRuleContext(ObjectSetContext, 0) as ObjectSetContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_simpleTableConstraint;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterSimpleTableConstraint) {
	 		listener.enterSimpleTableConstraint(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitSimpleTableConstraint) {
	 		listener.exitSimpleTableConstraint(this);
		}
	}
}


export class ContentsConstraintContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CONTAINING_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.CONTAINING_LITERAL, 0);
	}
	public asnType(): AsnTypeContext {
		return this.getTypedRuleContext(AsnTypeContext, 0) as AsnTypeContext;
	}
	public ENCODED_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.ENCODED_LITERAL, 0);
	}
	public BY_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.BY_LITERAL, 0);
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
	public WITH_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.WITH_LITERAL, 0);
	}
	public COMPONENTS_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.COMPONENTS_LITERAL, 0);
	}
	public L_BRACE(): TerminalNode {
		return this.getToken(asn1Parser.L_BRACE, 0);
	}
	public componentPresenceLists(): ComponentPresenceListsContext {
		return this.getTypedRuleContext(ComponentPresenceListsContext, 0) as ComponentPresenceListsContext;
	}
	public R_BRACE(): TerminalNode {
		return this.getToken(asn1Parser.R_BRACE, 0);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_contentsConstraint;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterContentsConstraint) {
	 		listener.enterContentsConstraint(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitContentsConstraint) {
	 		listener.exitContentsConstraint(this);
		}
	}
}


export class ComponentPresenceListsContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public componentPresenceList_list(): ComponentPresenceListContext[] {
		return this.getTypedRuleContexts(ComponentPresenceListContext) as ComponentPresenceListContext[];
	}
	public componentPresenceList(i: number): ComponentPresenceListContext {
		return this.getTypedRuleContext(ComponentPresenceListContext, i) as ComponentPresenceListContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(asn1Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(asn1Parser.COMMA, i);
	}
	public ELLIPSIS(): TerminalNode {
		return this.getToken(asn1Parser.ELLIPSIS, 0);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_componentPresenceLists;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterComponentPresenceLists) {
	 		listener.enterComponentPresenceLists(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitComponentPresenceLists) {
	 		listener.exitComponentPresenceLists(this);
		}
	}
}


export class ComponentPresenceListContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public componentPresence_list(): ComponentPresenceContext[] {
		return this.getTypedRuleContexts(ComponentPresenceContext) as ComponentPresenceContext[];
	}
	public componentPresence(i: number): ComponentPresenceContext {
		return this.getTypedRuleContext(ComponentPresenceContext, i) as ComponentPresenceContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(asn1Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(asn1Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_componentPresenceList;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterComponentPresenceList) {
	 		listener.enterComponentPresenceList(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitComponentPresenceList) {
	 		listener.exitComponentPresenceList(this);
		}
	}
}


export class ComponentPresenceContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(asn1Parser.IDENTIFIER, 0);
	}
	public ABSENT_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.ABSENT_LITERAL, 0);
	}
	public PRESENT_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.PRESENT_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_componentPresence;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterComponentPresence) {
	 		listener.enterComponentPresence(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitComponentPresence) {
	 		listener.exitComponentPresence(this);
		}
	}
}


export class SubtypeConstraintContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public elementSetSpecs(): ElementSetSpecsContext {
		return this.getTypedRuleContext(ElementSetSpecsContext, 0) as ElementSetSpecsContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_subtypeConstraint;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterSubtypeConstraint) {
	 		listener.enterSubtypeConstraint(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitSubtypeConstraint) {
	 		listener.exitSubtypeConstraint(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public builtinValue(): BuiltinValueContext {
		return this.getTypedRuleContext(BuiltinValueContext, 0) as BuiltinValueContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_value;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterValue) {
	 		listener.enterValue(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitValue) {
	 		listener.exitValue(this);
		}
	}
}


export class BuiltinValueContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public enumeratedValue(): EnumeratedValueContext {
		return this.getTypedRuleContext(EnumeratedValueContext, 0) as EnumeratedValueContext;
	}
	public integerValue(): IntegerValueContext {
		return this.getTypedRuleContext(IntegerValueContext, 0) as IntegerValueContext;
	}
	public choiceValue(): ChoiceValueContext {
		return this.getTypedRuleContext(ChoiceValueContext, 0) as ChoiceValueContext;
	}
	public objectIdentifierValue(): ObjectIdentifierValueContext {
		return this.getTypedRuleContext(ObjectIdentifierValueContext, 0) as ObjectIdentifierValueContext;
	}
	public booleanValue(): BooleanValueContext {
		return this.getTypedRuleContext(BooleanValueContext, 0) as BooleanValueContext;
	}
	public CSTRING(): TerminalNode {
		return this.getToken(asn1Parser.CSTRING, 0);
	}
	public BSTRING(): TerminalNode {
		return this.getToken(asn1Parser.BSTRING, 0);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_builtinValue;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterBuiltinValue) {
	 		listener.enterBuiltinValue(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitBuiltinValue) {
	 		listener.exitBuiltinValue(this);
		}
	}
}


export class ObjectIdentifierValueContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public L_BRACE(): TerminalNode {
		return this.getToken(asn1Parser.L_BRACE, 0);
	}
	public objIdComponentsList(): ObjIdComponentsListContext {
		return this.getTypedRuleContext(ObjIdComponentsListContext, 0) as ObjIdComponentsListContext;
	}
	public R_BRACE(): TerminalNode {
		return this.getToken(asn1Parser.R_BRACE, 0);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_objectIdentifierValue;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterObjectIdentifierValue) {
	 		listener.enterObjectIdentifierValue(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitObjectIdentifierValue) {
	 		listener.exitObjectIdentifierValue(this);
		}
	}
}


export class ObjIdComponentsListContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public objIdComponents_list(): ObjIdComponentsContext[] {
		return this.getTypedRuleContexts(ObjIdComponentsContext) as ObjIdComponentsContext[];
	}
	public objIdComponents(i: number): ObjIdComponentsContext {
		return this.getTypedRuleContext(ObjIdComponentsContext, i) as ObjIdComponentsContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_objIdComponentsList;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterObjIdComponentsList) {
	 		listener.enterObjIdComponentsList(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitObjIdComponentsList) {
	 		listener.exitObjIdComponentsList(this);
		}
	}
}


export class ObjIdComponentsContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NUMBER(): TerminalNode {
		return this.getToken(asn1Parser.NUMBER, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(asn1Parser.IDENTIFIER, 0);
	}
	public L_PARAN(): TerminalNode {
		return this.getToken(asn1Parser.L_PARAN, 0);
	}
	public R_PARAN(): TerminalNode {
		return this.getToken(asn1Parser.R_PARAN, 0);
	}
	public definedValue(): DefinedValueContext {
		return this.getTypedRuleContext(DefinedValueContext, 0) as DefinedValueContext;
	}
	public builtinType(): BuiltinTypeContext {
		return this.getTypedRuleContext(BuiltinTypeContext, 0) as BuiltinTypeContext;
	}
	public constraint(): ConstraintContext {
		return this.getTypedRuleContext(ConstraintContext, 0) as ConstraintContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_objIdComponents;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterObjIdComponents) {
	 		listener.enterObjIdComponents(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitObjIdComponents) {
	 		listener.exitObjIdComponents(this);
		}
	}
}


export class IntegerValueContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public signedNumber(): SignedNumberContext {
		return this.getTypedRuleContext(SignedNumberContext, 0) as SignedNumberContext;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(asn1Parser.IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_integerValue;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterIntegerValue) {
	 		listener.enterIntegerValue(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitIntegerValue) {
	 		listener.exitIntegerValue(this);
		}
	}
}


export class ChoiceValueContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(asn1Parser.IDENTIFIER, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(asn1Parser.COLON, 0);
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_choiceValue;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterChoiceValue) {
	 		listener.enterChoiceValue(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitChoiceValue) {
	 		listener.exitChoiceValue(this);
		}
	}
}


export class EnumeratedValueContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(asn1Parser.IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_enumeratedValue;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterEnumeratedValue) {
	 		listener.enterEnumeratedValue(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitEnumeratedValue) {
	 		listener.exitEnumeratedValue(this);
		}
	}
}


export class SignedNumberContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NUMBER(): TerminalNode {
		return this.getToken(asn1Parser.NUMBER, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(asn1Parser.MINUS, 0);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_signedNumber;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterSignedNumber) {
	 		listener.enterSignedNumber(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitSignedNumber) {
	 		listener.exitSignedNumber(this);
		}
	}
}


export class ChoiceTypeContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CHOICE_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.CHOICE_LITERAL, 0);
	}
	public L_BRACE(): TerminalNode {
		return this.getToken(asn1Parser.L_BRACE, 0);
	}
	public alternativeTypeLists(): AlternativeTypeListsContext {
		return this.getTypedRuleContext(AlternativeTypeListsContext, 0) as AlternativeTypeListsContext;
	}
	public R_BRACE(): TerminalNode {
		return this.getToken(asn1Parser.R_BRACE, 0);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_choiceType;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterChoiceType) {
	 		listener.enterChoiceType(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitChoiceType) {
	 		listener.exitChoiceType(this);
		}
	}
}


export class AlternativeTypeListsContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public rootAlternativeTypeList(): RootAlternativeTypeListContext {
		return this.getTypedRuleContext(RootAlternativeTypeListContext, 0) as RootAlternativeTypeListContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(asn1Parser.COMMA, 0);
	}
	public extensionAndException(): ExtensionAndExceptionContext {
		return this.getTypedRuleContext(ExtensionAndExceptionContext, 0) as ExtensionAndExceptionContext;
	}
	public extensionAdditionAlternatives(): ExtensionAdditionAlternativesContext {
		return this.getTypedRuleContext(ExtensionAdditionAlternativesContext, 0) as ExtensionAdditionAlternativesContext;
	}
	public optionalExtensionMarker(): OptionalExtensionMarkerContext {
		return this.getTypedRuleContext(OptionalExtensionMarkerContext, 0) as OptionalExtensionMarkerContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_alternativeTypeLists;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterAlternativeTypeLists) {
	 		listener.enterAlternativeTypeLists(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitAlternativeTypeLists) {
	 		listener.exitAlternativeTypeLists(this);
		}
	}
}


export class ExtensionAdditionAlternativesContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COMMA(): TerminalNode {
		return this.getToken(asn1Parser.COMMA, 0);
	}
	public extensionAdditionAlternativesList(): ExtensionAdditionAlternativesListContext {
		return this.getTypedRuleContext(ExtensionAdditionAlternativesListContext, 0) as ExtensionAdditionAlternativesListContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_extensionAdditionAlternatives;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterExtensionAdditionAlternatives) {
	 		listener.enterExtensionAdditionAlternatives(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitExtensionAdditionAlternatives) {
	 		listener.exitExtensionAdditionAlternatives(this);
		}
	}
}


export class ExtensionAdditionAlternativesListContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public extensionAdditionAlternative_list(): ExtensionAdditionAlternativeContext[] {
		return this.getTypedRuleContexts(ExtensionAdditionAlternativeContext) as ExtensionAdditionAlternativeContext[];
	}
	public extensionAdditionAlternative(i: number): ExtensionAdditionAlternativeContext {
		return this.getTypedRuleContext(ExtensionAdditionAlternativeContext, i) as ExtensionAdditionAlternativeContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(asn1Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(asn1Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_extensionAdditionAlternativesList;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterExtensionAdditionAlternativesList) {
	 		listener.enterExtensionAdditionAlternativesList(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitExtensionAdditionAlternativesList) {
	 		listener.exitExtensionAdditionAlternativesList(this);
		}
	}
}


export class ExtensionAdditionAlternativeContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public extensionAdditionAlternativesGroup(): ExtensionAdditionAlternativesGroupContext {
		return this.getTypedRuleContext(ExtensionAdditionAlternativesGroupContext, 0) as ExtensionAdditionAlternativesGroupContext;
	}
	public namedType(): NamedTypeContext {
		return this.getTypedRuleContext(NamedTypeContext, 0) as NamedTypeContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_extensionAdditionAlternative;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterExtensionAdditionAlternative) {
	 		listener.enterExtensionAdditionAlternative(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitExtensionAdditionAlternative) {
	 		listener.exitExtensionAdditionAlternative(this);
		}
	}
}


export class ExtensionAdditionAlternativesGroupContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DOUBLE_L_BRACKET(): TerminalNode {
		return this.getToken(asn1Parser.DOUBLE_L_BRACKET, 0);
	}
	public versionNumber(): VersionNumberContext {
		return this.getTypedRuleContext(VersionNumberContext, 0) as VersionNumberContext;
	}
	public alternativeTypeList(): AlternativeTypeListContext {
		return this.getTypedRuleContext(AlternativeTypeListContext, 0) as AlternativeTypeListContext;
	}
	public DOUBLE_R_BRACKET(): TerminalNode {
		return this.getToken(asn1Parser.DOUBLE_R_BRACKET, 0);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_extensionAdditionAlternativesGroup;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterExtensionAdditionAlternativesGroup) {
	 		listener.enterExtensionAdditionAlternativesGroup(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitExtensionAdditionAlternativesGroup) {
	 		listener.exitExtensionAdditionAlternativesGroup(this);
		}
	}
}


export class RootAlternativeTypeListContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public alternativeTypeList(): AlternativeTypeListContext {
		return this.getTypedRuleContext(AlternativeTypeListContext, 0) as AlternativeTypeListContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_rootAlternativeTypeList;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterRootAlternativeTypeList) {
	 		listener.enterRootAlternativeTypeList(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitRootAlternativeTypeList) {
	 		listener.exitRootAlternativeTypeList(this);
		}
	}
}


export class AlternativeTypeListContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public namedType_list(): NamedTypeContext[] {
		return this.getTypedRuleContexts(NamedTypeContext) as NamedTypeContext[];
	}
	public namedType(i: number): NamedTypeContext {
		return this.getTypedRuleContext(NamedTypeContext, i) as NamedTypeContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(asn1Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(asn1Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_alternativeTypeList;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterAlternativeTypeList) {
	 		listener.enterAlternativeTypeList(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitAlternativeTypeList) {
	 		listener.exitAlternativeTypeList(this);
		}
	}
}


export class NamedTypeContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(asn1Parser.IDENTIFIER, 0);
	}
	public asnType(): AsnTypeContext {
		return this.getTypedRuleContext(AsnTypeContext, 0) as AsnTypeContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_namedType;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterNamedType) {
	 		listener.enterNamedType(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitNamedType) {
	 		listener.exitNamedType(this);
		}
	}
}


export class EnumeratedTypeContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ENUMERATED_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.ENUMERATED_LITERAL, 0);
	}
	public L_BRACE(): TerminalNode {
		return this.getToken(asn1Parser.L_BRACE, 0);
	}
	public enumerations(): EnumerationsContext {
		return this.getTypedRuleContext(EnumerationsContext, 0) as EnumerationsContext;
	}
	public R_BRACE(): TerminalNode {
		return this.getToken(asn1Parser.R_BRACE, 0);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_enumeratedType;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterEnumeratedType) {
	 		listener.enterEnumeratedType(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitEnumeratedType) {
	 		listener.exitEnumeratedType(this);
		}
	}
}


export class EnumerationsContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public rootEnumeration(): RootEnumerationContext {
		return this.getTypedRuleContext(RootEnumerationContext, 0) as RootEnumerationContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(asn1Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(asn1Parser.COMMA, i);
	}
	public ELLIPSIS(): TerminalNode {
		return this.getToken(asn1Parser.ELLIPSIS, 0);
	}
	public exceptionSpec(): ExceptionSpecContext {
		return this.getTypedRuleContext(ExceptionSpecContext, 0) as ExceptionSpecContext;
	}
	public additionalEnumeration(): AdditionalEnumerationContext {
		return this.getTypedRuleContext(AdditionalEnumerationContext, 0) as AdditionalEnumerationContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_enumerations;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterEnumerations) {
	 		listener.enterEnumerations(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitEnumerations) {
	 		listener.exitEnumerations(this);
		}
	}
}


export class RootEnumerationContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public enumeration(): EnumerationContext {
		return this.getTypedRuleContext(EnumerationContext, 0) as EnumerationContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_rootEnumeration;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterRootEnumeration) {
	 		listener.enterRootEnumeration(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitRootEnumeration) {
	 		listener.exitRootEnumeration(this);
		}
	}
}


export class EnumerationContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public enumerationItem_list(): EnumerationItemContext[] {
		return this.getTypedRuleContexts(EnumerationItemContext) as EnumerationItemContext[];
	}
	public enumerationItem(i: number): EnumerationItemContext {
		return this.getTypedRuleContext(EnumerationItemContext, i) as EnumerationItemContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(asn1Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(asn1Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_enumeration;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterEnumeration) {
	 		listener.enterEnumeration(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitEnumeration) {
	 		listener.exitEnumeration(this);
		}
	}
}


export class EnumerationItemContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(asn1Parser.IDENTIFIER, 0);
	}
	public namedNumber(): NamedNumberContext {
		return this.getTypedRuleContext(NamedNumberContext, 0) as NamedNumberContext;
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_enumerationItem;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterEnumerationItem) {
	 		listener.enterEnumerationItem(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitEnumerationItem) {
	 		listener.exitEnumerationItem(this);
		}
	}
}


export class NamedNumberContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(asn1Parser.IDENTIFIER, 0);
	}
	public L_PARAN(): TerminalNode {
		return this.getToken(asn1Parser.L_PARAN, 0);
	}
	public R_PARAN(): TerminalNode {
		return this.getToken(asn1Parser.R_PARAN, 0);
	}
	public signedNumber(): SignedNumberContext {
		return this.getTypedRuleContext(SignedNumberContext, 0) as SignedNumberContext;
	}
	public definedValue(): DefinedValueContext {
		return this.getTypedRuleContext(DefinedValueContext, 0) as DefinedValueContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_namedNumber;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterNamedNumber) {
	 		listener.enterNamedNumber(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitNamedNumber) {
	 		listener.exitNamedNumber(this);
		}
	}
}


export class DefinedValueContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public parameterizedValue(): ParameterizedValueContext {
		return this.getTypedRuleContext(ParameterizedValueContext, 0) as ParameterizedValueContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_definedValue;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterDefinedValue) {
	 		listener.enterDefinedValue(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitDefinedValue) {
	 		listener.exitDefinedValue(this);
		}
	}
}


export class ParameterizedValueContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public simpleDefinedValue(): SimpleDefinedValueContext {
		return this.getTypedRuleContext(SimpleDefinedValueContext, 0) as SimpleDefinedValueContext;
	}
	public actualParameterList(): ActualParameterListContext {
		return this.getTypedRuleContext(ActualParameterListContext, 0) as ActualParameterListContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_parameterizedValue;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterParameterizedValue) {
	 		listener.enterParameterizedValue(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitParameterizedValue) {
	 		listener.exitParameterizedValue(this);
		}
	}
}


export class SimpleDefinedValueContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER_list(): TerminalNode[] {
	    	return this.getTokens(asn1Parser.IDENTIFIER);
	}
	public IDENTIFIER(i: number): TerminalNode {
		return this.getToken(asn1Parser.IDENTIFIER, i);
	}
	public DOT(): TerminalNode {
		return this.getToken(asn1Parser.DOT, 0);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_simpleDefinedValue;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterSimpleDefinedValue) {
	 		listener.enterSimpleDefinedValue(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitSimpleDefinedValue) {
	 		listener.exitSimpleDefinedValue(this);
		}
	}
}


export class ActualParameterListContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public L_BRACE(): TerminalNode {
		return this.getToken(asn1Parser.L_BRACE, 0);
	}
	public actualParameter_list(): ActualParameterContext[] {
		return this.getTypedRuleContexts(ActualParameterContext) as ActualParameterContext[];
	}
	public actualParameter(i: number): ActualParameterContext {
		return this.getTypedRuleContext(ActualParameterContext, i) as ActualParameterContext;
	}
	public R_BRACE(): TerminalNode {
		return this.getToken(asn1Parser.R_BRACE, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(asn1Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(asn1Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_actualParameterList;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterActualParameterList) {
	 		listener.enterActualParameterList(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitActualParameterList) {
	 		listener.exitActualParameterList(this);
		}
	}
}


export class ActualParameterContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public asnType(): AsnTypeContext {
		return this.getTypedRuleContext(AsnTypeContext, 0) as AsnTypeContext;
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_actualParameter;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterActualParameter) {
	 		listener.enterActualParameter(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitActualParameter) {
	 		listener.exitActualParameter(this);
		}
	}
}


export class ExceptionSpecContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXCLAM(): TerminalNode {
		return this.getToken(asn1Parser.EXCLAM, 0);
	}
	public exceptionIdentification(): ExceptionIdentificationContext {
		return this.getTypedRuleContext(ExceptionIdentificationContext, 0) as ExceptionIdentificationContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_exceptionSpec;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterExceptionSpec) {
	 		listener.enterExceptionSpec(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitExceptionSpec) {
	 		listener.exitExceptionSpec(this);
		}
	}
}


export class ExceptionIdentificationContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public signedNumber(): SignedNumberContext {
		return this.getTypedRuleContext(SignedNumberContext, 0) as SignedNumberContext;
	}
	public definedValue(): DefinedValueContext {
		return this.getTypedRuleContext(DefinedValueContext, 0) as DefinedValueContext;
	}
	public asnType(): AsnTypeContext {
		return this.getTypedRuleContext(AsnTypeContext, 0) as AsnTypeContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(asn1Parser.COLON, 0);
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_exceptionIdentification;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterExceptionIdentification) {
	 		listener.enterExceptionIdentification(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitExceptionIdentification) {
	 		listener.exitExceptionIdentification(this);
		}
	}
}


export class AdditionalEnumerationContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public enumeration(): EnumerationContext {
		return this.getTypedRuleContext(EnumerationContext, 0) as EnumerationContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_additionalEnumeration;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterAdditionalEnumeration) {
	 		listener.enterAdditionalEnumeration(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitAdditionalEnumeration) {
	 		listener.exitAdditionalEnumeration(this);
		}
	}
}


export class IntegerTypeContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INTEGER_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.INTEGER_LITERAL, 0);
	}
	public L_BRACE(): TerminalNode {
		return this.getToken(asn1Parser.L_BRACE, 0);
	}
	public namedNumberList(): NamedNumberListContext {
		return this.getTypedRuleContext(NamedNumberListContext, 0) as NamedNumberListContext;
	}
	public R_BRACE(): TerminalNode {
		return this.getToken(asn1Parser.R_BRACE, 0);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_integerType;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterIntegerType) {
	 		listener.enterIntegerType(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitIntegerType) {
	 		listener.exitIntegerType(this);
		}
	}
}


export class NamedNumberListContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public namedNumber_list(): NamedNumberContext[] {
		return this.getTypedRuleContexts(NamedNumberContext) as NamedNumberContext[];
	}
	public namedNumber(i: number): NamedNumberContext {
		return this.getTypedRuleContext(NamedNumberContext, i) as NamedNumberContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(asn1Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(asn1Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_namedNumberList;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterNamedNumberList) {
	 		listener.enterNamedNumberList(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitNamedNumberList) {
	 		listener.exitNamedNumberList(this);
		}
	}
}


export class ObjectIdentifierTypeContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OBJECT_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.OBJECT_LITERAL, 0);
	}
	public IDENTIFIER_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.IDENTIFIER_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_objectIdentifierType;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterObjectIdentifierType) {
	 		listener.enterObjectIdentifierType(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitObjectIdentifierType) {
	 		listener.exitObjectIdentifierType(this);
		}
	}
}


export class ComponentRelationConstraintContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public L_BRACE_list(): TerminalNode[] {
	    	return this.getTokens(asn1Parser.L_BRACE);
	}
	public L_BRACE(i: number): TerminalNode {
		return this.getToken(asn1Parser.L_BRACE, i);
	}
	public R_BRACE_list(): TerminalNode[] {
	    	return this.getTokens(asn1Parser.R_BRACE);
	}
	public R_BRACE(i: number): TerminalNode {
		return this.getToken(asn1Parser.R_BRACE, i);
	}
	public IDENTIFIER_list(): TerminalNode[] {
	    	return this.getTokens(asn1Parser.IDENTIFIER);
	}
	public IDENTIFIER(i: number): TerminalNode {
		return this.getToken(asn1Parser.IDENTIFIER, i);
	}
	public atNotation_list(): AtNotationContext[] {
		return this.getTypedRuleContexts(AtNotationContext) as AtNotationContext[];
	}
	public atNotation(i: number): AtNotationContext {
		return this.getTypedRuleContext(AtNotationContext, i) as AtNotationContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(asn1Parser.DOT, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(asn1Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(asn1Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_componentRelationConstraint;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterComponentRelationConstraint) {
	 		listener.enterComponentRelationConstraint(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitComponentRelationConstraint) {
	 		listener.exitComponentRelationConstraint(this);
		}
	}
}


export class AtNotationContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public componentIdList(): ComponentIdListContext {
		return this.getTypedRuleContext(ComponentIdListContext, 0) as ComponentIdListContext;
	}
	public A_ROND(): TerminalNode {
		return this.getToken(asn1Parser.A_ROND, 0);
	}
	public A_ROND_DOT(): TerminalNode {
		return this.getToken(asn1Parser.A_ROND_DOT, 0);
	}
	public level(): LevelContext {
		return this.getTypedRuleContext(LevelContext, 0) as LevelContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_atNotation;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterAtNotation) {
	 		listener.enterAtNotation(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitAtNotation) {
	 		listener.exitAtNotation(this);
		}
	}
}


export class LevelContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DOT(): TerminalNode {
		return this.getToken(asn1Parser.DOT, 0);
	}
	public level(): LevelContext {
		return this.getTypedRuleContext(LevelContext, 0) as LevelContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_level;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterLevel) {
	 		listener.enterLevel(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitLevel) {
	 		listener.exitLevel(this);
		}
	}
}


export class ComponentIdListContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER_list(): TerminalNode[] {
	    	return this.getTokens(asn1Parser.IDENTIFIER);
	}
	public IDENTIFIER(i: number): TerminalNode {
		return this.getToken(asn1Parser.IDENTIFIER, i);
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(asn1Parser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(asn1Parser.DOT, i);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_componentIdList;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterComponentIdList) {
	 		listener.enterComponentIdList(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitComponentIdList) {
	 		listener.exitComponentIdList(this);
		}
	}
}


export class OctetStringTypeContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OCTET_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.OCTET_LITERAL, 0);
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.STRING_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_octetStringType;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterOctetStringType) {
	 		listener.enterOctetStringType(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitOctetStringType) {
	 		listener.exitOctetStringType(this);
		}
	}
}


export class BitStringTypeContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BIT_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.BIT_LITERAL, 0);
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.STRING_LITERAL, 0);
	}
	public L_BRACE(): TerminalNode {
		return this.getToken(asn1Parser.L_BRACE, 0);
	}
	public namedBitList(): NamedBitListContext {
		return this.getTypedRuleContext(NamedBitListContext, 0) as NamedBitListContext;
	}
	public R_BRACE(): TerminalNode {
		return this.getToken(asn1Parser.R_BRACE, 0);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_bitStringType;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterBitStringType) {
	 		listener.enterBitStringType(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitBitStringType) {
	 		listener.exitBitStringType(this);
		}
	}
}


export class NamedBitListContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public namedBit_list(): NamedBitContext[] {
		return this.getTypedRuleContexts(NamedBitContext) as NamedBitContext[];
	}
	public namedBit(i: number): NamedBitContext {
		return this.getTypedRuleContext(NamedBitContext, i) as NamedBitContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(asn1Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(asn1Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_namedBitList;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterNamedBitList) {
	 		listener.enterNamedBitList(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitNamedBitList) {
	 		listener.exitNamedBitList(this);
		}
	}
}


export class NamedBitContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(asn1Parser.IDENTIFIER, 0);
	}
	public L_PARAN(): TerminalNode {
		return this.getToken(asn1Parser.L_PARAN, 0);
	}
	public R_PARAN(): TerminalNode {
		return this.getToken(asn1Parser.R_PARAN, 0);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(asn1Parser.NUMBER, 0);
	}
	public definedValue(): DefinedValueContext {
		return this.getTypedRuleContext(DefinedValueContext, 0) as DefinedValueContext;
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_namedBit;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterNamedBit) {
	 		listener.enterNamedBit(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitNamedBit) {
	 		listener.exitNamedBit(this);
		}
	}
}


export class BooleanValueContext extends ParserRuleContext {
	constructor(parser?: asn1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TRUE_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.TRUE_LITERAL, 0);
	}
	public FALSE_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.FALSE_LITERAL, 0);
	}
	public TRUE_SMALL_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.TRUE_SMALL_LITERAL, 0);
	}
	public FALSE_SMALL_LITERAL(): TerminalNode {
		return this.getToken(asn1Parser.FALSE_SMALL_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return asn1Parser.RULE_booleanValue;
	}
	public enterRule(listener: asn1Listener): void {
	    if(listener.enterBooleanValue) {
	 		listener.enterBooleanValue(this);
		}
	}
	public exitRule(listener: asn1Listener): void {
	    if(listener.exitBooleanValue) {
	 		listener.exitBooleanValue(this);
		}
	}
}
