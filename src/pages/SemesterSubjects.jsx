import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";

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

  return (
    <div className="min-h-screen flex justify-center bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 py-6">

      <div className="w-[380px] bg-white/30 backdrop-blur-xl rounded-[40px] shadow-xl border border-white/50 overflow-hidden">

        {/* Header */}
        <div className="p-6 bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100">

          {/* Back + Title */}
          <div className="flex items-center gap-3">
            <ArrowLeft
              size={24}
              className="cursor-pointer text-gray-700"
              onClick={() => navigate(-1)}
            />
            <h1 className="text-2xl font-semibold text-gray-700">
              Adarsh Education Hub
            </h1>
          </div>

          <p className="text-base text-orange-500 mt-1 ml-9">
            BCA Department
          </p>

          {/* Search */}
          <div className="mt-5">
            <div className="flex items-center bg-white/70 rounded-full px-4 py-3 shadow-inner">
              <span className="mr-2 text-gray-500">🔍</span>
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent outline-none w-full text-gray-700"
              />
            </div>
          </div>
        </div>

        {/* Semester Title */}
        <div className="px-6 pt-6">
          <div className="px-5 py-4 rounded-2xl bg-gradient-to-r from-yellow-200 to-pink-200 shadow-md border border-white/60 backdrop-blur-lg">
            <span className="text-lg font-semibold text-gray-700">
              Semester {id}
            </span>
          </div>
        </div>

        {/* Subjects */}
        <div className="px-6 py-6 space-y-5">

          {subjects
            .filter((sub) =>
              sub.toLowerCase().includes(search.toLowerCase())
            )
            .map((sub, index) => (
              <div
                key={index}
                onClick={() => navigate(`/subject/${sub}`)}
                className="px-5 py-4 rounded-2xl bg-gradient-to-r from-yellow-100 to-purple-100 shadow-md border border-white/60 backdrop-blur-lg cursor-pointer transition hover:scale-[1.02]"
              >
                <span className="text-lg font-medium text-gray-700">
                  {index + 1}. {sub}
                </span>
              </div>
            ))}

        </div>

      </div>
    </div>
  );
}