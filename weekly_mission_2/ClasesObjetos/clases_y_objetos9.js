// Ejemplo 9: Herencia entre dos clases

console.log("Ejemplo 9: Herencia entre dos clases");

class Developer {
    constructor(name, mainLang, stack) {
        this.name = name
        this.mainLang = mainLang
        this.stack = stack
    }

    getName() {
        return this.name;
    }
}

const marcosDev = new Developer("Marcos", "JavaScript", ["elixir", "groovy", "lisp"]);
console.log(marcosDev);

/*
    Se usa la palabra extends para indicar que se heredará las propiedades
    de la clase padre (Developer) en la clase definida, i.e., la clase hija.

    Podemos definir una clase vacía y reusar todos los componentes de la clase padre.
*/

class launchXStudent extends Developer { }

const marcosLaunchXDev = new launchXStudent("Marcos", "JavaScript", ["elixir", "groovy", "lisp"]);
console.log(marcosLaunchXDev);
console.log(marcosLaunchXDev.getName()); // Getter de la clase padre reusada en la clase hija
