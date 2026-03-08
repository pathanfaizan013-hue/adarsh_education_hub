import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (user) {
      navigate("/home");
    }
  }, []);

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) =>
        (u.email === emailOrUsername ||
          u.username === emailOrUsername) &&
        u.password === password
    );

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/home");
    } else {
      alert("Invalid Email/Username or Password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
    bg-gradient-to-br from-orange-200 via-pink-200 to-purple-200">

      <div className="w-[380px] bg-white/60 backdrop-blur-xl 
      rounded-[35px] shadow-2xl p-8">

        <h2 className="text-center text-orange-500 text-3xl font-semibold">
          Welcome
        </h2>

        <h3 className="text-center text-xl font-semibold text-gray-700 mb-6">
          Adarsh Education Hub
        </h3>

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Email or Username"
            value={emailOrUsername}
            onChange={(e) => setEmailOrUsername(e.target.value)}
            className="w-full p-3 rounded-xl bg-white/80 outline-none shadow-inner"
          />

          <div className="relative">
            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-xl bg-white/80 outline-none shadow-inner"
            />
            <span
              onClick={() => setShow(!show)}
              className="absolute right-4 top-3 cursor-pointer text-sm text-gray-600"
            >
              {show ? "Hide" : "Show"}
            </span>
          </div>

          <button
            onClick={handleLogin}
            className="w-full py-3 rounded-xl text-white font-semibold
            bg-gradient-to-r from-orange-400 to-pink-500 shadow-lg"
          >
            Login
          </button>

          <p className="text-center text-sm mt-3">
            Don’t have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </span>
          </p>

        </div>
      </div>
    </div>
  );
}