const request = require('request');

var geocodeAddress = (address, callback) => {
    let encodedAddress = encodeURIComponent(address);

    request({
        url: `http://www.mapquestapi.com/geocoding/v1/address?key=TNiaBuK5XVuGi4aEcMA1q3vHphAYR3JO&location=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Could not connect, Check your internet');
        } else if (body.info.statuscode !== 0) {
            callback('Not found');
        } else {
            let lat = body.results[0].locations[0].displayLatLng.lat;
            let lng = body.results[0].locations[0].displayLatLng.lng;
            callback(undefined, {
                lat,
                lng,
            })
        }
    });
}
module.exports = {
    geocodeAddress,
}