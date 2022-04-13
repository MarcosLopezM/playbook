// Ejemplo 7: Uso de filter para filtrar una lista de elementos

console.log("Ejemplo 7: Uso de filter para filtrar una lista de elementos");

const countries = ["Finland", "Denmark", "Norway", "Sweden", "Iceland", "Greenland"];
const countriesContainingLand = countries.filter((country) => 
    country.includes('land')
)
const countriesEndingWith = countries.filter((country) => 
    country.endsWith('ia')
)

console.log("Países que contienen 'land'");
console.log(countriesContainingLand);
console.log("");
console.log("Países que terminan en 'ia'");
console.log(countriesEndingWith);