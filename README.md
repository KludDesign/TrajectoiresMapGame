# Brassage linguistique

Brassage linguistique est un module d'exposition scientifique composé d'une partie logiciel développée en Javascript qui pilote une partie hardware sous Arduino. La partie backend est développée sous Node.js et la partie frontend grâce à la bibliothèque jQuery.

Ce module d'exposition est un jeu interactif qui permet de mettre en avant l'origine linguistique de certains mots ou phrase. Le module est composé de deux jeux. Pour swicher de l'un à l'autre, il suffit de presser un bouton central servent de toogle. L'allumage des leds des boutons du jeu sélectionné sert de repère visuel. Présentation des deux jeux :
* Jeu 1 : Le visiteur est invité à appuyer sur un des 9 boutons placés à gauche du pupitre, lorsqu'il entend la phrase il doit retrouver son origine géographique en cliquant sur la carte interactive.
* Jeu 2 : Le visiteur est invité à appuyer sur un des 5 boutons placés à droite du pupitre, lorsqu'il entend le mot, il doit retrouver son origine étymologique en cliquant sur la carte interactive.

## Etapes d'installation software
### 1. Installation de Node.js
Installer la dernière version de [Node.js](https://nodejs.org/en/). Privilégier la version LTS qui assure une stabilité dans le temps. Pour vérifier si Node.js est bien installé, ouvrez l'invite de commande Windows et entrer la commande suivante :
> $ node -v

### 2. Installation du logiciel
Pour installer le logiciel il suffit seulement de décompresser le dossier et copier/coller le tout à l'endroit souhaité sur le disque.

### 3. Configuration du logiciel
* Ouvrir une invite de commande à la racine du dossier logiciel (accès rapide Ctrl+click droit/ouvrir la fenêtre de commande ici).
* NPM est le gestionnaire de package Node.js, il permet d'installer les dépendances du projet. Pour installer les dépendances, entrer la commande suivante : 
> $ npm install
* PM2 est un gestionnaire de node en mode production (plus d'infos sur [cette page](https://www.npmjs.com/package/pm2)). Installer PM2 en entrant la commande suivante : 
> $ npm install pm2@latest -g
* Démarrer l'application avec la commande suivante :
> $ pm2 start server.js
* Vérifier si le serveur est lancé en allant sur la page http://localhost:8080/. Si le serveur est lancé, la carte interactive devrait s'afficher à l'écran, sinon, il faut vérifier que toutes les étapes précédentes sont bien respectées. Pour vérifier si PM2 a bien démarré le serveur, entrer la commande suivante :
> $ pm2 list
* Si tout est ok il faut configurer PM2 pour que l'application boot à chaque redémarrage. Pour cela il faut configurer PM2 pour qu'il détecte l'OS utilisé :
> $ pm2 startup  
* Puis enregistrer la liste du processus :
> $ pm2 save 



