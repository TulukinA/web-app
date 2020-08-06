const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Anatoly Tulukin'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Anatoly Tulukin'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'this is some helpful text.',
        title: 'Help',
        name: 'Anatoly Tulukin'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Today is sunny!',
        location: 'Germantown, Maryland'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Anatoly Tulukin',
        errorMessage: 'Help article not found.'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Anatoly Tulukin',
        errorMessage: 'Page not found.'

    })
})


app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})

// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))