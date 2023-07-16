import { parse } from "path";
import { Client } from "basic-ftp";
import { getSeries } from "./number";
import { compare, fromString, getQuarter } from "./version";

const HOST = "ftp.3gpp.org";
const PATTERN_DATE = /^(\d{2})-(\d{2})-(\d{2}) (\d{2}):(\d{2})(AM|PM)$/;

function getSpecDirPath(specNumber: string) {
  const series = getSeries(specNumber);
  return `/Specs/archive/${series}_series/${specNumber}`;
}

export async function getSpec(
  specNumber: string,
  release: number,
  date: string
) {
  const specDirPath = getSpecDirPath(specNumber);
  const thisQuarter = getQuarter(new Date(date));
  const nextQuarter = getQuarter(new Date(date), 1);

  const client = new Client();
  await client.access({ host: HOST });
  await client.cd(specDirPath);
  const fileInfoList = await client.list();
  const specList = fileInfoList
    .map((fileInfo) => {
      const { name, ext } = parse(fileInfo.name);
      const index = name.lastIndexOf("-");
      // Check file name
      if (index === -1 && ext !== ".zip") {
        return undefined;
      }
      // Check version
      const versionString = name.substring(index + 1);
      const version = fromString(versionString);
      if (!version || version[0] < release) {
        return undefined;
      }
      // Check date
      const matchDatePattern = fileInfo.rawModifiedAt.match(PATTERN_DATE);
      if (!matchDatePattern || matchDatePattern.length < 7) {
        return undefined;
      }
      const [, month, , year] = matchDatePattern;
      const fullyear = (year! > "90" ? "19" : "20") + year;
      const current = new Date(`${fullyear}-${month}`);

      if (
        current.getTime() < thisQuarter.getTime() ||
        current.getTime() >= nextQuarter.getTime()
      ) {
        return undefined;
      }
      const url = `${specDirPath}/${name}${ext}`;
      return {
        name: fileInfo.name,
        rawModifiedAt: fileInfo.rawModifiedAt,
        version,
        url,
      };
    })
    .filter((fileInfo) => fileInfo !== undefined)
    .sort((a, b) => compare(b!.version, a!.version));
  const latest = specList[0];
  if (!latest) {
    console.log(
      `Spec ${specNumber} of release ${release} in ${date} not found.`
    );
    return;
  }
  await client.downloadTo(latest.name, latest.url);
  console.log(
    `Downloaded spec ${specNumber} of release ${release} in ${date}.`
  );
  client.close();
}
