const User = require('../models/User');
const bcrypt = require('bcrypt');
const path = require('path');

require('dotenv').config( {
    path: path.join(__dirname, "..", "views", ".env")
});

const handleLogin = async (req,res) => {
    const { user, pwd } = req.body;
    if(!user || !pwd){
        return res.status(400).json({"message": "Username and password are required"});
    }

    const foundUser = await User.findOne({username: user}).exec();
    if(!foundUser){
        console.log("User not found");
        return res.sendStatus(401);
    }

    //evaluate password
    const match = await bcrypt.compare(pwd, foundUser.password);
    if(match){
        res.status(200).json({"message": "Login successful"})
    }
    else{
        console.log("no match");
        res.sendStatus(401);
    }
}   

module.exports = {handleLogin};