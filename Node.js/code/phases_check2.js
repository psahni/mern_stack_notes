setTimeout(() => console.log("Timer 1 finished"), 0); // It is expired right after the program is started, so it will run
setImmediate(() => console.log("Immediate 1 finished"));


// fs.readFile("test-file.txt", () => {
//   console.log("I/O finished");
//   console.log("----------------");
//   setTimeout(() => console.log("Timer 2 finished"), 0);
//   setTimeout(() => console.log("Timer 3 finished"), 3000);
//   setImmediate(() => console.log("Immediate 2 finished"));
//   process.nextTick(() => console.log("Process.nextTick"));
// });


console.log("Hello from the top-level code");

// Output
// Hello from top-level code

// Timer 1 finished
// Immediate 1 finished

// "I/O finished

// Process.nextTick
// Immediate 2 finished

// Timer 2 finished
// Timer 3 finished
