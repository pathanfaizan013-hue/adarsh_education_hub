import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

export default function SubjectDetails() {
  const navigate = useNavigate();
  const { name } = useParams();

  const [search, setSearch] = useState("");

  const options = [
    "Syllabus",
    "Question Papers",
    "Notes",
    "E-Book",
    "Practical",
  ];

  const filteredOptions = options.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 pb-24">

      <div className="p-5">
        <button
          onClick={() => navigate(-1)}
          className="text-orange-500 text-lg mb-2"
        >
          ←
        </button>

        <h1 className="text-2xl font-bold text-gray-800">
          Adarsh Education Hub
        </h1>

        <h2 className="text-2xl font-bold text-orange-500 mt-1">
          {name}
        </h2>

        <p className="text-gray-600 text-sm mt-1">
          BCA Department / Semester 6 / {name}
        </p>

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

      <div className="px-5 mt-4">
        {filteredOptions.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-green-100 via-blue-200 to-purple-200 
                       p-4 rounded-xl shadow-md mb-4 flex justify-between items-center
                       cursor-pointer hover:scale-105 transition"
          >
            <span className="text-lg font-semibold text-gray-800">
              {item}
            </span>
            <span className="text-gray-500 text-xl">›</span>
          </div>
        ))}

        {filteredOptions.length === 0 && (
          <p className="text-center text-gray-500 mt-4">
            No results found
          </p>
        )}
      </div>

    </div>
  );
}