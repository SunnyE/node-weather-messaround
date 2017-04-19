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

// c44a40b06f6825473dc6c8c5a83f0a08


request({
    url:'https://api.darksky.net/forecast/c44a40b06f6825473dc6c8c5a83f0a08/42.3601,-71.0589',
    json: true
}, (error, response, body) => {
    if (error) {
        console.log('unable to connect to forcast servers');
    }
    console.log(body.currently.temperature);
})