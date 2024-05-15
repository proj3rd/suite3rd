import { CheerioAPI } from "cheerio";
import { ChildNode } from "domhandler";
import { ElementType } from "domelementtype";
import { Cell } from "./cell.js";

const TAG_NAME_TABLE_ROW = "w:tr";

export class Row {
  public cells: Cell[];

  constructor(cells: Cell[]) {
    this.cells = cells;
  }

  public static isRow(node: ChildNode) {
    if (node.type !== ElementType.Tag) {
      return false;
    }
    return node.name === TAG_NAME_TABLE_ROW;
  }

  public static from(row: ChildNode, styles: CheerioAPI): Row {
    if (row.type !== ElementType.Tag) {
      return new Row([]);
    }
    const { children } = row;
    if (!children) {
      return new Row([]);
    }
    const cells = children
      .filter(Cell.isCell)
      .map((child) => Cell.from(child, styles));
    return new Row(cells);
  }
}
