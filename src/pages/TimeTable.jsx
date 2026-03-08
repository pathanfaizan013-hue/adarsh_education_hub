import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function TimeTable() {
  const navigate = useNavigate();

  const timetable = [
    { day: "Monday", subjects: "Python | Cyber Security | Lab" },
    { day: "Tuesday", subjects: "Software Engineering | DIP" },
    { day: "Wednesday", subjects: "Cyber Security | Project Work" },
    { day: "Thursday", subjects: "Python | Software Engineering" },
    { day: "Friday", subjects: "DIP | Project" },
    { day: "Saturday", subjects: "Practical / Seminar" },
  ];

  return (
    <div className="min-h-screen flex justify-center bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 py-6">

      <div className="w-[380px] bg-white/30 backdrop-blur-xl rounded-[40px] shadow-xl border border-white/50 overflow-hidden">

        {/* Header */}
        <div className="p-6 bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100">

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
            Time Table
          </p>
        </div>

        {/* Timetable Cards */}
        <div className="px-6 py-6 space-y-5">

          {timetable.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-yellow-100 to-purple-100 p-4 rounded-2xl shadow-md border border-white/60 backdrop-blur-lg transition hover:scale-[1.02]"
            >
              <h2 className="text-lg font-semibold text-gray-800">
                {item.day}
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                {item.subjects}
              </p>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}