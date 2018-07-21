const tplReadMe = scope => url => name => `
  # installation
  \`> npm install ${scope}/${name.toLowerCase()}\`
  or
  \`> yarn add ${scope}/${name.toLowerCase()}\`

  # How to use it
  \`\`\`
  import React from 'react';
  import ${name} from '${scope}/${name.toLowerCase()}';

  then use <${name} {...props} />
  \`\`\`

  # Read more
  [Documentation]: ${url}/${scope}/${name.toLowerCase()}

`;

module.exports = tplReadMe;
