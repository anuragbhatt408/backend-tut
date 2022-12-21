import { Router } from "express";
import {
  destroy,
  index,
  show,
  store,
  update,
} from "../controllers/BookControllers.js";
import { auth } from "../middleware/auth.js";

const BookRouter = Router();

BookRouter.use(auth).get("/", index);

BookRouter.use(auth).post("/", store);

BookRouter.get("/:id", show);

BookRouter.route("/:id").patch(update).delete(destroy);

export default BookRouter;
