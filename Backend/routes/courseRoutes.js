import express from "express";
import {
  createCourse,
  getAllCourses,
  updateCourse,
  deleteCourse,
} from "../controllers/courseController.js";

import { protect, adminOnly } from "../middleware/adminMiddleware.js";

const router = express.Router();

// Public route
router.get("/", getAllCourses);

// Admin routes
router.post("/", protect, adminOnly, createCourse);
router.put("/:id", protect, adminOnly, updateCourse);
router.delete("/:id", protect, adminOnly, deleteCourse);

export default router;