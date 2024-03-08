const axios = require('axios')

const { GoogleGenerativeAI } = require("@google/generative-ai");
const AppError = require("../utils/apperror");
const catchasync = require("../utils/catchasync");
// 1. Configuration
const api_key = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(api_key);
const generationConfig = { temperature: 0.9, topP: 1, topK: 1, maxOutputTokens: 4096 };

// 2. Initialise Model
const model = genAI.getGenerativeModel({ model: "gemini-pro", generationConfig });

// 3. Generate Content

exports.generateAIContent = catchasync(async (req,res,next)=> {
const recipeid = req.body.recipeid
let config = {
    method : 'GET',
    url : `https://apis-new.foodoscope.com/recipe/${recipeid}`,
    headers : {
        'content-type' : 'application/json',
        'Authorization' : `Bearer ${process.env.RECIPE_API_KEY}`
    }
}

const recipeinfo = await axios(config);
const stringifiedData = recipeinfo.data.payload.instructions;
//console.log(stringifiedData);
const recipeString = stringifiedData.join(' ');
console.log(recipeString);
  
    if(!recipeString){
        return next (new AppError("No Instructions were fetched from api",404))
    }
;
      
    
    const prompt = `Convert the following cooking instructions intoo easily understandable stepwise instructions: ${recipeString} and give the output in html representation using tags such as <b>,<br>,<li> and dont use \\n   `;
    
    const result = await model.generateContent(prompt);
    const instructions = await result.response;
    const restext = instructions.text()
    console.log(response.text());



    res.status(201).json({
        status : "success",
        response : restext
    })

})









// async function generateContent() {
//   try {
//     const prompt = `Convert the following into easily understandable stepwise instruction ${query} `;
//     const result = await model.generateContent(prompt);
//     const response = await result.response;
//     console.log(response.text());

//     res.status(201).json({
//         status : "success",
//         response : response.text()
//     })

//   } catch (error) {
//     console.error('Error generating content:', error);
//     return next (new AppError("Something went wrong in the api",400))
//   }
// }

// // Run the function
// generateContent();