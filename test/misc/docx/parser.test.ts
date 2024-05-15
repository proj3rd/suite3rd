import { readFileSync } from "fs";
import { resolve } from "path";
import { expect, it } from "vitest";
import { parse } from "../../../src/misc/docx";
import { Paragraph } from "../../../src/misc/docx/parser/elements/paragraph";
import { Table } from "../../../src/misc/docx/parser/elements/table";
import { Row } from "../../../src/misc/docx/parser/elements/row";
import { Cell } from "../../../src/misc/docx/parser/elements/cell";

it("should parse docx", async () => {
  const docx = readFileSync(resolve(__dirname, "37483-i10_s9-2-1-17.docx"));
  const parsed = await parse(docx);
  expect(parsed).toEqual([
    new Paragraph("9.2.1.17	E1 RELEASE RESPONSE ", {
      outlineLevel: 3,
    }),
    new Paragraph(
      "This message is sent by both the gNB-CU-CP and the gNB-CU-UP as a response to an E1 RELEASE REQUEST message."
    ),
    new Paragraph(
      "Direction: gNB-CU-UP ® gNB-CU-CP and gNB-CU-CP ® gNB-CU-UP."
    ),
    new Table([
      new Row([
        new Cell([new Paragraph("IE/Group Name")]),
        new Cell([new Paragraph("Presence")]),
        new Cell([new Paragraph("Range")]),
        new Cell([new Paragraph("IE type and reference")]),
        new Cell([new Paragraph("Semantics description")]),
        new Cell([new Paragraph("Criticality")]),
        new Cell([new Paragraph("Assigned Criticality")]),
      ]),
      new Row([
        new Cell([new Paragraph("Message Type")]),
        new Cell([new Paragraph("M")]),
        new Cell([new Paragraph("")]),
        new Cell([new Paragraph("9.3.1.1")]),
        new Cell([new Paragraph("")]),
        new Cell([new Paragraph("YES")]),
        new Cell([new Paragraph("reject")]),
      ]),
      new Row([
        new Cell([new Paragraph("Transaction ID")]),
        new Cell([new Paragraph("M")]),
        new Cell([new Paragraph("")]),
        new Cell([new Paragraph("9.3.1.53")]),
        new Cell([new Paragraph("")]),
        new Cell([new Paragraph("YES")]),
        new Cell([new Paragraph("reject")]),
      ]),
      new Row([
        new Cell([new Paragraph("Criticality Diagnostics")]),
        new Cell([new Paragraph("O")]),
        new Cell([new Paragraph("")]),
        new Cell([new Paragraph("9.3.1.3")]),
        new Cell([new Paragraph("")]),
        new Cell([new Paragraph("YES")]),
        new Cell([new Paragraph("ignore")]),
      ]),
    ]),
    new Paragraph(""),
    new Paragraph(""),
  ]);
});
