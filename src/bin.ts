#!/usr/bin/env node

import { program } from "commander";
import { setAsn1Command } from "./asn1/index.js";

setAsn1Command(program);

program.parse();
