import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
  },
  { timestamps: true }
);

const Department = mongoose.model("Department", departmentSchema);

export default Department;