const mongoose = require('mongoose')
const crypto = require('crypto')
const validator = require('validator')
const bcrypt = require('bcryptjs')


const userSchema = new mongoose.Schema({
    name : {
        type : string,
        require : [true, "Username is required"],
        trim : true
    },
    email :{
        type : String,
        unique : true,
        require : [true, "you must enter your email"],
        lowercase : true,
        validate : [validator.isEmail, " Please provide a valid email "]
    },
    password : {
        type : String,
        require : [true," Password is required"],
        minlength : 8,
        select : false
    },
    confirmPassword : {
        type : String,
        required : [true,'Please confirm password'],
        validate : {
            //this only work on .save or .create and not on Update()
            validator : function(el){
                    return el === this.password
            },
            message : 'condfirm password and Password do not match'
        }
    }
});


userSchema.pre('save',async function(next){
    if(!this.isModified('password')) return next();  //run only if password is modified
    this.password = await bcrypt.hash(this.password,12);
    this.passwordconfirm = undefined //deleting this so that it is not set in database
    next();
})

const Users = mongoose.model('users',userSchema)

module.exports= Users