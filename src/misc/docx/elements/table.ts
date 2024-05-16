import { CheerioAPI } from "cheerio";
import { ChildNode } from "domhandler";
import { ElementType } from "domelementtype";
import { Row } from "./row.js";

const TAG_NAME_TABLE = "w:tbl";

export class Table {
  public rows: Row[];

  constructor(rows: Row[]) {
    this.rows = rows;
  }

  public static isTable(node: ChildNode) {
    if (node.type !== ElementType.Tag) {
      return false;
    }
    return node.name === TAG_NAME_TABLE;
  }

  public static from(table: ChildNode, styles: CheerioAPI): Table {
    if (table.type !== ElementType.Tag) {
      return new Table([]);
    }
    const { children } = table;
    if (!children) {
      return new Table([]);
    }
    const rowList = children
      .filter(Row.isRow)
      .map((child) => Row.from(child, styles));
    return new Table(rowList);
  }
}
