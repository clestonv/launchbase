// 1598400232956

function age(timestamp) {
    const today = new Date()
    const birthDate = new Date(timestamp)

    // Logica da Idade
    // 2019 - 1984 = 35
    const age = today.getFullYear() - birthDate.getFullYear()

    const month = today.getMonth() - birthDate.getMonth()

    today.getDate() //Pegando o dia atual
    birthDate.getDate() // Pegando a data do aniversário
    // 11 - 12 = -1
    // 11 - 11 = 0
    // Se Mês é menor que Zero ou Mês igual a Zero E DataAtual menor que DataAniversario
    if ( month < 0 || month == 0 && today.getDate() < birthDate.getDate()) {
        age = age - 1
    }

    return age 
}