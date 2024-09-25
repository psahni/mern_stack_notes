const fs = require("fs/promises")


async function watchFile() {
  const watcher = fs.watch("./");

  for await (const event of watcher) {
    console.log(event)
  }
}

watchFile()


// fs.watch( filename[, options][, listener] )


// fs.watchFile(filename[, options], listener)
// interval: It is an integer that specifies the time interval between each poll to the target. 
// It is specified in milliseconds. The default value is 5007.