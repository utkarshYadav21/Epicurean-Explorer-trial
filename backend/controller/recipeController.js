const axios = require('axios')
const catchasync = require('../utils/catchasync')


exports.getSimilarRecipe = catchasync(  async (req,res,next) => {
    const recipeId = req.body.recipeid; // Assuming the recipe id is in req.body
    const apiUrl = `https://cosylab.iiitd.edu.in/api/recipeDB/similarrecipescat/${recipeId}`;

    const config = {
      method : 'GET',
      url : apiUrl,
      Headers : {
        Authorisation : `Bearer ${process.env.RECIPE_API_KEY}`
      }
    }
    const response = await axios.get(config);
    const similarRecipesData = response.data;

    // Process the data as needed
    console.log('Similar Recipes:', similarRecipesData);
    const similarRecipeIds = similarRecipesData.simRecipes
    res.status(200).json({
      status: 'success',
      //res is array of [ { recipeId : 35325, similarityIndex : 0.98} ]
      data: similarRecipeIds
    });
})