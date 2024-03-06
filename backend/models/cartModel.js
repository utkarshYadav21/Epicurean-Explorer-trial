const mongoose = require('mongoose')


const CartSchema = new mongoose.Schema({
    userid : {
        type : String
    },
    cartItem : [{
        recipename : String,
        ingredients : [{type : String}]
    }]
})

const Cart = mongoose.model('cart',CartSchema)

module.exports = Cart