
$(document).ready( () => {
  var socket = io('http://localhost:8080');
  var espagne = new Audio("http://localhost:8080/public/sons/espagnol.mp3");
  var vietnam = new Audio("http://localhost:8080/public/sons/vietnamien.mp3");
  var japon = new Audio("http://localhost:8080/public/sons/japonais.mp3");
  var nomBouton;
  var nomMap;
  var bouton;
  var map;



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
  function verif(z, x){
    if (z === true){
      clickMap(nomMap);
        if (x === nomMap){
          $('.pays').each(function() {
              var id = $(this).attr('id');
              $('text').hide();
              $('#'+id+'Texte').show();
          });
          return bouton = false, map = false;
        }
        else{
          $('text').hide();
          $('#faux').show();
        };
      $('text').hide();
      $('#appuiMap').show();
    };
  };

function clickMap(y){
  $('.pays').each(function() {
    $(this).click(function() {
      return y = $(this).attr('id');
    });
  });
};



  socket.on('espagneButton', () => {
    bouton = true;
    nomBouton = 'espagne';

    verif(bouton, nomBouton);
  });

  socket.on('indeButton', () => {
    nomBouton = 'inde'; bouton = true; map = false;
  });

  socket.on('mexiqueButton', () => {
    return nomBouton = 'mexique', bouton = true, map = false;
  });

  socket.on('paysBasButton', () => {
    return nomBouton = 'paysBas', bouton = true, map = false;
  });

  socket.on('moyenOrientButton', () => {
    return nomBouton = 'moyenOrient', bouton = true, map = false;
  });

  socket.on('franceButton', () => {
    return nomBouton = 'france', bouton = true, map = false;
  });

  socket.on('royaumeUniButton', () => {
    return nomBouton = 'royaumeUni', bouton = true, map = false;
  });

  socket.on('canadaButton', () => {
    return nomBouton = 'canada', bouton = true, map = false;
  });

  socket.on('portugalButton', () => {
    return nomBouton = 'portugal', bouton = true, map = false;
  });

  socket.on('danemarkButton', () => {
    return nomBouton = 'danemark', bouton = true, map = false;
  });

  //click sur les boutons pour du de Droite
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



  //click sur le bouton pour changer de jeu (change la couleur de la map)
  socket.on('swichJeu', () => {
    $('.map').toggleClass('map2');

    $('text').hide();
    $('#appui').show();
  });
});
