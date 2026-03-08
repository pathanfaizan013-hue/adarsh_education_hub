import express from "express";
import { 
  registerUser, 
  loginUser, 
  verifyOtp, 
  resendOtp   // 🔥 ADD THIS
} from "../controllers/authController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.post("/verify-otp", verifyOtp);
router.post("/resend-otp", resendOtp); 

router.get("/profile", protect, (req, res) => {
  res.json({
    message: "Profile data accessed successfully",
    userId: req.userId,
  });
});

export default router;