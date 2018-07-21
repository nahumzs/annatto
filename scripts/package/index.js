#!/usr/bin/env node
"use strict";

const program = require("commander");
const chalk = require("chalk");
const create = require("./create");
const log = console.log;

program.version("0.0.1").option("-c, --create <PackageName>", "An integer argument", create);

program.on("--help", () => {
  log("  Examples:");
  log("");
  log("    $ yarn package -c YourComponentName");
  log("");
});

program.parse(process.argv);
