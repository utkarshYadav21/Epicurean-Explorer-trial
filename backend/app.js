const userRouter = require('./routes/userRoutes')
const favrouter = require('./routes/favroute')
const cartRouter = require('./routes/cartRoutes')
const globalerrorhandler = require('./controller/errorController')
const express = require('express');
const cors=require('cors')

const app = express()

app.use(express.json());
app.use(cors());

app.use('/api/v1/users',userRouter);
app.use('/api/v1/fav',favrouter);
app.use('/api/v1/cart',cartRouter);

app.all('*',(req,res,next)=>{
console.log('inside the app .js global error handler')
    next(new AppError('The page hyou are trying to acces do not exist',404))
})

app.use(globalerrorhandler)
module.exports = app;