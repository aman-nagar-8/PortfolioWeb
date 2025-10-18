import mongoose from "mongoose";

let isconnected = false;

export async function connectDB() {
    if(isconnected){
        return;
    }
    try{
        mongoose.connect(process.env.mongodbURL);
        isconnected = true;
        console.log("connected to mongoDB Atlas");
    }
    catch(error){
        console.error("mongoDB connection error :", error);
    }
}