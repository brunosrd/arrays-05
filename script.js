//Exercicio 1
const prompt = require("prompt-sync")({ sigint: true });
const frutas = [];
for (let i = 0; i < 3; i++) {
  frutas.push(prompt("Digite o nome da fruta: "))
}

console.log(frutas[1]);

// Exercicio 2
for (let i = 0; i < 3; i++) {
  let fruta = prompt(`Digite a fruta ${i + 1}: `);
  frutas.push(fruta);
}

console.log(`A segunda fruta é: ${frutas[1]}`);

let novaFruta = prompt("Digite uma nova fruta: ");
frutas.push(novaFruta);
frutas.shift();

console.log(`O array atualizado é: ${frutas}`);

// Exercicio 3
for (let i=0; i<5; i++){
const addNum= prompt("Digite um numero: ")
numeros.push(addNum)
}
for(const numeros of numeros){
console.og(numeros);
}

// Exercicio 4
for (let i=0; i<5; i++){
const numero = parseInt(prompt(`Digite o ${i + 1} número:`))
}
for(let i=0; i<5; i++){
console.log(`O ${i + 1} número é ${numeros}[i]`)
}

const soma = numeros.reduce((acumulador, numeroAtual) =>{
return acumulador + numeroAtual
},0)

console.log("A soma dos numeros é: ", soma)

// Exercicio 5
const numerosOrdenados = numeros.slice().sort((numero1, numero2) => numero1 - numero2);

console.log(numerosOrdenados);

// Exercicio 6
const pares = numeros.filter(numeroAtual => numeroAtual % 2 === 0);

console.log(pares);
// Exercicio 7
const quadrados = numeros.map(numeroAtual => numeroAtual ** 2);
console.log("O array dos quadrados é ", )