
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = () => {
    if (!form.username || !form.email || !form.password) {
      alert("Fill all fields");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Account Created Successfully!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
    bg-gradient-to-br from-orange-200 via-pink-200 to-purple-200">

      <div className="w-[380px] bg-white/60 backdrop-blur-xl 
      rounded-[35px] shadow-2xl p-8">

        <h2 className="text-center text-orange-500 text-3xl font-semibold">
          Create Account
        </h2>

        <h3 className="text-center text-xl font-semibold text-gray-700 mb-6">
          Adarsh Education Hub
        </h3>

        <div className="space-y-4">

          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-white/80 outline-none shadow-inner"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-white/80 outline-none shadow-inner"
          />

          <div className="relative">
            <input
              type={show ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={handleChange}
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
            onClick={handleSignup}
            className="w-full py-3 rounded-xl text-white font-semibold
            bg-gradient-to-r from-orange-400 to-pink-500 shadow-lg"
          >
            Sign Up
          </button>

          <p className="text-center text-sm mt-3">
            Already have account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>

        </div>
      </div>
    </div>
  );
}