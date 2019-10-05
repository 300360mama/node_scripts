const argv = require('yargs').argv;
const fs = require('fs');
const path = require('path');

function parse() {

    if (!argv.slide && !argv.projectFolder) {
        console.log("You must add name slide and path to project folder");
        process.exit(-1);
    }

    let settings = argv.projectFolder + path.sep + 'app' + path.sep + 'settings' + path.sep + 'app.json';
    settings = path.normalize(settings);

    let parse_data = {};

    fs.readFile(settings, 'utf8', (err, data) => {
        if (err) throw err;
        parse_data = JSON.parse(data);
        return 1;
    });
    console.log(parse_data);
}

module.exports.parse = parse;