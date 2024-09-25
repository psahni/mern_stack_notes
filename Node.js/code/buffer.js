const { Buffer } = require('buffer')

var EventEmitter = require('events');
var myEmitter = new EventEmitter();
console.log(myEmitter)


const memoryContainer = Buffer.alloc(4) // 4 bytes are allocated (8 bits)
memoryContainer[0]

const buff = Buffer.from("E0A49B", "hex"); // http://symbl.cc/en/unocode/table
console.log(buff)

console.log(this)

console.log("==>", __filename)