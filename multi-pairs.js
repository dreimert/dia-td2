let zmq         = require('zeromq');
let producteurs = zmq.socket('pull')
let loggueur    = zmq.socket('push');

console.log("Lancement multi-pairs");
