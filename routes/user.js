import { Router } from "express";
import {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/user.js";
import { checkIfUserExist } from "../middlewares/index.js";
import { userSchema } from "../middlewares/validation.js";

const router = Router();

//Get All users
router.get("/users", getAllUsers);

//Get Single User
router.get("/user/:userId", checkIfUserExist, getSingleUser);

//Create a new User
router.post(
  "/users",
  (req, res, next) => {
    const {
      error: { details },
    } = userSchema.validate(req.body, { abortEarly: false });
    if (details) {
      return res.status(400).send({
        error: details,
      });
    }
    next();
  },
  createUser
);

//Update an existing user
router.put("/user/:userId", checkIfUserExist, updateUser);

//Delete a user
router.delete("/user/:userId", checkIfUserExist, deleteUser);

export default router;
