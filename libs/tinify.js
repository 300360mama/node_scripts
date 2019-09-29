const tinify = require("tinify");
const argv = require('yargs').argv;
const fs = require('fs');
const path = require('path');

tinify.key = "4znGb1fQ57K6v4MqJmjD156fym2cFBwS";

function optimize() {
    if (!argv.slide && !argv.projectFolder) {
        console.log("You must add name slide and path to project folder");
        process.exit(-1);
    }

    const folder = argv.projectFolder + path.sep + 'app' + path.sep + 'media' + path.sep + 'images' + path.sep + argv.slide;
    const full_path = path.normalize(folder);
    console.log(full_path);

    fs.readdir(full_path, function(err, items) {

        if (err) throw err;
        for (var i = 0; i < items.length; i++) {
            const file = full_path + path.sep + items[i];

            fs.stat(file, function(err, stats) {

                if (stats["size"] < 5242880) {
                    const source = tinify.fromFile(file);
                    source.toFile(file);
                }
            });

        }
    });
}

module.exports.optimize = optimize;