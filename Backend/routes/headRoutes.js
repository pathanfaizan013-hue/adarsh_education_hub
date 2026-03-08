import express from "express";
import Head from "../models/head.js";
import upload from "../middleware/upload.js";

const router = express.Router();


// ADD HEAD
router.post("/add", upload.single("image"), async (req, res) => {
  try {
    const head = new Head({
      title: req.body.title,
      name: req.body.name,
      description: req.body.description,
      image: "/uploads/" + req.file.filename
    });

    await head.save();
    res.json(head);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// GET HEAD LIST
router.get("/", async (req, res) => {
  try {
    const heads = await Head.find();
    res.json(heads);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;