const express = require('express'),
      router = express.Router(),
      conn = require('../controllers/restController')

router.get('/', conn.findAllRest)

router.post('/', conn.createRest)

router.put('/:id', conn.updateRest)

router.delete('/:id', conn.deleteRest)


module.exports = router;