import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
import UserController from "./controller/user.controller";
import ProductController from "./controller/product.controller";

dotenv.config();

const app = express();

app.use(express.json());

const port = process.env.PORT;

app.listen(port, () => {
  console.log("Server is running...");
});

//ROUTES
app.get("/", (req: Request, res: Response) => {
  return res.status(200).json({ success: true, msg: "Server is running!" });
});

//Controller
const userController = new UserController();
const productController = new ProductController();
app.post("/product", productController.create);
app.get("/list/products", productController.list)
app.post("/user", userController.create);
app.get("/list/users", userController.list)



