/* 
    Ejemplo 10: Uso de every nos ayuda a validar todos los elementos de una lista,
    si todos cumplen con la validación que indiquemos regresa true, de lo contrario regresa false.
*/

console.log("Ejemplo 10: Uso de every");

const names = ["Juan", "Pedro", "Maria", "Ana", "Luis"];
const areAllStr = names.every(
    (name) => typeof name === "string"
)

console.log(`Todos los nombres son string: ${areAllStr}`);