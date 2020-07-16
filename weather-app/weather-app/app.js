const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('Germantown, Maryland', (error, data) => {
    console.log('Error inside geocode', error)
    console.log('Data inside geocode', data)
    forecast( data.longtitude, data.latitude, (error, data) => {
        console.log('Error', error)
        console.log('Data', data)
      })
})

