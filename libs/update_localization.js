const argv = require('yargs').argv;
const fs = require('fs');
const path = require('path');

if (!argv.slide && !argv.projectFolder) {
    console.log("You must add name slide and path to project folder");
    process.exit(-1);
}


let path_to_localization = argv.projectFolder + path.sep + 'app' + path.sep + 'i18n' + path.sep + 'images' + path.sep + argv.slide;
path_to_localization = path.normalize(path_to_localization);
console.log(path_to_localization);

const path_to_localization = f