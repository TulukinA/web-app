const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=fa8e1a9749b11d18b8f3767dc8675b36&query=39.1732,-77.2717'

request({ url: url }, (error, response) => {
    // console.log(response)
    const data = JSON.parse(response.body)
    console.log(data.current)
})