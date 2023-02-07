const User = require('../models/User');
const bcrypt = require('bcrypt');

const handleLogout = async (req,res) => {
    const cookies = req.cookies;
    if(!cookies?.jwt){
        console.log("No cookie");
        return res.sendStatus(204); //No content to send back
    }
    
    const refreshToken = cookies.jwt;

    //Is refreshToken in db ?
    const foundUser = await User.findOne({ refreshToken }).exec();
    if(!foundUser) {
        res.clearCookie('jwt', {httpOnly: true, maxAge: 24*60*60*1000});
        return res.sendStatus(204); //Succcessfull, no content
    }


    foundUser.refreshToken = '';
    const result = await foundUser.save();
    console.log(result);

    //Test with Thunder Client (remove secure: true)
    //res.clearCookie('jwt', {httpOnly: true, sameSite: 'none', maxAge: 24*60*60*1000}); //secure: true - only serves on https

    //Production mode
    res.clearCookie('jwt', {httpOnly: true, sameSite: 'none', secure: true, maxAge: 24*60*60*1000}); //secure: true - only serves on https
    
    
    res.sendStatus(204);
}

module.exports = {handleLogout};