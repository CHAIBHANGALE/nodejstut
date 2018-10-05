const yargs=require('yargs');
const axios=require('axios');

const argv=yargs
.options({

    latitude:{
        demand:true,
        alias:'Latitude',
        describe:'latitude of area',
        string:true
    },

    longitude:{
        demand:true,
        alias:'Longitude',
        describe:'longitude of area',
        string:true
    }
 
}).help().alias('help','h').argv;

//console.log(argv);

//var encodedLatitude=encodeURIComponent(argv.address);

var weatherUrl=`https://api.forecast.io/forecast/9c2a997cae5dfd41fbb0d0e1604dd9b6/${argv.Latitude},${argv.Longitude}`;

axios.get(weatherUrl).then((response)=>{
       console.log( JSON.stringify(response.data.currently));
}).catch((e)=>{
    console.log("Error while fetching weather data");
});
