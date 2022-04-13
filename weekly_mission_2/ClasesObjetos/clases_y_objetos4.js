// Ejemplo 4: Métodos en los objetos

console.log("Ejemplo 4: Métodos en los objetos");

class Repository {
    constructor(name, author, language, stars) {
        this.name = name
        this.author = author
        this.language = language
        this.stars = stars
    }

    getInfo() {
        return `Repository ${this.name} has ${this.stars} stars`
    }
}

const myRepo = new Repository("LaunchX", "MarcosLopezM", "JavaScript", 2);

console.log(myRepo.getInfo());