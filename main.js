// EX1
let a = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100) + 1);
console.log("Array original:", a);
a.sort((a, b) => a - b);
console.log("Array ordenat:", a);
console.log('El primer número: ', a[0])
console.log("L'ultim número: ", a[a.length - 1])
