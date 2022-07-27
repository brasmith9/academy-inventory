import { users } from "../data.js";

export const getAllUsers = (req, res) => {
  res.status(200).send({
    message: "Users fetched Successfuly",
    data: users,
  });
};

export const getSingleUser = (req, res) => {
  res.status(200).send({
    message: "User fetched Successfuly",
    data: req.user,
  });
};

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
};

export const updateUser = (req, res, next) => {
  //Get the request body
  const { user } = req;
  const data = req.body;
  //update the user data with new data

  if (data.fullName) {
    user.fullName = data.fullName;
  }
  if (data.email) {
    user.email = data.email;
  }
  if (data.shopName) {
    user.shopName = data.shopName;
  }
  if (data.password) {
    user.password = data.password;
  }

  return res.status(200).send({
    message: "User updated successfully",
    data: user,
  });
};

export const deleteUser = (req, res) => {
  const newUsers = users.filter((user) => {
    return user.id !== req.user.id;
  });
  // users.splice(req.user, 1);
  return res.status(200).send({
    message: "User deleted successfully",
    data: newUsers
  });
};
