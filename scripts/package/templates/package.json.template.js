const tplPackageJSON = scope => name => `{
  "name": "${scope}/${name}",
  "version": "0.0.1",
  "description": "",
  "main": "index.js",
  "peerDependencies": {
    "react": "^16.4.0",
    "styled-components": "^3.2.6"
  },
  "publishConfig": {
    "access": "public"
  },
  "author": "${scope}",
  "license": "MIT"
}

`;

module.exports = tplPackageJSON;
