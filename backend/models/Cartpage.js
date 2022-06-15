import mongoose from 'mongoose';

const cartData = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phoneNo: String,
    cart: [
        {
            image: String,
            price: String,
            quantity: String,
            title: String,
        }
    ],
    cartTotal: String
});

const cartModel = mongoose.model('User Order',cartData);

export default cartModel; 