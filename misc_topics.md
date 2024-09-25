Both exports.functionName and module.exports can be used to make a function available outside a module in Node.js.

The fs.existsSync method is used to check if a file exists in Node.js.

The fs.readFileSync method reads a file synchronously and returns the content as a buffer.

Buffer.alloc initializes the buffer with zeros, while Buffer.allocUnsafe does not for performance reasons.

If a readable stream is not emitting data, checking the stream's state (flowing or paused) is essential.

The 'request' event is emitted when the server receives an HTTP request.

The response.writeHead() method is used to set the status code and headers for the response.


The response.end() method can be used to send the response body and signal that the response is complete.

const body = 'hello world';
 
// Calling response.writeHead method 
response.writeHead(200,
    {
        'Content-Length':
            Buffer.byteLength(body),
        'Content-Type':
            'text/plain'
    });

response.end(body);

Error-handling middleware is defined using app.use(), with four arguments: (err, req, res, next).


app.use((err, req, res, next) => { console.error(err.stack); res.status(500).send('Something broke!'); })
Error-handling middleware in Express.js must have four arguments: (err, req, res, next).


The res.json() method is used to send a JSON response in Express.js.

The mongoose.set('debug', true) method enables detailed logging of database queries, which helps in debugging.

passport.initialize() middleware is used to initialize Passport.js in an Express.js application.
Winston is a popular logging library used for logging errors in Node.js applications.



The process.on('uncaughtException', callback) event is used to handle uncaught exceptions in Node.js applications.
Profiling is used to analyze the performance of a Node.js application to identify bottlenecks and optimize the code.


The inspector module is used for debugging Node.js applications.


The V8 profiler is used to profile the execution of JavaScript code in Node.js.


The node --prof command is used to capture a CPU profile in Node.js.


Heap snapshots can be used to debug memory leaks by capturing the memory usage of objects in a Node.js application.


PM2 is a process manager used to manage and keep Node.js applications running.


The pm2 start command is used to start a Node.js application with PM2.

The process.argv property returns an array containing command-line arguments passed to the Node.js process.