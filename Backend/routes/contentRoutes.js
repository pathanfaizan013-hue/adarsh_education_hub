import express from "express";
import upload from "../middleware/upload.js";
import Content from "../models/Content.js";

const router = express.Router();

// Upload
router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const { subjectId, type, title } = req.body;

    console.log("REQ.FILE:", req.file); // debug

    const newContent = new Content({
      subjectId,
      type,
      title,
      file: req.file.filename,  // 👈 sirf ye
    });

    await newContent.save();

    res.json({ message: "File uploaded successfully" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

// Get by subject & type
router.get("/:subjectId/:type", async (req, res) => {
  const data = await Content.find({
    subjectId: req.params.subjectId,
    type: req.params.type,
  });

  res.json(data);
});

export default router;