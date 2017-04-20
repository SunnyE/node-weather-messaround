const request = require('request');
const yargs = require('yargs');
const axios = require('axios');

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


var encodedAddress = encodeURI(argv.address);

var geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeURL).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address');
    };
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;

    var weatherURL = `https://api.darksky.net/forecast/c44a40b06f6825473dc6c8c5a83f0a08/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);

    return axios.get(weatherURL);
}).then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}`);
}).catch((e) => {
    if (e.code === 'ENOTFOUND') {
        console.log('unable to connect to api servers');
    } else {
        console.log(e.message);
    }
    
});