const mongoose  = require("mongoose")

const connect = async () => {
    return mongoose.connect("mongodb+srv://bharathaldandi:bharat@cluster0.tuxlypq.mongodb.net/myfirstdb?retryWrites=true&w=majority");
}

module.exports = connect;