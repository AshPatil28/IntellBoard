import express from "express";
import cors from "cors"
import dotenv from "dotenv";
import path from "path"

import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";

dotenv.config();
const app=express();
const __dirname=path.resolve()


if(process.env.NODE_ENV!=="production"){
app.use(express.json());

    app.use(cors({
    origin:"http://localhost:5173"
}))
}



app.use("/api/notes",notesRoutes);
if(process.env.NODE_ENV==="production"){
app.use(express.static(path.join(__dirname,"../frontend/dist")))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
})
}


connectDB().then(()=>{
    app.listen(5001,()=> console.log("Server Started in Port:5001"))
});