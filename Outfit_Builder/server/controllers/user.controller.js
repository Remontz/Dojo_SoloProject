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
        console.log("Get All Users")
        User
            .find({})
            .then((result) => {
                res.json(result)
            })
            .catch((err) => {
                res.status(404).json({ msg: "An error occurred attempting to retrieve all users", error: err })
            })
    },
    getOne: () => {
        console.log("Get One User")
        User
            .findOne({ _id: req.params.id })
            .then((result) => {
                res.json(result)
            })
            .catch((err) => {
                res.status(404).json({ msg: "An error occurred attempting to retrieve User.", error: err })
            })
    },
    //UPDATE
    update: () => {
        console.log("Update User")
        User
            .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then((result) => {
                res.json(result)
            })
            .catch((err) => {
                res.status(404).json({ msg: "An Error occurred attempting to update User", error: err })
            })
    },

    //DELETE
    delete: () => {
        console.log("Delete User")
        User
            .findOneAndDelete({ _id: req.params.id })
            .then((result) => {
                res.json(result)
            })
            .catch((err) => {
                res.status(404).json({ msg: "An error occurred when trying to delete user:", error: err })
            })
    }
}

module.exports = UserController