import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_CONNECTION);

let db = mongoose.connection;

export default db;