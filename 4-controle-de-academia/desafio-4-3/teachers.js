const fs = require('fs') // FileSystem
const data = require('./data.json')

// create
exports.post = function (req, res) {

    // Validate
    const keys = Object.keys(req.body) 

    for (key of keys) {
        if (req.body[key] == "") {
            return res.send('Please, fill all fields!!')
        }
    }

    let { avatar_url, birth, name, escolaridade, type_learn, learn, gender } = req.body

    birth = Date.parse(birth)
    const create_at = Date.now()
    const id = Number(data.teachers.length + 1)

    data.teachers.push({
        id,
        avatar_url,
        name,
        birth,
        gender,
        escolaridade,
        type_learn,
        learn,
        create_at
    })

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function (err) {
        if (err) return res.send('Write file error!')

        return res.redirect('/teachers')
    })

}
// update
// delete