const path = require('path')
const express = require('express')
const data = require('./models/items.json')
const about = require('./models/about.json')
const heading = require('./models/heading.json')
const footer = require('./models/footer.json')

const app = express()


//setup view engine
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'hbs')

app.use(express.static('public'))

//route homepage
app.get('/', (req, res) => {
    res.render('index', {
        about:about, 
        items:data,
        heading:heading,
        footer:footer
    })
})



app.listen(3000, () => {
    console.log('running server on port 3000')
})