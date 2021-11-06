const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) =>{
	res.write("<h1>This is my home page</h1>");
	res.write("This is my home page Again");
	res.send();
});
app.get("/about", (req, res) =>{
	res.status(200).send("This is my about page");
});
app.get("/contact", (req, res) =>{
	res.send("This is my contact page");
});

app.get("/temp", (req, res) =>{
	res.send([
	{
		id:1,
		name:"ahsan"
		// type:null // This is not valid in send function
	},
	{
		id:1,
		"name":"ahsan"
	},
	{
		id:1,
		"name":"ahsan"
	}
	]);
});

// app.get("/temp", (req, res) =>{
// 	res.json([
// 	{
// 		id:1,
// 		name:"ahsan",
// 		type:null
// 	},
// 	{
// 		id:1,
// 		"name":"ahsan"
// 	},
// 	{
// 		id:1,
// 		"name":"ahsan"
// 	}
// 	]);
// });


app.listen(port, () =>{
	console.log(`Server is running on localhost:${port}`);
});
