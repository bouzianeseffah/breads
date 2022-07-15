const express = require('express')

//CONFIGURATION
 require('dotenv').config()
 const PORT = process.env.PORT
const app = express()
 //ROUTES
 app.get('/', (req, res) => {
    res.send('welcome to our app')
 })
 // BREADS
 const breadsController = require ('./controllers/breads_controller.js')
 app.use('/breads', breadsController)
 //LISTEN
 app.listen(PORT, function()  {
    console.log('noming at port', PORT)
 })