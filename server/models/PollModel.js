const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');

const pollSchema = new Schema({
    pollID: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    optionsCount: {
        type: Number,
        required: true
    },
    options: {
        type: Array,
        required: true
    },
    votes: {
        type: Array,
        required: true
    },
    showResults: {
        type: Boolean,
        required: true
    },
    oneVotePerIP: {
        type: Boolean,
        required: true
    },
    multipleOptions: {
        type: Boolean,
        required: true
    },
    IPSVoted: {
        type: Array,
        required:true
    }
})

pollSchema.statics.createPoll = async function(user,pollUUID,pollQuestion,optionsContent,multipleVote,oneVotePerIP,showResults ){

    let optionSize = optionsContent.length
    let votesArr = new Array(optionSize).fill(0)
  
    const poll = this.create({
        pollID: pollUUID,
        question: pollQuestion,
        optionsCount: optionSize,
        options: optionsContent,
        votes: votesArr,
        showResults: showResults,
        oneVotePerIP: oneVotePerIP,
        multipleOptions: multipleVote,
        IPsVoted:[]
    });

    return;
}

pollSchema.statics.retrievePoll = async function(pID){
    let findPollID = await this.findOne({pollID: pID});

    return findPollID;
}

module.exports = mongoose.model("Poll", pollSchema);