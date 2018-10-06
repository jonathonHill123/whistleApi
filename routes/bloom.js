var express = require('express');
var router = express.Router();

const transformRequestIntoModel = req => ({
  bloomId: req.body.bloom_id,
  data: req.body.data,
});

router.post('/', function(req, res, next) {
  const data = transformRequestIntoModel(req);

  console.log(data);

  res.sendStatus(201);
});

module.exports = router;
