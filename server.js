const express = require('express')

//CONFIGURATION
 require('dotenv').config()
 const PORT = process.env.PORT
const app = express()
//MIDDLEWARE
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
 //ROUTES
 app.get('/', (req, res) => {
    res.send('welcome to our app')
 })
 // BREADS
 const breadsController = require ('./controllers/breads_controller.js')
 app.use('/breads', breadsController)
 //route that will catch-all
 app.get('*', (req, res) => {
   res.send('404')
 })
 //LISTEN
 app.listen(PORT, function()  {
    console.log('noming at port', PORT)
 })