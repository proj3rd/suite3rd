import { load } from "cheerio";
import { ElementType } from "domelementtype";
import { Run } from "./run.js";
export const SELECTOR_W_OUTLINE_LEVEL = "w\\:outlineLvl";
export const SELECTOR_W_PARA_PROP = "w\\:pPr";
export const SELECTOR_W_PARA_STYLE = "w\\:pStyle";
export const TAG_NAME_PARAGRAPH = "w:p";
export class Paragraph {
    constructor(text, { outlineLevel } = {}) {
        this.text = text;
        this.outlineLevel = outlineLevel;
    }
    static isParagraph(node) {
        if (node.type !== ElementType.Tag) {
            return false;
        }
        return node.name === TAG_NAME_PARAGRAPH;
    }
    static from(node, styles) {
        if (node.type !== ElementType.Tag) {
            return new Paragraph("");
        }
        const { children } = node;
        if (!children) {
            return new Paragraph("");
        }
        const textList = children.filter(Run.isRun).map(Run.from);
        const outlineLevel = Paragraph.getOutlineLevel(node.cloneNode(true), styles);
        return new Paragraph(textList.join(""), { outlineLevel });
    }
    static getOutlineLevel(node, styles) {
        const $ = load(node, { xml: true });
        const pPr = $(SELECTOR_W_PARA_PROP)[0];
        if (!pPr) {
            return undefined;
        }
        const outlineLevel = Paragraph.getOutlineLevelFromNode(pPr.cloneNode(true));
        if (outlineLevel) {
            return outlineLevel;
        }
        const paraStyle = Paragraph.getParaStyle(pPr.cloneNode(true), styles);
        if (!paraStyle) {
            return undefined;
        }
        const outlineLevelFromStyle = Paragraph.getOutlineLevelFromNode(paraStyle.cloneNode(true));
        return outlineLevelFromStyle;
    }
    static getOutlineLevelFromNode(style) {
        var _a;
        if (!style) {
            return undefined;
        }
        const $ = load(style, { xml: true });
        const outlineLevel = Number((_a = $(SELECTOR_W_OUTLINE_LEVEL)[0]) === null || _a === void 0 ? void 0 : _a.attribs["w:val"]);
        if (Number.isNaN(outlineLevel)) {
            return undefined;
        }
        return outlineLevel;
    }
    static getParaStyle(pPr, styles) {
        var _a;
        const $ = load(pPr, { xml: true });
        const styleId = (_a = $(SELECTOR_W_PARA_STYLE)[0]) === null || _a === void 0 ? void 0 : _a.attribs["w:val"];
        const selector = `w\\:style[w\\:type=paragraph][w\\:styleId=${styleId}]`;
        const style = styles(selector)[0];
        return style;
    }
}
