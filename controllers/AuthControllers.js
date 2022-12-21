import User from "../models/User.js";

export const singup = async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
};
