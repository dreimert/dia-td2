let zmq         = require('zeromq');
let producteurs = zmq.socket('pull')
let loggueur    = zmq.socket('push');

console.log("Lancement multi-pairs");

producteurs.on('message', function(valeur) {
  console.log("multi-pairs reçoit :", JSON.stringify(valeur));
  console.log("multi-pairs envoie :", JSON.stringify(valeur*2 - 1));
  loggueur.send(valeur*2 - 1);
});

producteurs.bindSync('tcp://*:5557');
loggueur.connect('tcp://localhost:5559');
