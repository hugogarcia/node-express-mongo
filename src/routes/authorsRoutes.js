import express from "express"; 
import AuthorController from "../controllers/authorsController.js";

const authorsRouter = express.Router();

authorsRouter
    .get("/authors", AuthorController.getAuthors)
    .get("/authors/:id", AuthorController.getAuthorsById)
    .post("/authors", AuthorController.createAuthor)
    .put("/authors/:id", AuthorController.updateAuthor)
    .delete("/authors/:id", AuthorController.deleteAuthor);

export default authorsRouter;