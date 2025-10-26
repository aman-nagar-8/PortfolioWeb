import mongoose from "mongoose";

const user_schema = new mongoose.Schema({
    title: String,
    intro: String,
    location: String,
    mess: String
});

const user = mongoose.models.user || mongoose.model("user" , user_schema);

export default user;