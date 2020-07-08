const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
};

function createTransaction (type, value) {
    user.transactions.push({ type, value })
    if(type === 'credit') {
        user.balance += value 
    } else if(type == 'debit'){
        user.balance -= value
    }
}

createTransaction('credit', 50.5)
createTransaction('credit', 120.5)
createTransaction('debit', 20)

console.log(user)