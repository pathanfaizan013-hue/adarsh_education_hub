import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      // token save
      localStorage.setItem("token", res.data.token);

      alert("Login Success ✅");

      navigate("/home");
    } catch (err) {
      console.log(err.response?.data);
      alert("Login Failed ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-200 via-pink-200 to-purple-200">

      {/* Card */}
      <div className="w-[350px] bg-white/30 backdrop-blur-xl rounded-[40px] shadow-2xl p-8 border border-white/40">

        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-orange-500 mb-2">
            Welcome
          </h1>
          <h2 className="text-xl font-bold text-purple-700">
            Adarsh Education Hub
          </h2>
        </div>

        {/* Email */}
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 mb-4 rounded-2xl bg-white/50 border border-white/60 outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* Password */}
        <div className="relative mb-5">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-2xl bg-white/50 border border-white/60 outline-none focus:ring-2 focus:ring-orange-400"
          />

          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-3 cursor-pointer text-gray-600"
          >
            👁
          </span>
        </div>

        {/* Button */}
        <button
          onClick={handleLogin}
          className="w-full py-3 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold hover:opacity-90 transition"
        >
          Login
        </button>

        {/* Extra Links */}
        <div className="text-center text-sm text-gray-600 mt-4">
          <p className="cursor-pointer hover:text-orange-500">
            Forgot Password?
          </p>

          <p className="mt-2">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-orange-500 cursor-pointer font-semibold"
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}