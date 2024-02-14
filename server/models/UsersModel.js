const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken')
const usersSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    passwordHash: {
        type: String,
        required: true
    }
})

const createToken = (_id) => {
    return jwt.sign({_id},process.env.SECRET, {expiresIn: '3d'})
}

usersSchema.statics.signup = async function(username, password){
    if (!username || !password) {
        throw Error("Both fields must be complete");
    }

    const exists = await this.findOne({ username });

    if(exists){
        throw Error("Username already in use");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = this.create({username, passwordHash: hash});

    return user;
}


usersSchema.statics.signin = async function(username, password){
    if (!username || !password) {
        throw Error("Both fields must be complete");
    }

    const user = await this.findOne({ username });
    
    if(!user){
        throw Error("This user does not exist");
    }
    const match = await bcrypt.compare(password,user.passwordHash);
    if (!match) {
        throw Error("Incorrect password");
    }
    
    const token = createToken(user._id)

    

    return token;
}

module.exports = mongoose.model("User", usersSchema);