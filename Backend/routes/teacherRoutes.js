import express from "express";
import multer from "multer";
import {
  getTeachers,
  addTeacher,
  deleteTeacher
} from "../controllers/teacherController.js";

/* Multer Storage */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

const router = express.Router();

router.get("/", getTeachers);

/* FIX */
router.post("/", upload.single("photo"), addTeacher);

router.delete("/:id", deleteTeacher);

export default router;