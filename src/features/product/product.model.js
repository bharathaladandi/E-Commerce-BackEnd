const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    price: {
        type: Number,
        min:1,
        require: true,
    },
     quantity: {
        type: Number,
        min:0,
        require: true,
    },
},
    {
        versionKey: false,
        timeseries: true,
    });
    
const Product = mongoose.model("product", productSchema);
module.exports = Product;