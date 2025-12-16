const User = require('../models/user.model');

module.exports.findAllUsers = (req, res) => {

    User.find()
        .then((data) => {
            res.json(data)

        })
        .catch((err) => {
            res.json(err)
        })

}


// 127.0.0.1/api/v1/user/23413253245943859345
//Find user by _id
module.exports.findUser = (req, res) => {

    User.findById({ _id: req.params.id })
        .then((data) => {
            res.json({ user: data })
        })

        .catch((err) => {
            res.json(err)
        })
}

module.exports.deleteAll = (req, res) => {

    User.deleteMany({})

        .then((data) => {
            res.json({ msg: "Deleted" })
        })
        .catch((err) => {
            res.json(err)
        })

}


module.exports.createUser = (req, res) => {
    const newUser = req.body;
    User.create(newUser)

        .then((data) => {
            res.json({ User: data })
        })
        .catch((err) => {
            res.json(err)
        })
}


module.exports.updateUser = (req, res) => {

    User.updateOne({ _id: req.params.id }, { name: "Khaled" })
        .then((data) => {
            res.json({ msg: true })
        })
        .catch((err) => {
            res.json(err)
        })


}

