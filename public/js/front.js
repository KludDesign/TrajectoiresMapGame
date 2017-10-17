
$(document).ready( () => {
  var socket = io('http://localhost:8080');
  var espagne = new Audio("http://localhost:8080/public/sons/espagnol.mp3");
  var vietnam = new Audio("http://localhost:8080/public/sons/vietnamien.mp3");
  var japon = new Audio("http://localhost:8080/public/sons/japonais.mp3");
  var grec = new Audio("http://localhost:8080/public/sons/grec.mp3");
  var norvegien = new Audio("http://localhost:8080/public/sons/norvegien.mp3");
  var bouton;


    function appui(){
      $('text').hide();
      $('#appui').show();
    };

    appui();

  //Vérification de validation click sur la map et sur le bouton
  function verif(bouton){
    $('text').hide();
    $('#appuiMap').show();

    $('.pays').each(function() {
      $(this).click(function(e) {
        if($(this).attr('id') === bouton){
          var id = $(this).attr('id');
          $('text').hide();
          $('#'+id+'Texte').show();
          $('.pays').off().delay(2000).show("fast", appui);
        }else {
          $('text').hide();
          $('#faux').show();
        };
      });
    });
  };


//click sur les boutons pour du de Gauche-------------------------------------
  socket.on('espagneButton', () => {
    nomBouton = 'espagne';
    verif(nomBouton);
  });

  socket.on('indeButton', () => {
    nomBouton = 'inde';
    verif(nomBouton);
  });

  socket.on('mexiqueButton', () => {
    nomBouton = 'mexique';
    verif(nomBouton);
  });

  socket.on('paysBasButton', () => {
    nomBouton = 'paysBas';
    verif(nomBouton);
  });

  socket.on('moyenOrientButton', () => {
    nomBouton = 'moyenOrient';
    verif(nomBouton);
  });

  socket.on('franceButton', () => {
    nomBouton = 'france';
    verif(nomBouton);
  });

  socket.on('royaumeUniButton', () => {
    nomBouton = 'royaumeUni';
    verif(nomBouton);
  });

  socket.on('canadaButton', () => {
    nomBouton = 'canada';
    verif(nomBouton);
  });

  socket.on('portugalButton', () => {
    nomBouton = 'portugal';
    verif(nomBouton);
  });

  socket.on('danemarkButton', () => {
    nomBouton = 'danemark';
    verif(nomBouton);
  });


  //click sur les boutons pour du de Droite-------------------------------------
  socket.on('espagneSong', () => {
    espagne.play();
    nomBouton = 'espagne';
    $('text').hide();
    $('#appuiMap').show();

    $('.pays').each(function() {
      $(this).click(function(e) {
        if($(this).attr('id') === bouton){
          var id = $(this).attr('id');
          $('text').hide();
          $('#'+id+'DTexte').show();
          $('.pays').off().delay(2000).show("fast", appui);
        }else {
          $('text').hide();
          $('#faux').show();
        };
      });
    });
  });

  socket.on('vietnamSong', () => {
    vietnam.play();
    nomBouton = 'vietnam';
    verif(nomBouton);
  });

  socket.on('japonSong', () => {
    japon.play();
    nomBouton = 'japon';
    verif(nomBouton);
  });

  socket.on('greceSong', () => {
    grec.play();
    nomBouton = 'grece';
    verif(nomBouton);
  });

  socket.on('norvegeSong', () => {
    norvegien.play();
    nomBouton = 'norvege';
    verif(nomBouton);
  });


  //click sur le bouton pour changer de jeu (change la couleur de la map)---------------------
  socket.on('swichJeu', () => {
    $('.map').toggleClass('map2');

    $('text').hide();
    $('#appui').show();
  });
});
