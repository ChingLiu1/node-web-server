const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

var app = express();


hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

hbs.registerHelper('pageD', () =>{
	return new Date().getFullYear();
});

//middleware to the response made

app.use((req, res, next) => {
	console.log(`user ip is ${req.ip} & gets ${res.get('content-Type')}`);
	next();
});

//middleware for mainteance
app.use((req, res, next) => {
	res.render('our.hbs');
});

app.get('/', (req, res) => {
	res.render('home.hbs', {
		pageT: 'Home',
		pageM: 'BongoBets',
	});
});

app.get('/aisha', (req, res) => {
	res.render('aisha.hbs',{
		pageT: 'aisha',
	})
}); 

app.get('/rose', (req, res) => {
	res.render('rose.hbs',{
		pageT: 'rose page',
		
	});
}); 

app.listen(port); 