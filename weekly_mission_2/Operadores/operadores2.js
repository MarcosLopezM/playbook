// Ejemplo 2: for Each para calcular la suma de de todos los elementos de una lista

console.log("Ejemplo 2: Cálculo de la suma de los elementos de una lista");

let sum = 0;
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(number => sum += number);
console.log(sum);

// Otra forma de lograr la misma operación 

// numbers.forEach(function(number) {
//     sum += number;
// })
// console.log(sum);