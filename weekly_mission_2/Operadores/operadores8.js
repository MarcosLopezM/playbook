// Ejemplo 8: Filtrando una lista por condicional

console.log("Ejemplo 8: Filtrando elementos por puntaje");

const scores = [
    { name: 'Alice', score: 95},
    { name: 'Victor', score: 98},
    { name: 'John', score: 80},
    { name: 'Paul', score: 50},
    { name: 'Nestor', score: 85},
    { name: 'Julia', score: 100}
]

const scoresGreaterThan80 = scores.filter((score) => 
    score.score > 80
)

console.log(scoresGreaterThan80);