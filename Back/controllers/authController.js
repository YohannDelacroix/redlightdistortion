const User = require('../models/User');
const bcrypt = require('bcrypt');
const path = require('path');
const jwt = require('jsonwebtoken');

require('dotenv').config( {
    path: path.join(__dirname, "..", "views", ".env")
});

const handleLogin = async (req,res) => {
    console.log("LOGIN");
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

        //create JWTs
        const accessToken = jwt.sign(
            {
                "UserInfo":{
                    "username": foundUser.username
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '300s'}
        );

        const refreshToken = jwt.sign(
            { "username": foundUser.username},
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d'}
        );

        foundUser.refreshToken = refreshToken;
        const result = await foundUser.save();
        console.log("SAVED:", result);

        //Test with Thunder Client (remove secure: true)
        //res.cookie('jwt', refreshToken, {httpOnly: true, sameSite: 'none', maxAge: 24*60*60*1000});

        //Production mode
        res.cookie('jwt', refreshToken, {httpOnly: true, sameSite: 'none', secure: true, maxAge: 24*60*60*1000});

        res.json({accessToken});
    }
    else{
        console.log("no match");
        res.sendStatus(401);
    }
}   

module.exports = {handleLogin};