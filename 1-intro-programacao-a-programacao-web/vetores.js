// Vetores

const alunos = [
    {
        aluno: 'Maik',
        nota: 9.8
    },
    {
        aluno: 'Diego',
        nota: 10
    },
    {
        aluno: 'Fulano',
        nota: 2
    }
]

const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota ) / 3

const nomeAlunos = ['Maik','Diego','Fulano']

console.log(nomeAlunos[1])

console.log(`A media dos alunos é ${media.toFixed(2)}`)