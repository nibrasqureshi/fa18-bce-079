import mongoose from "mongoose"

const userSignupData = mongoose.Schema({
    fName: String,
    lName: String,
    email: String,
    password: String,
    phone: String,

});

const hostelApplicationModel = mongoose.model('signUpUser',userSignupData);

export default hostelApplicationModel; 