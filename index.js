import express from "express";
import { getAllUsers, getSingleUser, createUser } from "./handlers/user.js";
import { checkIfUserExist } from "./middleware/index.js";

const app = express();
const port = 8080;

app.use(express.json());

//Root Page
app.get("/", (req, res) => {
  res.send("Welcome to our page🚀");
});

//Get All users
app.get("/api/users", getAllUsers);

//Get Single User
app.get("/api/user/:userId", checkIfUserExist, getSingleUser);

//Create a new User
app.post("/api/users", createUser);

app.listen(port, () => {
  console.log(`App started at http://localhost:${port}`);
});
