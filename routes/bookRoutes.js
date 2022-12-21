import { Router } from "express";
import {
  destroy,
  index,
  show,
  store,
  update,
} from "../controllers/BookControllers.js";

const BookRouter = Router();

BookRouter.get("/", index);

BookRouter.post("/", store);

BookRouter.get("/:id", show);

BookRouter.route("/:id").patch(update).delete(destroy);

export default BookRouter;
