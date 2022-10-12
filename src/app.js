import express from "express";
import db from "./config/db-connection.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Connection error"));
db.once("open", () => {
    console.log("Connection worked!");
});

const app = express();
app.use(express.json());
routes(app);

export default app;