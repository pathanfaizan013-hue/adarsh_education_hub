
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Teachers() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const teachers = [
    { name: "John Doe", subject: "Mathematics", degree: "M.Sc., B.Ed.", exp: "10+ Years Experience" },
    { name: "Sarah Verma", subject: "English", degree: "M.A (English), B.Ed.", exp: "8+ Years Experience" },
    { name: "Anita Sharma", subject: "Physics", degree: "M.Sc., B.Ed.", exp: "12+ Years Experience" },
    { name: "Arun Kumar", subject: "Chemistry", degree: "M.Sc., B.Ed.", exp: "9+ Years Experience" },
    { name: "Mohan Joshi", subject: "History", degree: "M.A., B.Ed.", exp: "15+ Years Experience" },
    { name: "Sneha Mishra", subject: "Hindi", degree: "M.A., B.Ed.", exp: "7+ Years Experience" },
    { name: "Manish Patil", subject: "Commerce", degree: "M.Com., B.Ed.", exp: "11+ Years Experience" },
  ];

  const filtered = teachers.filter(t =>
    t.name.toLowerCase().includes(search.toLowerCase()) ||
    t.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 p-4">

      <div className="w-[390px] h-[820px] bg-white/30 backdrop-blur-xl rounded-[40px] shadow-2xl relative overflow-hidden">

        {/* Header */}
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-700">
            Teachers Information
          </h1>

          {/* Search */}
          <div className="mt-4 relative">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-12 py-3 rounded-full bg-white/60 backdrop-blur-md border border-white/60 shadow-md outline-none"
            />
            <span className="absolute left-4 top-3 text-gray-500 text-lg">
              🔍
            </span>
          </div>
        </div>

        {/* Grid */}
        <div className="px-4 pb-28 overflow-y-auto h-[650px] grid grid-cols-2 gap-4">

          {filtered.map((t, i) => (
            <div
              key={i}
              className="bg-white/60 backdrop-blur-md rounded-2xl shadow-md p-3 text-center"
            >
              <img
                src="https://i.imgur.com/8Km9tLL.png"
                alt="teacher"
                className="w-full h-32 object-cover rounded-xl"
              />

              <h2 className="mt-2 font-semibold text-gray-700">
                {t.name}
              </h2>

              <p className="text-orange-500 text-sm">
                {t.subject}
              </p>

              <p className="text-xs text-gray-600 mt-1">
                {t.degree}
              </p>

              <p className="text-xs text-gray-500">
                {t.exp}
              </p>
            </div>
          ))}

        </div>

        {/* Bottom Navbar */}
        <div className="absolute bottom-0 w-full bg-white/50 backdrop-blur-md border-t border-white/40 flex justify-around py-4 rounded-b-[40px]">

          <button onClick={() => navigate("/home")} className="flex flex-col items-center text-blue-500">
            🏠
            <span className="text-sm">Home</span>
          </button>

          <button onClick={() => navigate("/downloads")} className="flex flex-col items-center text-gray-600">
            ⬇
            <span className="text-sm">Download</span>
          </button>

          <button onClick={() => navigate("/menu")} className="flex flex-col items-center text-gray-600">
            ☰
            <span className="text-sm">Menu</span>
          </button>

          <button onClick={() => navigate("/profile")} className="flex flex-col items-center text-gray-600">
            👤
            <span className="text-sm">Profile</span>
          </button>

        </div>

      </div>
    </div>
  );
}