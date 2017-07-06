const express = require('express'),
      router = express.Router(),
      conn = require('../controllers/foodController')

router.get('/', conn.findAllFood)

router.post('/', conn.createFood)

router.put('/:id', conn.updateFood)

router.delete('/:id', conn.deleteFood)


module.exports = router;