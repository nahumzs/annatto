const tplIndex = name => `import ${name} from "./${name}";
export default ${name};
`;

module.exports = tplIndex;
