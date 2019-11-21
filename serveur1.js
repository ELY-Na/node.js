// node fait appel à http dans librairie
let http = require("http");

// fonction est exécuter quand nouveau visiteur
let instructionsNewClient = function(req, res){
  // dans req = toutes les infos entrées par le client(formulaire...)
  // dans res = c'est la réponse à retourner au client
  res.writeHead(200);
  res.end('Salut tout le monde !')
};

// créer un serveur qaund nouveau visiteur ex
let server = http.createServer(instructionsNewClient);

// =======================================================
// refacto

let http = require('http');

let server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Salut tout le monde !');
});
server.listen(8080);

