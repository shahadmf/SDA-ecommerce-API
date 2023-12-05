import { NextFunction, Request, Response } from "express";
import { Product } from "../models/productSchema";
import { log } from "console";
import { title } from "process";
import slugify from "slugify";

// Return all products
export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const products = await Product.find({});
    res.status(200).json({
      message: "Here are all the products :)",
      payload: products,
    });
  } catch (error) {
    next(error);
  }
};

// Creates new product
export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      name,
      image,
      price,
      category,
      countInStock,
      sold,
      description,
      rating,
      numReviews,
    } = req.body;
    // if (!name || !image || !price || !category || !countInStock || !sold) {
    //   throw new Error("Please provide all required fields");
    // }
    const newProduct = await Product.create({
      name: name,
      slug: slugify(name),
      image: image,
      price: price,
      category: category,
      countInStock: countInStock,
      sold: sold,
      description: description,
      rating: rating,
      numReviews: numReviews,
    });

    await newProduct.save();

    console.log(req.body);
    res.status(201).send({
      message: "Product is created :)",
    });
  } catch (error) {
    next(error);
  }
};
