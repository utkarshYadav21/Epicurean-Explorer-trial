const userRouter = require('./routes/userRoutes')
const globalerrorhandler = require('./controller/errorController')
const express = require('express');


const app = express()

app.use(express.json())

app.use('/api/v1/users',userRouter);

app.all('*',(req,res,next)=>{
console.log('inside the app .js global error handler')
    next(new AppError('The page hyou are trying to acces do not exist',404))
})

app.use(globalerrorhandler)
module.exports = app;