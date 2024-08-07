import { Request, Response } from "express";
import db from "../database/prisma.connection";

class ProductController {
  public async create(req: Request, res: Response) {
    try {
      const { description, price, qnt_stock, type } = req.body;
      await db.product.create({
        data: {
            description,
            price,
            qnt_stock,
            type
        },
      });

      return res.status(200).json({ success: true, msg: "Product created." });
    } catch (error) {
      return res.status(500).json({ success: false, msg: "Product not created." });
    }
  }
  public async list(req: Request, res: Response) {
    try {
      const products = await db.product.findMany();
      return res
        .status(200)
        .json({ success: true, msg: "Product list.", data: products });
    } catch (error) {
      return res.status(500).json({ success: false, msg: "Product not list." });
    }
  }
}



export default ProductController;
