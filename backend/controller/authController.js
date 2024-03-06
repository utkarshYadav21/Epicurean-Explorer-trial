const User = require('../models/userModel')
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const catchasync = require('../utils/catchasync');

const signtoken = id =>{
    return jwt.sign({id:id},process.env.SECRET,{expiresIn : process.env.EXPIRESIN})
}