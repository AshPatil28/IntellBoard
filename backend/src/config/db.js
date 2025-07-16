import mongoose from "mongoose"
export const connectDB= async ()=>{
    try{
       await mongoose.connect("mongodb+srv://apayush28:ndRhStYA4DXOkyZQ@cluster0.5kkjnh8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
       console.log("DB SUCCESSFULLY CONNECTED")
    } catch(error){
        console.log("Error connecting to mongodb",error)
        process.exit(1)
    }
}