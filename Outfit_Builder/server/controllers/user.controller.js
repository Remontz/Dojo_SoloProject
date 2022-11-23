const User = require('../models/user.model')


const UserController = {

    //CREATE
    create: (req, res) => {
        User
            .create(req.body)
            .then((result) => {
                res.status(201).json(result)
            })
            .catch((err) => {
                res.status(404).json({ msg: 'Error Creating User', error: err })
            })
    },
    //READ
    getAll: () => {
        console.log("Get All")
    },
    getOne: () => {
        console.log("Get All")
    },
    //UPDATE
    update: () => {
        console.log("Get All")
    },

    //DELETE
    delete: () => {
        console.log("Get All")
    }
}

module.exports = UserController