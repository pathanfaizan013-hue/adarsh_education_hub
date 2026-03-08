import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    // 🔐 Email Verification Fields
    isVerified: {
      type: Boolean,
      default: false,
    },

    otp: {
      type: String,
    },

    otpExpires: {
      type: Date,
    },


    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true },
);

export default mongoose.model("User", userSchema);
