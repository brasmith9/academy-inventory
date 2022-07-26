import { users } from "../data.js";

//Middleware to check if user exist
const checkIfUserExist = (req, res, next) => {
  const user = users.find((item) => item.id == req.params.userId);
  if (!user) {
    res.status(404).send({
      message: "No user exist with the given ID",
      data: null,
    });
  }
  req.user = user;
  next();
};

export { checkIfUserExist };
