const userRouter = require('./routes/userRoutes')
const favrouter = require('./routes/favroute')
const cartRouter = require('./routes/cartRoutes')
const LLMRoute = require('./routes/llmRoute')
const similarrecipeRoute = require('./routes/similarrecipeRoute')
const globalerrorhandler = require('./controller/errorController')
const express = require('express');
const cors=require('cors')

const app = express()

app.use(express.json());
app.use(cors());

app.use('/api/v1/users',userRouter);
app.use('/api/v1/fav',favrouter);
app.use('/api/v1/cart',cartRouter);
app.use('/api/v1/llmmodel',LLMRoute)
app.use('/api/v1/similarrecipe',similarrecipeRoute)


app.all('*',(req,res,next)=>{
console.log('inside the app .js global error handler')
    next(new AppError('The page you are trying to acces do not exist',404))
})

app.use(globalerrorhandler)
module.exports = app;