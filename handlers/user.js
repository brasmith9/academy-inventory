import { users } from "../data.js";

export const getAllUsers = (req, res) => {
  res.status(200).send({
    message: "Users fetched Successfuly",
    data: users,
  });
}

export const getSingleUser = (req, res) => {
  res.status(200).send({
    message: "User fetched Successfuly",
    data: req.user,
  });
}

export const createUser = (req, res) => {
  const { fullName, email, password, shopName } = req.body;
  const userId = Math.floor(Math.random(1, 100));
  users.push({
    id: userId,
    fullName,
    email,
    shopName,
    password,
  });
  res.status(201).send({
    message: "User created Successfully",
    data: users,
  });
}
