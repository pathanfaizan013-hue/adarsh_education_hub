import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function About() {
  const navigate = useNavigate();

  const developers = [
    {
      name: "Faizan Pathan",
      role: "BCA Third Year Student",
    },
    {
      name: "Irfan Shaikh",
      role: "BCA Third Year Student",
    },
    {
      name: "Pratik Thakur",
      role: "BCA Third Year Student",
    },
  ];

  const technologies = [
    "JavaScript",
    "React JS",
    "Node JS",
    "MongoDB",
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
            About App
          </p>
        </div>

        {/* App Description */}
        <div className="px-6 pt-6">
          <div className="bg-gradient-to-r from-yellow-100 to-purple-100 p-4 rounded-2xl shadow-md border border-white/60 backdrop-blur-lg">
            <p className="text-sm text-gray-700 leading-relaxed">
              Adarsh Education Hub is a college management and learning
              application developed to provide students with easy access to
              courses, forms, timetable, study materials, and other academic
              activities in a simple and user-friendly interface.
            </p>
          </div>
        </div>

        {/* Developers Section */}
        <div className="px-6 py-6 space-y-5">

          <h2 className="text-lg font-semibold text-gray-800">
            Developed By
          </h2>

          {developers.map((dev, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded-2xl shadow-md border border-white/60 backdrop-blur-lg"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {dev.name}
              </h3>
              <p className="text-sm text-gray-600">
                {dev.role}
              </p>
            </div>
          ))}

        </div>

        {/* Technology Stack */}
        <div className="px-6 pb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            Technologies Used
          </h2>

          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/70 rounded-full text-sm font-medium text-gray-700 shadow"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}