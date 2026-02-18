
import { useNavigate } from "react-router-dom";
import BottomNavbar from "../components/BottomNavbar";

export default function Profile() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 p-4">
      
      <div className="w-[390px] h-[820px] bg-white/30 backdrop-blur-xl rounded-[40px] shadow-2xl relative overflow-hidden">

        {/* HEADER */}
        <div className="p-5 flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="text-2xl text-orange-500"
          >
            ←
          </button>
          <h1 className="text-xl font-semibold text-gray-700">Profile</h1>
        </div>

        {/* CONTENT */}
        <div className="px-6 pb-28">

          {/* Avatar */}
          <div className="flex flex-col items-center">
            <div className="w-36 h-36 rounded-full bg-white/70 shadow-lg flex items-center justify-center">
              <img
                src="https://i.imgur.com/8Km9tLL.png"
                alt="avatar"
                className="w-32 h-32 rounded-full object-cover"
              />
            </div>

            <h2 className="mt-4 text-2xl font-semibold text-gray-700">
              Faizan Khan
            </h2>

            <div className="flex items-center gap-2 text-gray-600 mt-2">
              <span>✉</span>
              <span>faizankhan123@gmail.com</span>
              <span className="ml-2 cursor-pointer">✏</span>
            </div>
          </div>

          {/* BIO CARD */}
          <div className="mt-8 bg-white/60 backdrop-blur-md rounded-2xl shadow-md p-5">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold text-gray-700">Bio</h3>
              <span className="cursor-pointer">✏</span>
            </div>
            <p className="text-gray-600 text-sm">
              Passionate BCA student | Lover of coding and technology. Always eager to learn and explore new things!
            </p>
          </div>

          {/* CLASS CARD */}
          <div className="mt-6 bg-white/60 backdrop-blur-md rounded-2xl shadow-md p-5">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold text-gray-700">Class</h3>
              <span className="cursor-pointer">✏</span>
            </div>
            <p className="text-gray-600 text-sm">
              BCA - Semester 6
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}