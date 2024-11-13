### type Alias

Instead of writing out object types in an annotation, we can declare
them separately in a type alias, which is simply a desired shape of the object.

Makes the code readable, and we can resuse the types.

```js

type Person = {
  name: string
}

type Point = {x: number, y: number}

let coordinate: Point = {x:3, y:2}

type myNum = number;

let age: myNum = 30;


```


### Read only keyword

type User {
  readonly id: number;
  username: string;
  val: int[]
}

const user: User = {
  id: 123,
  username: "psahni"
}

user.id = 3333 // Invalid

### Interaction type

type Circle = {radius: number}
type Color = {color: string}

const ColoredCircle = Circle & Colorful & {category: "shape"};


### Array types

let names: string[]= ["a", "b", "c"];
let ages: Array<number> = [23, 24, 25];


type Point = {
  x: number, 
  y: number
}

const coords: Point[] = []
coords.push({x: 23, y: 8})

### Union Types

let age: number | string = "23"
