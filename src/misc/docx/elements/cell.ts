import { CheerioAPI } from "cheerio";
import { ChildNode } from "domhandler";
import { ElementType } from "domelementtype";
import { Paragraph } from "./paragraph.js";

const TAG_NAME_TABLE_CELL = "w:tc";

export class Cell {
  public paragraphs: Paragraph[];

  constructor(paragraphs: Paragraph[]) {
    this.paragraphs = paragraphs;
  }

  static isCell(node: ChildNode) {
    if (node.type !== ElementType.Tag) {
      return false;
    }
    return node.name === TAG_NAME_TABLE_CELL;
  }

  public static from(cell: ChildNode, styles: CheerioAPI): Cell {
    if (cell.type !== ElementType.Tag) {
      return new Cell([]);
    }
    const { children } = cell;
    if (!children) {
      return new Cell([]);
    }
    const paragraphs = children
      .filter(Paragraph.isParagraph)
      .map((child) => Paragraph.from(child, styles));
    return new Cell(paragraphs);
  }
}
