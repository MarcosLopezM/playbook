/* 
    Ejemplo 13: Uso de findIndex.
    Este método regresa la posición del primer elemento que cumpla con la
    validación que indiquemos. 
*/ 

console.log("Ejemplo 13: Usando findIndex");

const names = ['Explorer 1', 'Explorer 2', 'Explorer 3'];
const namesWithCertainLength = names.findIndex(
    (name) => name.length > 7
)

console.log(`Primer elemento cuya longitud es mayor que 7: ${namesWithCertainLength}`);