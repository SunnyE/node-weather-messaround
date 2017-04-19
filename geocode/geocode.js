const request = require('request');

var geocodeAddress = function (address) {
    
    var encodedAddress = encodeURI(address);


    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            console.log('Unable to connect to Google servers.');
        } else if (body.status === 'ZERO_RESULTS') {
            console.log('Unable to find specified address'); 
        } else if (body.status === 'OK') {
            console.log(JSON.stringify(`Address: ${body.results[0].formatted_address}`));
            console.log(JSON.stringify(`Latitude: ${body.results[0].geometry.location.lat}`));
            console.log(JSON.stringify(`Longitude: ${body.results[0].geometry.location.lng}`));
        };

    });

};


module.exports = {
    geocodeAddress
}


