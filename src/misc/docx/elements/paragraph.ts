import { AnyNode, CheerioAPI, Element, load } from "cheerio";
import { ChildNode } from "domhandler";
import { ElementType } from "domelementtype";
import { Run } from "./run.js";

export const SELECTOR_W_OUTLINE_LEVEL = "w\\:outlineLvl";
export const SELECTOR_W_PARA_PROP = "w\\:pPr";
export const SELECTOR_W_PARA_STYLE = "w\\:pStyle";

export const TAG_NAME_PARAGRAPH = "w:p";

export class Paragraph {
  public text: string;
  public outlineLevel?: number;

  constructor(text: string, { outlineLevel }: { outlineLevel?: number } = {}) {
    this.text = text;
    this.outlineLevel = outlineLevel;
  }

  public static isParagraph(node: ChildNode) {
    if (node.type !== ElementType.Tag) {
      return false;
    }
    return node.name === TAG_NAME_PARAGRAPH;
  }

  public static from(node: ChildNode, styles: CheerioAPI): Paragraph {
    if (node.type !== ElementType.Tag) {
      return new Paragraph("");
    }
    const { children } = node;
    if (!children) {
      return new Paragraph("");
    }
    const textList = children.filter(Run.isRun).map(Run.from);
    const outlineLevel = Paragraph.getOutlineLevel(
      node.cloneNode(true),
      styles
    );
    return new Paragraph(textList.join(""), { outlineLevel });
  }

  public static getOutlineLevel(
    node: Element,
    styles: CheerioAPI
  ): number | undefined {
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
    const outlineLevelFromStyle = Paragraph.getOutlineLevelFromNode(
      paraStyle.cloneNode(true)
    );
    return outlineLevelFromStyle;
  }

  static getOutlineLevelFromNode(
    style: AnyNode | undefined
  ): number | undefined {
    if (!style) {
      return undefined;
    }
    const $ = load(style, { xml: true });
    const outlineLevel = Number(
      $(SELECTOR_W_OUTLINE_LEVEL)[0]?.attribs["w:val"]
    );
    if (Number.isNaN(outlineLevel)) {
      return undefined;
    }
    return outlineLevel;
  }

  static getParaStyle(pPr: Element, styles: CheerioAPI): AnyNode | undefined {
    const $ = load(pPr, { xml: true });
    const styleId = $(SELECTOR_W_PARA_STYLE)[0]?.attribs["w:val"];
    const selector = `w\\:style[w\\:type=paragraph][w\\:styleId=${styleId}]`;
    const style = styles(selector)[0];
    return style;
  }
}
