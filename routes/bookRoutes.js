import { Router } from "express";
import connect from "../database/db.js";

const BookRouter = Router();

BookRouter.get("/", async (req, res) => {
  const db = await connect();
  const books = await db.collection("book").find({}).toArray();
  res.json({ message: books });
});

BookRouter.post("/", async (req, res) => {
  const db = await connect();
  db.collection("book").insertOne(req.body);
  res.json({ data: "Book Stored" });
});

BookRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`single book id : ${id}`);
  // res.send("single book");
});

BookRouter.route("/:id")
  .patch((req, res) => {
    const id = req.params.id;
    res.send(`single book id for update : ${id}`);
    // res.send("single book");
  })
  .delete((req, res) => {
    const id = req.params.id;
    res.send(`single book id for delete : ${id}`);
    // res.send("single book");
  });

export default BookRouter;
