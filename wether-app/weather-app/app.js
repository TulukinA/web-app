const request = require('request')

const url = ' http://api.weatherstack.com/current?access_key=fa8e1a9749b11d18b8f3767dc8675b36&query=37.8267,-122.&units=f'

request({url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service!')
    } else if (response.body.error) {
        console.log('Unable to find location')
    } else {
        console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelslike +  " degrees out.")
    }
})

//geocoding using mapbox
const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidHVsdWtpbmEiLCJhIjoiY2ticzFlNWlyMTIyNTJyczR3MDJ4dGhldSJ9.Yc-SsHy0RoW-eoCibWr8AA&limit=1'


request({url: geocodeURL, json: true}, (error, response) => {
    if (error) {
        console.log('Unable to connect to location services!')
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location!')
    } else {
        const latitude = response.body.features[0].center[1]
        const longtitude = response.body.features[0].center[0]
        console.log(latitude, longtitude)
    }
})
