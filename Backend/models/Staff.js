import mongoose from "mongoose";

const staffSchema = new mongoose.Schema({
  name: String,
  role: String,
  image: String
});

export default mongoose.model("Staff", staffSchema);