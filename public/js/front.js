$(document).ready(function() {
  var socket = io.connect('http://localhost:8080');

  //click sur le bouton
  $('#button').click(function(e){
    socket.emit('click');
    e.preventDefault();
  });

  io.on('connection', function (socket) {
    socket.on('song', function () {
      $('#espagnol')[0].play();
    });
  });
});
