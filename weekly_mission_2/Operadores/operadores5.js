// Ejemplo 5: Uso de map para convertir todos los nombres de una lista a minúsculas

console.log("Ejemplo 5: Imprimiendo la lista de elementos en minúsculas");

const names = ["Juan", "Pedro", "María", "Ana", "José"];
const lowerCaseNames = names.map(function(name) { return name.toLowerCase()});

console.log(lowerCaseNames);