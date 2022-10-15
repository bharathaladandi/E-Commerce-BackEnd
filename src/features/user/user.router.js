const express = require("express");
const User = require("./user.model")
const app = express.Router();


app.post("/login",async (req, res) => {
    const { email, password } = req.body;


    try {
            let user = await User.findOne({ email });
            if (user) {
                if (password === user.password) {
                    res.send({
                        token: `${email}_#_${password}`
                    });
                } else {
                    res.send(401).send("Authentication Failure, incorrect password")
                }
            } else {
                res.send(404).send(`User with email: ${email} not found`)
            }
        } catch (e) {
        res.status(404).send(e.message)
    }
});

app.post("/signup",async (req, res) => {
    const { email, password, name, age } = req.body;

    try{
        let existingUser = await User.findOne({email});

        if(existingUser){
            res.send(404).send("Connot create an user")
        }
        let user = await User.create({
            email,password,name, age
        });

        res.send({token:`${user.email}_#_${user.password}`});
    }
    catch(e){
        res.status(404).send(e.message)
    }
});


module.exports = app;