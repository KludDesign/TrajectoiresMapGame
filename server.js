var express = require('express'),
    app = express(),
    server = require('http').Server(app),
     io = require('socket.io').listen(server),
     fs = require('fs'),
     events = require('events'),
     eventEmitter = new events.EventEmitter(),
     // johnny-five
     five = require('johnny-five'),
     board = new five.Board(),

     mapArray = {espagneMap: false, espagneDMap: false, danemarkMap: false, franceMap: false, royaumeUniMap: false, portugalMap: false, paysBasMap: false, canadaMap: false, indeMap: false, mexiqueMap: false, norvegeMap: false, VietnamMap: false, japonMap: false, greceMap: false, moyenOrientMap: false, autreMap: false},
     buttonArray = {espagneButton: false, espagneDButton: false, indeButton: false, danemarkButton: false, franceButton: false, royaumeUniButton: false, portugalButton: false, paysBasButton: false, canadaButton: false, mexiqueButton: false, norvegeButton: false, VietnamButton: false, japonButton: false, greceButton: false, moyenOrientButton: false};

// Ecoute sur le port 8080 de localhost
server.listen(8080);

// Création du server expressJS
app.get('/', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile(__dirname + '/index.html', (err,data) => {
      if (err) {
        res.writeHead(500);
        return res.end('Error loading index.html');
      };
      res.end(data);
    });
});

// Création du dossier statique /public
app.use('/public', express.static(__dirname + '/public'));

// Manipulation de la carte Arduino avec johnny-five
board.on('ready', () => {
  // Déclaration des bouttons jeu de gauche ------------------------------------
  var buttonsG = new five.Buttons({
    pins: [44, 45, 46, 47, 48, 49, 50, 51, 52, 53],
    isPullup: true
  });

  // Déclaration des boutons jeu de droite ----------------------------------
  var buttonsD = new five.Buttons({
    pins: [8, 9, 10, 11, 12],
    isPullup: true
  });

  var buttonRelay = new five.Button({
    pin: 3,
    isPullup: true,
  });

  var relay = new five.Relay({
    pin: 21,
    type: "NO",
  });

  // Evenement pour le changement de jeu
  buttonRelay.on('press', () => {
    console.log( "Button relay pressed" );
    relay.toggle();
    // Envoyer l'événement au front lorsque le bouton est appuié
    io.emit('swichJeu');
  });

  // Evenement lors du click sur la map ------------------------------------------------------
  io.on('connection', (socket) => {

    socket.on('clickEspagne',  () => {
      console.log( "clickEspagne" );
      mapArray.espagneMap = true;
      if (mapArray.espagneMap == true && buttonArray.espagneButton == true){
        io.emit('espagneValid');
        console.log( "gagné!!!" );
      }
      if (mapArray.espagneMap == true && buttonArray.espagneDButton == true){
        io.emit('espagneDValid');
        console.log( "gagné!!!" );
      }
      else if(mapArray.espagneMap == false || buttonArray.espagneButton == false){
        console.log( "tu t'es trompé!!");
        io.emit('faux');
      };
      return mapArray.espagneMap = false, buttonArray.espagneButton = false;
    });

    socket.on('clickJapon',  () => {
      console.log( "clickJapon" );
      mapArray.japonMap = true;
      if (mapArray.japonMap == true && buttonArray.japonButton == true){
        io.emit('japonValid');
        console.log( "gagné!!!" );
      }
      else if(mapArray.japonMap == false || buttonArray.japonButton == false){
        console.log( "tu t'es trompé!!");
        io.emit('faux');
      };
      return mapArray.japonMap = false, buttonArray.japonButton = false;
    });

    socket.on('clickGrece',  () => {
      console.log( "clickGrece" );
      mapArray.greceMap = true;
      if (mapArray.greceMap == true && buttonArray.greceButton == true){
        io.emit('greceValid');
        console.log( "gagné!!!" );
      }
      else if(mapArray.greceMap == false || buttonArray.greceButton == false){
        console.log( "tu t'es trompé!!");
        io.emit('faux');
      };
      return mapArray.greceMap = false, buttonArray.greceButton = false;
    });

    socket.on('clickVietnam',  () => {
      console.log( "clickVietnam" );
      mapArray.vietnamMap = true;
      if (mapArray.vietnamMap == true && buttonArray.vietnamButton == true){
        io.emit('vietnamValid');
        console.log( "gagné!!!" );
      }
      else if(mapArray.vietnamMap == false || buttonArray.vietnamButton == false){
        console.log( "tu t'es trompé!!");
        io.emit('faux');
      };
      return mapArray.vietnamMap = false, buttonArray.vietnamButton = false;
    });

    socket.on('clickNorvege',  () => {
      console.log( "clickNorvege" );
      mapArray.norvegeMap = true;
      if (mapArray.norvegeMap == true && buttonArray.norvegeButton == true){
        io.emit('norvegeValid');
        console.log( "gagné!!!" );
      }
      else if(mapArray.norvegeMap == false || buttonArray.norvegeButton == false){
        console.log( "tu t'es trompé!!");
        io.emit('faux');
      };
      return mapArray.norvegeMap = false, buttonArray.norvegeButton = false;
    });

    socket.on('clickFrance',  () => {
      console.log( "clickFrance" );
      mapArray.franceMap = true;
      if (mapArray.franceMap == true && buttonArray.franceButton == true){
        io.emit('franceValid');
        console.log( "gagné!!!" );
      }
      else if(mapArray.franceMap == false || buttonArray.franceButton == false){
        console.log( "tu t'es trompé!!");
        io.emit('faux');
      };
      return mapArray.franceMap = false, buttonArray.franceButton = false;
    });

    socket.on('clickDanemark',  () => {
      console.log( "clickDanemark" );
      mapArray.danemarkMap = true;
      if (mapArray.danemarkMap == true && buttonArray.danemarkButton == true){
        io.emit('danemarkValid');
        console.log( "gagné!!!" );
      }
      else if(mapArray.danemarkMap == false || buttonArray.danemarkButton == false){
        console.log( "tu t'es trompé!!");
        io.emit('faux');
      };
      return mapArray.danemarkMap = false, buttonArray.danemarkButton = false;
    });

    socket.on('clickRoyaumeUni',  () => {
      console.log( "clickRoyaumeUni" );
      mapArray.royaumeUniMap = true;
      if (mapArray.royaumeUniMap == true && buttonArray.royaumeUniButton == true){
        io.emit('royaumeUniValid');
        console.log( "gagné!!!" );
      }
      else if(mapArray.royaumeUniMap == false || buttonArray.royaumeUniButton == false){
        console.log( "tu t'es trompé!!");
        io.emit('faux');
      };
      return mapArray.royaumeUniMap = false, buttonArray.royaumeUniButton = false;
    });

    socket.on('clickPortugal',  () => {
      console.log( "clickPortugal" );
      mapArray.portugalMap = true;
      if (mapArray.portugalMap == true && buttonArray.portugalButton == true){
        io.emit('portugalValid');
        console.log( "gagné!!!" );
      }
      else if(mapArray.portugalMap == false || buttonArray.portugalButton == false){
        console.log( "tu t'es trompé!!");
        io.emit('faux');
      };
      return mapArray.portugalMap = false, buttonArray.portugalButton = false;
    });

    socket.on('clickPaysBas',  () => {
      console.log( "clickPaysBas" );
      mapArray.paysBasMap = true;
      if (mapArray.paysBasMap == true && buttonArray.paysBasButton == true){
        io.emit('paysBasValid');
        console.log( "gagné!!!" );
      }
      else if(mapArray.paysBasMap == false || buttonArray.paysBasButton == false){
        console.log( "tu t'es trompé!!");
        io.emit('faux');
      };
      return mapArray.paysBasMap = false, buttonArray.paysBasButton = false;
    });

    socket.on('clickCanada',  () => {
      console.log( "clickCanada" );
      mapArray.canadaMap = true;
      if (mapArray.canadaMap == true && buttonArray.canadaButton == true){
        io.emit('canadaValid');
        console.log( "gagné!!!" );
      }
      else if(mapArray.canadaMap == false || buttonArray.canadaButton == false){
        console.log( "tu t'es trompé!!");
        io.emit('faux');
      };
      return mapArray.canadaMap = false, buttonArray.canadaButton = false;
    });

    socket.on('clickInde',  () => {
      console.log( "clickInde" );
      mapArray.indeMap = true;
      if (mapArray.indeMap == true && buttonArray.indeButton == true){
        io.emit('indeValid');
        console.log( "gagné!!!" );
      }
      else if(mapArray.indeMap == false || buttonArray.indeButton == false){
        console.log( "tu t'es trompé!!");
        io.emit('faux');
      };
      return mapArray.indeMap = false, buttonArray.indeButton = false;
    });

    socket.on('clickMexique',  () => {
      console.log( "clickMexique" );
      mapArray.mexiqueMap = true;
      if (mapArray.mexiqueMap == true && buttonArray.mexiqueButton == true){
        io.emit('mexiqueValid');
        console.log( "gagné!!!" );
      }
      else if(mapArray.mexiqueMap == false || buttonArray.mexiqueButton == false){
        console.log( "tu t'es trompé!!");
        io.emit('faux');
      };
      return mapArray.mexiqueMap = false, buttonArray.mexiqueButton = false;
    });

    socket.on('clickMoyenOrient',  () => {
      console.log( "clickMoyenOrient" );
      mapArray.moyenOrientMap = true;
      if (mapArray.moyenOrientMap == true && buttonArray.moyenOrientButton == true){
        io.emit('moyenOrientValid');
        console.log( "gagné!!!" );
      }
      else if(mapArray.moyenOrientMap == false || buttonArray.moyenOrientButton == false){
        console.log( "tu t'es trompé!!");
        io.emit('faux');
      };
      return mapArray.moyenOrientMap = false, buttonArray.moyenOrientButton = false;
    });

    socket.on('clickAutre',  () => {
      if(buttonArray.indeButton == true || buttonArray.danemarkButton == true || buttonArray.franceButton == true || buttonArray.royaumeUniButton == true || buttonArray.portugalButton == true || buttonArray.paysBasButton == true || buttonArray.canadaButton == true || buttonArray.mexiqueButton == true || buttonArray.norvegeButton == true || buttonArray.VietnamButton == true
         || buttonArray.japonButton == true || buttonArray.greceButton == true || buttonArray.moyenOrientButton == true || buttonArray.espagneButton == true || buttonArray.espagneDButton == true){
           console.log( "tu t'es trompé!!");
        io.emit('faux');
      };
    });
  });

  // Evenement lors de l'appui sur les bouttons du jeu Gauche -----------------------------------
  buttonsG.on('press', (button) => {
    var pinNum = button.pin;
    io.emit('miseZero');

    switch (pinNum) {
      case 44:
        console.log('pays'+pinNum);
        return buttonArray.espagneButton = true,
        buttonArray.indeButton = buttonArray.danemarkButton = buttonArray.franceButton = buttonArray.royaumeUniButton = buttonArray.portugalButton = buttonArray.paysBasButton = buttonArray.canadaButton = buttonArray.mexiqueButton = buttonArray.norvegeButton = buttonArray.VietnamButton = buttonArray.japonButton = buttonArray.greceButton = buttonArray.moyenOrientButton = buttonArray.espagneDButton = false;
      break;

      case 45:
          console.log('pays'+pinNum);
          return buttonArray.indeButton = true,
          buttonArray.espagneButton = buttonArray.danemarkButton = buttonArray.franceButton = buttonArray.royaumeUniButton = buttonArray.portugalButton = buttonArray.paysBasButton = buttonArray.canadaButton = buttonArray.mexiqueButton = buttonArray.norvegeButton = buttonArray.VietnamButton = buttonArray.japonButton = buttonArray.greceButton = buttonArray.moyenOrientButton = buttonArray.espagneDButton = false;
      break;

      case 46:
          console.log('pays'+pinNum);
          return buttonArray.mexiqueButton = true,
          buttonArray.espagneButton = buttonArray.indeButton = buttonArray.danemarkButton = buttonArray.franceButton = buttonArray.royaumeUniButton = buttonArray.portugalButton = buttonArray.paysBasButton = buttonArray.canadaButton = buttonArray.norvegeButton = buttonArray.VietnamButton = buttonArray.japonButton = buttonArray.greceButton = buttonArray.moyenOrientButton = buttonArray.espagneDButton = false;
      break;

      case 47:
          console.log('pays'+pinNum);
          return buttonArray.paysBasButton = true,
          buttonArray.espagneButton = buttonArray.indeButton = buttonArray.danemarkButton = buttonArray.franceButton = buttonArray.royaumeUniButton = buttonArray.portugalButton = buttonArray.canadaButton = buttonArray.mexiqueButton = buttonArray.norvegeButton = buttonArray.VietnamButton = buttonArray.japonButton = buttonArray.greceButton = buttonArray.moyenOrientButton = buttonArray.espagneDButton = false;
      break;

      case 48:
          console.log('pays'+pinNum);
          return buttonArray.moyenOrientButton = true,
          buttonArray.espagneButton = buttonArray.indeButton = buttonArray.danemarkButton = buttonArray.franceButton = buttonArray.royaumeUniButton = buttonArray.portugalButton = buttonArray.paysBasButton = buttonArray.canadaButton = buttonArray.mexiqueButton = buttonArray.norvegeButton = buttonArray.VietnamButton = buttonArray.japonButton = buttonArray.greceButton = buttonArray.espagneDButton = false;
      break;

      case 49:
          console.log('pays'+pinNum);
          return buttonArray.franceButton = true,
          buttonArray.espagneButton = buttonArray.indeButton = buttonArray.danemarkButton = buttonArray.royaumeUniButton = buttonArray.portugalButton = buttonArray.paysBasButton = buttonArray.canadaButton = buttonArray.mexiqueButton = buttonArray.norvegeButton = buttonArray.VietnamButton = buttonArray.japonButton = buttonArray.greceButton = buttonArray.moyenOrientButton = buttonArray.espagneDButton = false;
      break;

      case 50:
          console.log('pays'+pinNum);
          return buttonArray.royaumeUniButton = true,
          buttonArray.espagneButton = buttonArray.indeButton = buttonArray.danemarkButton = buttonArray.franceButton = buttonArray.portugalButton = buttonArray.paysBasButton = buttonArray.canadaButton = buttonArray.mexiqueButton = buttonArray.norvegeButton = buttonArray.VietnamButton = buttonArray.japonButton = buttonArray.greceButton = buttonArray.moyenOrientButton = buttonArray.espagneDButton = false;
      break;

      case 51:
          console.log('pays'+pinNum);
          return buttonArray.canadaButton = true,
          buttonArray.espagneButton = buttonArray.indeButton = buttonArray.danemarkButton = buttonArray.franceButton = buttonArray.royaumeUniButton = buttonArray.portugalButton = buttonArray.paysBasButton = buttonArray.mexiqueButton = buttonArray.norvegeButton = buttonArray.VietnamButton = buttonArray.japonButton = buttonArray.greceButton = buttonArray.moyenOrientButton = buttonArray.espagneDButton = false;
      break;

      case 52:
          console.log('pays'+pinNum);
          return buttonArray.portugalButton = true,
          buttonArray.espagneButton = buttonArray.indeButton = buttonArray.danemarkButton = buttonArray.franceButton = buttonArray.royaumeUniButton = buttonArray.paysBasButton = buttonArray.canadaButton = buttonArray.mexiqueButton = buttonArray.norvegeButton = buttonArray.VietnamButton = buttonArray.japonButton = buttonArray.greceButton = buttonArray.moyenOrientButton = buttonArray.espagneDButton = false;
      break;

      case 53:
          console.log('pays'+pinNum);
          return buttonArray.danemarkButton = true,
          buttonArray.espagneButton = buttonArray.indeButton = buttonArray.franceButton = buttonArray.royaumeUniButton = buttonArray.portugalButton = buttonArray.paysBasButton = buttonArray.canadaButton = buttonArray.mexiqueButton = buttonArray.norvegeButton = buttonArray.VietnamButton = buttonArray.japonButton = buttonArray.greceButton = buttonArray.moyenOrientButton = buttonArray.espagneDButton = false;
      break;
    };
  });

  buttonsD.on('press', (button) => {
    var pinNum = button.pin;

    switch (pinNum) {
      case 8:
        console.log('pays'+pinNum);
        // Envoyer l'événement au front lorsque le bouton est appuié
        io.emit('songEspagne');
        return buttonArray.espagneDButton = true,
        buttonArray.espagneButton = buttonArray.indeButton = buttonArray.danemarkButton = buttonArray.franceButton = buttonArray.royaumeUniButton = buttonArray.portugalButton = buttonArray.paysBasButton = buttonArray.canadaButton = buttonArray.mexiqueButton = buttonArray.norvegeButton = buttonArray.VietnamButton = buttonArray.japonButton = buttonArray.greceButton = buttonArray.moyenOrientButton = false;
      break;

      case 9:
        console.log('pays'+pinNum);
        io.emit('songJapon');
        return buttonArray.japonButton = true,
        buttonArray.espagneButton = buttonArray.indeButton = buttonArray.danemarkButton = buttonArray.franceButton = buttonArray.royaumeUniButton = buttonArray.portugalButton = buttonArray.paysBasButton = buttonArray.canadaButton = buttonArray.mexiqueButton = buttonArray.norvegeButton = buttonArray.VietnamButton = buttonArray.greceButton = buttonArray.moyenOrientButton = buttonArray.espagneDButton = false;
      break;

      case 10:
        console.log('pays'+pinNum);
        io.emit('songGrece');
        return buttonArray.greceButton = true,
        buttonArray.espagneButton = buttonArray.indeButton = buttonArray.danemarkButton = buttonArray.franceButton = buttonArray.royaumeUniButton = buttonArray.portugalButton = buttonArray.paysBasButton = buttonArray.canadaButton = buttonArray.mexiqueButton = buttonArray.norvegeButton = buttonArray.VietnamButton = buttonArray.japonButton = buttonArray.moyenOrientButton = buttonArray.espagneDButton = false;
      break;

      case 11:
        console.log('pays'+pinNum);
        io.emit('songVietnam');
        return buttonArray.vietnamButton = true,
        buttonArray.espagneButton = buttonArray.indeButton = buttonArray.danemarkButton = buttonArray.franceButton = buttonArray.royaumeUniButton = buttonArray.portugalButton = buttonArray.paysBasButton = buttonArray.canadaButton = buttonArray.mexiqueButton = buttonArray.norvegeButton = buttonArray.japonButton = buttonArray.greceButton = buttonArray.moyenOrientButton = buttonArray.espagneDButton = false;
      break;

      case 12:
        console.log('pays'+pinNum);
        io.emit('songNorvege');
        return buttonArray.norvegeButton = true,
        buttonArray.espagneButton = buttonArray.indeButton = buttonArray.danemarkButton = buttonArray.franceButton = buttonArray.royaumeUniButton = buttonArray.portugalButton = buttonArray.paysBasButton = buttonArray.canadaButton = buttonArray.mexiqueButton = buttonArray.VietnamButton = buttonArray.japonButton = buttonArray.greceButton = buttonArray.moyenOrientButton = buttonArray.espagneDButton = false;
      break;
    };
  });
});
