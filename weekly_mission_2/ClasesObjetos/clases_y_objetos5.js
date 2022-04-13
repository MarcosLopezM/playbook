//  Ejemplo 5: Atributos con valores por defecto

console.log("Ejemplo 5: Atributos con valores por defecto");

class pullRequest {
    constructor(repository, title, linesChanged) {
        this.repository = repository
        this.title = title
        this.linesChanged = linesChanged
        this.status = "OPEN"
        this.dataCreated = new Date()
    }

    getInfo() {
        return `This PR is in the repository ${this.repository} (status: ${this.status}) and was created on ${this.dataCreated}`;
    }
}

const firstPR = new pullRequest("LaunchX", "Mi primera PR", 5);
const secondPR = new pullRequest("LaunchX", "Mi segunda PR", 500);

console.log(firstPR.getInfo());
console.log(secondPR.getInfo());