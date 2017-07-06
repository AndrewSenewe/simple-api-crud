const mongoose = require('mongoose'),
      Schema = mongoose.Schema

var foodSchema = Schema({
  name: String
})

var Food = mongoose.model('Food', foodSchema)

module.exports = Food;