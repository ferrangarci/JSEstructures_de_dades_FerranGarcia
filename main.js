// EX1
let a = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10) + 1);
console.log("Array original:", a);
a.sort((a, b) => a - b);
console.log("Array ordenat:", a);
console.log('El primer número: ', a[0])
console.log("L'ultim número: ", a[a.length - 1])


// EX2
let b = [1, 2, 3, ...a];
console.log("Nou array amb propagació:", b);

// EX3
let fusionat = [];
for (let valor of [...a, ...b]) {
    if (!fusionat.includes(valor)) {
        fusionat.push(valor);
    }
}
console.log("Array fusionat sense duplicats:", fusionat);