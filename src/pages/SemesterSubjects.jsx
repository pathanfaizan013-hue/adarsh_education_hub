import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

export default function SemesterSubjects() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [search, setSearch] = useState("");

  const subjects = [
    "Python",
    "Cyber Security",
    "Software Engineering",
    "Digital Image Processing",
    "Project",
  ];

  // 🔥 Filter Logic
  const filteredSubjects = subjects.filter((sub) =>
    sub.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 pb-24">

      <div className="p-5">
        <h1 className="text-3xl font-bold text-gray-800">
          Adarsh Education Hub
        </h1>

        <h2 className="text-xl text-orange-500 font-semibold mt-1">
          BCA Department
        </h2>

        {/* 🔥 Working Search */}
        <div className="mt-4">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-5 py-3 rounded-full shadow-md bg-white/70 backdrop-blur-md outline-none"
          />
        </div>
      </div>

      <div className="px-5">
        <div className="bg-gradient-to-r from-yellow-200 to-pink-300 p-4 rounded-xl shadow-md mb-4 font-semibold text-lg">
          Semester {id}
        </div>

        {filteredSubjects.map((sub, index) => (
          <div
            key={index}
            onClick={() => navigate(`/subject/${sub}`)}
            className="bg-gradient-to-r from-yellow-100 via-pink-200 to-purple-200 p-4 rounded-xl shadow-md mb-4 cursor-pointer hover:scale-105 transition"
          >
            {index + 1}. {sub}
          </div>
        ))}

        {filteredSubjects.length === 0 && (
          <p className="text-center text-gray-500 mt-4">
            No subjects found
          </p>
        )}
      </div>

    </div>
  );
}