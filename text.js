import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = "mongodb+srv://portfolio:portfolio465612am@portfolio.ldp6jvz.mongodb.net/?retryWrites=true&w=majority&appName=Portfolio";
const name = process.env.name;
console.log(name)


console.log("URI:", MONGODB_URI);

mongoose.connect(MONGODB_URI)
  .then(() => console.log("Connected!"))
  .catch((err) => console.log("Error:", err));
