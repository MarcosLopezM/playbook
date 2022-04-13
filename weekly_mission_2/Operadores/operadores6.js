// Ejemplo 6: Uso de map para imprimir los primeros tres caracteres de cada elemento de una lista

console.log("Ejemplo 6: Imprimiendo los primeros tres caracteres en mayúscula de cada elemento de una lista");

const countries = ["México", "España", "Colombia", "Perú", "Argentina"];
const countriesThreeFirstLetters = countries.map((country) => 
    country.toUpperCase().slice(0, 3)
)

// const countriesThreeFirstLetters = countries.map(function(country) {
//     return country.toUpperCase().slice(0, 3);
// })


console.log(countriesThreeFirstLetters)