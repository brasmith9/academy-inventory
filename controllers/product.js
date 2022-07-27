import { products } from "../data.js";

export const getAllProducts = (req, res) => {
  return res.status(200).send({
    message: "Products fetched successfully",
    data: products
  });
};