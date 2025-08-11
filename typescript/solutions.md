```js
interface DynamicObj {
  id: number;
  [key: string]: any;
}

var obj: DynamicObj = { id: 1 };

obj.name = "Prashant";

console.log(obj);
```

```js
interface DynamicObj2 extends Record<string, any> {
  id: number;
}

var obj2: DynamicObj2 = { id: 1 };

obj2.name = "PS";

console.log(obj2);
```
