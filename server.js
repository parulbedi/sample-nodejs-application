'use strict';

const express = require('express');
const os = require('os');

// Constants
const PORT = 3000;
const HOST = os.networkInterfaces().eth0[0].address;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello Node.js');
});

const port = process.env.PORT||PORT;
app.listen(port);
console.log(`Running on http://${HOST}:${PORT}`);
module.exports = port;




// // Start the server
// const server = app.listen(PORT, HOST, () => {
//   console.log(`Server running on http://${HOST}:${PORT}`);
// });

// // Export the server for `pm2`
// module.exports = server;






// var http = require('http');

// //create a server object:
// http.createServer(function (req, res) {
//   res.write('Hello Node.js'); //write a response to the client
//   res.end(); //end the response
// }).listen(80); //the server object listens on port 80
