const User = require('../models/userModel')
const jwt = require('jsonwebtoken');
const { promisify } = require('util')
const AppError = require('../utils/apperror');
const crypto = require('crypto');
const catchasync = require('../utils/catchasync');

const signtoken = id =>{
    return jwt.sign({id:id},process.env.SECRET,{expiresIn : 3 * 24 *60 * 60})
}

const sendtoken = (user,statuscode,res) =>{
    const token = signtoken(user._id);
    //remove pwd 
    user.password = undefined
    console.log(token)
    
    res.status(statuscode).json({
        status : "success",
        user : user,
        token
    })
}


exports.signup = catchasync(async (req,res,next) =>{
    const newUser = await User.create({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,
        passwordconfirm : req.body.passwordconfirm
    })
    sendtoken(newUser,201,res)
})


exports.login = catchasync(async (req,res,next) => {
    const email = req.body.email;
    const password = req.body.password;

    //1) if email password exist
    if(!email || !password){
        return next(new AppError('Enter The password and email ',400))
    }
    const user =await User.findOne({email : email}).select('+password')
    if(!user || !(await user.correctPassword(password,user.password))){
        console.log("user do not exist")
        return next(new AppError('Incorrect email or password',401))
    }

    user.password = undefined;
    
    sendtoken(user,201,res)

})


exports.protect = catchasync(async (req,res,next) =>{
//1) check if token exist
let token;
//we send the toekn via header in form :  {authorization : bearer <TOKEN>}
if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
    token = req.headers.authorization.split(' ')[1];
}
console.log(token)
if(!token){
    console.log(req.headers)
    return next(new AppError('your session has expired please login',401))
}
//2) validate the token
const  decoded = await promisify(jwt.verify)(token,process.env.SECRET)

//3) check if user is not del if verification done
const freshUser = await User.findById(decoded.id)

if(!freshUser){
return next(new AppError('the user has been deleted',401))
}
//4) check if password is reset
//will addd it later

req.user = freshUser;
next();
});
