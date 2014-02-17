var http = require('http');
var fs = require('fs') ;

console.log("Starting...") ;

var host = "127.0.0.1";
var port = 1337 ;

var server = http.createServer(function(req , res){
	console.log("Received Request");
	fs.readFile("./public" + req.url , function(error , data){
		if(error){
			res.writeHead(404 , {"content-type":"text/html"}) ;
			res.end("Sorry , the page was not found");
		} else {
				res.writeHead(200 , {"content-type":"text/html"}) ;
				res.end(data);	
		}
	});
	console.log("Finished serving the Request");
});

server.listen(port , host , function(){
	console.log("Server listening on port " + port + "on host " + host);
});