const rest = require('../models/restaurant.js');
var ObjectId = require('mongodb').ObjectID;

var findAllRest = function(req, res) {
  rest.find({}, (err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
}

var createRest = function(req, res) {
  rest.create({
    name: req.body.name
  }, (err) => {
    if (err) {
      res.send(err)
    } else {
      res.send('data inserted')
    }
  })
}

var updateRest = function(req, res) {
  rest.findById(req.params.id, (err, data) => {
    res.update({_id: req.params.id},{
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

var deleteRest = function (req, rest) {
  rest.remove({
    _id: ObjectId(req.params.id)
  }, (err) => {
    if (err) {
      res.send(err)
    }
    res.send('data deleted')
  })
}

module.exports = {
  findAllRest,
  createRest,
  updateRest,
  deleteRest
};