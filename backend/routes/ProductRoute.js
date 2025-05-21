import express from "express"
import Product from '../models/ProductModel.js'
import mongoose from "mongoose";
import { CreateProduct, DeleteProduct, getProducts, UpdateProduct } from "../controllers/ProductController.js";

const router = express.Router();

router.get("/", getProducts);

router.post("/", CreateProduct);

router.delete("/:id", DeleteProduct);

router.put("/:id", UpdateProduct)

export default router;