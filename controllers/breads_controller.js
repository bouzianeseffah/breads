const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

//INDEX
 breads.get('/', (req, res) => {
    res.render('index', 
    {
       breads: Bread
    }
    )
   // res.send(Bread)
 })
 //SHOW
 breads.get('/:arrayindex', (req, res) => {
  if(Bread[req.params.arrayindex]) {
    res.render('show', {
      bread: Bread[req.params.arrayindex]
  })
 } else {
  res.send('404')
 }
 })
 module.exports = breads