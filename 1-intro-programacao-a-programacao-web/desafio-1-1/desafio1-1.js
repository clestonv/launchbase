/*===========================================================

Cálculo de IMC

Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.

============================================================*/

const nome = 'Alexandre';
const peso = 120;
const altura = 1.88;
const sexo = 'M';

const imc = peso / (altura * altura)

console.log('Resultado do IMC é '+ imc)
if( !(imc >= 30) || imc < 29.9) {
    console.log(`${nome} voce não está acima do peso`)
} else {
    console.log(`${nome} voce está acima do peso !!!`)
}