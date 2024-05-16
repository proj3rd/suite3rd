import { load } from "cheerio";
import jszip from "jszip";
const { loadAsync } = jszip;
import { getFileContent } from "./docx.js";
import { Paragraph } from "../elements/paragraph.js";
import { Table } from "../elements/table.js";

const SELECTOR_W_BODY = "w\\:body";

export async function parse(bin: Buffer) {
  const zip = await loadAsync(bin);

  const wordDocument = await getFileContent(zip, "word/document.xml");
  const $doc = load(wordDocument, { xml: true });
  const wBody = $doc(SELECTOR_W_BODY)[0];
  if (!wBody) {
    return Promise.reject(
      "This document does not look like a valid docx document (missing w:body)"
    );
  }

  const wordStyles = await getFileContent(zip, "word/styles.xml");
  const $styles = load(wordStyles, { xml: true });

  const elementList: (Paragraph | Table)[] = [];
  wBody.children.forEach((child) => {
    if (Paragraph.isParagraph(child)) {
      elementList.push(Paragraph.from(child, $styles));
      return;
    }
    if (Table.isTable(child)) {
      elementList.push(Table.from(child, $styles));
      return;
    }
  });
  return Promise.resolve(elementList);
}
