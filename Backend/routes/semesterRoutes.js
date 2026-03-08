import express from "express";
import Semester from "../models/Semester.js";

const router = express.Router();

router.get("/:departmentId", async (req, res) => {
  try {
    const semesters = await Semester.find({
      department: req.params.departmentId,
    });

    res.json(semesters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;