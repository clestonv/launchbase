const express = require('express')
const server = express()

server.get("/", function(req, res) { //criando rotas
    return res.send("Hi!!! How's gooing")
})
server.listen(5000, function() {
    console.log('Server is running')
})