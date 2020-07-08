const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
};

function createTransaction(type, value) {
    user.transactions.push({ type, value })
    if (type === 'credit') {
        user.balance += value
    } else if (type == 'debit') {
        user.balance -= value
    }
}


function getHigherTransactionByType(type) {
    let getHigherTransaction
    let maxValue = 0;
    for (let transaction of user.transactions) {
        if (transaction.type == type && transaction.value > maxValue) {
            maxValue = transaction.value
            getHigherTransaction = transaction
        }
    }
    return console.log(getHigherTransaction)
}

function getAverageTransactionValue() {
    let sum = 0;
    for(let transaction of user.transactions ) {
        sum += transaction.value
    }
    const average = sum / user.transactions.length
    return console.log(average)
}

function getTransactionsCount() {
    let count = {
        credit: 0,
        debit: 0,
    }
    
    for(let transaction of user.transactions ) {
        if(transaction.type === 'credit')
            count.credit++
        else
            count.debit++
    }
    return console.log(count)
}

createTransaction('credit', 50)
createTransaction('credit', 120)
createTransaction('debit', 80)
createTransaction('debit', 30)

console.log(user.balance)

getHigherTransactionByType('credit')
getHigherTransactionByType('debit')

getAverageTransactionValue()

getTransactionsCount()
