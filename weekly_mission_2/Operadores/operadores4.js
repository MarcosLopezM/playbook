/* 
    Ejemplo 4: Uso de map para recorrer los elementos de una lista y
    crear una nueva lista.

    Arrow function and explicit return

    const modifiedArray = arr.map((element, index) => element);
*/

console.log("Ejemplo 4: Imprimiendo lista de elementos al cuadrado");

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(function(number) { return number * number});
// const squaredNumbers = numbers.map(number => return number * number);

console.log(squaredNumbers);