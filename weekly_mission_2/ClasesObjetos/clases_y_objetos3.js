// Ejemplo 3: Instanciar un objeto con atributos

console.log("Ejemplo 3: Instanciar un objeto con atributos");

class Student {
    constructor(name, age, subjects) {
        this.name =  name
        this.age = age 
        this.subjects = subjects 
    }
}

const studentMarcos = new Student("Marcos", 22, ["NodeJS", "JavaScript"])

console.log(studentMarcos);