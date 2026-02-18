
import { ArrowLeft, ChevronRight, Bell, Settings, LogOut, Moon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MenuPage() {
  const navigate = useNavigate();
  const [dark, setDark] = useState(false);

  return (
    <div className="relative">

      {/* Top Header */}
      <div className="flex items-center gap-3 mb-6">
        <ArrowLeft
          size={22}
          className="text-gray-700 cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <h1 className="text-2xl font-semibold text-gray-800"></h1>
      </div>

      {/* Big Center Title */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-semibold text-gray-700"></h2>
      </div>

      {/* Menu Options */}
      <div className="space-y-4">

        {/* Notifications */}
        <div className="bg-gradient-to-r from-yellow-200 to-purple-200 p-4 rounded-2xl shadow-md flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Bell size={22} className="text-yellow-700" />
            <span className="text-lg font-medium text-gray-800">
              Notifications
            </span>
          </div>
          <ChevronRight size={20} className="text-gray-600" />
        </div>

        {/* Settings */}
        <div className="bg-gradient-to-r from-green-200 to-blue-200 p-4 rounded-2xl shadow-md flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Settings size={22} className="text-green-700" />
            <span className="text-lg font-medium text-gray-800">
              Settings
            </span>
          </div>
          <ChevronRight size={20} className="text-gray-600" />
        </div>

        {/* Log Out */}
        <div className="bg-gradient-to-r from-orange-200 to-purple-200 p-4 rounded-2xl shadow-md flex items-center justify-between">
          <div className="flex items-center gap-4">
            <LogOut size={22} className="text-orange-700" />
            <span className="text-lg font-medium text-gray-800">
              Log Out
            </span>
          </div>
          <ChevronRight size={20} className="text-gray-600" />
        </div>

        {/* Dark Mode */}
        <div className="bg-gradient-to-r from-yellow-100 to-purple-200 p-4 rounded-2xl shadow-md flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Moon size={22} className="text-gray-700" />
            <span className="text-lg font-medium text-gray-800">
              Dark Mode
            </span>
          </div>

          {/* Toggle Switch */}
          <button
            onClick={() => setDark(!dark)}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
              dark ? "bg-purple-500" : "bg-gray-300"
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                dark ? "translate-x-6" : ""
              }`}
            />
          </button>
        </div>

      </div>

    </div>
  );
}