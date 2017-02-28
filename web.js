var express = require('express')
  , http = require('http')
  , path = require('path')
	, app = express()

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 8000, function(){
	console.log('Server running at http://127.0.0.1:8000/');
})

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public'));
});
