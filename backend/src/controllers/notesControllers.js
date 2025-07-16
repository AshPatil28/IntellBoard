import Note from "../models/Note.js"

export async function getAllnotes(req,res){
   try {
    const notes=await Note.find().sort({createdAt:-1})
    res.status(200).json(notes)
   } catch (error) {
    console.error("Error in getAllNotes controller",error)
    res.status(500).json({message:"Internal server error"})
}
}
export async function getNoteById(req,res) {
    try {
        const note =await Note.findById(req.params.id);
        if(!note) return res.status(404).json({message:"Note not found"})
        res.status(200).json(note)
    } catch (error) {
        console.error("Error in getAllNotes controller",error)
        res.status(500).json({message:"Internal server error"})
    }
 }
export async function createNotes(req,res){
    try {
        const {title,content}=req.body;
        const note=new Note({title,content});
        const savedNote=await note.save();
        res.status(201).json(savedNote)
    } catch (error) {
        console.error("Error in createNotes controller",error)
        res.status(500).json({message:"Internal server error"})
    }
}

export async function updateNotes(req,res){
    try {
        const {title,content}=req.body;
        const updatedNode= await Note.findByIdAndUpdate(req.params.id,{title,content},{
            new:true,
        });

        if(!updatedNode) return res.status(404).json({message:"Note not found"})
            
            res.status(200).json(updatedNode)
        } catch (error) {
        }
    }
    export async function deleteNotes(req,res){
        try {
            const deletednote=await Note.findByIdAndDelete(req.params.id);
            if(!deletednote) return res.status(404).json({message:"Note not found"})
            res.status(200).json(deletednote)
        
    } catch (error) {
        console.error("Error in deleteNotes controller",error)
        res.status(500).json({message:"Internal server error"})
    }
}

// mongodb+srv://apayush28:ndRhStYA4DXOkyZQ@cluster0.5kkjnh8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0