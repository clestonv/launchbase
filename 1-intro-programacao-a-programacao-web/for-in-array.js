const familia =[
    {
        nome: 'Cleberson',
        papel: 'Marido'
    },
    {
        nome: 'Thamires',
        papel: 'Mulher'
    },
    {
        nome: 'Igor',
        papel: 'Filho'
    },
    {
        nome: 'Alexandre',
        papel: 'Enteado'
    },
]

for (let pessoa in familia ) {
    console.log(familia[pessoa].papel)
}