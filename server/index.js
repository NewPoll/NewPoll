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

app.post("/api/user/login", async function(req, res){
    const {username, password} = req.body;
    try{
        const token = await User.signin(username, password);
        res.status(200).json({username: username, token: token});
    } catch(e){
        res.status(400).json({error: e.message})
    }
})

app.post("/api/user/register", async function(req, res){
    const {username, password , confirmPassword} = req.body;
    try{
        const token = await User.signup(username, password,confirmPassword);
        res.status(200).json({username: username, token: token});
    } catch(e){
        res.status(400).json({error: e.message})
    }
})