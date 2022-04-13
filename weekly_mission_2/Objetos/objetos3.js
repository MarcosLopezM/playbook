// Ejemplo 3: Objetos con diferentes propiedades

console.log("Ejemplo 3: Objetos con diferentes propiedades");

const object = {
    name: "Atreus",
    age: 1,
    nickname: [
        "Atreides",
        "Atreius",
        "Perrucho"
    ],
    address: {
        zipCode: "12345",
        street: "Calle de la luna",
        city: "México"
    }
}

console.log(object);
console.log(object.name);
console.log(object['address']);