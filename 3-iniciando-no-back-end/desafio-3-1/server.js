const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.set("view","html")

nunjucks.configure("views", {
    express: server
})

server.get("/", function(req, res) { 
	return res.send("Hi Gyus!!")
})

server.listen(5000, function(){
    console.log('Server is Running!!')
})