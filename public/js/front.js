$(document).ready( () => {
  var socket = io('http://localhost:8080');
  var espagnol = new Audio("http://localhost:8080/public/sons/espagnol.mp3");
  var vietnamien = new Audio("http://localhost:8080/public/sons/vietnamien.mp3");
  var japonais = new Audio("http://localhost:8080/public/sons/japonais.mp3");

  $('#faux').hide();
  $('#danemarkTexte').hide();
  $('#espagneTexte').hide();
  $('#espagneDTexte').hide();
  $('#franceTexte').hide();
  $('#royaumeUniTexte').hide();
  $('#portugalTexte').hide();
  $('#paysBasTexte').hide();
  $('#canadaTexte').hide();
  $('#indeTexte').hide();
  $('#mexiqueTexte').hide();
  $('#norvegeTexte').hide();
  $('#vietnamTexte').hide();
  $('#japonTexte').hide();
  $('#greceTexte').hide();
  $('#moyenOrientTexte').hide();
  $('#appui').show();

  socket.on('miseZero', () => {
    $('#faux').hide();
    $('#danemarkTexte').hide();
    $('#espagneTexte').hide();
    $('#espagneDTexte').hide();
    $('#franceTexte').hide();
    $('#royaumeUniTexte').hide();
    $('#portugalTexte').hide();
    $('#paysBasTexte').hide();
    $('#canadaTexte').hide();
    $('#indeTexte').hide();
    $('#mexiqueTexte').hide();
    $('#norvegeTexte').hide();
    $('#vietnamTexte').hide();
    $('#japonTexte').hide();
    $('#greceTexte').hide();
    $('#moyenOrientTexte').hide();
    $('#appui').hide();
  });

  //Affichage du texte
  socket.on('faux', () => {
    $('#faux').show(500);
    $('#danemarkTexte').hide();
    $('#espagneTexte').hide();
    $('#espagneDTexte').hide();
    $('#franceTexte').hide();
    $('#royaumeUniTexte').hide();
    $('#portugalTexte').hide();
    $('#paysBasTexte').hide();
    $('#canadaTexte').hide();
    $('#indeTexte').hide();
    $('#mexiqueTexte').hide();
    $('#norvegeTexte').hide();
    $('#vietnamTexte').hide();
    $('#japonTexte').hide();
    $('#greceTexte').hide();
    $('#moyenOrientTexte').hide();
      $('#appui').hide();
  });

  socket.on('danemarkValid', () => {
    $('#danemarkTexte').show(500);
    $('#faux').hide();
  });

  socket.on('espagneValid', () => {
    $('#espagneTexte').show(500);
    $('#faux').hide();
  });

  socket.on('espagneDValid', () => {
    $('#espagneDTexte').show(500);
    $('#faux').hide();
  });

  socket.on('franceValid', () => {
    $('#franceTexte').show(500);
    $('#faux').hide();
  });

  socket.on('royaumeUniValid', () => {
    $('#royaumeUniTexte').show(500);
    $('#faux').hide();
  });

  socket.on('portugalValid', () => {
    $('#portugalTexte').show(500);
    $('#faux').hide();
  });

  socket.on('paysBasValid', () => {
    $('#paysBasTexte').show(500);
    $('#faux').hide();
  });

  socket.on('canadaValid', () => {
    $('#canadaTexte').show(500);
    $('#faux').hide();
  });

  socket.on('indeValid', () => {
    $('#indeTexte').show(500);
    $('#faux').hide();
  });

  socket.on('mexiqueValid', () => {
    $('#mexiqueTexte').show(500);
    $('#faux').hide();
  });

  socket.on('norvegeValid', () => {
    $('#norvegeTexte').show(500);
    $('#faux').hide();
  });

  socket.on('vietnamValid', () => {
    $('#vietnamTexte').show(500);
    $('#faux').hide();
  });

  socket.on('japonValid', () => {
    $('#japonTexte').show(500);
    $('#faux').hide();
  });

  socket.on('greceValid', () => {
    $('#greceTexte').show(500);
    $('#faux').hide();
  });

  socket.on('moyenOrientValid', () => {
    $('#moyenOrientTexte').show(500);
    $('#faux').hide();
  });

  //click sur le pays
  $('#espagne').click( (e) => {
    socket.emit('clickEspagne');
    e.preventDefault();
  });

  $('#danemark').click( (e) => {
    socket.emit('clickDanemark');
    e.preventDefault();
  });

  $('#france').click( (e) => {
    socket.emit('clickFrance');
    e.preventDefault();
  });

  $('#royaumeUni').click( (e) => {
    socket.emit('clickRoyaumeUni');
    e.preventDefault();
  });

  $('#portugal').click( (e) => {
    socket.emit('clickPortugal');
    e.preventDefault();
  });

  $('#paysBas').click( (e) => {
    socket.emit('clickPaysBas');
    e.preventDefault();
  });

  $('#canada').click( (e) => {
    socket.emit('clickCanada');
    e.preventDefault();
  });

  $('#inde').click( (e) => {
    socket.emit('clickInde');
    e.preventDefault();
  });

  $('#mexique').click( (e) => {
    socket.emit('clickMexique');
    e.preventDefault();
  });

  $('#norvege').click( (e) => {
    socket.emit('clickNorvege');
    e.preventDefault();
  });

  $('#vietnam').click( (e) => {
    socket.emit('clickVietnam');
    e.preventDefault();
  });

  $('#japon').click( (e) => {
    socket.emit('clickJapon');
    e.preventDefault();
  });

  $('#grece').click( (e) => {
    socket.emit('clickGrece');
    e.preventDefault();
  });

  $('#moyenOrient').click( (e) => {
    socket.emit('clickMoyenOrient');
    e.preventDefault();
  });

  $('#autre').click( (e) => {
    socket.emit('clickAutre');
    e.preventDefault();
  });

  //click sur le bouton pour lancer le son
  socket.on('songEspagne', () => {
    espagnol.play();
  });

  socket.on('songJapon', () => {
    japonais.play();
  });

  socket.on('songGrece', () => {
    espagnol.play();
  });

  socket.on('songVietnam', () => {
    vietnamien.play();
  });

  socket.on('songNorvege', () => {
    espagnol.play();
  });

  //click sur le bouton pour changer de jeu (change la couleur de la map)
  socket.on('swichJeu', () => {
    $('.map').toggleClass('map2');

    $('#faux').hide();
    $('#danemarkTexte').hide();
    $('#espagneTexte').hide();
    $('#espagneDTexte').hide();
    $('#franceTexte').hide();
    $('#royaumeUniTexte').hide();
    $('#portugalTexte').hide();
    $('#paysBasTexte').hide();
    $('#canadaTexte').hide();
    $('#indeTexte').hide();
    $('#mexiqueTexte').hide();
    $('#norvegeTexte').hide();
    $('#vietnamTexte').hide();
    $('#japonTexte').hide();
    $('#greceTexte').hide();
    $('#moyenOrientTexte').hide();
    $('#appui').show();
  });


});
