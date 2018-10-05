// const request=require('request');

// request({
//     url:'https://api.forecast.io/forecast/9c2a997cae5dfd41fbb0d0e1604dd9b6/18.556838,73.793890',
//     json:true
// },(error,response,body)=>{

//     if(error){
//         console.log('Unable to connect ');
//     }

//     else if(response.statusCode===400){
//         console.log('Unable to fetch weather');
//         }

//     else if (!error && response.statusCode===200){
//         console.log(body.currently.temperature);
//     }
// });





const yargs=require('yargs');
const geocode=require('./geocode/geocode');
const weather=require('./weather/weather')

const argv=yargs
.options({

    a:{
        demand:true,
        alias:'Address',
        describe:'address to fetch weather',
        string:true
    }
 
}).help().alias('help','h').argv;

console.log(argv);




geocode.geocodeAddress(argv.Address,(errorMessage,results)=>{

    if(errorMessage){
        console.log(errorMessage);
    }
    else{
        JSON.stringify(results.Address);
        weather.getWeather(results.Latitude,results.Longitude,(errorMessage,results)=>{

            if(errorMessage){
                console.log(errorMessage);
            }
            else{
                console.log(`Its currently ${results.temperature}`);
            }
        
        }
        );
    }

});



// var address =encodeURIComponent(argv.Address);

// console.log(address);

// request({
//     url:"https://maps.googleapis.com/maps/api/geocode/json?address=amar%20apex%20baner%20pune&key=AIzaSyAJ8a_Cx0e3-ENqrxJVe_CKJoHydZjXb5Y",
//     json:true
// },(error,response,body)=>{

//     if(error){
//         console.log('Unable to connect to Maps');
//     }

//     else if(body.status==='REQUEST_DENIED'){
//         console.log('Request denied by google maps');
//     }

//     else{
//         console.log(JSON.stringify(body,undefined,2));
//         console.log(body.results[0].geometry.location.lat);
//         console.log(body.results[0].geometry.location.lng);
//     }
// });






