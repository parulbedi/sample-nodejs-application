// 'use strict';

// const express = require('express');

// // Constants
// const PORT = 3000;
// const HOST = '0.0.0.0';

// // App
// const app = express();
// app.get('/', (req, res) => {
//   res.send('Hello Node.js Sample!\n');
// });

// const port = process.env.PORT||PORT;
// app.listen(port);
// console.log(`Running on http://${HOST}:${PORT}`);

var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello Node.js'); //write a response to the client
  res.end(); //end the response
}).listen(80); //the server object listens on port 80
