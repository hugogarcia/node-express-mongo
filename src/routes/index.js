import express from "express"; 
import bookRoutes from "./booksRoutes.js";
import authorsRouter from "./authorsRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({message: 'Welcome to API!'});
    })

    app.use(
        express.json(),
        bookRoutes,
        authorsRouter
    )
};

export default routes;