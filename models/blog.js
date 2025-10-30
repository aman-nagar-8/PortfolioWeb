import mongoose from "mongoose";

const blog_schema = new mongoose.Schema({
    title: String,
    intro: String,
    tag: [String],
    title_img : String,
    images: [String],
    topics :[
        {
            title: String,
            detail : String,
        },
    ],
    created_At : {
        type : String,
    },
});

const blog = mongoose.models.blog || mongoose.model("blog" , blog_schema);

export default blog;