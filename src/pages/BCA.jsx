import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BCA() {
  const navigate = useNavigate();

  const semesters = [
    "Semester 1",
    "Semester 2",
    "Semester 3",
    "Semester 4",
    "Semester 5",
    "Semester 6",
  ];

  return (
    <div className="pb-24">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Adarsh Education Hub
        </h1>
        <h2 className="text-2xl font-semibold text-orange-500 mt-1">
          BCA Department
        </h2>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
        />
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-11 pr-4 py-3 rounded-full bg-white shadow-md outline-none"
        />
      </div>

      {/* Semester Cards */}
      <div className="space-y-4">
        {semesters.map((sem, index) => (
          <div
            key={index}
            onClick={() => navigate(`/semester/${index + 1}`)}
            className="bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 
                       p-4 rounded-2xl shadow-md cursor-pointer 
                       active:scale-95 transition"
          >
            <h3 className="text-lg font-semibold text-gray-800">
              {sem}
            </h3>
          </div>
        ))}
      </div>

    </div>
  );
}