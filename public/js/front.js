
$(document).ready( () => {
  var socket = io('http://localhost:8080');
  var espagne = new Audio("http://localhost:8080/public/sons/espagnol.mp3");
  var vietnam = new Audio("http://localhost:8080/public/sons/vietnamien.mp3");
  var japon = new Audio("http://localhost:8080/public/sons/japonais.mp3");
  var grec = new Audio("http://localhost:8080/public/sons/grec.mp3");
  var norvegien = new Audio("http://localhost:8080/public/sons/norvegien.mp3");
  var bouton;



  $('text').hide();
  $('#appui').show();

  // if (map == true && bouton == false){
  //   $('text').hide();
  // };


  // if (bouton == true){
  //   if (map == true){
  //     if (nomBouton === nomMap){
  //       $('.pays').each(function() {
  //           var id = $(this).attr('id');
  //           $('text').hide();
  //           $('#'+id+'Texte').show();
  //       });
  //       return bouton = false, map = false;
  //     }
  //     else{
  //       $('#faux').show();
  //       return bouton = false, map = false;
  //     };
  //   }
  //   else{
  //     $('text').hide();
  //     $('#appuiMap').show();
  //   }
  //   $('text').hide();
  // };

  //Vérification de validation click sur la map et sur le bouton



  //click sur les boutons du jeu de gauche
  function verif(bouton){
    $('text').hide();
    $('#appuiMap').show();

    $('.pays').each(function() {
      $(this).click(function() {
        if($(this).attr('id') === bouton){
          var id = $(this).attr('id');
          $('text').hide();
          $('#'+id+'Texte').show();
        }else {
          $('text').hide();
          $('#faux').show();
        };
      });
    });
  };
//
// function clickMap(y){
//   $('.pays').each(function() {
//     $(this).click(function() {
//       return y = $(this).attr('id');
//     });
//   });
// };
//
//
//
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
    return bouton = true;
  });

  socket.on('vietnamSong', () => {
    vietnam.play();
    return bouton = true;
  });

  socket.on('japonSong', () => {
    japon.play();
    return bouton = true;
  });

  socket.on('grecSong', () => {
    grec.play();
    return bouton = true;
  });

  socket.on('norvegienSong', () => {
    norvegien.play();
    return bouton = true;
  });


  //click sur le bouton pour changer de jeu (change la couleur de la map)---------------------
  socket.on('swichJeu', () => {
    $('.map').toggleClass('map2');

    $('text').hide();
    $('#appui').show();
  });
});
