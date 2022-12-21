import { Router } from "express";
import { singup } from "../controllers/AuthControllers.js";

const authRoutes = Router();

authRoutes.post("/signup", singup);

export default authRoutes;
