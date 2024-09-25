Buffer objects are used to represent a fixed-length sequence of bytes. Many Node.js APIs support Buffers.

The Buffer class is a subclass of JavaScript's Uint8Array class and extends it with methods that cover additional use cases. Node.js APIs accept plain Uint8Arrays wherever Buffers are supported as well.


* Space in memory
* Quick move data
* Binary data
* Like Array



Use cases:

File I/O operations
Network operations (e.g., processing binary protocols)
Cryptography
Image processing
Working with binary files

Buffers is crucial for working with I/O operations, binary data processing, and optimizing performance in Node.js applications. They provide a way to work directly with memory in a manner that's more efficient than JavaScript's native objects for certain types of operations.


Unsafe Buffer
`Buffer.alloc(size, fill, encoding)` -> returns a new initialized Buffer of the specified size. This method is slower than Buffer.allocUnsafe(size) but guarantees that newly created Buffer instances never contain old data that is potentially sensitive.

`Buffer.allocUnsafe(size)` -> the Buffer is uninitialized, the allocated segment of memory might contain old data that is potentially sensitive. Using a Buffer created by Buffer.allocUnsafe() without completely overwriting the memory can allow this old data to be leaked when the Buffer memory is read.


```js
// Result Size: 1052 x 857
var buf = Buffer.allocUnsafe(15); // Creates a non-zero-filled Buffer of the specified length
/*The value of an unsafe buffer is not emptied, and can contain data from older buffers*/
console.log(buf);

<Buffer 02 00 00 00 a7 01 00 00 10 53 49 90 02 a7 01>
```

```js
var buf = Buffer.alloc(15); // Creates a Buffer object of the specified length
console.log(buf);
<Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>
```