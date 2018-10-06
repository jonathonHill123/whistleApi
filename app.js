var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var bloomRouter = require('./routes/bloom');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/bloom', bloomRouter);

const port = 3001;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
