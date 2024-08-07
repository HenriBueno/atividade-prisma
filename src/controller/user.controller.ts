import { Request, Response } from "express";
import db from "../database/prisma.connection";

class UserController {
  public async create(req: Request, res: Response) {
    try {
      const { name, age, email, password, github } = req.body;
      await db.user.create({
        data: {
          name,
          age,
          email,
          password,
          github
        },
      });

      return res.status(200).json({ success: true, msg: "User created." });
    } catch (error) {
      return res.status(500).json({ success: false, msg: "User not created." });
    }
  }
  public async list(req: Request, res: Response) {
    try {
      const users = await db.user.findMany();
      return res
        .status(200)
        .json({ success: true, msg: "User list.", data: users });
    } catch (error) {
      return res.status(500).json({ success: false, msg: "User not list." });
    }
  }
}



export default UserController;
