import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
  subjectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject",
  },
  type: String,
  title: String,
  file: String, // IMPORTANT (fileName nahi)
});

export default mongoose.model("Content", contentSchema);