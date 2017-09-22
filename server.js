var app = require('http').createServer(handler),
     io = require('socket.io').listen(app),
     fs = require('fs'),
   five = require('johnny-five'),
   board = new five.Board();

app.listen(8080);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

board.on("ready", function() {
  // Create a new `led` instance.
  var led = new five.Led(13);
  // Create a new `button` hardware instance.
  button = new five.Button({
    pin: 2,
    isPullup: true,
  });

  io.sockets.on("connection", function (socket) {
    socket.on('click', function () {
      led.toggle();
    });
  });

  button.on("press", function() {
    console.log( "Button pressed" );
    led.toggle();
  });
});
