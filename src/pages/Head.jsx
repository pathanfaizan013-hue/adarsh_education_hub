import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Head() {
  const navigate = useNavigate();

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
            Head of Institute
          </p>
        </div>

        {/* Top Notice */}
        <div className="px-6 pt-6">
          <div className="text-center text-sm font-medium text-blue-700 bg-blue-100 py-3 rounded-xl shadow">
            Student's Corner | Placements & MoU Cell | Competitive Exams & Career Guidance Cell
          </div>
        </div>

        {/* Cards Section */}
        <div className="px-6 py-6 space-y-6">

          {/* President */}
          <div className="bg-gradient-to-r from-yellow-200 to-pink-200 p-4 rounded-2xl shadow-md border border-white/60 backdrop-blur-lg">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              President
            </h2>
            <div className="flex gap-3">
              <img
                src="https://via.placeholder.com/80"
                alt="President"
                className="rounded-lg"
              />
              <p className="text-sm text-gray-700">
                Founder of Adarsh Education Society. Dedicated to providing quality education and leadership.
              </p>
            </div>
          </div>

          {/* Secretary */}
          <div className="bg-gradient-to-r from-yellow-200 to-purple-200 p-4 rounded-2xl shadow-md border border-white/60 backdrop-blur-lg">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Secretary
            </h2>
            <div className="flex gap-3">
              <img
                src="https://via.placeholder.com/80"
                alt="Secretary"
                className="rounded-lg"
              />
              <p className="text-sm text-gray-700">
                Warm greetings to all students. It is our pleasure to welcome you to Adarsh College.
              </p>
            </div>
          </div>

          {/* Principal */}
          <div className="bg-gradient-to-r from-blue-200 to-pink-200 p-4 rounded-2xl shadow-md border border-white/60 backdrop-blur-lg">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Principal
            </h2>
            <div className="flex gap-3">
              <img
                src="https://via.placeholder.com/80"
                alt="Principal"
                className="rounded-lg"
              />
              <p className="text-sm text-gray-700">
                Greetings to all students! Warm welcome to the family of Adarsh Education Society.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Buttons */}
        <div className="px-6 pb-6 space-y-4">

          <div className="bg-white/60 py-3 text-center rounded-xl shadow cursor-pointer hover:scale-[1.02] transition">
            Best Practices
          </div>

          <div className="bg-white/60 py-3 text-center rounded-xl shadow cursor-pointer hover:scale-[1.02] transition">
            Azadi ka Amrit Mahotsav
          </div>

          <div className="bg-white/60 py-3 text-center rounded-xl shadow cursor-pointer hover:scale-[1.02] transition">
            Alumni
          </div>

        </div>

      </div>
    </div>
  );
}