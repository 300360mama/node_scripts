const tinify = require("tinify");
const argv = require('yargs').argv;
const fs = require('fs');
const path = require('path');

tinify.key = "4znGb1fQ57K6v4MqJmjD156fym2cFBwS";

function optimize() {
    if (!argv.path) {
        console.log("You must add path/to/directory");
        process.exit(-1);
    }

    const folder = path.normalize(argv.path);

    fs.readdir(folder, function(err, items) {
        console.log(items);
        for (var i = 0; i < items.length; i++) {
            const file = folder + path.sep + items[i];

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