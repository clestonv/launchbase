const fs = require('fs')
const data = require('../data.json')
const { age, date } = require('../utils')
const Intl = require('intl')

exports.index = function(req, res) {
    return res.render('members/index', { members: data.members })
}

exports.create = function (req, res) {
    return res.render('members/create')
}
//post
exports.post = function (req, res) {

    // Validação dos Dados
    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == "")
            return res.send('Please, fill all fields!')
    }

    // TRATAMENTO DOS DADOS 
    birth = Date.parse(req.body.birth)
    
    let id = 1
    const lastMember = data.members[data.members.length - 1]

    if (lastMember) {
        id = lastMember.id + 1
    }

    // ORGANIZANDO OS DADOS QUE EU QUERO ENVIAR    
    data.members.push({
        ...req.body,
        id,
        birth
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if (err) return res.send("Write file error!")

        return res.redirect("/members")
    })

}

// SHOW
exports.show = function (req, res) {
    // Desistruração retirando o ID
    const { id } = req.params

    const foundMembers = data.members.find(function (member) {
        return id == member.id
    })

    if (!foundMembers) return res.send("Member not found!!!")    

    // Ajustar os dados
    const member = {
        ...foundMembers,
        birth: date(foundMembers.birth).birthDay       
    }

    return res.render('members/show', { member })
}

//edit
exports.edit = function (req, res) { 
    // Desistruração retirando o ID
    const { id } = req.params

    const foundMembers = data.members.find(function (member) {
        return id == member.id
    })

    if (!foundMembers) return res.send("Member not found!!!") 

    const member = {
        ...foundMembers,
        birth: date(foundMembers.birth).iso
    }    

    return res.render('members/edit', { member })
}
//update
exports.put = function(req, res) {
    //Aqui eu faço a lógica de receber esses dados
	const { id } = req.body // Buscando do body
    let index = 0
    
	const foundMember = data.members.find(function(member, foundIndex){
			if (id == member.id ) {  // Se o ID for 7
                index = foundIndex       // index recebe 7
                return true              // Retorna true porque encontramos ID
            }
	})
	
    if (!foundMember) return res.send("Member not found!!!")
    
    const member = {
        ...foundMember,
        ...req.body,
        birth: Date.parse(req.body.birth),  // req.body porque ele vem do corpo
        id: Number(req.body.id)
    }
    // Nessa posição que eu encontrei vou colocar no member
    data.members[index] = member

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send("Write error !!!")

        return res.redirect(`/members/${id}`)
    })
}

//delete 
exports.delete = function(req, res ) {
    const { id } = req.body

    const filteredMembers = data.members.filter(function(member) {
        return member.id != id
    })

    data.members = filteredMembers

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if(err) return res.send("Write file error !!!")

        return res.redirect('/members')
    })
}