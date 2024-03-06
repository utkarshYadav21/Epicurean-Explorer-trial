const User = require("../models/userModel")
const catchasync = require("../utils/catchasync")

exports.createUser = catchasync( async (req, res, next) =>{
    const newUser = await User.create(req.body);

    console.log("Data sent succesfully")

    res.status(201).json({
      status: 'Success',
      data: {
        newUser
      }
    });
});


exports.getuser = catchasync( async (req, res, next) =>{
    const users = await User.find()

    console.log("Data got succesfully")

    res.status(200).json({
      status: 'Success',
      data: {
        users
      }
    });
});