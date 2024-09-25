const fs = require('node:fs');
function someAsyncOperation(callback) {
  // Assume this takes 95ms to complete
  console.log("2. Going to read file..")
  fs.readFile('/path/to/file', callback);
}

console.log("1. Recording the time..")
const timeoutScheduled = Date.now();

setTimeout(() => {
  console.log("4. setTimeout()")
  const delay = Date.now() - timeoutScheduled;
  console.log(`${delay}ms have passed since I was scheduled`);
}, 100);

someAsyncOperation(() => {
  console.log("3. someAsyncOperation()")
  const startCallback = Date.now();
  while (Date.now() - startCallback < 10) {
  }
});

