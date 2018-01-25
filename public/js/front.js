
$(document).ready( () => {
  var socket = io('http://localhost:8080');


  var songArray = {
    espagne: new Audio("http://localhost:8080/public/sons/espagnol.mp3"),
    vietnam: new Audio("http://localhost:8080/public/sons/vietnamien.mp3"),
    japon: new Audio("http://localhost:8080/public/sons/japonais.mp3"),
    grec: new Audio("http://localhost:8080/public/sons/grec.mp3"),
    norvegien: new Audio("http://localhost:8080/public/sons/norvegien.mp3"),

    cacao: new Audio("http://localhost:8080/public/sons/cacao.mp3"),
    estragon: new Audio("http://localhost:8080/public/sons/estragon.mp3"),
    lavande: new Audio("http://localhost:8080/public/sons/lavande.mp3"),
    matelas: new Audio("http://localhost:8080/public/sons/matelas.mp3"),
    paquebot: new Audio("http://localhost:8080/public/sons/paquebot.mp3"),
    pyjama: new Audio("http://localhost:8080/public/sons/pyjama.mp3"),
    sieste: new Audio("http://localhost:8080/public/sons/sieste.mp3"),
    tennis: new Audio("http://localhost:8080/public/sons/tennis.mp3"),
    toboggan: new Audio("http://localhost:8080/public/sons/toboggan.mp3")
  };

  var bouton;

  function audioStop(){
    for (var propriete in songArray) {
      songArray[propriete].pause();
      songArray[propriete].currentTime = 0;
    };
  };

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


//click sur les boutons jeu de Gauche-------------------------------------
  socket.on('espagneButton', () => {
    $("#espagne").css("visibility", "visible");
    $("#espagneD").css("visibility", "hidden");
    audioStop();
    songArray.sieste.play();
    nomBouton = 'espagne';
    verif(nomBouton);
  });

  socket.on('indeButton', () => {
    audioStop();
    songArray.pyjama.play();
    nomBouton = 'inde';
    verif(nomBouton);
  });

  socket.on('mexiqueButton', () => {
    audioStop();
    songArray.cacao.play();
    nomBouton = 'mexique';
    verif(nomBouton);
  });

  socket.on('greceButton', () => {
    $("#grece").css("visibility", "visible");
    $("#greceD").css("visibility", "hidden");
    audioStop();
    songArray.estragon.play();
    nomBouton = 'grece';
    verif(nomBouton);
  });

  socket.on('moyenOrientButton', () => {
    audioStop();
    songArray.matelas.play();
    nomBouton = 'moyenOrient';
    verif(nomBouton);
  });

  socket.on('franceButton', () => {
    audioStop();
    songArray.tennis.play();
    nomBouton = 'france';
    verif(nomBouton);
  });

  socket.on('royaumeUniButton', () => {
    audioStop();
    songArray.paquebot.play();
    nomBouton = 'royaumeUni';
    verif(nomBouton);
  });

  socket.on('canadaButton', () => {
    audioStop();
    songArray.toboggan.play();
    nomBouton = 'canada';
    verif(nomBouton);
  });

  socket.on('italieButton', () => {
    audioStop();
    songArray.lavande.play();
    nomBouton = 'italie';
    verif(nomBouton);
  });


  //click sur les boutons jeu de Droite-------------------------------------
  socket.on('espagneSong', () => {
    $("#espagne").css("visibility", "hidden");
    $("#espagneD").css("visibility", "visible");
    audioStop();
    songArray.espagne.play();
    nomBouton = 'espagneD';
    verif(nomBouton);
  });

  socket.on('vietnamSong', () => {
    audioStop();
    songArray.vietnam.play();
    nomBouton = 'vietnam';
    verif(nomBouton);
  });

  socket.on('japonSong', () => {
    audioStop();
    songArray.japon.play();
    nomBouton = 'japon';
    verif(nomBouton);
  });

  socket.on('greceSong', () => {
    $("#grece").css("visibility", "hidden");
    $("#greceD").css("visibility", "visible");
    audioStop();
    songArray.grec.play();
    nomBouton = 'greceD';
    verif(nomBouton);
  });

  socket.on('norvegeSong', () => {
    audioStop();
    songArray.norvegien.play();
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
