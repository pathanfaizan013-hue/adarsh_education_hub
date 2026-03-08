import mongoose from "mongoose";

const semesterSchema = new mongoose.Schema(
  {
    number: {
      type: Number,
      required: true,
    },
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Semester", semesterSchema);