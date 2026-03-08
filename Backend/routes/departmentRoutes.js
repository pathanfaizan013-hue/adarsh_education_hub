import express from "express";
import Department from "../models/Department.js";

const router = express.Router();

router.get("/:courseId", async (req, res) => {
  try {
    const departments = await Department.find({
      course: req.params.courseId,
    });

    res.json(departments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, course } = req.body;

    const newDepartment = await Department.create({
      name,
      course,
    });

    res.status(201).json(newDepartment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;