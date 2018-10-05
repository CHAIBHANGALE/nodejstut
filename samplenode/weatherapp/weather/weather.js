const request = require('request');


var getWeather = (latitude,longitude,callback) => {

    request({
        url: `https://api.forecast.io/forecast/9c2a997cae5dfd41fbb0d0e1604dd9b6/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {

        if (error) {
            callback('Unable to connect ');
            //console.log('Unable to connect ');
        }

        else if (response.statusCode === 400) {
            callback('Unable to fetch weather');
            // console.log('Unable to fetch weather');
        }

        else if (!error && response.statusCode === 200) {
            callback(undefined,{
                temperature:body.currently.temperature,
                apparentTemperature:body.currently.apparentTemperature
            });
            // console.log(body.currently.temperature);
        }
    });
}


module.exports.getWeather=getWeather;