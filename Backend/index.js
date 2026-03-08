import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import departmentRoutes from "./routes/departmentRoutes.js";
import contentRoutes from "./routes/contentRoutes.js";
import subjectRoutes from "./routes/subjectRoutes.js";
import teacherRoutes from "./routes/teacherRoutes.js";
import formRoutes from "./routes/formRoutes.js";
import headRoutes from "./routes/headRoutes.js"
import staffRoutes from "./routes/staff.js";

dotenv.config();
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// 🔥 IMPORTANT FIX FOR STATIC UPLOADS (ES MODULE SAFE)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Test Route
app.get("/", (req, res) => {
  res.send("🚀 API is running...");
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/departments", departmentRoutes);
app.use("/api/content", contentRoutes);
app.use("/api/subjects", subjectRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api/forms", formRoutes);
app.use("/api/heads", headRoutes);
app.use("/api/staff", staffRoutes);
// Forms API
// app.get("/api/forms", (req, res) => {
//   res.json([
//     {
//       title: "Admission Form",
//       image: "/uploads/admission.png",
//       path: "/admission-form"
//     },
//     {
//       title: "Exam Form",
//       image: "/uploads/exam.png",
//       path: "/exam-form"
//     },
//     {
//       title: "Fees Form",
//       image: "/uploads/fees.png",
//       path: "/fees-form"
//     },
//     {
//       title: "Documents",
//       image: "/uploads/documents.png",
//       path: "/documents"
//     }
//   ]);
// });

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🔥 Server running on port ${PORT}`);
});
