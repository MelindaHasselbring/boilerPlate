// required npm packages
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var port = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory 
// in the application directory.
// app.use(express.static("public"));
app.use(express.static(__dirname + '/public'));


app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port);




// //Adding required files  this is JM
// var nodeadmin = require('nodeadmin');
// var express = require('express');
// var mysql = require('mysql');
// var app = express();
// var route = require("./controllers/burgers_controller.js")
// var handlebars = require('express-handlebars')
//    .create({
//       defaultLayout: 'main'
//    });
// app.engine('handlebars', handlebars.engine);


// app.set('view engine', 'handlebars');
// //Server settings
// var PORT = process.env.PORT || 3000;

// app.use(nodeadmin(app));
// app.use('/', route);

// var server = app.listen(PORT, function() {});
