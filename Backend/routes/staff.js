import express from "express";
import Staff from "../models/Staff.js";
import upload from "../middleware/upload.js";

const router = express.Router();


// ✅ ADD STAFF (image upload ke sath)
router.post("/add", upload.single("image"), async (req, res) => {
  try {
    const staff = new Staff({
      name: req.body.name,
      role: req.body.role,
      image: "/uploads/" + req.file.filename,
    });

    await staff.save();

    res.json(staff);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// ✅ GET ALL STAFF
router.get("/", async (req, res) => {
  try {
    const staff = await Staff.find();
    res.json(staff);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


export default router;