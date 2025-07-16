import express from "express";
import { createNotes, deleteNotes, getAllnotes, getNoteById, updateNotes } from "../controllers/notesControllers.js";

const router = express.Router();

router.get("/",getAllnotes)
router.post("/",createNotes)
router.get("/:id",getNoteById)
router.put("/:id",updateNotes)
router.delete("/:id",deleteNotes)

export default router;