//  Ejercicio 2: Modelando con objetos

const explorers = [
    {
        name: "Explorer 1",
        exerciseCompleted: 10,
        rate: 99,
        city: "CDMX",
        stack: [
            "js",
            "c#"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exerciseFinished: true
            },
            frontEnd: {
                isFinished: true,
                exerciseFinished: true
            }
        }
    },
    {
        name: "Explorer 2",
        exerciseCompleted: 9,
        city: "Veracruz",
        rate: 50,
        stack: [
            "js"
        ],
        missions: {
            onboarding: {
                isFinished: false,
                exerciseFinished: false
            },
            frontEnd: {
                isFinished: false,
                exerciseFinished: false
            }
        }
    },
    {
        name: "Explorer 3",
        exerciseCompleted: 3,
        city: "Sonora",
        rate: 100,
        stack: [
            "elixir"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exerciseFinished: true
            },
            frontEnd: {
                isFinished: false,
                exerciseFinished: false
            }
        }
    }
]

/*
    Ejercicio 2.1: Imprime el nombre (propiedad name) de cada
    explorer en la lista.
    Usa forEach.
*/

console.log("Explorers' names");
explorers.forEach(function(explorer) {
    console.log(explorer.name);
})
console.log("---------------------------------");

/*
    Ejercicio 2.2: Imprime el stack de cada explorer.
    Usa forEach.
*/

console.log("Explorers' stacks");
explorers.forEach(function(explorer) {
    console.log(explorer.stack);
})
console.log("---------------------------------");

/*
    Ejercicio 2.3: Crea una nueva lista con las listas
    de stacks de cada explorer.
    Usa map.
*/

console.log("List of explorers' stacks");
const listOfStacks = explorers.map(function(explorer) {
    return explorer.stack;
})
console.log(listOfStacks);
console.log("---------------------------------");

/*
    Ejercicio 2.4: Obtén la lista de explorers que
    tengan en "js".
    Usa filter (para validar un elemento en una lista
        se usa el método includes).
*/

console.log("Explorers with 'js' in their stack");
explorers.filter(function(explorer) {
    if (explorer.stack.includes("js")) {
        console.log(explorer.name);
    }
})
console.log("---------------------------------");