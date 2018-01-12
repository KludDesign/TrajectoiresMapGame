# Brassage linguistique

Brassage linguistique est un module d'exposition scientifique composé d'une partie logiciel développée en Javascript qui pilote une partie hardware sous Arduino. La partie backend est développée sous Node.js et la partie frontend grâce à la bibliothèque jQuery.

Ce module d'exposition est un jeu interactif qui permet de mettre en avant l'origine linguistique de certains mots ou phrase. Le module est composé de deux jeux. Pour swicher de l'un à l'autre, il suffit de presser un bouton central servent de toogle. L'alumage des leds des bouton du jeu sélectionné sert de repère visuel. Présentation des deux jeux :
* Jeu 1 : Le visiteur est invité à appuier sur un des 9 boutons placés à gauche du pupitre, lorsqu'il entant la phrase il doit retrouver son origine géographique en clickant sur la carte interactive.
* Jeu 2 : Le visiteur est invité à appuier sur un des 5 boutons placés à droite du pupitre, lorsqu'il entant le mot, il doit retrouver son origine étymologique en clickant sur la carte interactive.

## Etapes d'installation software
### 1. Installation de Node.js
Installer la dernière version de [Node.js](https://nodejs.org/en/). Privilégier la version LTS qui assure une stabilité dans le temps. Pour vérifier si Node.js est bien installé, ouvrez l'invite de commande Windows et entres la commande suivante :
> node -v

### 2. Installation du logiciel
Pour installer le logiciel il suffit seulement de décompresser le dossier et de copier/coller le tout à l'endroit souhaité sur le disque.

### 3. Configuration du logiciel
* Ouvrir une invite de comande à la racine du dossier logiciel (accés rapide Ctrl+click droit/ouvrir la fenêtre de commande ici).
* NPM est le gestionnaire de package Node.js, il permet d'installer les dépendances du projet. Pour installer les dépendences, entrez la commande suivante : > npm install
* PM2 est un gestionnaire de node en mode production. Installer en entrant la commande suivante : > npm install pm2@latest -g



