
$(document).ready( () => {
  var socket = io('http://localhost:8080');
  var espagne = new Audio("http://localhost:8080/public/sons/espagnol.mp3");
  var vietnam = new Audio("http://localhost:8080/public/sons/vietnamien.mp3");
  var japon = new Audio("http://localhost:8080/public/sons/japonais.mp3");
  var grec = new Audio("http://localhost:8080/public/sons/grec.mp3");
  var norvegien = new Audio("http://localhost:8080/public/sons/norvegien.mp3");

  var cacao = new Audio("http://localhost:8080/public/sons/cacao.mp3");
  var estragon = new Audio("http://localhost:8080/public/sons/estragon.mp3");
  var lavande = new Audio("http://localhost:8080/public/sons/lavande.mp3");
  var matelas = new Audio("http://localhost:8080/public/sons/matelas.mp3");
  var paquebot = new Audio("http://localhost:8080/public/sons/paquebot.mp3");
  var pyjama = new Audio("http://localhost:8080/public/sons/pyjama.mp3");
  var sieste = new Audio("http://localhost:8080/public/sons/sieste.mp3");
  var tennis = new Audio("http://localhost:8080/public/sons/tennis.mp3");
  var toboggan = new Audio("http://localhost:8080/public/sons/toboggan.mp3");
  var bouton;


    function appui(){
      $('text').hide();
      $('#appui').show();
      $("#bon").css("visibility", "hidden");
      $("#mauvais").css("visibility", "hidden");
    };

    appui();

  //Vérification de validation click sur la map et sur le bouton
  function verif(bouton){
    $('text').hide();
    $('#appuiMap').show();
    $("#bon").css("visibility", "hidden");
    $("#mauvais").css("visibility", "hidden");

    $('.pays').each(function() {
      $(this).click(function(e) {
        if($(this).attr('id') === bouton){
          var id = $(this).attr('id');
          $('text').hide();
          $('#'+id+'Texte').show();
          $('.pays').off().delay(12000).show("fast", appui);
          $("#bon").css("visibility", "visible");
          $("#mauvais").css("visibility", "hidden");
        }else {
          $('text').hide();
          $('#faux').show();
          $("#bon").css("visibility", "hidden");
          $("#mauvais").css("visibility", "visible");
        };
      });
    });
  };


//click sur les boutons pour du de Gauche-------------------------------------
  socket.on('espagneButton', () => {
    $("#espagne").css("visibility", "visible");
    $("#espagneD").css("visibility", "hidden");
    sieste.play();
    nomBouton = 'espagne';
    verif(nomBouton);
  });

  socket.on('indeButton', () => {
    pyjama.play();
    nomBouton = 'inde';
    verif(nomBouton);
  });

  socket.on('mexiqueButton', () => {
    cacao.play();
    nomBouton = 'mexique';
    verif(nomBouton);
  });

  socket.on('greceButton', () => {
    $("#grece").css("visibility", "visible");
    $("#greceD").css("visibility", "hidden");
    estragon.play();
    nomBouton = 'grece';
    verif(nomBouton);
  });

  socket.on('moyenOrientButton', () => {
    matelas.play();
    nomBouton = 'moyenOrient';
    verif(nomBouton);
  });

  socket.on('franceButton', () => {
    tennis.play();
    nomBouton = 'france';
    verif(nomBouton);
  });

  socket.on('royaumeUniButton', () => {
    paquebot.play();
    nomBouton = 'royaumeUni';
    verif(nomBouton);
  });

  socket.on('canadaButton', () => {
    toboggan.play();
    nomBouton = 'canada';
    verif(nomBouton);
  });

  socket.on('italieButton', () => {
    lavande.play();
    nomBouton = 'italie';
    verif(nomBouton);
  });


  //click sur les boutons pour du de Droite-------------------------------------
  socket.on('espagneSong', () => {
    $("#espagne").css("visibility", "hidden");
    $("#espagneD").css("visibility", "visible");
    espagne.play();
    nomBouton = 'espagneD';
    verif(nomBouton);
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
    $("#grece").css("visibility", "hidden");
    $("#greceD").css("visibility", "visible");
    grec.play();
    nomBouton = 'greceD';
    verif(nomBouton);
  });

  socket.on('norvegeSong', () => {
    norvegien.play();
    nomBouton = 'norvege';
    verif(nomBouton);
  });

  //rester appuié pour avoir la réponse
  socket.on('espagneGReponse', () => {
    $('text').hide();
    $('#espagneTexte').show();
    $('.pays').off().delay(12000).show("fast", appui);
    $("#bon").css("visibility", "hidden");
    $("#mauvais").css("visibility", "hidden");
  });

  socket.on('indeReponse', () => {
    $('text').hide();
    $('#indeTexte').show();
    $('.pays').off().delay(12000).show("fast", appui);
    $("#bon").css("visibility", "hidden");
    $("#mauvais").css("visibility", "hidden");
  });

  socket.on('mexiqueReponse', () => {
    $('text').hide();
    $('#mexiqueTexte').show();
    $('.pays').off().delay(12000).show("fast", appui);
    $("#bon").css("visibility", "hidden");
    $("#mauvais").css("visibility", "hidden");
  });

  socket.on('greceGReponse', () => {
    $('text').hide();
    $('#greceTexte').show();
    $('.pays').off().delay(12000).show("fast", appui);
    $("#bon").css("visibility", "hidden");
    $("#mauvais").css("visibility", "hidden");
  });

  socket.on('moyenOrientReponse', () => {
    $('text').hide();
    $('#moyenOrientTexte').show();
    $('.pays').off().delay(12000).show("fast", appui);
    $("#bon").css("visibility", "hidden");
    $("#mauvais").css("visibility", "hidden");
  });

  socket.on('franceReponse', () => {
    $('text').hide();
    $('#franceTexte').show();
    $('.pays').off().delay(12000).show("fast", appui);
    $("#bon").css("visibility", "hidden");
    $("#mauvais").css("visibility", "hidden");
  });

  socket.on('royaumeUniReponse', () => {
    $('text').hide();
    $('#royaumeUniTexte').show();
    $('.pays').off().delay(12000).show("fast", appui);
    $("#bon").css("visibility", "hidden");
    $("#mauvais").css("visibility", "hidden");
  });

  socket.on('canadaReponse', () => {
    $('text').hide();
    $('#canadaTexte').show();
    $('.pays').off().delay(12000).show("fast", appui);
    $("#bon").css("visibility", "hidden");
    $("#mauvais").css("visibility", "hidden");
  });

  socket.on('italieReponse', () => {
    $('text').hide();
    $('#italieTexte').show();
    $('.pays').off().delay(12000).show("fast", appui);
    $("#bon").css("visibility", "hidden");
    $("#mauvais").css("visibility", "hidden");
  });

  socket.on('espagneDReponse', () => {
    $('text').hide();
    $('#espagneDTexte').show();
    $('.pays').off().delay(12000).show("fast", appui);
    $("#bon").css("visibility", "hidden");
    $("#mauvais").css("visibility", "hidden");
  });

  socket.on('vietnamReponse', () => {
    $('text').hide();
    $('#vietnamTexte').show();
    $('.pays').off().delay(12000).show("fast", appui);
    $("#bon").css("visibility", "hidden");
    $("#mauvais").css("visibility", "hidden");
  });

  socket.on('japonReponse', () => {
    $('text').hide();
    $('#japonTexte').show();
    $('.pays').off().delay(12000).show("fast", appui);
    $("#bon").css("visibility", "hidden");
    $("#mauvais").css("visibility", "hidden");
  });

  socket.on('greceDReponse', () => {
    $('text').hide();
    $('#greceDTexte').show();
    $('.pays').off().delay(12000).show("fast", appui);
    $("#bon").css("visibility", "hidden");
    $("#mauvais").css("visibility", "hidden");
  });

  socket.on('norvegeReponse', () => {
    $('text').hide();
    $('#norvegeTexte').show();
    $('.pays').off().delay(12000).show("fast", appui);
    $("#bon").css("visibility", "hidden");
    $("#mauvais").css("visibility", "hidden");
  });


  //click sur le bouton pour changer de jeu (change la couleur de la map)---------------------
  socket.on('swichJeu', () => {
    $('.map').toggleClass('map2');
    $("#bon").css("visibility", "hidden");
    $("#mauvais").css("visibility", "hidden");

    $('text').hide();
    $('#appui').show();
  });
});
