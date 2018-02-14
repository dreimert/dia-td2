let zmq = require('zeromq');
let pairs = zmq.socket('push');
let impairs = zmq.socket('push');

console.log("Lancement producteur");

pairs.connect('tcp://localhost:5557');
impairs.connect('tcp://localhost:5558');

let generateEntier = function() {
  return Math.round(Math.random() * 100)
}

setInterval(function() {
  const valeur = generateEntier();
  console.log("valeur :", valeur);
  if(valeur % 2 === 0) {
    pairs.send(valeur);
  } else {
    impairs.send(valeur);
  }
}, 1000);
