//jshint esversion:6

const express = require("express");

const app = express();

// Home root is /
app.get("/",function(req, res){
	res.send("<h1>Hello, world!</h1>");
});

app.get("/contact", function(req,res){
	res.send("Contact me at: jsbreon@gmail.com");
});

app.get("/about", function(req,res){
	res.send("My name is Scott and I created this server");
});

app.get("/hobbies", function(req,res){
	res.send("Golf and more golf");
});

app.listen(3000, function() {
	console.log("Server started on port 3000");
});