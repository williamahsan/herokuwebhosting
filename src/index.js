const path = require('path');
const express = require("express");
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 3000

// Builtin Midileware
const staticPath = path.join(__dirname, "../public");
const teplatePath = path.join(__dirname, "../templates/views");
const patialsPath = path.join(__dirname, "../templates/partials");

// To set view engine
app.set('view engine', "hbs");
app.set('views', teplatePath);
hbs.registerPartials(patialsPath);


// app.use(express.static(staticPath));


// template engine route
app.get("/", (req, res) =>{
	res.render('index');
});

app.get("/about", (req, res) =>{
	res.render('about');
});


app.get("/", (req, res) => {
	res.send("Hello World!");
});


app.listen(3000, () =>{
	console.log(`Server Running at localhost:${port}`)
});