const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

var title = "I AM FAHMI";
const data = require('./models/items.json')
const about = require('./models/about.json')
const heading = require('./models/heading.json')
const footer = require('./models/footer.json')
const kemampuan = require('./models/kemampuan.json')
const works = require('./models/works.json')

const app = express()


//setup view engine
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'hbs')

app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended:true})
)
//route homepage
app.get('/', (req, res) => {
    res.render('index', {
        about:about, 
        items:data,
        heading:heading,
        footer:footer,
        kemampuan:kemampuan,
        works:works,
        title:title
    })
})

app.post('/contact', (req, res) => {
    console.log(req.body)
    res.render('contact')
})



app.listen(3000, () => {
    console.log('running server on port 3000')
})