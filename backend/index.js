import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import CartPage from './routes/CartPage.js';

const url = "mongodb+srv://nibras:123@nib1.79vnhw8.mongodb.net/?retryWrites=true&w=majority";

const app = express();

mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true}).then(()=> console.log("Connected to Database."));

app.listen(5000);

app.use(cors());

app.use(bodyParser.json({extended: true}));

app.use(bodyParser.urlencoded({extended: true}));

app.use("/newForm",CartPage);

app.use("/Dashboard",CartPage);

app.use("/update",CartPage);

