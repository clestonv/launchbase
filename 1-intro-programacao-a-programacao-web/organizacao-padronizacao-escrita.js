const classA = [
    {
        name: 'Mayk',
        grade: 9.8
    },
    {
        name: 'Diego',
        grade: 3
    },
    {
        name: 'Fulano',
        grade: 2
    },
    {
        name: 'Jose',
        grade: 10
    }
]

const classB = [
    {
        name: 'Cleiton',
        grade: 10,
    },
    {
        name: 'Robson',
        grade: 10,
    },
    {
        name: 'Siclano',
        grade: 2,
    }
]


function calculateAverage(student) {
    let sum = 0;

    for (let i = 0; i < student.length; i++) {
        sum = sum + student[i].grade
    }

    return avarege = sum / student.length
}

function sendMessage(avarege, turma) {
    if (avarege > 5) {
        console.log(`${turma} avarage: ${avarege.toFixed(2)} Congrats!`)
    } else {
        console.log(`${turma} avarage: ${avarege.toFixed(2)}. Is not good`)
    }
}

function markAsFlunked(student) {
    student.flunked = false

    if (student.grade < 5) {
        student.flunked = true
    }
}

function sendMessageflunked(student) {
    if (student.flunked) {
        console.log(`o student ${student.name} está flunked!`)
    }
}

function studentsflunked(students) {
    for (let student of students) {
        markAsFlunked(student)
        sendMessageflunked(student)
    }
}

const avarege1 = calculateAverage(classA)
const avarege2 = calculateAverage(classB)

sendMessage(avarege1, 'ClassA')
sendMessage(avarege2, 'ClassB')

studentsflunked(classA)
studentsflunked(classB)