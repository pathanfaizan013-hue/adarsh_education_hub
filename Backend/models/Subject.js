import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",
    required: true,
  },
});

const Subject = mongoose.model("Subject", subjectSchema);

export default Subject;