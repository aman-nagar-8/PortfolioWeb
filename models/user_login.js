import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin", "visitor"], default: "visitor" },
});

const Login_User = mongoose.models.Login_User || mongoose.model("Login_User", userSchema);
export default Login_User;
