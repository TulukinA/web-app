const request = require('request')

const forecast = (latitude, longtitude, callback) => {
    const url = ' http://api.weatherstack.com/current?access_key=fa8e1a9749b11d18b8f3767dc8675b36&query='+ latitude + ',' + longtitude + '.&units=m'

    request({ url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelslike +  " degrees out.")
        }
    })
}

module.exports = forecast