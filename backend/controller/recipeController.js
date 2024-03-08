const axios = require('axios')
const catchasync = require('../utils/catchasync')
const { get } = require('../routes/dlRoute')

const getbyID = async  (id) => {
  let config = {
    method : 'GET',
    url : `https://apis-new.foodoscope.com/recipe/${id}`,
    headers : {
      'content-type' : 'application/json',
      'Authorization' : `Bearer ${process.env.RECIPE_API_KEY}`
    }
  }

  const recipeinfo = await axios(config)

  return recipeinfo.data

}




function findMaxOccurrenceWord(inputString) {
  // Split the string into an array of words
  const wordArray = inputString.split("||");

  // Create an object to store the count of each word
  const wordCount = {};

  // Iterate through the array and count occurrences
  wordArray.forEach(word => {
      wordCount[word] = (wordCount[word] || 0) + 1;
  });

  // Find the word with the maximum occurrences
  let maxWord = "";
  let maxCount = 0;

  for (const word in wordCount) {
      if (wordCount[word] > maxCount) {
          maxWord = word;
          maxCount = wordCount[word];
      }
  }

  return maxWord;
}

// Example usage

exports.getsimilarRecipe = catchasync(async (req,res,next)=>{
  const recipeid = req.body.recipeid;

    // Fetch recipe data by calling getbyID function
    const recipeData = await getbyID(recipeid);
  

    // Extract the 'process' property from the recipe data
    const processString = recipeData.payload.Processes;

    // Find the word with the maximum occurrence in the processString
    const maxOccurrenceWord = findMaxOccurrenceWord(processString);

    let config = {
      method : 'GET',
      url : `https://apis-new.foodoscope.com/recipe-search/processes?searchText=${maxOccurrenceWord}&page=1&pageSize=2`,
      headers : {
        'content-type' : 'application/json',
        'Authorization' : `Bearer ${process.env.RECIPE_API_KEY}`
      }
    }

    const similarrecipeResponse = await axios(config)
    console.log(similarrecipeResponse.data.payload.data)
    similarRecipeArray = similarrecipeResponse.data.payload.data

    const extractedData = similarRecipeArray.map(recipe => ({
      recipeid: recipe.Recipe_id,
      recipe_title: recipe.Recipe_title,
      img_url: recipe.img_url,
      processes : recipe.Processes
    }));


    console.log(maxOccurrenceWord)
    res.status(200).json({
      status: 'success',
      data: {
        maxOccurrenceWord,
        similarrecipes : extractedData
      }
    });

})

// exports.getSimilarRecipe = catchasync(  async (req,res,next) => {
//     const recipeId = req.body.recipeid; // Assuming the recipe id is in req.body
//     const apiUrl = `https://cosylab.iiitd.edu.in/api/recipeDB/similarrecipescat/${recipeId}`;

//     const config = {
//       method : 'GET',
//       url : apiUrl,
//       Headers : {
//         Authorisation : `Bearer ${process.env.RECIPE_API_KEY}`
//       }
//     }
//     const response = await axios.get(config);
//     const similarRecipesData = response.data;

//     // Process the data as needed
//     console.log('Similar Recipes:', similarRecipesData);
//     const similarRecipeIds = similarRecipesData.simRecipes
//     res.status(200).json({
//       status: 'success',
//       //res is array of [ { recipeId : 35325, similarityIndex : 0.98} ]
//       data: similarRecipeIds
//     });
// })