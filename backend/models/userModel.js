const mongoose = require('mongoose')
const crypto = require('crypto')
const validator = require('validator')
const bcrypt = require('bcryptjs')


const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    email :{
        type : String,
        unique : true,
        required : true,
        lowercase : true,
        validate : [validator.isEmail, " Please provide a valid email "]
    },
    password : {
        type : String,
        required : true,
        minlength : 8,
        select : false
    },
    passwordconfirm : {
        type : String,
        required : true,
        validate : {
            //this only work on .save or .create and not on Update()
            validator : function(el){
                    return el === this.password
            },
            message : 'condfirm password and Password do not match'
        }
    },
    favrecipes : [{
        type : String
    }],
    cart : {
        type : mongoose.Schema.ObjectId,
        ref : 'cart'
    }
});


userSchema.pre('save',async function(next){
    if(!this.isModified('password')) return next();  //run only if password is modified
    this.password = await bcrypt.hash(this.password,12);
    this.passwordconfirm = undefined //deleting this so that it is not set in database
    next();
});

userSchema.methods.correctPassword = async function(candidatePassword,userPassword){
    return await bcrypt.compare(candidatePassword,userPassword)
};

const Users = mongoose.model('users',userSchema)

module.exports= Users