// pour ecrire du HTML dans du node.js
let http = require('http');

let server = http.createServer(function(req, res){
  let page = url.parse(req.url).pathname;
    console.log(page);
  res.writeHead(200, {"Content-Type": "text/html"});
  res.end('<p>Voici un paragraphe <strong>HTML</strong> !</p>');
});
server.listen(8080);
