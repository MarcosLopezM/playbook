// Ejemplo 4: Objeto con métodos

console.log("Ejemplo 4: Objeto con métodos");

const pet = {
    name: "Atreus",
    sayHello: function() {
        console.log(`${this.name} te saluda en español.`);
    }
}

console.log(pet.name);
pet.sayHello();