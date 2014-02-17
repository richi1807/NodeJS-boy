var http = require('http');

setInterval(function(){
	console.log("fetching google.com ...");
	http.get({host : 'google.com'} , function(res){
		console.log(res.headers) ;
	});
} , 2000);


var server  = http.createServer(function(req , res){
	res.write("hello");
	setTimeout(function(){
		res.end("end");
	} , 2000);	
});
server.listen(8000);
