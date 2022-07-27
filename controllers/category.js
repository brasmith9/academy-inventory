import { category } from "../data.js";

export const getAllCategory = (req, res) => {
  return res.status(200).send({
    message: "Categories fetched successfully",
    data: category
  });
};