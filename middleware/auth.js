import pkg from "jsonwebtoken";
import { ObjectId } from "mongodb";
import User from "../models/User.js";
const { verify } = pkg;

export const auth = async (req, res, next) => {
  if (req.headers && req.headers.authorization) {
    const token = req.headers.authorization;
    try {
      const decode = await verify(token, "fake-jwt-secret");
      const user = await User.findOne({ _id: ObjectId(decode.user._id) });

      if (!user) {
        res.status(401).json({ error: "Unauthorized" });
        return;
      }

      next();
    } catch (error) {
      res.status(401).json({ error: "Unauthorized" });
    }
  }
};
