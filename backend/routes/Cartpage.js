import express from 'express';
import {createCart,getCart,deleteCart,updateCart} from '../controllers/Cartpage.js';

const router = express.Router();
//get, post, put, delete
router.get("/", getCart);

router.post("/",createCart);

router.delete("/:id",deleteCart);

router.put("/:id",updateCart);

export default router;
