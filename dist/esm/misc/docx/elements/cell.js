import { ElementType } from "domelementtype";
import { Paragraph } from "./paragraph.js";
const TAG_NAME_TABLE_CELL = "w:tc";
export class Cell {
    constructor(paragraphs) {
        this.paragraphs = paragraphs;
    }
    static isCell(node) {
        if (node.type !== ElementType.Tag) {
            return false;
        }
        return node.name === TAG_NAME_TABLE_CELL;
    }
    static from(cell, styles) {
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
