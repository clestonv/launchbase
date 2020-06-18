/*=================================
Verificar se a pessoa é maior igual que 18 anos
Se sim, deixar entrar, senão bloquear a entrada
===================================*/

const idade = 12 // Declarando idade
// if (idade > 18 ) {
//     console.log('Deixar entrar')
// } else {
//     console.log('Bloquear a entrada')
// }

/*====================================
Se a pessoa tiver 17 anos avisar para voltar
quando fizer 18 anos
======================================*/

// if (idade === 17 ) {
//     console.log(`Voce tem ${idade} volte quando tiver 18 anos`)
// }

//REFATORANDO

if ( !(idade >=18) || idade === 17) {
    console.log('Bloquear a entrada')
} else {
    console.log('Deixa entrar')
}