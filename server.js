var express = require('express'),
    app = express(),
    server = require('http').Server(app),
     io = require('socket.io').listen(server),
     fs = require('fs'),
     five = require('johnny-five'),
     board = new five.Board();

// Ecoute sur le port 8080 de localhost
server.listen(8080);

// Création du server expressJS
app.get('/',function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile(__dirname + '/index.html', function (err,data) {
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
board.on('ready', function() {
  // Create a new `led` instance and initialise the led on
  var led = new five.Led(13);
  led.on();
  // Create a new 'relay' instance
  var relay = new five.Relay({
    pin: 8,
    type: "NO",
  });
  // Create a new `button` hardware instance.
  var button2 = new five.Button({
    pin: 2,
    isPullup: true,
  });

  var button6 = new five.Button({
    pin: 6,
    isPullup: true,
  });

  io.on('connection', function (socket) {
    socket.on('click', function () {
      led.toggle();
    });
  });

  button2.on('press', function() {
    console.log( "Button 2 pressed" );
    led.toggle();
    // Envoyer l'événement au front lorsque le bouton est appuié
    io.emit('song');
  });

  button6.on('press', function() {
    console.log( "Button 6 pressed" );
    led.toggle();
    relay.toggle();
    // Envoyer l'événement au front lorsque le bouton est appuié
    io.emit('jeu1');
  });

});
