import express from "express"; 
import BookController from "../controllers/booksController.js";

const bookRouter = express.Router();

bookRouter
    .get("/books", BookController.getBooks)
    .get("/books/search", BookController.getBooksByEditor)
    .get("/books/:id", BookController.getBooksById)
    .post("/books", BookController.createBook)
    .put("/books/:id", BookController.updateBook)
    .delete("/books/:id", BookController.deleteBook);

export default bookRouter;