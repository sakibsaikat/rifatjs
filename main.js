console.warn("Hello World");

let set1 = new Set([1,2,3]);

console.log(set1);
set1.add(5);
set1.add(8);
set1.add(9);

set1.delete(2);

console.log(set1);
console.log(set1.has(9));
console.log(set1.values());
let sum=0;

set1.forEach(function(value){
    console.log(value);
    sum+=value;

});

console.log(sum);


