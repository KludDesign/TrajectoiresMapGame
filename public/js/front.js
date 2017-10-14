$(document).ready( () => {
  var socket = io('http://localhost:8080');
  var espagne = new Audio("http://localhost:8080/public/sons/espagnol.mp3");
  var vietnam = new Audio("http://localhost:8080/public/sons/vietnamien.mp3");
  var japon = new Audio("http://localhost:8080/public/sons/japonais.mp3");

  $('#appui').show();

  $('.pays').each(function() {
    $(this).click( () => {
      var id = $(this).attr('id');
      $('text').hide();
      $('#'+id+'Texte').show();
    });
  });

  //Récupération du boutton
  // $('.pays').each(function() {
  //   var id = $(this).attr('id');
  //   socket.on(id+'Button', (id) => {
  //     return bouton = id;
  //   });
  // });

  //click sur les boutons pour le jeu de Droite
  socket.on('espagneSong', () => {
    espagne.play();
  });

  socket.on('vietnamSong', () => {
    vietnam.play();
  });

  socket.on('japonSong', () => {
    japon.play();
  });





  //Pour la mise a zero lors de l'appui sur un bouton
  socket.on('miseZero', () => {
    $('#faux').hide();
    $('#appui').hide();
    $('.pays').each(function() {
      var id = $(this).attr('id');
      $('#'+id+'Texte').hide();
    });
  });

  // //lorsque c'est faux
  // socket.on('faux', () => {
  //   $('#faux').show(500);
  //   $('#appui').hide();
  //   $('.pays').each(function() {
  //     var id = $(this).attr('id');
  //     $('#'+id+'Texte').hide();
  //   });
  // });

  //click sur le bouton pour changer de jeu (change la couleur de la map)
  socket.on('swichJeu', () => {
    $('.map').toggleClass('map2');

    $('#faux').hide();
    $('#appui').show();
    $('.pays').each(function() {
      var id = $(this).attr('id');
      $('#'+id+'Texte').hide();
    });
  });
});
