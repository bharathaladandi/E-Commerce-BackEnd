const express = require("express");
const Cart = require("./cart.model");

const app = express.Router();


app.get("/", async (req, res) => {
   
    try{
        let cart = await Cart.find()
        res.send(cart)
    }
    catch(e){
        res.status(400).send(e.message);
    }
   
});


app.post("/", async (req, res) => {
   
    try{
        let cart = await Cart.create(req.body)
        res.send(cart)
    }
    catch(e){
        res.status(400).send(e.message);
    }
   
});
module.exports = app;