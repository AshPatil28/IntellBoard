import notesRoutes from "./routes/notesRoutes.js"
import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
const app=express();
app.use(express.json());

connectDB();

app.use("/api/notes",notesRoutes);

app.listen(5001,()=> console.log("Server Started in Port:5001"))