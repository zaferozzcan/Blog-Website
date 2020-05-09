// require essential modules
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();


// get response from main route
app.get("/", function(req, res){
  res.send("The server is up and running! and I am able to get response")
});











app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
