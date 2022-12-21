import User from "../models/User.js";
import bcrypt from "bcrypt";
import pkg from "jsonwebtoken";

const { sign } = pkg;
const saltRounds = 10;

export const singup = async (req, res) => {
  const password = await bcrypt.hash(req.body.password, saltRounds);
  const data = { ...req.body, password };
  const user = await User.create(data);
  res.json(user);
};

export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    res.status(404).json("user not found");
    return;
  }
  if (!(await bcrypt.compare(req.body.password, user.password))) {
    res.status(404).json("user not found");
    return;
  }
  const token = await sign({ user }, "fake-jwt-secret");
  res.json({ user, access_token: token });
};
