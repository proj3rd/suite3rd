#!/usr/bin/env node

import { Client } from "basic-ftp";
import { resolve } from "path";
import { argv, cwd } from "process";
import { HOST, getSpec } from "@lib/3gpp/repo";

const WILD_CARD = "*";

const [, , spec, rel, quarter] = argv;
let client: Client;
let latest: { path: string; name: string; date: Date };
getSpec(spec, rel, quarter)
  .then((fileInfoList) => {
    if (rel === WILD_CARD || quarter === WILD_CARD) {
      console.table(fileInfoList, ["path", "name", "version", "date", "size"]);
      return;
    }
    if (!fileInfoList.length) {
      throw Error("The requested spec not found");
    }
    latest = fileInfoList[0];
    client = new Client();
    return client.access({ host: HOST });
  })
  .then(() => {
    if (!client) {
      return;
    }
    const { path, name } = latest;
    const dest = resolve(cwd(), name);
    console.log(`Downloading the requested spec to ${dest}...`);
    return client.downloadTo(dest, `${path}/${name}`);
  })
  .then(() => {
    console.log("Done");
  })
  .catch((reason) => {
    console.error(reason);
  })
  .finally(() => client && client.close());
