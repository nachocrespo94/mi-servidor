var express = require('express')
var app = express()
var hbs = require('hbs');
require('./hbs/helpers');
var port = process.env.PORT || 3000;

//Template y Partials
hbs.registerPartials(__dirname + '/views/parciales');
app.use(express.static(__dirname + "/public" ));

app.set('view engine' , 'hbs');
app.get('/', function (req, res) {


    res.render('index',{
        nombre : 'Ignacio'
    });


})
app.get('/about', function (req, res) {

    res.render('about');
})
 
app.listen(port, ()=>{
    console.log(`Escuchando al puerto ${ port }`);
})