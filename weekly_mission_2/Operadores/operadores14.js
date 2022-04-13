/*
    Ejemplo 14: Uso de some.

    Este método validará todos los elementos de la lista, y
    si alguno cumple con la validación indicada, 
    regresará true, de lo contrario será false.
*/

console.log("Ejemplo 14: Usando some");

const booleans = [true, false, true, true];
const areSomeTrue = booleans.some(
    (boolean) => boolean === false
)

console.log(`Alguno de los elementos de la lista son false: ${areSomeTrue}`);