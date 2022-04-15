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
        return `This repository ${this.name} was created by ${this.author} and it has ${this.stars} stars.`;
    }
}

console.log(`Nombre del repositorio: ${repository.name}`);
console.log(`Issues totales: ${repository.getTotalIssues()}`);
console.log(repository.getGeneralInfo());

const issue = {
    title: "Issue 1",
    repositoryNameAssociated: "MissionNodeJS",
    status: "Open",
    numberOfComments: 2,
    labels: ["bug", "performance"],
    author: "MarcosLopezM",
    dateCreated: "14/04/2022",
    lastUpdated: "14/04/2022",

    getTitleAndName: function () {
        return `The issue ${this.title} was created by ${this.author}.`;
    },

    getGeneralInfo: function () {
        return `The issue was ${this.status} in the repository ${this.repositoryNameAssociated} with labels ${this.labels[0]} and ${this.labels[1]}.`;
    }    
}

console.log(`This issue was created on ${issue.dateCreated} and last updated on ${issue.lastUpdated}`);
console.log(issue.getTitleAndName());
console.log(issue.getGeneralInfo());

const pullRequest = {
    title: "First Pull Request",
    branchName: "main",
    dateCreated: "14/04/2022",
    status: "Open",
    repositoryNameAssociated: "MissionNodeJS",

    getStatus: function () {
        return `The pull request's status is ${this.status}.`;
    },

    getTitleAndAuthor: function () {
        return `The pull request ${this.title} was created by ${this.author}.`;
    }
}

console.log(`This pull request was created on ${pullRequest.dateCreated}.`);
console.log(pullRequest.getStatus());
console.log(pullRequest.getTitleAndAuthor());