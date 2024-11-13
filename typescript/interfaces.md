### Types vs Interfaces

* Two ways of accompalishing the same thing

Interface decribe the object types

type Color = "red" | "blue" <- this can't be done with interfaces

extends keyword

interface Person extends Name {}

type Person = Name & {age: number}

1. Interface can only define Object Shapes (multiple inhertance)
2. Type can define any type (Basically a shorter way to define type), you can intersection and union them



