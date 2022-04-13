// Ejemplo 11: Uso de find para encontrar el primer elemento de una lista que cumpla con lo que indiquemos.

console.log("Ejemplo 11: Usando find para encontrar elemento con ciertas características")

const ages = [24, 22, 19, 25, 32, 35, 18];
const olderThan20 = ages.find((age) => age < 20);

console.log(`Primera edad menor a 20 es: ${olderThan20}`);