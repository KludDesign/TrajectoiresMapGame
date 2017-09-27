$(document).ready(function() {
  var socket = io('http://localhost:8080');
  var espagnol = new Audio("http://localhost:8080/public/sons/espagnol.mp3");
  var vietnamien = new Audio("http://localhost:8080/public/sons/vietnamien.mp3");

  //click sur le pays
  $('#espagne').click(function(e){
    socket.emit('click');
    e.preventDefault();
  });

  //click sur le bouton
  socket.on('song', function () {
    espagnol.play();
  });
});
