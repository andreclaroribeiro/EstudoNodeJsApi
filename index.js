var express = require('express');
var request = require('request');

var app = express();
var apiKey = 'fad82300efc1bd194e1a07bc73392f5b';

app.get('/', function(req, res) {
  res.send('Olá Mundo!');
});

app.get('/Temperatura/:cidade', function(req, res) {
	
	var cidade = req.params.cidade;
	var url = `http://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric`
	
	res.setHeader('Content-Type', 'application/json');
	
	request(url, function (err, response, body) {
	  if(err){
		res.statusCode = 500;
		res.send('deu ruim ' + err);
	  } else {
		
		res.send(body);
		//res.json(body);
	  }
	});
});

app.listen(3000, function() {
  console.log('App de Exemplo escutando na porta 3000!');
});