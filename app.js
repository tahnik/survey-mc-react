var express = require('express');
var app = express();
var index = require('./routes/index');
app.use('/bin', express.static('./bin'));
app.use('/stylesheets', express.static('./public/stylesheets'));


app.use('/*', index);

app.listen(3001, function () {
	console.log('Hello World listening on port 3001!');
});
