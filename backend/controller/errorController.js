const AppError = require('../utils/apperror');

const handlecasterrrorDB = (err) => {
  const message = 'invalid' + err.path + ' : ' + err.value;
  console.log('working');
  return new AppError(message, 400);
};
const handlejwterror = (err) => {
  const message = 'invalid Json web token';
  console.log('working');
  return new AppError(message, 400);
};

const handlejwtexpirederror = (err) => {
  const message = 'Your session has expired please login again';
  console.log('working');
  return new AppError(message, 401);
};

const handleduplicatefieldDB = (err) => {
    const message = 'A User with mail ' + err.keyValue.email + ' already exist';
    return new AppError(message, 400);
  };

  const handleValidationDB = (err) => {
   const error = Object.values(err.errors).map(el => el.message)
   const message = 'invalid data input ' + error.join(', ')
    return new AppError(message, 400);
  };

  const senderrprod = (err, res) => {

    if (err.isOperational) {
      //operational error ,i.e trusted error
      res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
      });
    } else {
      //programing error , cant leak the error details
      //1) Log these eror so when in prod can see these logs on heroku and fix them
  
      //2) sending a nrml respose to user
      res.status(500).json({
        status: 'error',
        err: err,
        message: 'Something went wrong',
      });
    }
  };
module.exports = (err, req, res, next) => {
  console.log('we are inside the errror controller')
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'Error';
 // console.log("Data has error controller")
 let error = { ...err, name: err.name , message : err.message }; //hard copy of err in error

 if (error.name == 'CastError') {
   
   error = handlecasterrrorDB(error);
 }
 if (error.code == 11000) {
   error = handleduplicatefieldDB(error);
 }

 if (error.name == 'ValidationError') {
     error = handleValidationDB(error);
   }

   if (error.name == 'JsonWebTokenError') {
     error = handlejwterror(error);
   }
   if (error.name == 'TokenExpiredError') {
     error = handlejwtexpirederror(error);
   }


   senderrprod(error,res)
};
