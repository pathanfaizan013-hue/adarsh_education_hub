import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  title: String,
  pdf: String,
});

export default mongoose.model("Form", formSchema);