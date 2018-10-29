const yargs = require('yargs');
const axios = require('axios');

const argv = yargs.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch the weather for',
        string: true,
    }
}).help().alias('help', 'h').argv;

let encodedAddress = encodeURIComponent(argv.address);
let geocodeURL = `http://www.mapquestapi.com/geocoding/v1/address?key=TNiaBuK5XVuGi4aEcMA1q3vHphAYR3JO&location=${encodedAddress}`;

axios.get(geocodeURL).then((response)=> {
    if(response.data.info.statuscode === 400){
        throw new Error('Address not found');
    }
    
    let lat = response.data.results[0].locations[0].latLng.lat;
    let lon = response.data.results[0].locations[0].latLng.lng;

    console.log(lat, lon);

    weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=959ced4532cb46160e081cf1d9bc50a0`;
    
    return axios.get(weatherURL);
    
}).then((response)=> {
    console.log(JSON.stringify(response.data.main));
}).catch((e)=>{
    if(e.code === 'ENOTFOUND'){
        console.log('Could\'t connect to api server');
    }else{
        console.log(e.message);
    }
});