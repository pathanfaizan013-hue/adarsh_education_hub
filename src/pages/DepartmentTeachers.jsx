import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function DepartmentTeachers() {
  const navigate = useNavigate();

  const teachers = [
    {
      name: "Prof. Amit Sharma",
      subject: "Computer Science",
      qualification: "M.Sc, NET",
    },
    {
      name: "Prof. Neha Patil",
      subject: "Cyber Security",
      qualification: "MCA, SET",
    },
    {
      name: "Prof. Rahul Deshmukh",
      subject: "Software Engineering",
      qualification: "M.Tech",
    },
    {
      name: "Prof. Sneha Kulkarni",
      subject: "Digital Image Processing",
      qualification: "M.Sc",
    },
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
            Teachers Information
          </p>
        </div>

        {/* Teachers List */}
        <div className="px-6 py-6 space-y-5">

          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-yellow-100 to-purple-100 p-4 rounded-2xl shadow-md border border-white/60 backdrop-blur-lg transition hover:scale-[1.02]"
            >
              <div className="flex gap-4 items-center">
                <img
                  src="https://via.placeholder.com/70"
                  alt="Teacher"
                  className="rounded-xl"
                />

                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {teacher.name}
                  </h2>
                  <p className="text-sm text-gray-600">
                    {teacher.subject}
                  </p>
                  <p className="text-sm text-gray-500">
                    {teacher.qualification}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}