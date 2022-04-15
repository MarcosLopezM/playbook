// Ejercicio 1: Modelando con objetos

// Ejemplo: Modelando información de GitHub

console.log("Ejemplo: Modelando información de GitHub");

const repository = {
    name: "LaunchX",
    author: "MarcosLopezM",
    language: "JavaScript",
    numberOfCommits: "74",
    stars: 10,
    forks: 15,
    issuesOpen: 50,
    issuesClosed: 3,
    getTotalIssues: function () {
        return this.issuesOpen + this.issuesClosed;
    },
    getGeneralInfo: function () {
        return `This repository ${this.name} was create by ${this.author} and it has ${this.stars} stars.`;
    }
}

console.log(`Nombre del repositorio: ${repository.name}`);
console.log(`Issues totales: ${repository.getTotalIssues()}`);
console.log(repository.getGeneralInfo());