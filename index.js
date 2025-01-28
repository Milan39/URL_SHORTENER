import express from "express";
import { connection } from "./connection.js";
import { router } from "./routes/routes.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser())

connection("mongodb://127.0.0.1:27017/url-shortener")
  .then(() => console.log("Database connection established."))
  .catch((error) =>
    console.log(`Error while establishing database connection: ${error}`)
  );

app.use("/", router);

app.listen(8000, () => {
  console.log(`Server is running`);
});
