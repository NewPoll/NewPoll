const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/UsersModel.js");
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.URI)
    .then(() => {
        console.log("database is running!");
        app.listen(5000, () => {
            console.log("server is running!")
        })
    })
    .catch((error) => {
        console.log(error)
    });

app.post("/verifyLogin", async function(req, res){
    const {username, password} = req.body;
    try{
        const token = await User.signin(username, password);
        res.status(200).json({token: token});
    } catch(e){
        res.status(401).json({error: e})
    }
})

app.post("/verifyRegister", async function(req, res){
    const {username, password} = req.body;
    try{
        const user = await User.signup(username, password);
        res.status(200).json({username, password});
    } catch(e){
        res.status(401).json({error: e})
    }
})