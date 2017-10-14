var express = require('express'),
    app = express(),
    server = require('http').Server(app),
     io = require('socket.io').listen(server),
     fs = require('fs'),
     events = require('events'),
     eventEmitter = new events.EventEmitter(),
     // johnny-five
     five = require('johnny-five'),
     board = new five.Board();

// Ecoute sur le port 8080 de localhost
server.listen(8080);

// Création du server expressJS
app.get('/', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile(__dirname + '/index.html', (err,data) => {
      if (err) {
        res.writeHead(500);
        return res.end('Error loading index.html');
      };
      res.end(data);
    });
});

// Création du dossier statique /public
app.use('/public', express.static(__dirname + '/public'));

// Manipulation de la carte Arduino avec johnny-five
board.on('ready', () => {
  // Déclaration des bouttons jeu de gauche ------------------------------------
  var buttonsG = new five.Buttons({
    pins: [10],
    isPullup: true
  });

  // Déclaration des boutons jeu de droite ----------------------------------
  var buttonsD = new five.Buttons({
    pins: [8],
    isPullup: true
  });

  var buttonRelay = new five.Button({
    pin: 3,
    isPullup: true,
  });

  var relay = new five.Relay({
    pin: 2,
    type: "NO",
  });

  // Evenement pour le changement de jeu
  buttonRelay.on('press', () => {
    console.log( "Button relay pressed" );
    relay.toggle();
    // Envoyer l'événement au front lorsque le bouton est appuié
    io.emit('swichJeu');
  });

  // Evenement lors du click sur la map ------------------------------------------------------
  io.on('connection', (socket) => {

    socket.on('japonClick',  () => {
      console.log( "clickEspagne" );
      io.emit('japonButton');
    });

    socket.on('indeClick',  () => {
      console.log( "clickFrance" );
      io.emit('indeButton');
    });
  });

  // Evenement lors de l'appui sur les bouttons du jeu Gauche -----------------------------------
  buttonsG.on('press', (button) => {
    var pinNum = button.pin;
    io.emit('miseZero');

    switch (pinNum) {
      case 44:
        console.log('pays'+pinNum);
        io.emit('espagneButton');
      break;

      case 45:
          console.log('pays'+pinNum);
          io.emit('indeButton');
      break;

      case 46:
          console.log('pays'+pinNum);
          io.emit('mexiqueButton');
      break;

      case 47:
          console.log('pays'+pinNum);
          io.emit('paysBasButton');
      break;

      case 48:
          console.log('pays'+pinNum);
          io.emit('moyenOrientButton');
      break;

      case 49:
          console.log('pays'+pinNum);
          io.emit('franceButton');
      break;

      case 50:
          console.log('pays'+pinNum);
          io.emit('royaumeUniButton');
      break;

      case 51:
          console.log('pays'+pinNum);
          io.emit('canadaButton');
      break;

      case 52:
          console.log('pays'+pinNum);
          io.emit('portugalButton');
      break;

      case 53:
          console.log('pays'+pinNum);
          io.emit('danemarkButton');
      break;
    };
  });

  buttonsD.on('press', (button) => {
    var pinNum = button.pin;
    io.emit('miseZero');

    switch (pinNum) {
      case 8:
        console.log('pays'+pinNum);
        // Envoyer l'événement au front lorsque le bouton est appuié
        io.emit('espagneSong');
      break;

      case 9:
        console.log('pays'+pinNum);
        io.emit('japonSong');
      break;

      case 10:
        console.log('pays'+pinNum);
        io.emit('greceSong');
      break;

      case 11:
        console.log('pays'+pinNum);
        io.emit('vietnamSong');
      break;

      case 12:
        console.log('pays'+pinNum);
        io.emit('norvegeSong');
      break;
    };
  });
});
