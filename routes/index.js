import express from "express";
import { Router } from "express";

import bookRoutes from "./bookRoutes.js";
import authRoutes from "./authRoutes.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.use("/book", bookRoutes);
router.use("/auth", authRoutes);

router.get("/*", (req, res) => {
  res.send("Page not found");
});
export default router;
