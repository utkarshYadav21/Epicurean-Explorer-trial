const { HfInference } = require('@huggingface/inference');
const catchasync = require('../utils/catchasync');
const AppError = require('../utils/apperror');

const INFERENCEKEY = process.env.HUGGINGFACE_API_KEY

const inference = new HfInference(INFERENCEKEY);

const model = process.env.HUGGINGFACE_MODEL;

function toCamelCase(str) {
    // Replace underscores with spaces
    let stringWithSpaces = str.replace(/_/g, '  ');

    // Convert to camel case
    let camelCaseString = stringWithSpaces.replace(/ ([a-z])/g, function (match, letter) {
        return letter.toUpperCase();
    });

    // Handle cases where the first character is lowercase
    camelCaseString = camelCaseString.charAt(0).toLowerCase() + camelCaseString.slice(1);

    return camelCaseString;
}

exports.getrecipefromImage = catchasync (async(req,res,next) =>{

    const imageBlob = req.file.buffer;

    if(!imageBlob){
        return next(new AppError("No Image was found Please try Uploading again",404))
    }
    console.log(req.file)
    // Use the 'request' method for a custom call with no type checking
    const result = await inference.request({
      data: imageBlob,
      model: model
    });
    console.log('Full Result:', result[0]);
    const predictedFood = result[0]
    const formattedPredictedFood = toCamelCase(predictedFood.label)

      console.log(formattedPredictedFood)

    // Log the entire result to inspect its structure
    
    res.status(200).json({
        status : "success",
        data : formattedPredictedFood
    })

    // // Extract the text from the result if available
    // if (result && result.text) {
    //   console.log('Generated Text:', result.text);
    // } else {
    //   console.error('Invalid inference output:', result);
    // }
})

















// async function getImageToText() {
//   try {
    
//   } catch (error) {
//     console.error('Error:', error.message);
//   }
// }

// // Call the asynchronous function
// getImageToText();
