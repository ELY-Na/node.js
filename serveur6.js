 // permet d'écouter un événement quand le serveur s'arrête
let http = require('http');

let server = http.createServer(function(req, res){
  res.writeHead(200);
  res.end('Hello world!');
});

server.on('close', function(){
// on écoute l'événement close et qd event close...
  console.log('Bye!');
});

server.listen(8080);// on écoute le port 8080 quand le serveur démarre

server.close();// on arrête le serveur, quand on arrête le serveur// l'événement close est déclenché.
