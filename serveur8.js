//Créer des modules
let http = require('http'); // Fait appel à http.js dans le disque dur node_modules
let url = require('url'); // Fait appel à url.js dans le disque dur node_modules
//let test = require('test'); // Fait appel à test.js dans le sous-dossier node_modules
// nom du fichier à require => convention node ira le chercher dans le sous-dossier node_modules
// mettre tous les modules dans node_modules et require

//let test = require('../test'); // Fait appel à test.js dans un dossier parent que j'ai crée
// chemin relatif vers un dossier que j'ai crée

// pour utiliser des fonctions provenenant de fichiers du node_modules,
// il suffit d'exporter la fonction
// exports.direBonjour = direBonjour;
// si les fonctions ne sont pas exportéess elles resteront privées et ne pourront pas être appelées ailleurs

let markdown = require( "markdown" ).markdown;
// ici on va cherché l'objet markdown directement dans le module markdown
console.log( markdown.toHTML( "Hello *World*!" ) );
//markdown est traduit en HTML
// renvoie dans la console/terminal => <p>Hello <em>World</em>!</p>
