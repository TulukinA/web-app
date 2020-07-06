const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')



geocode('Maryland', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})


forecast( 39.4780, -76.8536, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })