const chalk = require("chalk");
const shell = require("shelljs");
const fs = require("fs");
const path = require("path");
const promptly = require("promptly");
const space = () => console.log("");

const tplComponent = require("./templates/Component.js.template.js");
const tplPackageJSON = require("./templates/package.json.template.js");
const tplReadMe = require("./templates/readme.md.template.js");
const tplIndex = require("./templates/index.js.template.js");

const capitalize = str => str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);
const pascalCase = str => {
  const string = str
    .toLowerCase()
    .replace(/[^A-Za-z0-9]/g, " ")
    .split(" ")
    .reduce((result, word) => result + capitalize(word.toLowerCase()));
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const { log } = console;

/* expected result
├── package.json
├── index.js
├── readme.md
├── <Component>.js
├── <Component>.a11y.js
├── <Component>.performance.js
├── <Component>.cypress.js
├── <Component>.stories.js
└── <Component>.screnner.js
*/

// @annato is the scope package this should change to @acl-ui once we have the npm account
const scope = "@annatto";
const url = "https://design.annato.com/";

const files = packageName => [
  { path: () => `_${packageName.toLowerCase()}.a11y.js`, content: tplComponent },
  { path: () => `_${packageName.toLowerCase()}.cypress.js`, content: tplComponent },
  { path: () => `_${packageName.toLowerCase()}.screener.js`, content: tplComponent },
  { path: () => `_${packageName.toLowerCase()}.stories.js`, content: tplComponent },
  { path: () => "index.js", content: tplIndex },
  { path: () => "package.json", content: tplPackageJSON(scope) },
  { path: () => "readme.md", content: tplReadMe(scope)(url) },
  { path: () => `${packageName}.js`, content: tplComponent },
  { path: () => `${packageName}.styled.js`, content: tplComponent },
];

const create = async name => {
  const packageName = pascalCase(name);
  const packagePath = path.resolve(__dirname, "../../packages");
  const packageNamePath = path.resolve(__dirname, `../../packages/${packageName}`);
  log(chalk.magenta(`🧙‍✨ Magic is happening with your new package: ${packageName}`));

  if (fs.existsSync(packageNamePath)) {
    space();
    log(`🤕 Package folder ${chalk.red(packageName)} already exists`);

    const answer = await promptly.confirm(`Do you want to delete it and ${chalk.cyan("start again?")} (yes / no)`);
    if (answer) {
      const areyousure = await promptly.confirm(`are you sure ${chalk.red("[DELETE]")} (yes / no)`);
      if (areyousure) {
        shell.rm("-rf", path.resolve(__dirname, `../../packages/${name}`));
        return create(name);
      }
    }

    log("ok bye bye 👋");
    shell.exit(0);
    return false;
  }

  space();
  space();

  shell.cd(packagePath);
  shell.mkdir(`${packageName}`);

  // creates files
  shell.cd(packageNamePath);
  files(packageName).forEach(file => {
    shell.touch(file.path());
    fs.writeFileSync(file.path(), file.content(name));
  });

  shell.exec("tree -l 1");

  log(chalk.green(`🧙‍🌈🦄 Magic happened enjoy your new ${packageName} package`));
  return true;
};

module.exports = create;
