var fs = require('fs')
var http = require('http')




var server = 
http.createServer(function(request,response){
	function readFile(filename){
		fs.readFile(filename,function(err,data){
			response.write(data);
			response.end();
		})
	}

var url = request.url;
if (url==='/'){
	readFile('index.html');
	response.write(data)
	response.end()
} else if (url === '/page-2'){
	readFile('page-2.html');
	response.write(data)
	response.end()
} else if (url === '/page-3'){
	readFile('page-2.html');
	response.write(data)
	response.end()
} else if(url === '/poem-'){
    readFile('poem-');
	response.write(data)
	response.end()


}


})


server.listen(3000,function(){
	console.log('Server is listening on port 3000')
})