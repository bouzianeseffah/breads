// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

// schema
const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: 'https://tse4.mm.bing.net/th?id=OIP.vgm31wfGnbwUXCXbt31VrwHaGo&pid=Api&P=0&w=176&h=158' }
})



// model and export 
const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread
