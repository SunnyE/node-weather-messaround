const request = require('request');
const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'address to get weather for',
            string: true,
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if(errorMessage) {
        console.log(errorMessage)
    } else {
        console.log(JSON.stringify(results, undefined, 2));
    };

});

console.log(argv);

