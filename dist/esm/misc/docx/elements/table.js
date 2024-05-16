import { ElementType } from "domelementtype";
import { Row } from "./row.js";
const TAG_NAME_TABLE = "w:tbl";
export class Table {
    constructor(rows) {
        this.rows = rows;
    }
    static isTable(node) {
        if (node.type !== ElementType.Tag) {
            return false;
        }
        return node.name === TAG_NAME_TABLE;
    }
    static from(table, styles) {
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
