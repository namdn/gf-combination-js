var gf = require("./combinations");


let m = 5, n = 6, p = 7;
for(let [i,j,k] of Array.iproduct([Array.range(m), Array.range(n), Array.range(p)])){
    console.log(i,j,k);
}

console.log(
    Array.product([
        [1,2]
    ], 2)
);

console.log(
    Array.product([
        [1,2,3,4],
        ['a','b','c']
    ])
);



console.log(
    ['a','b','c','d'].permutations(3)
);

console.log(
    ['a','b','c','d'].combinations(2)
);
let m = 5, n = 6, p = 7;
for(let [i,j,k] of Array.iproduct([Array.irange(m), Array.irange(n), Array.irange(p)])){
    console.log(i,j,k);
    //do someting
}