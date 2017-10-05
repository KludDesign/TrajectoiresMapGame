$(document).ready( () => {
  var socket = io('http://localhost:8080');
  var espagnol = new Audio("http://localhost:8080/public/sons/espagnol.mp3");
  var vietnamien = new Audio("http://localhost:8080/public/sons/vietnamien.mp3");

  //click sur le pays
  $('#espagne').click( (e) => {
    socket.emit('clickEspagne');
    e.preventDefault();
  });

  //click sur le bouton pour lancer le son
  socket.on('song', () => {
    espagnol.play();
  });

  //click sur le bouton pour changer de jeu (change la couleur de la map)
  socket.on('swichJeu', () => {
    $('.map').toggleClass('map2');
  });


});
