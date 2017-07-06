const food = require('../models/food.js');
var ObjectId = require('mongodb').ObjectID;

var findAllFood = function(req, res) {
  food.find({}, (err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
}

var createFood = function(req, res) {
  food.create({
    name: req.body.name
  }, (err) => {
    if (err) {
      res.send(err)
    } else {
      res.send('data inserted')
    }
  })
}

var updateFood = function(req, res) {
  food.findById(req.params.id, (err, data) => {
    res.update({_id: ObjectId(req.params.id)},{
      $set: {
        name: req.body.name || data.name
      }
    }, (err) => {
      if (err) {
        res.send(err)
      } else {
        res.send('data updated')
      }
    })
  })
}

var deleteFood = function (req, res) {
  food.remove({
    _id: ObjectId(req.params.id)
  }, (err) => {
    if (err) {
      res.send(err)
    }
    res.send('data deleted')
  })
}

module.exports = {
  findAllFood,
  createFood,
  updateFood,
  deleteFood
};