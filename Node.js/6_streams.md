### Streams

Streams are collections of data — just like arrays or strings. The difference is that streams might not be available all at once, and they don’t have to fit in memory. This makes streams really powerful when working with large amounts of data, or data that’s coming from an external source one chunk at a time.

However, streams are not only about working with big data. They also give us the power of composability in our code. Just like we can compose powerful linux commands by piping other smaller Linux commands, we can do exactly the same in Node with streams.


### Readable Streams
* HTTP req and res on client and server
* fs read streams
* zlib streams (zlib is compression library and data format, can be used on any os)
* TCP Sockets
* child process stdout and stderr
* process.stdin


### Writable Streams
* HTTP req and res on client and server
* fs write streams
* zlib streams (zlib is compression library and data format, can be used on any os)
* TCP Sockets
* child process stdin
* process.stdout, process.stderr

Some of these objects are both readable and writable streams, like TCP sockets, zlib and crypto streams.

* While an HTTP response is a readable stream on the client, it’s a writable stream on the server. This is because in the HTTP case, we basically read from one object (http.IncomingMessage) and write to the other (http.ServerResponse).

 * You can pipe stdio streams to main process.


```js
const fs = require('fs');
const file = fs.createWriteStream('./big.file');

for(let i=0; i<= 1e6; i++) {
  file.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n');
}

file.end();
```

* Running the above snippet will create a file named file.txt in your current directory with 20,000 lines of Hello world welcome to Node.js in it.

```js
const fs = require("fs");
const fileStream = fs.createReadStream("./file.txt");
fileStream
  .on("data", (data) => {
    console.log("Read data:", data.toString());
  })
  .on("end", () => { console.log("No more data."); });
```

Here, the data event handler will execute each time a chunk of data has been read, while the end event handler will execute once there is no more data.



---------------------------------------------------------------

#### When to use streams

Suppose you are reading a big file, with 1 mi rows, then instead of reading all at once, loading all the data in memory, you can create a stream and load data in chunks, so memory usage will low.


For example, consider Node.js streams a good choice if you are working on a `video conference/streaming` application that would require the transfer of data in smaller chunks to enable high-volume web streaming while avoiding network latency.


Examples of the stream object in Node.js can be a request to an HTTP server and process.stdout are both stream instances.

In short, Streams are objects in Node.js that lets the user read data from a source or write data to a destination in a continuous manner.

---------------------------------------------------------------

All streams are instances of `EventEmitter`. They emit events that can be used to read and write data. However, we can consume streams data in a simpler way using the pipe method.



### Stream Events

The events and functions are somehow related because they are usually used together.

#### The most important events on a readable stream are:

The "data" event, which is emitted whenever the stream passes a chunk of data to the consumer
The "end" event, which is emitted when there is no more data to be consumed from the stream.



```js
# readable.pipe(writable)

readable.on('data', (chunk) => {
  writable.write(chunk);
});

readable.on('end', () => {
  writable.end();
});
```

#### The most important events on a writable stream are:

The `drain` event, which is a signal that the writable stream can receive more data.
The `finish` event, which is emitted when all data has been flushed to the underlying system.

-------------------------------------------------------------------------------

You can use this script to gzip any file you pass as the argument. We’re piping a readable stream for that file into the zlib built-in transform stream and then into a writable stream for the new gzipped file. Simple.

The cool thing about using pipes is that we can actually combine them with events if we need to. Say, for example, I want the user to see a progress indicator while the script is working and a “Done” message when the script is done


```js
const fs = require('fs');
const zlib = require('zlib');
const file = process.argv[2];

fs.createReadStream(file)
  .pipe(zlib.createGzip())
  .on('data', () => process.stdout.write('.'))
  .pipe(fs.createWriteStream(file + '.zz'))
  .on('finish', () => console.log('Done'));
```

```js
const reportProgress = new Transform({
  transform(chunk, encoding, callback) {
    process.stdout.write('.');
    callback(null, chunk);
  }
});

..
.pipe(zlib.createGzip())
.pipe(reportProgress)
..
```


### Question - Convert all the data in one file to uppercase, and write to another file

```js
const fs = require("fs");
const { Transform } = require("stream");
const fileStream= fs.createReadStream("./file.txt");
const transformedData= fs.createWriteStream("./transformedData.txt");

const uppercase = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  },
});

fileStream.pipe(uppercase).pipe(transformedData);
```

Here, we create a new transform stream containing a function that expects three arguments: the first being the chunk of data, the second is encoding (which comes in handy if the chunk is a string), followed by a callback which gets called with the transformed results.

Running the above snippet will transform all the text in ./file.txt to uppercase then write it to transformedData.txt.


### References

https://www.freecodecamp.org/news/node-js-streams-everything-you-need-to-know-c9141306be93/
https://blog.logrocket.com/working-node-js-streams/#why-use-node-streams
https://nodesource.com/blog/understanding-streams-in-nodejs/
https://dev.to/idurar/a-guide-to-nodejs-streams-advanced-functionality-kf4