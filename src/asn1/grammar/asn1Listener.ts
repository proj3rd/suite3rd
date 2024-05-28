// Generated from src/asn1/antlr/asn1.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


import { ModulesContext } from "./asn1Parser";
import { ModuleDefinitionContext } from "./asn1Parser";
import { TagDefaultContext } from "./asn1Parser";
import { ExtensionDefaultContext } from "./asn1Parser";
import { ModuleBodyContext } from "./asn1Parser";
import { ExportsContext } from "./asn1Parser";
import { SymbolsExportedContext } from "./asn1Parser";
import { ImportsContext } from "./asn1Parser";
import { SymbolsImportedContext } from "./asn1Parser";
import { SymbolsFromModuleListContext } from "./asn1Parser";
import { SymbolsFromModuleContext } from "./asn1Parser";
import { GlobalModuleReferenceContext } from "./asn1Parser";
import { AssignedIdentifierContext } from "./asn1Parser";
import { SymbolListContext } from "./asn1Parser";
import { SymbolContext } from "./asn1Parser";
import { AssignmentListContext } from "./asn1Parser";
import { AssignmentContext } from "./asn1Parser";
import { SequenceTypeContext } from "./asn1Parser";
import { ExtensionAndExceptionContext } from "./asn1Parser";
import { OptionalExtensionMarkerContext } from "./asn1Parser";
import { ComponentTypeListsContext } from "./asn1Parser";
import { RootComponentTypeListContext } from "./asn1Parser";
import { ComponentTypeListContext } from "./asn1Parser";
import { ComponentTypeContext } from "./asn1Parser";
import { TagContext } from "./asn1Parser";
import { ExtensionAdditionsContext } from "./asn1Parser";
import { ExtensionAdditionListContext } from "./asn1Parser";
import { ExtensionAdditionContext } from "./asn1Parser";
import { ExtensionAdditionGroupContext } from "./asn1Parser";
import { VersionNumberContext } from "./asn1Parser";
import { SequenceOfTypeContext } from "./asn1Parser";
import { SizeConstraintContext } from "./asn1Parser";
import { ParameterizedAssignmentContext } from "./asn1Parser";
import { ParameterListContext } from "./asn1Parser";
import { ParameterContext } from "./asn1Parser";
import { ParamGovernorContext } from "./asn1Parser";
import { GovernorContext } from "./asn1Parser";
import { ObjectClassAssignmentContext } from "./asn1Parser";
import { ObjectClassContext } from "./asn1Parser";
import { DefinedObjectClassContext } from "./asn1Parser";
import { UsefulObjectClassReferenceContext } from "./asn1Parser";
import { ExternalObjectClassReferenceContext } from "./asn1Parser";
import { ObjectClassDefnContext } from "./asn1Parser";
import { WithSyntaxSpecContext } from "./asn1Parser";
import { SyntaxListContext } from "./asn1Parser";
import { TokenOrGroupSpecContext } from "./asn1Parser";
import { OptionalGroupContext } from "./asn1Parser";
import { RequiredTokenContext } from "./asn1Parser";
import { LiteralContext } from "./asn1Parser";
import { PrimitiveFieldNameContext } from "./asn1Parser";
import { FieldSpecContext } from "./asn1Parser";
import { TypeFieldSpecContext } from "./asn1Parser";
import { TypeOptionalitySpecContext } from "./asn1Parser";
import { FixedTypeValueFieldSpecContext } from "./asn1Parser";
import { ValueOptionalitySpecContext } from "./asn1Parser";
import { VariableTypeValueFieldSpecContext } from "./asn1Parser";
import { FixedTypeValueSetFieldSpecContext } from "./asn1Parser";
import { ValueSetOptionalitySpecContext } from "./asn1Parser";
import { ObjectContext } from "./asn1Parser";
import { ParameterizedObjectContext } from "./asn1Parser";
import { DefinedObjectContext } from "./asn1Parser";
import { ObjectSetContext } from "./asn1Parser";
import { ObjectSetSpecContext } from "./asn1Parser";
import { FieldNameContext } from "./asn1Parser";
import { ValueSetContext } from "./asn1Parser";
import { ElementSetSpecsContext } from "./asn1Parser";
import { RootElementSetSpecContext } from "./asn1Parser";
import { AdditionalElementSetSpecContext } from "./asn1Parser";
import { ElementSetSpecContext } from "./asn1Parser";
import { UnionsContext } from "./asn1Parser";
import { ExclusionsContext } from "./asn1Parser";
import { IntersectionsContext } from "./asn1Parser";
import { UnionMarkContext } from "./asn1Parser";
import { IntersectionMarkContext } from "./asn1Parser";
import { ElementsContext } from "./asn1Parser";
import { ObjectSetElementsContext } from "./asn1Parser";
import { IntersectionElementsContext } from "./asn1Parser";
import { SubtypeElementsContext } from "./asn1Parser";
import { VariableTypeValueSetFieldSpecContext } from "./asn1Parser";
import { ObjectFieldSpecContext } from "./asn1Parser";
import { ObjectOptionalitySpecContext } from "./asn1Parser";
import { ObjectSetFieldSpecContext } from "./asn1Parser";
import { ObjectSetOptionalitySpecContext } from "./asn1Parser";
import { TypeAssignmentContext } from "./asn1Parser";
import { ValueAssignmentContext } from "./asn1Parser";
import { AsnTypeContext } from "./asn1Parser";
import { BuiltinTypeContext } from "./asn1Parser";
import { CharacterStringTypeContext } from "./asn1Parser";
import { RestrictedCharacterStringTypeContext } from "./asn1Parser";
import { ObjectClassFieldTypeContext } from "./asn1Parser";
import { SetTypeContext } from "./asn1Parser";
import { SetOfTypeContext } from "./asn1Parser";
import { ReferencedTypeContext } from "./asn1Parser";
import { DefinedTypeContext } from "./asn1Parser";
import { ConstraintContext } from "./asn1Parser";
import { ConstraintSpecContext } from "./asn1Parser";
import { UserDefinedConstraintContext } from "./asn1Parser";
import { GeneralConstraintContext } from "./asn1Parser";
import { UserDefinedConstraintParameterContext } from "./asn1Parser";
import { TableConstraintContext } from "./asn1Parser";
import { SimpleTableConstraintContext } from "./asn1Parser";
import { ContentsConstraintContext } from "./asn1Parser";
import { ComponentPresenceListsContext } from "./asn1Parser";
import { ComponentPresenceListContext } from "./asn1Parser";
import { ComponentPresenceContext } from "./asn1Parser";
import { SubtypeConstraintContext } from "./asn1Parser";
import { ValueContext } from "./asn1Parser";
import { BuiltinValueContext } from "./asn1Parser";
import { ObjectIdentifierValueContext } from "./asn1Parser";
import { ObjIdComponentsListContext } from "./asn1Parser";
import { ObjIdComponentsContext } from "./asn1Parser";
import { IntegerValueContext } from "./asn1Parser";
import { ChoiceValueContext } from "./asn1Parser";
import { EnumeratedValueContext } from "./asn1Parser";
import { SignedNumberContext } from "./asn1Parser";
import { ChoiceTypeContext } from "./asn1Parser";
import { AlternativeTypeListsContext } from "./asn1Parser";
import { ExtensionAdditionAlternativesContext } from "./asn1Parser";
import { ExtensionAdditionAlternativesListContext } from "./asn1Parser";
import { ExtensionAdditionAlternativeContext } from "./asn1Parser";
import { ExtensionAdditionAlternativesGroupContext } from "./asn1Parser";
import { RootAlternativeTypeListContext } from "./asn1Parser";
import { AlternativeTypeListContext } from "./asn1Parser";
import { NamedTypeContext } from "./asn1Parser";
import { EnumeratedTypeContext } from "./asn1Parser";
import { EnumerationsContext } from "./asn1Parser";
import { RootEnumerationContext } from "./asn1Parser";
import { EnumerationContext } from "./asn1Parser";
import { EnumerationItemContext } from "./asn1Parser";
import { NamedNumberContext } from "./asn1Parser";
import { DefinedValueContext } from "./asn1Parser";
import { ParameterizedValueContext } from "./asn1Parser";
import { SimpleDefinedValueContext } from "./asn1Parser";
import { ActualParameterListContext } from "./asn1Parser";
import { ActualParameterContext } from "./asn1Parser";
import { ExceptionSpecContext } from "./asn1Parser";
import { ExceptionIdentificationContext } from "./asn1Parser";
import { AdditionalEnumerationContext } from "./asn1Parser";
import { IntegerTypeContext } from "./asn1Parser";
import { NamedNumberListContext } from "./asn1Parser";
import { ObjectIdentifierTypeContext } from "./asn1Parser";
import { ComponentRelationConstraintContext } from "./asn1Parser";
import { AtNotationContext } from "./asn1Parser";
import { LevelContext } from "./asn1Parser";
import { ComponentIdListContext } from "./asn1Parser";
import { OctetStringTypeContext } from "./asn1Parser";
import { BitStringTypeContext } from "./asn1Parser";
import { NamedBitListContext } from "./asn1Parser";
import { NamedBitContext } from "./asn1Parser";
import { BooleanValueContext } from "./asn1Parser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `asn1Parser`.
 */
export default class asn1Listener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `asn1Parser.modules`.
	 * @param ctx the parse tree
	 */
	enterModules?: (ctx: ModulesContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.modules`.
	 * @param ctx the parse tree
	 */
	exitModules?: (ctx: ModulesContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.moduleDefinition`.
	 * @param ctx the parse tree
	 */
	enterModuleDefinition?: (ctx: ModuleDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.moduleDefinition`.
	 * @param ctx the parse tree
	 */
	exitModuleDefinition?: (ctx: ModuleDefinitionContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.tagDefault`.
	 * @param ctx the parse tree
	 */
	enterTagDefault?: (ctx: TagDefaultContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.tagDefault`.
	 * @param ctx the parse tree
	 */
	exitTagDefault?: (ctx: TagDefaultContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.extensionDefault`.
	 * @param ctx the parse tree
	 */
	enterExtensionDefault?: (ctx: ExtensionDefaultContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.extensionDefault`.
	 * @param ctx the parse tree
	 */
	exitExtensionDefault?: (ctx: ExtensionDefaultContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.moduleBody`.
	 * @param ctx the parse tree
	 */
	enterModuleBody?: (ctx: ModuleBodyContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.moduleBody`.
	 * @param ctx the parse tree
	 */
	exitModuleBody?: (ctx: ModuleBodyContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.exports`.
	 * @param ctx the parse tree
	 */
	enterExports?: (ctx: ExportsContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.exports`.
	 * @param ctx the parse tree
	 */
	exitExports?: (ctx: ExportsContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.symbolsExported`.
	 * @param ctx the parse tree
	 */
	enterSymbolsExported?: (ctx: SymbolsExportedContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.symbolsExported`.
	 * @param ctx the parse tree
	 */
	exitSymbolsExported?: (ctx: SymbolsExportedContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.imports`.
	 * @param ctx the parse tree
	 */
	enterImports?: (ctx: ImportsContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.imports`.
	 * @param ctx the parse tree
	 */
	exitImports?: (ctx: ImportsContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.symbolsImported`.
	 * @param ctx the parse tree
	 */
	enterSymbolsImported?: (ctx: SymbolsImportedContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.symbolsImported`.
	 * @param ctx the parse tree
	 */
	exitSymbolsImported?: (ctx: SymbolsImportedContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.symbolsFromModuleList`.
	 * @param ctx the parse tree
	 */
	enterSymbolsFromModuleList?: (ctx: SymbolsFromModuleListContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.symbolsFromModuleList`.
	 * @param ctx the parse tree
	 */
	exitSymbolsFromModuleList?: (ctx: SymbolsFromModuleListContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.symbolsFromModule`.
	 * @param ctx the parse tree
	 */
	enterSymbolsFromModule?: (ctx: SymbolsFromModuleContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.symbolsFromModule`.
	 * @param ctx the parse tree
	 */
	exitSymbolsFromModule?: (ctx: SymbolsFromModuleContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.globalModuleReference`.
	 * @param ctx the parse tree
	 */
	enterGlobalModuleReference?: (ctx: GlobalModuleReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.globalModuleReference`.
	 * @param ctx the parse tree
	 */
	exitGlobalModuleReference?: (ctx: GlobalModuleReferenceContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.assignedIdentifier`.
	 * @param ctx the parse tree
	 */
	enterAssignedIdentifier?: (ctx: AssignedIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.assignedIdentifier`.
	 * @param ctx the parse tree
	 */
	exitAssignedIdentifier?: (ctx: AssignedIdentifierContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.symbolList`.
	 * @param ctx the parse tree
	 */
	enterSymbolList?: (ctx: SymbolListContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.symbolList`.
	 * @param ctx the parse tree
	 */
	exitSymbolList?: (ctx: SymbolListContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.symbol`.
	 * @param ctx the parse tree
	 */
	enterSymbol?: (ctx: SymbolContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.symbol`.
	 * @param ctx the parse tree
	 */
	exitSymbol?: (ctx: SymbolContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.assignmentList`.
	 * @param ctx the parse tree
	 */
	enterAssignmentList?: (ctx: AssignmentListContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.assignmentList`.
	 * @param ctx the parse tree
	 */
	exitAssignmentList?: (ctx: AssignmentListContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.sequenceType`.
	 * @param ctx the parse tree
	 */
	enterSequenceType?: (ctx: SequenceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.sequenceType`.
	 * @param ctx the parse tree
	 */
	exitSequenceType?: (ctx: SequenceTypeContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.extensionAndException`.
	 * @param ctx the parse tree
	 */
	enterExtensionAndException?: (ctx: ExtensionAndExceptionContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.extensionAndException`.
	 * @param ctx the parse tree
	 */
	exitExtensionAndException?: (ctx: ExtensionAndExceptionContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.optionalExtensionMarker`.
	 * @param ctx the parse tree
	 */
	enterOptionalExtensionMarker?: (ctx: OptionalExtensionMarkerContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.optionalExtensionMarker`.
	 * @param ctx the parse tree
	 */
	exitOptionalExtensionMarker?: (ctx: OptionalExtensionMarkerContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.componentTypeLists`.
	 * @param ctx the parse tree
	 */
	enterComponentTypeLists?: (ctx: ComponentTypeListsContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.componentTypeLists`.
	 * @param ctx the parse tree
	 */
	exitComponentTypeLists?: (ctx: ComponentTypeListsContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.rootComponentTypeList`.
	 * @param ctx the parse tree
	 */
	enterRootComponentTypeList?: (ctx: RootComponentTypeListContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.rootComponentTypeList`.
	 * @param ctx the parse tree
	 */
	exitRootComponentTypeList?: (ctx: RootComponentTypeListContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.componentTypeList`.
	 * @param ctx the parse tree
	 */
	enterComponentTypeList?: (ctx: ComponentTypeListContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.componentTypeList`.
	 * @param ctx the parse tree
	 */
	exitComponentTypeList?: (ctx: ComponentTypeListContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.componentType`.
	 * @param ctx the parse tree
	 */
	enterComponentType?: (ctx: ComponentTypeContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.componentType`.
	 * @param ctx the parse tree
	 */
	exitComponentType?: (ctx: ComponentTypeContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.tag`.
	 * @param ctx the parse tree
	 */
	enterTag?: (ctx: TagContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.tag`.
	 * @param ctx the parse tree
	 */
	exitTag?: (ctx: TagContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.extensionAdditions`.
	 * @param ctx the parse tree
	 */
	enterExtensionAdditions?: (ctx: ExtensionAdditionsContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.extensionAdditions`.
	 * @param ctx the parse tree
	 */
	exitExtensionAdditions?: (ctx: ExtensionAdditionsContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.extensionAdditionList`.
	 * @param ctx the parse tree
	 */
	enterExtensionAdditionList?: (ctx: ExtensionAdditionListContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.extensionAdditionList`.
	 * @param ctx the parse tree
	 */
	exitExtensionAdditionList?: (ctx: ExtensionAdditionListContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.extensionAddition`.
	 * @param ctx the parse tree
	 */
	enterExtensionAddition?: (ctx: ExtensionAdditionContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.extensionAddition`.
	 * @param ctx the parse tree
	 */
	exitExtensionAddition?: (ctx: ExtensionAdditionContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.extensionAdditionGroup`.
	 * @param ctx the parse tree
	 */
	enterExtensionAdditionGroup?: (ctx: ExtensionAdditionGroupContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.extensionAdditionGroup`.
	 * @param ctx the parse tree
	 */
	exitExtensionAdditionGroup?: (ctx: ExtensionAdditionGroupContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.versionNumber`.
	 * @param ctx the parse tree
	 */
	enterVersionNumber?: (ctx: VersionNumberContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.versionNumber`.
	 * @param ctx the parse tree
	 */
	exitVersionNumber?: (ctx: VersionNumberContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.sequenceOfType`.
	 * @param ctx the parse tree
	 */
	enterSequenceOfType?: (ctx: SequenceOfTypeContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.sequenceOfType`.
	 * @param ctx the parse tree
	 */
	exitSequenceOfType?: (ctx: SequenceOfTypeContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.sizeConstraint`.
	 * @param ctx the parse tree
	 */
	enterSizeConstraint?: (ctx: SizeConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.sizeConstraint`.
	 * @param ctx the parse tree
	 */
	exitSizeConstraint?: (ctx: SizeConstraintContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.parameterizedAssignment`.
	 * @param ctx the parse tree
	 */
	enterParameterizedAssignment?: (ctx: ParameterizedAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.parameterizedAssignment`.
	 * @param ctx the parse tree
	 */
	exitParameterizedAssignment?: (ctx: ParameterizedAssignmentContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.parameterList`.
	 * @param ctx the parse tree
	 */
	enterParameterList?: (ctx: ParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.parameterList`.
	 * @param ctx the parse tree
	 */
	exitParameterList?: (ctx: ParameterListContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.parameter`.
	 * @param ctx the parse tree
	 */
	enterParameter?: (ctx: ParameterContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.parameter`.
	 * @param ctx the parse tree
	 */
	exitParameter?: (ctx: ParameterContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.paramGovernor`.
	 * @param ctx the parse tree
	 */
	enterParamGovernor?: (ctx: ParamGovernorContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.paramGovernor`.
	 * @param ctx the parse tree
	 */
	exitParamGovernor?: (ctx: ParamGovernorContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.governor`.
	 * @param ctx the parse tree
	 */
	enterGovernor?: (ctx: GovernorContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.governor`.
	 * @param ctx the parse tree
	 */
	exitGovernor?: (ctx: GovernorContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.objectClassAssignment`.
	 * @param ctx the parse tree
	 */
	enterObjectClassAssignment?: (ctx: ObjectClassAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.objectClassAssignment`.
	 * @param ctx the parse tree
	 */
	exitObjectClassAssignment?: (ctx: ObjectClassAssignmentContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.objectClass`.
	 * @param ctx the parse tree
	 */
	enterObjectClass?: (ctx: ObjectClassContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.objectClass`.
	 * @param ctx the parse tree
	 */
	exitObjectClass?: (ctx: ObjectClassContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.definedObjectClass`.
	 * @param ctx the parse tree
	 */
	enterDefinedObjectClass?: (ctx: DefinedObjectClassContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.definedObjectClass`.
	 * @param ctx the parse tree
	 */
	exitDefinedObjectClass?: (ctx: DefinedObjectClassContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.usefulObjectClassReference`.
	 * @param ctx the parse tree
	 */
	enterUsefulObjectClassReference?: (ctx: UsefulObjectClassReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.usefulObjectClassReference`.
	 * @param ctx the parse tree
	 */
	exitUsefulObjectClassReference?: (ctx: UsefulObjectClassReferenceContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.externalObjectClassReference`.
	 * @param ctx the parse tree
	 */
	enterExternalObjectClassReference?: (ctx: ExternalObjectClassReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.externalObjectClassReference`.
	 * @param ctx the parse tree
	 */
	exitExternalObjectClassReference?: (ctx: ExternalObjectClassReferenceContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.objectClassDefn`.
	 * @param ctx the parse tree
	 */
	enterObjectClassDefn?: (ctx: ObjectClassDefnContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.objectClassDefn`.
	 * @param ctx the parse tree
	 */
	exitObjectClassDefn?: (ctx: ObjectClassDefnContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.withSyntaxSpec`.
	 * @param ctx the parse tree
	 */
	enterWithSyntaxSpec?: (ctx: WithSyntaxSpecContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.withSyntaxSpec`.
	 * @param ctx the parse tree
	 */
	exitWithSyntaxSpec?: (ctx: WithSyntaxSpecContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.syntaxList`.
	 * @param ctx the parse tree
	 */
	enterSyntaxList?: (ctx: SyntaxListContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.syntaxList`.
	 * @param ctx the parse tree
	 */
	exitSyntaxList?: (ctx: SyntaxListContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.tokenOrGroupSpec`.
	 * @param ctx the parse tree
	 */
	enterTokenOrGroupSpec?: (ctx: TokenOrGroupSpecContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.tokenOrGroupSpec`.
	 * @param ctx the parse tree
	 */
	exitTokenOrGroupSpec?: (ctx: TokenOrGroupSpecContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.optionalGroup`.
	 * @param ctx the parse tree
	 */
	enterOptionalGroup?: (ctx: OptionalGroupContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.optionalGroup`.
	 * @param ctx the parse tree
	 */
	exitOptionalGroup?: (ctx: OptionalGroupContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.requiredToken`.
	 * @param ctx the parse tree
	 */
	enterRequiredToken?: (ctx: RequiredTokenContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.requiredToken`.
	 * @param ctx the parse tree
	 */
	exitRequiredToken?: (ctx: RequiredTokenContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.primitiveFieldName`.
	 * @param ctx the parse tree
	 */
	enterPrimitiveFieldName?: (ctx: PrimitiveFieldNameContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.primitiveFieldName`.
	 * @param ctx the parse tree
	 */
	exitPrimitiveFieldName?: (ctx: PrimitiveFieldNameContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.fieldSpec`.
	 * @param ctx the parse tree
	 */
	enterFieldSpec?: (ctx: FieldSpecContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.fieldSpec`.
	 * @param ctx the parse tree
	 */
	exitFieldSpec?: (ctx: FieldSpecContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.typeFieldSpec`.
	 * @param ctx the parse tree
	 */
	enterTypeFieldSpec?: (ctx: TypeFieldSpecContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.typeFieldSpec`.
	 * @param ctx the parse tree
	 */
	exitTypeFieldSpec?: (ctx: TypeFieldSpecContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.typeOptionalitySpec`.
	 * @param ctx the parse tree
	 */
	enterTypeOptionalitySpec?: (ctx: TypeOptionalitySpecContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.typeOptionalitySpec`.
	 * @param ctx the parse tree
	 */
	exitTypeOptionalitySpec?: (ctx: TypeOptionalitySpecContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.fixedTypeValueFieldSpec`.
	 * @param ctx the parse tree
	 */
	enterFixedTypeValueFieldSpec?: (ctx: FixedTypeValueFieldSpecContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.fixedTypeValueFieldSpec`.
	 * @param ctx the parse tree
	 */
	exitFixedTypeValueFieldSpec?: (ctx: FixedTypeValueFieldSpecContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.valueOptionalitySpec`.
	 * @param ctx the parse tree
	 */
	enterValueOptionalitySpec?: (ctx: ValueOptionalitySpecContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.valueOptionalitySpec`.
	 * @param ctx the parse tree
	 */
	exitValueOptionalitySpec?: (ctx: ValueOptionalitySpecContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.variableTypeValueFieldSpec`.
	 * @param ctx the parse tree
	 */
	enterVariableTypeValueFieldSpec?: (ctx: VariableTypeValueFieldSpecContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.variableTypeValueFieldSpec`.
	 * @param ctx the parse tree
	 */
	exitVariableTypeValueFieldSpec?: (ctx: VariableTypeValueFieldSpecContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.fixedTypeValueSetFieldSpec`.
	 * @param ctx the parse tree
	 */
	enterFixedTypeValueSetFieldSpec?: (ctx: FixedTypeValueSetFieldSpecContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.fixedTypeValueSetFieldSpec`.
	 * @param ctx the parse tree
	 */
	exitFixedTypeValueSetFieldSpec?: (ctx: FixedTypeValueSetFieldSpecContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.valueSetOptionalitySpec`.
	 * @param ctx the parse tree
	 */
	enterValueSetOptionalitySpec?: (ctx: ValueSetOptionalitySpecContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.valueSetOptionalitySpec`.
	 * @param ctx the parse tree
	 */
	exitValueSetOptionalitySpec?: (ctx: ValueSetOptionalitySpecContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.object`.
	 * @param ctx the parse tree
	 */
	enterObject?: (ctx: ObjectContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.object`.
	 * @param ctx the parse tree
	 */
	exitObject?: (ctx: ObjectContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.parameterizedObject`.
	 * @param ctx the parse tree
	 */
	enterParameterizedObject?: (ctx: ParameterizedObjectContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.parameterizedObject`.
	 * @param ctx the parse tree
	 */
	exitParameterizedObject?: (ctx: ParameterizedObjectContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.definedObject`.
	 * @param ctx the parse tree
	 */
	enterDefinedObject?: (ctx: DefinedObjectContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.definedObject`.
	 * @param ctx the parse tree
	 */
	exitDefinedObject?: (ctx: DefinedObjectContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.objectSet`.
	 * @param ctx the parse tree
	 */
	enterObjectSet?: (ctx: ObjectSetContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.objectSet`.
	 * @param ctx the parse tree
	 */
	exitObjectSet?: (ctx: ObjectSetContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.objectSetSpec`.
	 * @param ctx the parse tree
	 */
	enterObjectSetSpec?: (ctx: ObjectSetSpecContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.objectSetSpec`.
	 * @param ctx the parse tree
	 */
	exitObjectSetSpec?: (ctx: ObjectSetSpecContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.fieldName`.
	 * @param ctx the parse tree
	 */
	enterFieldName?: (ctx: FieldNameContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.fieldName`.
	 * @param ctx the parse tree
	 */
	exitFieldName?: (ctx: FieldNameContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.valueSet`.
	 * @param ctx the parse tree
	 */
	enterValueSet?: (ctx: ValueSetContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.valueSet`.
	 * @param ctx the parse tree
	 */
	exitValueSet?: (ctx: ValueSetContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.elementSetSpecs`.
	 * @param ctx the parse tree
	 */
	enterElementSetSpecs?: (ctx: ElementSetSpecsContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.elementSetSpecs`.
	 * @param ctx the parse tree
	 */
	exitElementSetSpecs?: (ctx: ElementSetSpecsContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.rootElementSetSpec`.
	 * @param ctx the parse tree
	 */
	enterRootElementSetSpec?: (ctx: RootElementSetSpecContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.rootElementSetSpec`.
	 * @param ctx the parse tree
	 */
	exitRootElementSetSpec?: (ctx: RootElementSetSpecContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.additionalElementSetSpec`.
	 * @param ctx the parse tree
	 */
	enterAdditionalElementSetSpec?: (ctx: AdditionalElementSetSpecContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.additionalElementSetSpec`.
	 * @param ctx the parse tree
	 */
	exitAdditionalElementSetSpec?: (ctx: AdditionalElementSetSpecContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.elementSetSpec`.
	 * @param ctx the parse tree
	 */
	enterElementSetSpec?: (ctx: ElementSetSpecContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.elementSetSpec`.
	 * @param ctx the parse tree
	 */
	exitElementSetSpec?: (ctx: ElementSetSpecContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.unions`.
	 * @param ctx the parse tree
	 */
	enterUnions?: (ctx: UnionsContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.unions`.
	 * @param ctx the parse tree
	 */
	exitUnions?: (ctx: UnionsContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.exclusions`.
	 * @param ctx the parse tree
	 */
	enterExclusions?: (ctx: ExclusionsContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.exclusions`.
	 * @param ctx the parse tree
	 */
	exitExclusions?: (ctx: ExclusionsContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.intersections`.
	 * @param ctx the parse tree
	 */
	enterIntersections?: (ctx: IntersectionsContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.intersections`.
	 * @param ctx the parse tree
	 */
	exitIntersections?: (ctx: IntersectionsContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.unionMark`.
	 * @param ctx the parse tree
	 */
	enterUnionMark?: (ctx: UnionMarkContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.unionMark`.
	 * @param ctx the parse tree
	 */
	exitUnionMark?: (ctx: UnionMarkContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.intersectionMark`.
	 * @param ctx the parse tree
	 */
	enterIntersectionMark?: (ctx: IntersectionMarkContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.intersectionMark`.
	 * @param ctx the parse tree
	 */
	exitIntersectionMark?: (ctx: IntersectionMarkContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.elements`.
	 * @param ctx the parse tree
	 */
	enterElements?: (ctx: ElementsContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.elements`.
	 * @param ctx the parse tree
	 */
	exitElements?: (ctx: ElementsContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.objectSetElements`.
	 * @param ctx the parse tree
	 */
	enterObjectSetElements?: (ctx: ObjectSetElementsContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.objectSetElements`.
	 * @param ctx the parse tree
	 */
	exitObjectSetElements?: (ctx: ObjectSetElementsContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.intersectionElements`.
	 * @param ctx the parse tree
	 */
	enterIntersectionElements?: (ctx: IntersectionElementsContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.intersectionElements`.
	 * @param ctx the parse tree
	 */
	exitIntersectionElements?: (ctx: IntersectionElementsContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.subtypeElements`.
	 * @param ctx the parse tree
	 */
	enterSubtypeElements?: (ctx: SubtypeElementsContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.subtypeElements`.
	 * @param ctx the parse tree
	 */
	exitSubtypeElements?: (ctx: SubtypeElementsContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.variableTypeValueSetFieldSpec`.
	 * @param ctx the parse tree
	 */
	enterVariableTypeValueSetFieldSpec?: (ctx: VariableTypeValueSetFieldSpecContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.variableTypeValueSetFieldSpec`.
	 * @param ctx the parse tree
	 */
	exitVariableTypeValueSetFieldSpec?: (ctx: VariableTypeValueSetFieldSpecContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.objectFieldSpec`.
	 * @param ctx the parse tree
	 */
	enterObjectFieldSpec?: (ctx: ObjectFieldSpecContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.objectFieldSpec`.
	 * @param ctx the parse tree
	 */
	exitObjectFieldSpec?: (ctx: ObjectFieldSpecContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.objectOptionalitySpec`.
	 * @param ctx the parse tree
	 */
	enterObjectOptionalitySpec?: (ctx: ObjectOptionalitySpecContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.objectOptionalitySpec`.
	 * @param ctx the parse tree
	 */
	exitObjectOptionalitySpec?: (ctx: ObjectOptionalitySpecContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.objectSetFieldSpec`.
	 * @param ctx the parse tree
	 */
	enterObjectSetFieldSpec?: (ctx: ObjectSetFieldSpecContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.objectSetFieldSpec`.
	 * @param ctx the parse tree
	 */
	exitObjectSetFieldSpec?: (ctx: ObjectSetFieldSpecContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.objectSetOptionalitySpec`.
	 * @param ctx the parse tree
	 */
	enterObjectSetOptionalitySpec?: (ctx: ObjectSetOptionalitySpecContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.objectSetOptionalitySpec`.
	 * @param ctx the parse tree
	 */
	exitObjectSetOptionalitySpec?: (ctx: ObjectSetOptionalitySpecContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.typeAssignment`.
	 * @param ctx the parse tree
	 */
	enterTypeAssignment?: (ctx: TypeAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.typeAssignment`.
	 * @param ctx the parse tree
	 */
	exitTypeAssignment?: (ctx: TypeAssignmentContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.valueAssignment`.
	 * @param ctx the parse tree
	 */
	enterValueAssignment?: (ctx: ValueAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.valueAssignment`.
	 * @param ctx the parse tree
	 */
	exitValueAssignment?: (ctx: ValueAssignmentContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.asnType`.
	 * @param ctx the parse tree
	 */
	enterAsnType?: (ctx: AsnTypeContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.asnType`.
	 * @param ctx the parse tree
	 */
	exitAsnType?: (ctx: AsnTypeContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.builtinType`.
	 * @param ctx the parse tree
	 */
	enterBuiltinType?: (ctx: BuiltinTypeContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.builtinType`.
	 * @param ctx the parse tree
	 */
	exitBuiltinType?: (ctx: BuiltinTypeContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.characterStringType`.
	 * @param ctx the parse tree
	 */
	enterCharacterStringType?: (ctx: CharacterStringTypeContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.characterStringType`.
	 * @param ctx the parse tree
	 */
	exitCharacterStringType?: (ctx: CharacterStringTypeContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.restrictedCharacterStringType`.
	 * @param ctx the parse tree
	 */
	enterRestrictedCharacterStringType?: (ctx: RestrictedCharacterStringTypeContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.restrictedCharacterStringType`.
	 * @param ctx the parse tree
	 */
	exitRestrictedCharacterStringType?: (ctx: RestrictedCharacterStringTypeContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.objectClassFieldType`.
	 * @param ctx the parse tree
	 */
	enterObjectClassFieldType?: (ctx: ObjectClassFieldTypeContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.objectClassFieldType`.
	 * @param ctx the parse tree
	 */
	exitObjectClassFieldType?: (ctx: ObjectClassFieldTypeContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.setType`.
	 * @param ctx the parse tree
	 */
	enterSetType?: (ctx: SetTypeContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.setType`.
	 * @param ctx the parse tree
	 */
	exitSetType?: (ctx: SetTypeContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.setOfType`.
	 * @param ctx the parse tree
	 */
	enterSetOfType?: (ctx: SetOfTypeContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.setOfType`.
	 * @param ctx the parse tree
	 */
	exitSetOfType?: (ctx: SetOfTypeContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.referencedType`.
	 * @param ctx the parse tree
	 */
	enterReferencedType?: (ctx: ReferencedTypeContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.referencedType`.
	 * @param ctx the parse tree
	 */
	exitReferencedType?: (ctx: ReferencedTypeContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.definedType`.
	 * @param ctx the parse tree
	 */
	enterDefinedType?: (ctx: DefinedTypeContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.definedType`.
	 * @param ctx the parse tree
	 */
	exitDefinedType?: (ctx: DefinedTypeContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.constraint`.
	 * @param ctx the parse tree
	 */
	enterConstraint?: (ctx: ConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.constraint`.
	 * @param ctx the parse tree
	 */
	exitConstraint?: (ctx: ConstraintContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.constraintSpec`.
	 * @param ctx the parse tree
	 */
	enterConstraintSpec?: (ctx: ConstraintSpecContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.constraintSpec`.
	 * @param ctx the parse tree
	 */
	exitConstraintSpec?: (ctx: ConstraintSpecContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.userDefinedConstraint`.
	 * @param ctx the parse tree
	 */
	enterUserDefinedConstraint?: (ctx: UserDefinedConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.userDefinedConstraint`.
	 * @param ctx the parse tree
	 */
	exitUserDefinedConstraint?: (ctx: UserDefinedConstraintContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.generalConstraint`.
	 * @param ctx the parse tree
	 */
	enterGeneralConstraint?: (ctx: GeneralConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.generalConstraint`.
	 * @param ctx the parse tree
	 */
	exitGeneralConstraint?: (ctx: GeneralConstraintContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.userDefinedConstraintParameter`.
	 * @param ctx the parse tree
	 */
	enterUserDefinedConstraintParameter?: (ctx: UserDefinedConstraintParameterContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.userDefinedConstraintParameter`.
	 * @param ctx the parse tree
	 */
	exitUserDefinedConstraintParameter?: (ctx: UserDefinedConstraintParameterContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.tableConstraint`.
	 * @param ctx the parse tree
	 */
	enterTableConstraint?: (ctx: TableConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.tableConstraint`.
	 * @param ctx the parse tree
	 */
	exitTableConstraint?: (ctx: TableConstraintContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.simpleTableConstraint`.
	 * @param ctx the parse tree
	 */
	enterSimpleTableConstraint?: (ctx: SimpleTableConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.simpleTableConstraint`.
	 * @param ctx the parse tree
	 */
	exitSimpleTableConstraint?: (ctx: SimpleTableConstraintContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.contentsConstraint`.
	 * @param ctx the parse tree
	 */
	enterContentsConstraint?: (ctx: ContentsConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.contentsConstraint`.
	 * @param ctx the parse tree
	 */
	exitContentsConstraint?: (ctx: ContentsConstraintContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.componentPresenceLists`.
	 * @param ctx the parse tree
	 */
	enterComponentPresenceLists?: (ctx: ComponentPresenceListsContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.componentPresenceLists`.
	 * @param ctx the parse tree
	 */
	exitComponentPresenceLists?: (ctx: ComponentPresenceListsContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.componentPresenceList`.
	 * @param ctx the parse tree
	 */
	enterComponentPresenceList?: (ctx: ComponentPresenceListContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.componentPresenceList`.
	 * @param ctx the parse tree
	 */
	exitComponentPresenceList?: (ctx: ComponentPresenceListContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.componentPresence`.
	 * @param ctx the parse tree
	 */
	enterComponentPresence?: (ctx: ComponentPresenceContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.componentPresence`.
	 * @param ctx the parse tree
	 */
	exitComponentPresence?: (ctx: ComponentPresenceContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.subtypeConstraint`.
	 * @param ctx the parse tree
	 */
	enterSubtypeConstraint?: (ctx: SubtypeConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.subtypeConstraint`.
	 * @param ctx the parse tree
	 */
	exitSubtypeConstraint?: (ctx: SubtypeConstraintContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.builtinValue`.
	 * @param ctx the parse tree
	 */
	enterBuiltinValue?: (ctx: BuiltinValueContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.builtinValue`.
	 * @param ctx the parse tree
	 */
	exitBuiltinValue?: (ctx: BuiltinValueContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.objectIdentifierValue`.
	 * @param ctx the parse tree
	 */
	enterObjectIdentifierValue?: (ctx: ObjectIdentifierValueContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.objectIdentifierValue`.
	 * @param ctx the parse tree
	 */
	exitObjectIdentifierValue?: (ctx: ObjectIdentifierValueContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.objIdComponentsList`.
	 * @param ctx the parse tree
	 */
	enterObjIdComponentsList?: (ctx: ObjIdComponentsListContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.objIdComponentsList`.
	 * @param ctx the parse tree
	 */
	exitObjIdComponentsList?: (ctx: ObjIdComponentsListContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.objIdComponents`.
	 * @param ctx the parse tree
	 */
	enterObjIdComponents?: (ctx: ObjIdComponentsContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.objIdComponents`.
	 * @param ctx the parse tree
	 */
	exitObjIdComponents?: (ctx: ObjIdComponentsContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.integerValue`.
	 * @param ctx the parse tree
	 */
	enterIntegerValue?: (ctx: IntegerValueContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.integerValue`.
	 * @param ctx the parse tree
	 */
	exitIntegerValue?: (ctx: IntegerValueContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.choiceValue`.
	 * @param ctx the parse tree
	 */
	enterChoiceValue?: (ctx: ChoiceValueContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.choiceValue`.
	 * @param ctx the parse tree
	 */
	exitChoiceValue?: (ctx: ChoiceValueContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.enumeratedValue`.
	 * @param ctx the parse tree
	 */
	enterEnumeratedValue?: (ctx: EnumeratedValueContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.enumeratedValue`.
	 * @param ctx the parse tree
	 */
	exitEnumeratedValue?: (ctx: EnumeratedValueContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.signedNumber`.
	 * @param ctx the parse tree
	 */
	enterSignedNumber?: (ctx: SignedNumberContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.signedNumber`.
	 * @param ctx the parse tree
	 */
	exitSignedNumber?: (ctx: SignedNumberContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.choiceType`.
	 * @param ctx the parse tree
	 */
	enterChoiceType?: (ctx: ChoiceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.choiceType`.
	 * @param ctx the parse tree
	 */
	exitChoiceType?: (ctx: ChoiceTypeContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.alternativeTypeLists`.
	 * @param ctx the parse tree
	 */
	enterAlternativeTypeLists?: (ctx: AlternativeTypeListsContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.alternativeTypeLists`.
	 * @param ctx the parse tree
	 */
	exitAlternativeTypeLists?: (ctx: AlternativeTypeListsContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.extensionAdditionAlternatives`.
	 * @param ctx the parse tree
	 */
	enterExtensionAdditionAlternatives?: (ctx: ExtensionAdditionAlternativesContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.extensionAdditionAlternatives`.
	 * @param ctx the parse tree
	 */
	exitExtensionAdditionAlternatives?: (ctx: ExtensionAdditionAlternativesContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.extensionAdditionAlternativesList`.
	 * @param ctx the parse tree
	 */
	enterExtensionAdditionAlternativesList?: (ctx: ExtensionAdditionAlternativesListContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.extensionAdditionAlternativesList`.
	 * @param ctx the parse tree
	 */
	exitExtensionAdditionAlternativesList?: (ctx: ExtensionAdditionAlternativesListContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.extensionAdditionAlternative`.
	 * @param ctx the parse tree
	 */
	enterExtensionAdditionAlternative?: (ctx: ExtensionAdditionAlternativeContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.extensionAdditionAlternative`.
	 * @param ctx the parse tree
	 */
	exitExtensionAdditionAlternative?: (ctx: ExtensionAdditionAlternativeContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.extensionAdditionAlternativesGroup`.
	 * @param ctx the parse tree
	 */
	enterExtensionAdditionAlternativesGroup?: (ctx: ExtensionAdditionAlternativesGroupContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.extensionAdditionAlternativesGroup`.
	 * @param ctx the parse tree
	 */
	exitExtensionAdditionAlternativesGroup?: (ctx: ExtensionAdditionAlternativesGroupContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.rootAlternativeTypeList`.
	 * @param ctx the parse tree
	 */
	enterRootAlternativeTypeList?: (ctx: RootAlternativeTypeListContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.rootAlternativeTypeList`.
	 * @param ctx the parse tree
	 */
	exitRootAlternativeTypeList?: (ctx: RootAlternativeTypeListContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.alternativeTypeList`.
	 * @param ctx the parse tree
	 */
	enterAlternativeTypeList?: (ctx: AlternativeTypeListContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.alternativeTypeList`.
	 * @param ctx the parse tree
	 */
	exitAlternativeTypeList?: (ctx: AlternativeTypeListContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.namedType`.
	 * @param ctx the parse tree
	 */
	enterNamedType?: (ctx: NamedTypeContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.namedType`.
	 * @param ctx the parse tree
	 */
	exitNamedType?: (ctx: NamedTypeContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.enumeratedType`.
	 * @param ctx the parse tree
	 */
	enterEnumeratedType?: (ctx: EnumeratedTypeContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.enumeratedType`.
	 * @param ctx the parse tree
	 */
	exitEnumeratedType?: (ctx: EnumeratedTypeContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.enumerations`.
	 * @param ctx the parse tree
	 */
	enterEnumerations?: (ctx: EnumerationsContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.enumerations`.
	 * @param ctx the parse tree
	 */
	exitEnumerations?: (ctx: EnumerationsContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.rootEnumeration`.
	 * @param ctx the parse tree
	 */
	enterRootEnumeration?: (ctx: RootEnumerationContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.rootEnumeration`.
	 * @param ctx the parse tree
	 */
	exitRootEnumeration?: (ctx: RootEnumerationContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.enumeration`.
	 * @param ctx the parse tree
	 */
	enterEnumeration?: (ctx: EnumerationContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.enumeration`.
	 * @param ctx the parse tree
	 */
	exitEnumeration?: (ctx: EnumerationContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.enumerationItem`.
	 * @param ctx the parse tree
	 */
	enterEnumerationItem?: (ctx: EnumerationItemContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.enumerationItem`.
	 * @param ctx the parse tree
	 */
	exitEnumerationItem?: (ctx: EnumerationItemContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.namedNumber`.
	 * @param ctx the parse tree
	 */
	enterNamedNumber?: (ctx: NamedNumberContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.namedNumber`.
	 * @param ctx the parse tree
	 */
	exitNamedNumber?: (ctx: NamedNumberContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.definedValue`.
	 * @param ctx the parse tree
	 */
	enterDefinedValue?: (ctx: DefinedValueContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.definedValue`.
	 * @param ctx the parse tree
	 */
	exitDefinedValue?: (ctx: DefinedValueContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.parameterizedValue`.
	 * @param ctx the parse tree
	 */
	enterParameterizedValue?: (ctx: ParameterizedValueContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.parameterizedValue`.
	 * @param ctx the parse tree
	 */
	exitParameterizedValue?: (ctx: ParameterizedValueContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.simpleDefinedValue`.
	 * @param ctx the parse tree
	 */
	enterSimpleDefinedValue?: (ctx: SimpleDefinedValueContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.simpleDefinedValue`.
	 * @param ctx the parse tree
	 */
	exitSimpleDefinedValue?: (ctx: SimpleDefinedValueContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.actualParameterList`.
	 * @param ctx the parse tree
	 */
	enterActualParameterList?: (ctx: ActualParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.actualParameterList`.
	 * @param ctx the parse tree
	 */
	exitActualParameterList?: (ctx: ActualParameterListContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.actualParameter`.
	 * @param ctx the parse tree
	 */
	enterActualParameter?: (ctx: ActualParameterContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.actualParameter`.
	 * @param ctx the parse tree
	 */
	exitActualParameter?: (ctx: ActualParameterContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.exceptionSpec`.
	 * @param ctx the parse tree
	 */
	enterExceptionSpec?: (ctx: ExceptionSpecContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.exceptionSpec`.
	 * @param ctx the parse tree
	 */
	exitExceptionSpec?: (ctx: ExceptionSpecContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.exceptionIdentification`.
	 * @param ctx the parse tree
	 */
	enterExceptionIdentification?: (ctx: ExceptionIdentificationContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.exceptionIdentification`.
	 * @param ctx the parse tree
	 */
	exitExceptionIdentification?: (ctx: ExceptionIdentificationContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.additionalEnumeration`.
	 * @param ctx the parse tree
	 */
	enterAdditionalEnumeration?: (ctx: AdditionalEnumerationContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.additionalEnumeration`.
	 * @param ctx the parse tree
	 */
	exitAdditionalEnumeration?: (ctx: AdditionalEnumerationContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.integerType`.
	 * @param ctx the parse tree
	 */
	enterIntegerType?: (ctx: IntegerTypeContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.integerType`.
	 * @param ctx the parse tree
	 */
	exitIntegerType?: (ctx: IntegerTypeContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.namedNumberList`.
	 * @param ctx the parse tree
	 */
	enterNamedNumberList?: (ctx: NamedNumberListContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.namedNumberList`.
	 * @param ctx the parse tree
	 */
	exitNamedNumberList?: (ctx: NamedNumberListContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.objectIdentifierType`.
	 * @param ctx the parse tree
	 */
	enterObjectIdentifierType?: (ctx: ObjectIdentifierTypeContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.objectIdentifierType`.
	 * @param ctx the parse tree
	 */
	exitObjectIdentifierType?: (ctx: ObjectIdentifierTypeContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.componentRelationConstraint`.
	 * @param ctx the parse tree
	 */
	enterComponentRelationConstraint?: (ctx: ComponentRelationConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.componentRelationConstraint`.
	 * @param ctx the parse tree
	 */
	exitComponentRelationConstraint?: (ctx: ComponentRelationConstraintContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.atNotation`.
	 * @param ctx the parse tree
	 */
	enterAtNotation?: (ctx: AtNotationContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.atNotation`.
	 * @param ctx the parse tree
	 */
	exitAtNotation?: (ctx: AtNotationContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.level`.
	 * @param ctx the parse tree
	 */
	enterLevel?: (ctx: LevelContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.level`.
	 * @param ctx the parse tree
	 */
	exitLevel?: (ctx: LevelContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.componentIdList`.
	 * @param ctx the parse tree
	 */
	enterComponentIdList?: (ctx: ComponentIdListContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.componentIdList`.
	 * @param ctx the parse tree
	 */
	exitComponentIdList?: (ctx: ComponentIdListContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.octetStringType`.
	 * @param ctx the parse tree
	 */
	enterOctetStringType?: (ctx: OctetStringTypeContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.octetStringType`.
	 * @param ctx the parse tree
	 */
	exitOctetStringType?: (ctx: OctetStringTypeContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.bitStringType`.
	 * @param ctx the parse tree
	 */
	enterBitStringType?: (ctx: BitStringTypeContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.bitStringType`.
	 * @param ctx the parse tree
	 */
	exitBitStringType?: (ctx: BitStringTypeContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.namedBitList`.
	 * @param ctx the parse tree
	 */
	enterNamedBitList?: (ctx: NamedBitListContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.namedBitList`.
	 * @param ctx the parse tree
	 */
	exitNamedBitList?: (ctx: NamedBitListContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.namedBit`.
	 * @param ctx the parse tree
	 */
	enterNamedBit?: (ctx: NamedBitContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.namedBit`.
	 * @param ctx the parse tree
	 */
	exitNamedBit?: (ctx: NamedBitContext) => void;
	/**
	 * Enter a parse tree produced by `asn1Parser.booleanValue`.
	 * @param ctx the parse tree
	 */
	enterBooleanValue?: (ctx: BooleanValueContext) => void;
	/**
	 * Exit a parse tree produced by `asn1Parser.booleanValue`.
	 * @param ctx the parse tree
	 */
	exitBooleanValue?: (ctx: BooleanValueContext) => void;
}

