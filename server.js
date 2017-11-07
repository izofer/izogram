var express = require('express');
var app = express();

app.set('view engine', 'pug');

// Routes
app.get('/', function(req, res) {
  res.render('index');
});

//Sirviendo el servicio
app.listen(3000, function(err){
	if(err) return console.log('Hubo un error'), process.exit(1);
	else console.log('A la escucha y funcionando en el puerto 3000');
});