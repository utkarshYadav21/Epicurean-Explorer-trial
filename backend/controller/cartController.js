const Cart = require('../models/cartModel')
const AppError = require('../utils/apperror')
const catchasync = require("../utils/catchasync")

exports.addItemtoCart = catchasync(async (req,res,next) => {
    const cart =await Cart.findById(req.user.cart)
    console.log(cart.cartItem)
    const recipeName = req.body.recipename
    const ingredient = req.body.ingredient
    if(!Array.isArray(cart.cartItem)){
        //console.log("cartitem is not an array making it into array")
        cart.cartItem = []
        //console.log(cart.cartItem)
    }

    const cartItemIndex = cart.cartItem.findIndex((item) => item.recipename === recipeName);
    
    if (cartItemIndex !== -1) {
        //console.log(cartItemIndex)
        //console.log("the recipe already exist checking inside it")
      // Recipe already exists in the cart, check if the ingredient is already present
      const existingIngredients = cart.cartItem[cartItemIndex].ingredients;

      if (existingIngredients.includes(ingredient)) {
        return next(new AppError("Ingredient already exists for this recipe in the cart",400))
      }

      // Add the new ingredient
      cart.cartItem[cartItemIndex].ingredients.push(ingredient);
    } else {
        console.log("Recipe do not exist adding the recipe")
      // Recipe doesn't exist in the cart, create a new cart item with the ingredient
      cart.cartItem.push({
        recipename: recipeName,
        ingredients: [ingredient],
      });
    }

    //console.log(cart.cartItem)
    // Save the updated cart
    await cart.save();

    const cartItem = cart.cartItem
    res.status(201).json({
      status: 'Success',
      message: 'Ingredient added to the cart successfully.',
      cartitem : {
        cartItem
      }
    });

});

exports.getAllCartitems = catchasync(async (req,res,next) =>{
    const usercart = await Cart.findOne({userid : req.user.email})
    if(!usercart){
        return next(new AppError("The cart for this user do not exist",404))
    }

    const cartItem = usercart.cartItem
    res.status(200).json({
        status : "succcess",
        cart : {
            cartItem
        }
    })
})


exports.deleteIngredient = catchasync (async (req,res,next)=>{
    const cart = await Cart.findById(req.user.cart)
    const recipeName = req.body.recipename
    const ingtodel = req.body.ingredient

    if(!cart){
        return next(new AppError("Cart for this user cannot be found",404))
    }

    const cartItemIndex = cart.cartItem.findIndex((item) => item.recipename === recipeName);

    if (cartItemIndex !== -1) {
      // Recipe found in the cart
      const ingredients = cart.cartItem[cartItemIndex].ingredients;

      // Check if the ingredient to delete exists
      const ingredientIndex = ingredients.indexOf(ingtodel);

      if (ingredientIndex !== -1) {
        // Ingredient found, delete it from the array
        ingredients.splice(ingredientIndex, 1);

        // Save the updated cart
        await cart.save();

        res.status(201).json({
            status : "success",
            message : "Ingredient deleted"
        })
    }else{
        return next(new AppError("Ingredient was not found in the recipe ingredient list",401))
    }
}else{
    return next(new AppError("recipe was not found in the recipe ingredient list",401))
}
});


exports.deleteRecipe = catchasync(async(req,res,next) =>{
    const cart = await Cart.findById(req.user.cart)
    const recipetodel = req.body.recipename
    

    if(!cart){
        return next(new AppError("Cart for this user cannot be found",404))
    }
    const cartItemIndex = cart.cartItem.findIndex((item) => item.recipename === recipeNameToDelete);

    if (cartItemIndex !== -1) {
      // Recipe found in the cart, remove it from the array
      const deletedRecipe = cart.cartItem.splice(cartItemIndex, 1)[0];

      // Save the updated cart
      await cart.save();

      return res.status(200).json({
        status: 'Success',
        message: 'Recipe deleted from the cart successfully.',
        userId: userId,
        deletedRecipe: deletedRecipe,
      });
    } else {
      // Recipe not found in the cart
      return next(new AppError("Recipe Not found in the shopping bag"));
    }

})