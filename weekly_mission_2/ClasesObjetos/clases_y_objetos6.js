//  Ejemplo 6: Getters para acceder a los atributos del objeto

console.log("Ejemplo 6: Getters para acceder a los atributos del objeto");

class Ajolonauta {
    constructor(name, age, stack) {
        this.name = name
        this.age = age
        this.stack = stack
        this.exercisesCompleted = 0
        this.exercisesToDo = 99
    }

    get getExercisesCompleted() {
        return this.exercisesCompleted
    }
}

const woopa = new Ajolonauta("Woopa", 1, []);

console.log(woopa.getExercisesCompleted);