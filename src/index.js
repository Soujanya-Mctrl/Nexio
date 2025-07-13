import dotenv from "dotenv";
import connectToDatabase from "./db/db.js";

dotenv.config({path: "./env"});

connectToDatabase();
