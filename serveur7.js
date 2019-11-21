//permet d'émettre des événements
// require EventEmitter pour émmettre un event
let EventEmitter = require('events').EventEmitter;

//nouvel Event
let jeu = new EventEmitter();

// j'écoute l'event
jeu.on('gameover', function(message) {
  console.log(message);
});

//j'émets un event
jeu.emit('gameover', 'You lose!');
