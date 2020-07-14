const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views",{
    express:server
})

server.get("/", function(req, res) { //criando rotas
    return res.render("about")
})

server.get("/portifolio", function(req, res) { //criando rotas
    return res.render("portifolio")
})

server.listen(5000, function() {
    console.log('Server is running')
})