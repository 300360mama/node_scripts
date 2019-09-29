const tn = require('./libs/tinify');
const argv = require('yargs').argv;

console.log(argv.path);

tn.optimize();