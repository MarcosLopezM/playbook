// Ejemplo 7: Setter para modificar los atributos del objeto

console.log("Ejemplo 7: Setter para modificar los atributos del objeto");

class missionCommander {
    constructor(name, mission) {
        this.name = name
        this.mission = mission
        this.students = 0
        this.lives = 0
    }

    get gestStudents() {
        return this.students
    }

    get getLives() {
        return this.lives
    }

    set setStudents(students) {
        this.students = students 
    }

    set setLives(lives) {
        this.lives = lives
    }
}

const missionCommanderNode = new missionCommander("Carlo", "NodeJS");

console.log(missionCommanderNode.gestStudents);
console.log(missionCommanderNode.getLives);

// Actualizamos los atributos por medio de los setters

missionCommanderNode.setStudents = 100;
missionCommanderNode.setLives = 3;
missionCommanderNode.getStudents = 0;
missionCommanderNode.getLives = 0;

console.log(missionCommanderNode.gestStudents);
console.log(missionCommanderNode.getLives);