let zmq     = require('zeromq');
let workers = zmq.socket('pull');

console.log("Lancement loggueur");

workers.on('message', function(valeur) {
  console.log("loggueur reçoit :", valeur.toString());
});

workers.bindSync("tcp://*:5559");
