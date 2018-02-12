var express = require("express");
var app = express();
var path = require("path");
var HTTP_PORT = process.env.PORT || 8080;
var data_service = require("./data-service.js");

function onHttpStart() {
    console.log("Express http server listening on: " + HTTP_PORT);  
  }

app.use(express.static('public'));

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname,"/views/home.html"));
 });

 app.get("/about", function(req,res){
    res.sendFile(path.join(__dirname,"/views/about.html"));
 });

app.get("/employees", function(req,res){
    res.send("under construction")
    });

app.get("/managers", function(req,res){
  
    res.send("under construction")

});

app.get("/departments", function(req,res){
    res.send("under construction")
  
});

app.use((req, res)=>{
  res.sendFile(path.join(__dirname,"/views/404.html"));
})

 app.listen(HTTP_PORT, onHttpStart);