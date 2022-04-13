// Ejemplo 5: Objeto que recibe parámetros

console.log("Ejemplo 5: Objeto que recibe parámetros");

const myPet = {
    name: "Fido",
    sayHelloToMyPet: function(yourPet) {
        console.log(`${this.name} says hello to ${yourPet}`);
    }
}

console.log(myPet.name);
myPet.sayHelloToMyPet("Atreus");