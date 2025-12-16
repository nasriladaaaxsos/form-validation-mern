const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        minlength : [  10, "Name should be more than 9 chars."]
    },
    age: {
        type: Number,
        min: [1, "The minimum allowed age is at least 1"]
    }

}
)

const User = mongoose.model('User', UserSchema);

module.exports = User;


