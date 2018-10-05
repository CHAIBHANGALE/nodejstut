const request=require('request');

var geocodeAddress=(latitude,longitude)=>{

    return new Promise((resolve,reject)=>{
       
        request({
            url: `https://api.forecast.io/forecast/9c2a997cae5dfd41fbb0d0e1604dd9b6/${latitude},${longitude}`,
            json: true
        }, (error, response, body) => {
    
            if (error) {
                reject('Unable to connect ');
                //console.log('Unable to connect ');
            }
    
            else if (response.statusCode === 400) {
                reject('Unable to fetch weather');
                // console.log('Unable to fetch weather');
            }
    
            else if (!error && response.statusCode === 200) {
                resolve({
                    temperature:body.currently.temperature,
                    apparentTemperature:body.currently.apparentTemperature
                });
                // console.log(body.currently.temperature);
            }
        });
        
    });

};


geocodeAddress(18.556838,73.793890).then((temperature)=>{
    console.log(JSON.stringify(temperature));
},(errorMessage)=>{
    console.log(errorMessage);
}
);

