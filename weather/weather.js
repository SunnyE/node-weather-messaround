const request = require('request');

//42.3601
//-71.0589
// c44a40b06f6825473dc6c8c5a83f0a08

var getWeather = (lat, lng, callback) => {
    request({
    url:`https://api.darksky.net/forecast/c44a40b06f6825473dc6c8c5a83f0a08/${lat},${lng}`,
    json: true
}, (error, response, body) => {
    if (error) {
        callback('unable to connect to forcast servers');
    } else if (response.statusCode === 400) {
        callback('unable to fetch weather')
    } else if (!error && response.statusCode === 200) {
        // undefined is used as the first argument of the callback because there is no error message
        callback(undefined, {
            temperature: body.currently.temperature,
            apparentTemperature: body.currently.apparentTemperature,
        });
    }
});
};

// lat, lng, callback(errorMessage, results); 

module.exports.getWeather = getWeather;

