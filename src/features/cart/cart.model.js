const mongoose = require("mongoose");


const cartSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"product",
        require: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"user",
        require: true,
    },
    quantity: {
        type: Number,
        min: 1,
        require: true,
    },
});


const Cart = mongoose.model("cart", cartSchema);
module.exports = Cart;