const request = require('request');
const yargs = require('yargs');

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

console.log(argv);

var encodedAddress = encodeURI(argv.a);


request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(`Address: ${body.results[0].formatted_address}`));
    console.log(JSON.stringify(`Latitude: ${body.results[0].geometry.location.lat}`));
    console.log(JSON.stringify(`Longitude: ${body.results[0].geometry.location.lng}`));
});