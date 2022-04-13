// Ejemplo 12: Uso de find en una lista de objetos

console.log("Ejemplo 12: Usando find en una lista de objetos");

const scores = [
    { name: 'A', score: 95 },
    { name: 'M', score: 80 },
    { name: 'E', score: 50 },
    { name: 'M', score: 45 },
    { name: 'J', score: 100 },
]

const scoreLessThan80 = scores.find((user) => 
    user.score < 80
)

console.log(`Person's name with score less than 80: ${scoreLessThan80.name}`);