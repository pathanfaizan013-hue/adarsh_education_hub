import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronRight } from "lucide-react";

export default function MenuPage() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }

    setDarkMode(!darkMode);
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login", { replace: true });
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
    bg-gradient-to-br from-orange-200 via-pink-200 to-purple-200 
    dark:bg-gray-900 p-6">

      <div className="w-[380px] bg-white/60 dark:bg-gray-800/60 
      backdrop-blur-xl rounded-[35px] shadow-2xl p-8">

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <ArrowLeft
            size={24}
            className="cursor-pointer dark:text-white"
            onClick={() => navigate(-1)}
          />
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-white">
            Menu
          </h2>
        </div>

        <div className="space-y-4">

          <MenuItem text="Notifications" />
          <MenuItem text="Settings" />
          <MenuItem text="My Profile" onClick={() => navigate("/profile")} />
          <MenuItem text="Downloads" onClick={() => navigate("/downloads")} />
          <MenuItem text="Help & Support" />

          <div className="flex justify-between items-center 
          bg-white/80 dark:bg-gray-700 p-4 rounded-xl shadow-inner">
            <span className="dark:text-white">App Version</span>
            <span className="text-gray-600 dark:text-gray-300">1.0.0</span>
          </div>

          {/* Dark Mode */}
          <div className="flex justify-between items-center 
          bg-white/80 dark:bg-gray-700 p-4 rounded-xl shadow-inner">
            <span className="dark:text-white">Dark Mode</span>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
              className="w-5 h-5"
            />
          </div>

          {/* Logout */}
          <div
            onClick={handleLogout}
            className="flex justify-between items-center 
            bg-red-100 dark:bg-red-500/30 
            p-4 rounded-xl shadow-inner cursor-pointer"
          >
            <span className="text-red-600 dark:text-red-400 font-semibold">
              Log Out
            </span>
            <ChevronRight size={18} className="text-red-500" />
          </div>

        </div>
      </div>
    </div>
  );
}

function MenuItem({ text, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex justify-between items-center 
      bg-white/80 dark:bg-gray-700 
      p-4 rounded-xl shadow-inner cursor-pointer"
    >
      <span className="dark:text-white">{text}</span>
      <ChevronRight size={18} className="text-gray-500" />
    </div>
  );
}