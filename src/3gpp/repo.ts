import { Client } from "basic-ftp";
import { parse } from "path";
import { version } from "./index.js";
const { parse: parseVersion } = version;

export const HOST = "ftp.3gpp.org";
const WILD_CARD = "*";

export async function getSpec(spec: string, rel: string, quarter: string) {
  const series = getSeries(spec);
  const path = `/Specs/archive/${series}_series/${spec}`;
  const client = new Client();
  return client
    .access({
      host: HOST,
    })
    .then(() => {
      return client.cd(path);
    })
    .then(() => {
      return client.list();
    })
    .then((fileInfoList) => {
      return fileInfoList
        .map((fileInfo) => {
          const { name } = parse(fileInfo.name);
          const indexHyphen = name.lastIndexOf("-");
          if (indexHyphen === -1) {
            throw Error(
              "Spec must be in a form of AB.CDE[-F]-xyz or AB.CDE[-F]-uvwxyz"
            );
          }
          const versionString = name.substring(indexHyphen + 1);
          const version = parseVersion(versionString);
          return {
            path,
            ...fileInfo,
            date: parseDate(fileInfo.rawModifiedAt),
            version,
          };
        })
        .filter((fileInfo) => {
          if (rel === "latest") {
            return true;
          }
          if (rel === WILD_CARD) {
            return true;
          }
          const { version } = fileInfo;
          if (!version) {
            return false;
          }
          // Check release verison
          if (+rel !== version[0]) {
            return false;
          }
          // Check date
          if (quarter === WILD_CARD) {
            return true;
          }
          const date = parseDate(fileInfo.rawModifiedAt).getTime();
          const [yy, mm] = quarter.split("-").map(Number);
          if (!Number.isInteger(yy) || !Number.isInteger(mm)) {
            throw Error("Quarter must be in a form of yy-mm");
          }
          const dateQuarter = new Date(yy!, mm! - 1).getTime();
          const dateQuarterPlus3Months = new Date(yy!, mm! + 2).getTime();
          return date >= dateQuarter && date < dateQuarterPlus3Months;
        })
        .sort((a, b) => {
          const versionA = a.version!;
          const versionB = b.version!;
          for (let i = 0; i < 3; i++) {
            if (versionA[i] !== versionB[i]) {
              return versionB[i]! - versionA[i]!;
            }
          }
          return b.date.getTime() - a.date.getTime();
        });
    })
    .catch((reason) => Promise.reject(reason))
    .finally(() => client.close());
}

/**
 * Get a series number from spec string
 * @param spec String in a form of ab.cde[-f]
 * @returns Series number (zero padded, if required)
 */
function getSeries(spec: string) {
  const indexDot = spec.indexOf(".");
  if (indexDot === -1) {
    throw Error("Spec must be in a form of ab.cde[-f]");
  }
  return spec.substring(0, indexDot);
}

/**
 * Parse a date string
 * @param date String in a form of `MM-DD-YY HH:mm(AM|PM)`
 * @returns Date object
 */
function parseDate(date: string) {
  const [YYMMDD, hhmmampm] = date.split(" ");
  if (!YYMMDD || !hhmmampm) {
    throw Error("Date must be in a form of MM-DD-YY HH:mm(AM|PM)");
  }
  const [MM, DD, YY] = YYMMDD.split("-").map(Number);
  if (!Number.isInteger(MM) || !Number.isInteger(DD) || !Number.isInteger(YY)) {
    throw Error("Date must be in a form of MM-DD-YY HH:mm(AM|PM)");
  }
  const year = YY! >= 98 ? 1900 + YY! : 2000 + YY!;
  const [hh, mm] = hhmmampm
    .substring(0, hhmmampm.length - 2)
    .split(":")
    .map(Number);
  if (!Number.isInteger(hh) || !Number.isInteger(mm)) {
    throw Error("Date must be in a form of MM-DD-YY HH:mm(AM|PM)");
  }
  const ampm = hhmmampm.substring(hhmmampm.length - 2);
  const hour = ampm === "PM" ? hh! + 12 : hh!;
  return new Date(year, MM! - 1, DD!, hour, mm!);
}
