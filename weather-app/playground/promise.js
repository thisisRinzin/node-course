const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        let encodedAddress = encodeURIComponent(address);
        request({
            url: `http://www.mapquestapi.com/geocoding/v1/address?key=TNiaBuK5XVuGi4aEcMA1q3vHphAYR3JO&location=${encodedAddress}`,
            json: true
        }, (error, response, body) => {
            if (!error && body.info.statuscode !== 0) {
                reject('failed to get the data');
            } else {
                let data = {
                    lat: body.results[0].locations[0].displayLatLng.lat,
                    lon: body.results[0].locations[0].displayLatLng.lng
                }
                resolve(data)

            }
        });
    });
}

geocodeAddress('Paro, Bhutan').then((data)=> {
    console.log(JSON.stringify(data));
}, (errorMessage)=> {
        console.log(errorMessage);
});