import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import apiRoutes from "./routes/index.js";

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan("combined"));

// Root Page
app.get("/", (req, res) => {
  res.send("Welcome to our page🚀");
});

app.use(apiRoutes);

app.listen(port, () => {
  console.log(`App started at http://localhost:${port}`);
});

export default app;
