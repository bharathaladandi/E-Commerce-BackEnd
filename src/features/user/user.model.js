
const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
     name: {
        type: String,
        require: true,
    },
    age: {
        type: String,
    },
},
    {
        versionKey: false,
        timeseries: true,
    });

const User = mongoose.model("user", UserSchema);
module.exports = User;