var net = require('net');

var server = net.createServer(function(socket){
	socket.write("hello world");
	socket.write("");

	socket.on('data' , function(data){
		socket.write(data);
	});
});

server.listen(8000);
