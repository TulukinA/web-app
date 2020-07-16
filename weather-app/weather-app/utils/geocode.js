const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoidHVsdWtpbmEiLCJhIjoiY2ticzFlNWlyMTIyNTJyczR3MDJ4dGhldSJ9.Yc-SsHy0RoW-eoCibWr8AA&limit=1'

    request({ url: url, json: true}, (error, response) => {
        if (error) {
            callback('unable to connect to location service!', undefined)
        } else if (response.body.features.length === 0) {
            callback('unable to find location. try another search', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longtitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode