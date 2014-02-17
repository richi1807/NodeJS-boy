var express = require('express') ;
var fs 		= require('fs') ;

var app = express();

/*define the URL bindings over here*/

app.get("/" , function(req , res){
	res.send("Hitting the root directory\n");
});

app.get("/rest" , function(req , res){
	res.send({"title":"root" , "body":"hitting the root with the JSON endpoint"});
});

app.listen(3000);