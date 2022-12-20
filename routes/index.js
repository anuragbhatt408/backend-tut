import express from "express";
import { Router } from "express";

import bookRoutes from "./bookRoutes.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.use("/book", bookRoutes);

router.get("/*", (req, res) => {
  res.send("Page not found");
});
export default router;
