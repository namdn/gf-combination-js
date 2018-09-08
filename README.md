# gf-combination-js
All combinations function for Array and Generator

Install with:
```
npm install gf-combination-js --save
```

## How to use?

See [sample.js](./sample.js)

## API

### Initialize

Before using, you have to import it in your project first

```js
const GF = require('gf-combination-js')
```
After that all functions is pluged-in to `Array` and `Generator` and you can use it any where.

### `Array.product(iterables, repeat = 1)` and `Array.iproduct(iterables, repeat = 1)`
Cartesian product of input iterables.
```js
console.log(
    Array.product([
        [1,2]
    ], 2)
);
//ouput: [ [ 1, 1 ], [ 1, 2 ], [ 2, 1 ], [ 2, 2 ] ]

console.log(
    Array.product([
        [1,2,3,4],
        ['a','b','c']
    ])
);
// [ [ 1, 'a' ],
//   [ 1, 'b' ],
//   [ 1, 'c' ],
//   [ 2, 'a' ],
//   [ 2, 'b' ],
//   [ 2, 'c' ],
//   [ 3, 'a' ],
//   [ 3, 'b' ],
//   [ 3, 'c' ],
//   [ 4, 'a' ],
//   [ 4, 'b' ],
//   [ 4, 'c' ] ]
```

two snippet codes are the same (so funny)
```js
let m = 5, n = 6, p = 7;
for(int i = 0; i < m; i++){
    for(int j = 0; j < n; j++){
        for(int k = 0; k < p; k++){
            //do something
        }
    }
}
```

```js
let m = 5, n = 6, p = 7;
for(let [i,j,k] of Array.iproduct([Array.range(m), Array.range(n), Array.range(p)])){
    //do someting
}
```

### `Array.prototype.ipermutations(iterable, [r])` and `Array.prototype.permutations(iterable, [r])`
Return successive r length permutations of elements in the iterable.
If r is not specified or is `Undefined`, then r defaults to the length of the iterable and all possible full-length permutations are generated.
```js
console.log(
    ['a','b','c','d'].permutations(3)
);
```
The display will be
```
[ [ 'a', 'b', 'c' ],
  [ 'a', 'b', 'd' ],
  [ 'a', 'c', 'b' ],
  [ 'a', 'c', 'd' ],
  [ 'a', 'd', 'b' ],
  [ 'a', 'd', 'c' ],
  [ 'b', 'a', 'c' ],
  [ 'b', 'a', 'd' ],
  [ 'b', 'c', 'a' ],
  [ 'b', 'c', 'd' ],
  [ 'b', 'd', 'a' ],
  [ 'b', 'd', 'c' ],
  [ 'c', 'a', 'b' ],
  [ 'c', 'a', 'd' ],
  [ 'c', 'b', 'a' ],
  [ 'c', 'b', 'd' ],
  [ 'c', 'd', 'a' ],
  [ 'c', 'd', 'b' ],
  [ 'd', 'a', 'b' ],
  [ 'd', 'a', 'c' ],
  [ 'd', 'b', 'a' ],
  [ 'd', 'b', 'c' ],
  [ 'd', 'c', 'a' ],
  [ 'd', 'c', 'b' ] ]
```

### `Array.prototype.icombinations(iterable, [r])` and `Array.prototype.combinations(iterable, [r])`
Return r length subsequences of elements from the input iterable.

Combinations are emitted in lexicographic sort order. So, if the input iterable is sorted, the combination tuples will be produced in sorted order.
```js
console.log(
    ['a','b','c','d'].combinations(2)
);
```
The display will be
```
[ [ 'a', 'b' ],
  [ 'a', 'c' ],
  [ 'a', 'd' ],
  [ 'b', 'c' ],
  [ 'b', 'd' ],
  [ 'c', 'd' ] ]
```
## License

  
[MIT](https://github.com/NodeRedis/node_redis/blob/master/LICENSE)