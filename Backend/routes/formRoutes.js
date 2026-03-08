import express from "express";
import Form from "../models/Form.js";
import upload from "../middleware/upload.js";

const router = express.Router();

// ➜ ADD FORM WITH PDF
router.post("/add", upload.single("pdf"), async (req, res) => {
  try {
    const form = new Form({
      title: req.body.title,
      pdf: "/uploads/" + req.file.filename,
    });

    await form.save();
    res.json(form);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ➜ GET FORMS
router.get("/", async (req, res) => {
  const forms = await Form.find();
  res.json(forms);
});

export default router;