var http = require('http');
var port = 8864;
var messages = [];

var onRequest = function(req, res) {
	if(req.method === 'GET') {
		res.writeHead(200, {
			'connection': 'close',
			'Content-Type': 'application/json',
			'Access-Control-Allow-Methods': 'GET',

			'Access-Control-Allow-Origin': '*'
		})
		res.end(JSON.stringify(messages));
	}

	if(req.method === 'POST') {
		res.writeHead(200, {
			'connection': 'close',
			'Content-Type': 'application/json',
			'Access-Control-Allow-Methods': 'POST',

			'Access-Control-Allow-Origin': '*'
		})
		var postData = '';
		req.on('data', function(chunk) {
			postData += chunk.toString();
			console.log('im the server and im postein')
		});
		req.on('end', function () {
			messages.push(JSON.parse(postData))
			console.log('got POST data');
			console.log(JSON.parse(postData));
			
			
			res.end(JSON.stringify(messages))
		});
		
	} 

	if(req.method === 'OPTIONS') {
		res.writeHead(200, {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'OPTIONS GET POST',
			'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'

		})
		res.end()
	}

}

http.createServer(onRequest).listen(port);
console.log('listening to ' + port)