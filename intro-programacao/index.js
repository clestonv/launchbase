/* 
INICIANDO COM JAVASCRIPT
**/

const nome = 'Cleberson Osorio'
console.log(nome)

/* 
COMENTARIOS, STRINGS E NUMBERS
**/
// Criar um programa que calcula a média
// Dar notas entre os alunos e enviar
// mensagens de calculo da média

const nome1  = 'Cleberson'
const nome2 = 'Diego'
const nome3 = `Valeska ${nome2}`  // Usando template String
const idade = 31

console.log(nome3)
// Vai imprimir o tipo da variavel
console.log(typeof nome3)  // string
console.log(typeof idade)  // number

/* 
FAZENDO CALCULOS
**/

// Media
const aluno01 = 'Cleberson' // Nomes dos alunos
const aluno02 = 'Diego'
const aluno03 = 'Fulano'

const notaaluno01 = 9.8 // Notas dos alunos
const notaaluno02 = 10 
const notaaluno03 = 2

const media = (notaaluno01 + notaaluno02 + notaaluno03) / 3

console.log(media)

/*
CONDICIONAIS 
**/

// Se a media for maior que 5, parabenizar a turma
if(media > 5) {
    console.log(`A media foi de ${media} Parabens`)
} else {
    console.log(`A media é menor que 5`)
}

