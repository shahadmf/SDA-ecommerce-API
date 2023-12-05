import { Router } from "express";
import { getAllProducts, createProduct } from "../controllers/productController";

const router = Router();

// GET : /products --> return all products
router.get("/", getAllProducts); 

// POST : /products --> creates new product
router.post("/", createProduct); 

export default router;