// Ejemplo 9: Uso del reduce

console.log("Ejemplo 9: Uso de reduce para calcular la suma de los elementos de una lista");

const numbers = [1, 2, 3, 4, 5];
const resultOfReduce = numbers.reduce(
    (acc, element) => acc + element, 0
    // (accumulator/lastValue, currentValue) => accumulator + currentValue, initial Value
)

console.log(resultOfReduce);