const fs = require('fs')
const data = require('./data.json')

// SHOW
exports.show = function(req, res) {
    // Desistruração retirando o ID
    const { id } = req.params
    
    const foundInstructors = data.instructors.find(function(instructor) {
        return instructor.id == id
    })

    if (!foundInstructors) return res.send("Instructor not found!!!")

    // Ajustar os dados
    const instructor = {
        ...foundInstructors,
        age: "",       
        services: foundInstructors.services.split(","),
        created_at: "",
    }
    
    return res.render('instructors/show', { instructor })
}

//post
exports.post = function (req, res) {

    // Validação dos Dados
    const keys = Object.keys(req.body)

    for(key of keys) {
        if (req.body[key] == "")
            return res.send('Please, fill all fields!')
    }

    //  DESISTRUTURAÇÃO
    let = { avatar_url, birth, name, services, gender } = req.body
    // TRATAMENTO DOS DADOS 
    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.instructors.length + 1)

    // ORGANIZANDO OS DADOS QUE EU QUERO ENVIAR    
    data.instructors.push({
        id,
        avatar_url,
        name,
        birth,    
        gender,                    
        services,
        created_at
    })
      
    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if (err) return res.send("Write file error!")

        return res.redirect("/instructors")
    })
   
}
//update

// delete