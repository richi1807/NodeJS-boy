var http = require('http');

var s =http.createServer(function(req , res){
	res.writeHead(200 , {'content-type': 'text/plain'}) ;
	res.write("zeroeth chunk\n");
	setTimeout(function(){
		res.end("first chunk\n");
	} , 2000);
}) ;

s.listen(8000);
