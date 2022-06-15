import cartModel from "../models/Cartpage.js";

export const createCart = async(req,res) => {
    const cart = new cartModel({
        firstName: req.body.firstName.toString(),
        lastName: req.body.lastName.toString(),
        email: req.body.email.toString(),
        phoneNo: req.body.phoneNo.toString(),
        cart: [
            ...req.body.cart
        ],
        cartTotal: req.body.cartTotal,
    })
    try {
       await cart.save();
       res.json(cart); 
    } catch (error) {
        console.log('Error!!!!');
    }
}

export const deleteCart = async (req,res) => {
    try {
        const deleteFind = await cartModel.findByIdAndDelete(req.params.id);
        res.json(deleteFind);
    } catch (error) {
        console.log(`Successfully deleted = ${req.params.id}`)
    }
}

export const getCart = async (req,res) => {
    try {
        const details = await cartModel.find();
        res.json(details);
    } catch (error) {
        console.log(`Record Not Found`);
    }
}

export const updateCart = async (req,res) => {
    try {
        const update = await cartModel.findByIdAndUpdate(req.params.id,req.body);
        res.json(update);
    } catch (error) {
        console.log(`Successfully Updated : ${id}`);
    }
}