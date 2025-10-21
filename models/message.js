import mongoose from "mongoose";

const mess_schema = new mongoose.Schema({
  name: String,
  mess: String,
  date: Date,
  like: {
    type: Number,
    default: 0,
  },
});

const message = mongoose.models.message || mongoose.model("message", mess_schema);

export default message;