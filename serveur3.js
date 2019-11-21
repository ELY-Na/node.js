// permet à node de récupérer la page demandee par le client
let http = require('http');
let url = require("url");


let server = http.createServer(function(req, res){
  let page = url.parse(req.url).pathname;
    console.log(page);
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write('<p>Bien le bonjour</p>');
  res.end();
});
server.listen(8080);
