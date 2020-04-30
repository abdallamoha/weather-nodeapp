const path = require('path')
const hbs = require('hbs')
const express = require('express')
const forecast = require('./utils/forecast.js')
const app = express()
//setting up staic files.
app.use(express.static(path.join(__dirname, '../public')))
//app.set('view engine', 'hbs')
const viewsPath = path.join(__dirname, '../template/views')
const partialPath = path.join(__dirname, '../template/partials')

app.set('view engine', 'hbs')//defining the templete egine tio be used
app.set('views', viewsPath)//the path of the views directory.
hbs.registerPartials(partialPath)
app.get('', (req, res) => {
    res.render('index', {
        title: 'home',
        name: 'abdalla'
    })

})
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'about',
        name: 'abdalla'
    })
})
app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            message: 'Type an  Address'
        })
    }
    //searching for the weather
    const location = req.query.address
    forecast(location, (onerror, respond) => {
        if (onerror) {
            return res.send({onerror})
        }
        return res.send({
            forecast:respond ,
            address: req.query.address
        })

    })


})



let name = 'abdalla'
app.get('/help/*', (req, res) => {
    res.render('404', {
        message: 'artical not found.',
        name: {
            name,
            age: '23'
        }
    })
})
app.get('*', (req, res) => {
    res.render('404', {
        message: 'pag' +
            'e not found',
        name
    })
})

app.listen(3000, () => {
    console.log('sever run.. ')
})

