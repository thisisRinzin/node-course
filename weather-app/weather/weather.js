const request = require('request');

var getWeather = (lat, lon, callback)=>{
    
request({
    url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=959ced4532cb46160e081cf1d9bc50a0`,
    json: true,
}, (error, response, body)=> {
    if(!error && response.statusCode === 200){
        callback(undefined, body.main);
    }else{
        callback('Unable to fetch the data');
    }
});
}

module.exports = {
    getWeather,
}