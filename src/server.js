require("dotenv").config();

const express = require("express")
const cors = require("cors");

const connect = require("./config/db");

const userRoute = require("./features/user/user.router");
const productRoute = require("./features/product/product.router");
const cartRoute = require("./features/cart/cart.router");



const PORT = process.env.PORT || 8003;

const app = express();
app.use(express.json());
app.use(cors());


app.use("/users", userRoute)
app.use("/products", productRoute)
app.use("/carts", cartRoute)




// app.listen(PORT, async () => {
//     await connect();
//     console.log(`Listening on http://localhost:${PORT}`);
// })

app.listen(PORT, async () => {
    try{
        await connect;
        console.log("Connected to DB Successfully")
    }
    catch(err){
        console.log("Error connecting to DB")
        console.log(err)
    }
    console.log("Listening on PORT 8080")
})