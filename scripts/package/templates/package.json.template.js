const tplPackageJSON = (scope, repository) => name => `{
  "name": "${scope}/${name.toLowerCase()}",
  "version": "0.0.1",
  "description": "",
  "main": "index.js",
  "peerDependencies": {
    "react": "^16.4.0",
    "styled-components": "^3.2.6",
    "typeface-lato": "^0.0.54"
  },
  "repository": {
    "type": "git",
    "url": "${repository}"
  },
  "publishConfig": {
    "access": "public"
  },
  "author": "${scope}",
  "license": "MIT"
}

`;

module.exports = tplPackageJSON;
