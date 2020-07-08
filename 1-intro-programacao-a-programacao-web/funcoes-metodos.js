// Objetos

const alunosDaTurmaA = [
    {
        nome: 'Mayk',
        nota: 9.8
    },
    {
        nome: 'Diego',
        nota: 3
    },
    {
        nome: 'Fulano',
        nota: 2
    }
]

const alunosDaTurmaB = [
    {
        nome: 'Cleiton',
        nota: 10
    },
    {
        nome: 'Robson',
        nota: 10
    },
    {
        nome: 'Siclano',
        nota: 2
    }
]


function calculaMedia(aluno) {
    return (aluno[0].nota + aluno[1].nota + aluno[2].nota) / 3
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 =  calculaMedia(alunosDaTurmaB)

function enviaMensagem(media, turma) {
    //Se a média for maior que 5
    if(media > 5) {
        console.log(`A media da ${turma} foi de ${media.toFixed(2)} Parabéns!`)
    } else {
        console.log(`A média da ${turma} foi de ${media.toFixed(2)} é menor que 5. Estude Mais!`)
    }
}

enviaMensagem(media1, 'turmaA')
enviaMensagem(media2, 'turmaB')




