// Ejemplo 10: Sobrescribiendo métodos 

console.log("Ejemplo 10: Overriding methods");

class explorer {
    constructor(name, username, mission) {
        this.name = name;
        this.username = username;
        this.mission = mission;
    }

    getNameAndUsername() {
        return `Explorer ${this.name}, username: ${this.username}`;
    }
}

class viajero extends explorer {
    constructor(name, username, mission, cycle) {
        // Llamamos al constructor de la clase padre con super
        super(name, username, mission)
        // Atributo propio de la clase hija
        this.cycle = cycle
    }

    getGeneralInfo() {
        // Llamamos el método de la clase padre
        let nameAndUsername = this.getNameAndUsername();
        return `${nameAndUsername}, ciclo: ${this.cycle}`;
    }
}

const viajero1 = new viajero('Marcos', 'MarcosLopezM', 'NodeJS', 'Abril 2022');
console.log(viajero1);
console.log(viajero1.getNameAndUsername()); // Método de la clase padre
console.log(viajero1.getGeneralInfo()); // Método de la clase hija