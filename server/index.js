const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/UsersModel.js");
const Poll = require("./models/PollModel.js");
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());
const auth = require ('./middleware/auth.js')

const crypto = require('crypto');

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

app.post("/api/polls/retrievePoll", async function(req, res){
   
    const {pollID} = req.body;

    let query = await Poll.retrievePoll(pollID);

    try{
        if(query){
            res.status(200).json( query );
        }
    } catch(e){
        
        res.status(400).json({error: e.message})
    }
})

app.use(auth);

app.post("/api/polls/createPoll", async function(req, res){
   
    const {pollQuestion,optionsContent,multipleVote,oneVotePerIP,showResults} = req.body;
    let pollID = crypto.randomUUID();

    try{
        const token = await Poll.createPoll(req.user,pollID,pollQuestion,optionsContent,multipleVote,oneVotePerIP,showResults);
       
        res.status(200).json({"pollID": pollID});
    } catch(e){
        
        res.status(400).json({error: e.message})
    }
})