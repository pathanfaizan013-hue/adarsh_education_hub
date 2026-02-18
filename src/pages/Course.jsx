import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Course() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const departments = [
    { name: "B.Sc Department", path: "/bsc" },
    { name: "BCA Department", path: "/bca" },
    { name: "BCS Department", path: "/bcs" },
    { name: "BA Department", path: "/ba" },
    { name: "B.Com Department", path: "/bcom" },
  ];

  const filteredDepartments = departments.filter((dept) =>
    dept.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-4">

      {/* Header */}
      <h1 className="text-3xl font-bold text-purple-800 text-center mb-2">
        Adarsh Education Hub
      </h1>
      <p className="text-center text-orange-500 mb-4">Courses</p>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 rounded-xl shadow-md border border-white bg-white/60 backdrop-blur-md outline-none focus:ring-2 focus:ring-purple-400"
        />
      </div>

      {/* Department Cards */}
      <div className="space-y-4">
        {filteredDepartments.length > 0 ? (
          filteredDepartments.map((dept, index) => (
            <div
              key={index}
              onClick={() => navigate(dept.path)}
              className="cursor-pointer p-4 rounded-2xl shadow-lg bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 hover:scale-105 transition-all duration-300"
            >
              <h2 className="text-lg font-semibold text-gray-800">
                {dept.name}
              </h2>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No results found</p>
        )}
      </div>
    </div>
  );
}

export default Course;