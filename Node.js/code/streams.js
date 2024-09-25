const fs = require('fs')
const server = require('http').createServer()

// server.on('request', (req, res) => {
//   fs.readFile('file.txt', (err, data) => {
//     if (err) console.log(err);
//     res.end(data);
//   })
// })

// server.on('request', (req, res) => {
//   const readable = fs.createReadStream('file1.txt');
//   readable.on('data', chunk => {
//     res.write(chunk) // response is writable stream
//   });

//   readable.on('end', () => {
//     res.end();
//   });

//   readable.on('error', err => {
//     console.log(err);
//     res.statusCode = 500;
//     res.end('File not found!');
//   });
// });

server.on('request', (req, res) => {
  const readable = fs.createReadStream('file.txt');
  readable.pipe(res);
  // Here producer matches the speed of the consumer, both should be in sync
  // else it will lead to problem of back crasher
});

server.listen(8001, "127.0.0.1", () => {
  console.log("Listening...")
});



