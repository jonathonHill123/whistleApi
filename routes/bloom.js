var express = require('express');
var router = express.Router();

const transformRequestIntoModel = reqBody => ({
  bloomId: reqBody.bloom_id,
  data: reqBody.data,
});

router.post('/', function(req, res, next) {
  const reqBody = JSON.parse(Object.keys(req.body)[0]);
  const data = transformRequestIntoModel(reqBody);

  console.log(data);

  res.status(200).send({
    success: true,
    token: req.body.token,
  });
});

module.exports = router;
