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
  // Create a new `led` instance.
  var led = new five.Led(13);
  // Create a new `button` hardware instance.
  button = new five.Button({
    pin: 2,
    isPullup: true,
  });

  io.on('connection', function (socket) {
    socket.on('click', function () {
      led.toggle();
    });
  });

  button.on('press', function() {
    console.log( "Button pressed" );
    led.toggle();
  });
});
