require => common js
import => ES

### Sequence

1st
require
Resolve and load
wrapping

2nd
execution
returning exports
caching

#### Meaning
require => exports of the required module
module.exports => retutn object

module.exports = Calculator // function or class


require("./module-file.js")
require("./module-file.js")
require("./module-file.js")

It will be cached, and the code will only be executed once.
