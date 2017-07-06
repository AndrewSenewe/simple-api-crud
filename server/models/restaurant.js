const mongoose = require('mongoose'),
      Schema = mongoose.Schema

var restSchema = Schema({
  name: String
})

var Restaurant = mongoose.model('Restaurant', restSchema)

module.exports = Restaurant;