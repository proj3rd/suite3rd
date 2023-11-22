var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Client, FileType } from "basic-ftp";
import { parse } from "path";
import { z } from "zod";
import { fromString } from "./version.js";
const SeriesScheme = z.coerce.number().int().min(1);
const ReleaseScheme = z.coerce.number().int().min(1);
const YearScheme = z.coerce.number().int();
const MonthScheme = z.coerce.number().int().min(1).max(12);
const DateScheme = z.coerce.number().int().min(1).max(31);
const DateInput = z.tuple([YearScheme.min(1998), MonthScheme]);
const MMDDYY = z.tuple([MonthScheme, DateScheme, YearScheme]);
export function setFetchCommand(program) {
    const fetchCommand = program.command("fetch");
    fetchCommand
        .command("spec")
        .arguments("<specNumber> <release> <date>")
        .action((specNumber, release, date) => __awaiter(this, void 0, void 0, function* () {
        const series = SeriesScheme.parse(specNumber.split(".")[0]);
        const releaseNum = ReleaseScheme.parse(release);
        const [year, month] = DateInput.parse(date.split("-"));
        const client = new Client();
        yield client.access({
            host: "ftp.3gpp.org",
            user: "anonymous",
            password: "Project 3rd",
        });
        const path = `/Specs/archive/${series}_series/${specNumber}`;
        const fileinfoList = yield client.list(path);
        const filteredList = fileinfoList.filter((fileinfo) => {
            if (fileinfo.type !== FileType.File) {
                return false;
            }
            const { name, ext } = parse(fileinfo.name);
            if (ext !== ".zip") {
                return false;
            }
            const lastIndexOfHyphen = name.lastIndexOf("-");
            if (lastIndexOfHyphen === -1) {
                return false;
            }
            const version = fromString(name.substring(lastIndexOfHyphen + 1));
            if (!version || version.major !== releaseNum) {
                return false;
            }
            const mmddyy = fileinfo.rawModifiedAt.split(" ")[0];
            if (!mmddyy) {
                return false;
            }
            const [mm, , yy] = MMDDYY.parse(mmddyy.split("-"));
            const yyyy = (yy >= 98 ? 1900 : 2000) + yy;
            const filedate = new Date(yyyy, mm).getTime();
            const thisQuarter = new Date(year, month).getTime();
            const nextQuarter = new Date(year, month + 3).getTime();
            return thisQuarter <= filedate && filedate < nextQuarter;
        });
        const file = filteredList[0];
        if (!file) {
            console.error(`Cannot find ${specNumber} ${release} ${date}. Exit.`);
        }
        else {
            yield client.downloadTo(file.name, `${path}/${file.name}`);
        }
        client.close();
    }));
}
