const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const cursos = require("./data")

server.set("view engine","njk")

server.use(express.static('public')) 

nunjucks.configure("views", {
    express: server
})

server.get("/", function(req, res) { 
	return res.render("about")
})

server.get("/content", function(req, res) { 
	return res.render("content", { items: cursos })
})

server.use(function(req, res) {
    res.status(404).render("not-found");
  });

server.listen(5000, function(){
    console.log('Server is Running!!')
})