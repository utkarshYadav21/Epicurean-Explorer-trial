const User = require("../models/userModel");
const AppError = require("../utils/apperror");
const catchasync = require("../utils/catchasync")


exports.getfavrecipe = catchasync(async (req,res,next)=>{
    const userid = req.user.id;
    if(!userid){
        return next(new AppError("You're not logged In, Please Login"))
    }
    const favArray = req.user.favrecipes
    console.log(favArray);

    res.status(201).json({
        status: 'Success',
        recipeId: {
          favArray
        }
      });

});


exports.addtofav = catchasync(async (req,res,next)=>{
    const user= req.user;
    const recipeid = req.body.recipeid

    console.log(user.favrecipes)
    if(!user){
        return next(new AppError("You're not logged In, Please Login",404))
    }

    if (user.favrecipes.includes(recipeid)) {
        return res.status(400).json({ message: 'Recipe already in favorites.' });
      }

    user.favrecipes.push(recipeid);

    await user.save({validateBeforeSave : false});
    console.log(user.favrecipes);

    res.status(201).json({
        status: 'Success',
        recipeIds: {
          recipeid
        }
      });

});


exports.deletefav = catchasync(async (req,res,next) => {
    const user = req.user
    const recipetobeDeleted = req.body.recipeid

    const favRecipeIndex = user.favrecipes.indexOf(recipetobeDeleted);

    if (favRecipeIndex !== -1) {
      // Recipe found in the favrecipes array, remove it
      user.favrecipes.splice(favRecipeIndex, 1);

      // Save the updated user
      await user.save();

      return res.status(200).json({
        status: 'Success',
        message: 'Favorite recipe deleted successfully.',
        user : {
          user
        }
      });
    } else {
      // Recipe not found in the favrecipes array
      return next(new AppError("Recipe not found in the fav list",404));
    }
})