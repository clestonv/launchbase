const programador = {
    nome: 'Cleberson',
    idade: 31,
    tecnologias: [
        { nome: 'C++', especialidade: 'Desktop' },
        { nome: 'Pyton', especialidade: 'Data Science' },
        { nome: 'JavaScript', especialidade: 'Web/Mobile' }
    ]
}

console.log(`O Usuario ${programador.nome} tem ${programador.idade} anos e usa  a tecnologia ${programador.tecnologias[2].nome} com especialidade em ${programador.tecnologias[2].especialidade} `)