var http = require('http'),
	fs = require('fs');

http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type":"text/html"});
	var data = fs.readFileSync('index.html')
	//console.log()
	res.end(data.toString())
	//res.end("<h1><strong>Hello World</strong></h1>");
}).listen(9999);

console.log('Server running at http://127.0.0.1:9999/');