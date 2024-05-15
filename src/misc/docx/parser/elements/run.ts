import { ChildNode } from "domhandler";
import { ElementType } from "domelementtype";
import {
  tagToString,
  TAG_NAME_BREAK,
  TAG_NAME_CARRIAGE_RETURN,
  TAG_NAME_NO_BREAK_HYPHEN,
  TAG_NAME_TAB,
  TAG_NAME_TEXT,
} from "../utils.js";

export const TAG_NAME_RUN = "w:r";

export class Run {
  public static isRun(node: ChildNode) {
    if (node.type !== ElementType.Tag) {
      return false;
    }
    return node.name === TAG_NAME_RUN;
  }

  public static from(node: ChildNode) {
    if (node.type !== ElementType.Tag) {
      return "";
    }
    const { children } = node;
    if (!children) {
      return "";
    }
    const tagList = children.filter((child) => {
      if (child.type !== ElementType.Tag) {
        return false;
      }
      const { name } = child;
      return (
        name === TAG_NAME_TEXT ||
        name === TAG_NAME_BREAK ||
        name === TAG_NAME_CARRIAGE_RETURN ||
        name === TAG_NAME_NO_BREAK_HYPHEN ||
        name === TAG_NAME_TAB
      );
    });
    const textList = tagList.map(tagToString);
    return textList.join("");
  }
}
