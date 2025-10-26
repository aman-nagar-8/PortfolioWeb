import mongoose from "mongoose";

const project_schema = new mongoose.Schema({
    title: String,
    intro: String,
    techstack: [String],
    github: String,
    demo : String,
    title_img : String,
    images: [String],

    features :[
        {
            title: String,
            detail : String,
            image : String
        },
    ],
    created_At : {
        type : String,
    },
});

const project = mongoose.models.project || mongoose.model("project" , project_schema)

export default project