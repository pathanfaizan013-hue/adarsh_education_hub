import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import otpGenerator from "otp-generator";
import sendEmail from "../utils/sendEmail.js";

// ================= SIGNUP =================
export const registerUser = async (req, res) => {
  try {
    let { username, email, password } = req.body;

    email = email.toLowerCase(); // 🔥 IMPORTANT

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
      digits: true,
    });

    await User.create({
      username,
      email,
      password: hashedPassword,
      otp,
      otpExpires: Date.now() + 5 * 60 * 1000,
      isVerified: false,
    });

    await sendEmail(email, otp);

    res.status(201).json({
      message: "OTP sent to your email",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ================= VERIFY OTP =================
export const verifyOtp = async (req, res) => {
  try {
    let { email, otp } = req.body;

    email = email.toLowerCase(); // 🔥

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (user.otp !== otp || user.otpExpires < Date.now()) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    user.isVerified = true;
    user.otp = null;
    user.otpExpires = null;

    await user.save();

    res.json({ message: "Email verified successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// ================= RESEND OTP =================
export const resendOtp = async (req, res) => {
  try {
    let { email } = req.body;

    email = email.toLowerCase(); // 🔥

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (user.isVerified) {
      return res.status(400).json({ message: "User already verified" });
    }

    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
      digits: true,
    });

    user.otp = otp;
    user.otpExpires = Date.now() + 5 * 60 * 1000;

    await user.save();
    await sendEmail(email, otp);

    res.json({ message: "New OTP sent successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ================= LOGIN =================
// ================= LOGIN =================
// export const loginUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // 🔥 Email ko lowercase me convert kar rahe
//     const user = await User.findOne({
//       email: email.toLowerCase(),
//     });

//     if (!user) {
//       return res.status(400).json({ message: "User not found" });
//     }

//     if (!user.isVerified) {
//       return res
//         .status(400)
//         .json({ message: "Please verify your email first" });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     const token = jwt.sign(
//       {
//         id: user._id,
//         role: user.role,
//       },
//       process.env.JWT_SECRET,
//       { expiresIn: "7d" },
//     );

//     res.json({
//       message: "Login successful",
//       token,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      $or: [
        { email: email.toLowerCase() },
        { username: email }
      ]
    });

    if (!user)
      return res.status(400).json({ message: "User not found" });

    if (!user.isVerified)
      return res
        .status(400)
        .json({ message: "Please verify your email first" });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
