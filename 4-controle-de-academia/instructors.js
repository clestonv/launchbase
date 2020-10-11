const fs = require('fs')
const data = require('./data.json')
const { age, date } = require('./utils')
const Intl = require('intl')
// SHOW
exports.show = function (req, res) {
    // Desistruração retirando o ID
    const { id } = req.params

    const foundInstructors = data.instructors.find(function (instructor) {
        return id == instructor.id
    })

    if (!foundInstructors) return res.send("Instructor not found!!!")    

    // Ajustar os dados
    const instructor = {
        ...foundInstructors,
        age: age(foundInstructors.birth),
        services: foundInstructors.services.split(","),
        created_at: new Intl.DateTimeFormat('pt-BR').format(foundInstructors.created_at)
    }

    return res.render('instructors/show', { instructor })
}

//post
exports.post = function (req, res) {

    // Validação dos Dados
    const keys = Object.keys(req.body)

    for (key of keys) {
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

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if (err) return res.send("Write file error!")

        return res.redirect("/instructors")
    })

}
//update
exports.edit = function (req, res) { 
    // Desistruração retirando o ID
    const { id } = req.params

    const foundInstructors = data.instructors.find(function (instructor) {
        return id == instructor.id
    })

    if (!foundInstructors) return res.send("Instructor not found!!!") 

    const instructor = {
        ...foundInstructors,
        birth: date(foundInstructors.birth)
    }    

    return res.render('instructors/edit', { instructor })
}

exports.put = function(req, res) {
    //Aqui eu faço a lógica de receber esses dados
	const { id } = req.body // Buscando do body
    let index = 0
    
	const foundInstructor = data.instructors.find(function(instructor, foundIndex){
			if (id == instructor.id ) {  // Se o ID for 7
                index = foundIndex       // index recebe 7
                return true              // Retorna true porque encontramos ID
            }
	})
	
    if (!foundInstructor) return res.send("Instructor not found!!!")
    
    const instructor = {
        ...foundInstructor,
        ...req.body,
        birth: Date.parse(req.body.birth)  // req.body porque ele vem do corpo
    }
    // Nessa posição que eu encontrei vou colocar no instructor
    data.instructors[index] = instructor

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send("Write error !!!")

        return res.redirect(`/instructors/${id}`)
    })
}

//delete 
exports.delete = function(req, res ) {
    const { id } = req.body

    const filteredInstructors = data.instructors.filter(function(instructor) {
        return instructor.id != id
    })

    data.instructors = filteredInstructors

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if(err) return res.send("Write file error !!!")

        return res.redirect('/instructors')
    })
}