import { ObjectId } from "mongodb";
import Book from "../models/Book.js";

export const index = async (req, res) => {
  const books = await Book.find({});
  res.json({ message: books });
};

export const store = async (req, res) => {
  try {
    const book = Book.create(req.body);
    res.json({ data: "Book Stored" });
  } catch (error) {
    res.json(error);
  }
};

export const show = async (req, res) => {
  const id = ObjectId(req.params.id);
  const book = await Book.find({ _id: id });
  res.json(book);
};

export const update = async (req, res) => {
  const _id = ObjectId(req.params.id);
  const book = await Book.updateOne({ _id }, { $set: req.body });
  res.json(book);
};

export const destroy = async (req, res) => {
  const id = ObjectId(req.params.id);
  const book = await Book.deleteOne({ _id: id });
  res.json(book);
};
