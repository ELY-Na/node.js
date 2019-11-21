let http = require('http');
let url = require("url");
// permet à node de récupérer les paramêtres entrés par l'utilisateur via l'url
let querystring = require('querystring')

// le code suivant permet de récuperer les paramêtres entrés par l'utilisateur
// et de les afficher
let server = http.createServer(function(req, res) {
  let params = querystring.parse(url.parse(req.url).query);
  res.writeHead(200, {"Content-Type": "text/plain"});
  if ('prenom' in params && 'nom' in params) {
      res.write('Vous vous appelez ' + params['prenom'] + ' ' + params['nom']);
  }
  else {
      res.write('Vous devez bien avoir un prénom et un nom, non ?');
  }
  res.end();
});
server.listen(8080);
