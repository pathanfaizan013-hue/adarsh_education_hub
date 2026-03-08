import express from "express";
import verifyToken from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/profile", verifyToken, (req, res) => {
  res.json({
    message: "Protected route accessed ✅",
    userId: req.user.id,
  });
});

export default router;