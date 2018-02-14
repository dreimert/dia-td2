# Dia : TD2

TD2 du cours de développement et déploiement d'applications distribuées.

L'objectif de ce TD est de développer un prototype d'application distribuées échangeant des données avec [ØMQ](http://zeromq.org/).

## Installation de node

Télécharger les binaires et les décompresser :

    wget https://nodejs.org/dist/v8.9.4/node-v8.9.4-linux-x64.tar.xz
    tar -xJvf node-v8.9.4-linux-x64.tar.xz

Mettre à jour votre PATH :

    echo "export PATH=$PATH:$(pwd)/node-v8.9.4-linux-x64/bin/" >> ~/.bashrc

Recharger vos variables d'environnement :

    . ~/.bashrc

Vérifier que node s'exécute bien :

    node --version

Vérifier que npm s'exécute bien :

    npm --version

## Protocole

[ØMQ](http://zeromq.org/) d'après [Wikipedia](https://fr.wikipedia.org/wiki/ZeroMQ) :

> ZeroMQ (également écrit ØMQ, 0MQ ou ZMQ) est une bibliothèque de messagerie asynchrone haute performance, destinée à être utilisée dans des applications distribuées ou concurrentes. Il fournit une file d'attente de messages, mais contrairement au Message-oriented middleware, un système ZeroMQ peut fonctionner sans message broker. L'API de la bibliothèque est conçue pour ressembler à celle des sockets BSD.

Prenez quelques minutes pour lire la préface, l'introduction du chapitre 1 puis survoler les exemples du guide de ØMQ : http://zguide.zeromq.org/page:all.


## Implémentation

Installation de l'implémentation node.js de ØMQ : https://github.com/zeromq/zeromq.js/

    npm install -S zeromq

Installation de nodemon :

    npm install -S nodemon

Mettre en place l'infrastructure suivante :

* 2 à n producteurs qui engendre un nombre entre 1 et 100 tous les secondes, l'affiche et l'envoie sur le réseau avec la contrainte suivante :
  * les nombres pairs vers un services qui les multiplie par 2 et soustrait 1
  * les nombres impaires vers un services qui les multiplie par 3
* un service qui affiche les résultats des opérations

Vous pouvez éditer les fichiers suivants :

* producteur.js
* routeur.js
* multi-pairs.js
* multi-impairs.js
* loggueur.js

## Test

Lancer chaque commandes dans un terminal diffèrent :

    npm run producteur
    npm run routeur
    npm run multi-pairs
    npm run multi-impairs
    npm run loggueur

Vos yeux.

## Par où commencer ?

Par lire Protocole ci-dessus et la doc.

## Ce que je dois retenir

Tout va plus vite avec les bonnes technologies. Manipuler des données est au coeur des applications distribuées et le découpage en micro-services peut faciliter le travail de développement et de montée en charge.

## Pour aller plus loin

Faites ça mais avec vos voisins. Imaginer des architectures plus complexes. Cherchez ce qu'est MapReduce et faites une implémentation avec ZeroMQ.
