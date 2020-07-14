const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views",{
    express:server,
    autoescape: false
})

server.get("/", function(req, res) { //criando rotas
    const about = {
        avatar_url: "https://media-exp1.licdn.com/dms/image/C4D03AQFNm0oqdJd6gg/profile-displayphoto-shrink_200_200/0?e=1600300800&v=beta&t=5PVtzkhwgfrU_-xF5KLIigaA9lPRwiqa6j6ARQRcc1o",
        name: "Cleberson Osorio",
        role: "QA - Senff",
        description: 'Programamador iniciante com foco em Full Stack. Colaborador na <a href="https://www.senff.com.br/" target="_blank">Senff</a>',
        links: [
            { name: "GitHub", url: "https://github.com/clestonv"},
            { name: "Instagram", url: "https://www.instagram.com/cleberson_osorio/"},
            { name: "LinkedIn", url: "https://www.linkedin.com/in/cleberson-osoriov/"}
        ]
    }
    return res.render("about", { about: about })
})

server.get("/portifolio", function(req, res) { //criando rotas
    return res.render("portifolio", { items: videos })
})

server.listen(5000, function() {
    console.log('Server is running')
})