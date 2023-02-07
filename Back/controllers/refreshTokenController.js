const User = require('../models/User');
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
const path = require('path');
require('dotenv').config( {
    path: path.join(__dirname, "..", "views", ".env")
});

const handleRefreshToken = async (req,res) => {
    console.log("REFRESH REQUEST")
    const cookies = req.cookies;
    //? is the optional chaining operator, check if the "jwt" is null and avoid to return an error
    if(!cookies?.jwt) {
        console.log("No cookie found")
        return res.sendStatus(401);
    }
    console.log(cookies.jwt);
    const refreshToken = cookies.jwt;

    const foundUser = await User.findOne({ refreshToken }).exec();
    if(!foundUser) {
        console.log("No user found")
        return res.sendStatus(403); //Forbidden
    }
    console.log("User found :", foundUser);

    //evaluate jwt
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if(err || foundUser.username !== decoded.username) return res.sendStatus(403);
            const accessToken = jwt.sign(
                {   
                    "UserInfo":{
                        "username": decoded.username
                    }
                },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '300s'}
            )
            res.json({ accessToken })
        }
    );
}

module.exports = {handleRefreshToken};