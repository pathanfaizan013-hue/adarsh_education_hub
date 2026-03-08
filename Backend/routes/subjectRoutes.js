import express from "express";
import Subject from "../models/Subject.js";

const router = express.Router();

// Subject create karne ke liye
router.post("/", async (req, res) => {
  try {
    const subject = await Subject.create(req.body);
    res.status(201).json(subject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Kisi semester ke subjects lane ke liye
router.get("/:departmentId", async (req, res) => {
  try {
    const subjects = await Subject.find({
      department: req.params.departmentId,
    });
    res.json(subjects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;