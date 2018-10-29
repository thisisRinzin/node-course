const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const yargs = require('yargs');
const request = require('request');

const argv = yargs.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch the weather for',
        string: true,
    }
}).help().alias('help', 'h').argv;

geocode.geocodeAddress(argv.address, (errorMessage, result)=>{
    if(errorMessage){
        console.log(errorMessage);
    }else{
        console.log(JSON.stringify(result, undefined, 2));
        weather.getWeather(17, 19, (errorMessage, result) => {
            if(errorMessage){
                console.log(errorMessage);
            }else{
                console.log(JSON.stringify(result, undefined, 2));
            }
        });
    }
});
 
//https://samples.openweathermap.org/data/2.5/weather?lat=35&lon=19&appid=b6907d289e10d714a6e88b30761fae22

