// EX1
let a = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10) + 1);
console.log("Array original:", a);
a.sort((a, b) => a - b);
console.log("Array ordenat:", a);
console.log('El primer número: ', a[0])
console.log("L'ultim número: ", a[a.length - 1])

console.log("===========================")

// EX2
let b = [1, 2, 3, ...a];
console.log("Nou array amb propagació:", b);

console.log("===========================")

// EX3
let fusionat = [];
for (let valor of [...a, ...b]) {
    if (!fusionat.includes(valor)) {
        fusionat.push(valor);
    }
}
console.log("Array fusionat sense duplicats:", fusionat);

console.log("===========================")

// EX4

let arrayUnic = [...new Set(a.concat(b))];
console.log("Array amb Set (sense duplicats):", arrayUnic);

console.log("===========================")

// EX5

let nums = [1, 3, 6];
let cubs = nums.map(num => Math.pow(num, 3));
console.log("Array amb cubs:", cubs);

console.log("===========================")

// EX6

let paraules = ["hola", "casa", "sol", "palabra", "amarillo"];
let ambMoltaA = paraules.filter(p => (p.match(/a/g) || []).length > 1);
console.log("Paraules amb més d'una 'a':", ambMoltaA);

console.log("===========================")
