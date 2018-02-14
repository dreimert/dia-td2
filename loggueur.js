let zmq     = require('zeromq');
let workers = zmq.socket('pull');

console.log("Lancement loggueur");
