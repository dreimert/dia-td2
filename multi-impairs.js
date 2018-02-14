let zmq         = require('zeromq');
let producteurs = zmq.socket('pull')
let loggueur    = zmq.socket('push');

console.log("Lancement multi-impairs");

producteurs.on('message', function(valeur) {
  console.log("multi-impairs reçoit :", JSON.stringify(valeur));
  console.log("multi-impairs envoie :", JSON.stringify(valeur*3));
  loggueur.send(valeur*3);
});

producteurs.bindSync('tcp://*:5558');
loggueur.connect('tcp://localhost:5559');
