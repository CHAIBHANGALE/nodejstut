const request = require('request');

var geocodeAddress = (address,callback) => {

    var address = encodeURIComponent(address);

    console.log(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?${address}&key=AIzaSyAJ8a_Cx0e3-ENqrxJVe_CKJoHydZjXb5Y`,
        json: true
    }, (error, response, body) => {

        if (error) {
            callback('Unable to connect to Maps');
           // console.log('Unable to connect to Maps');
        }

        else if (body.status === 'REQUEST_DENIED') {
            callback('Unable to find the Address');
            //console.log('Request denied by google maps');
        }

        else {
            
            callback(undefined,{
                address:body.results[0].formatted_address,
                latitude:body.results[0].geometry.location.lat,
                longitude:body.results[0].geometry.location.lng
            });
            // console.log(JSON.stringify(body, undefined, 2));
            // console.log(body.results[0].geometry.location.lat);
            // console.log(body.results[0].geometry.location.lng);
        }
    });


};


module.exports.geocodeAddress = geocodeAddress;