
import { useNavigate } from "react-router-dom";
import {
  Search,
  User,
  Users,
  BookOpen,
  FileText,
  Clock,
  GraduationCap,
  Info
} from "lucide-react";

export default function Home() {
  const navigate = useNavigate();

  const menuItems = [
    { title: "Head of Institute", icon: User, gradient: "from-yellow-200 to-pink-200", path: "/head" },
    { title: "Teachers Information", icon: Users, gradient: "from-yellow-200 to-pink-200", path: "/teachers" },
    { title: "Courses", icon: BookOpen, gradient: "from-blue-200 to-purple-200", path: "/course" },
    { title: "Forms", icon: FileText, gradient: "from-blue-200 to-purple-200", path: "/forms" },
    { title: "Time Table", icon: Clock, gradient: "from-yellow-200 to-pink-200", path: "/timetable" },
    { title: "Staff of College", icon: GraduationCap, gradient: "from-yellow-200 to-purple-200", path: "/staff" },
    { title: "Other's", icon: Users, gradient: "from-blue-200 to-purple-200", path: "/others" },
    { title: "About App", icon: Info, gradient: "from-blue-200 to-purple-200", path: "/about" },
  ];

  return (
    <div>

      {/* Header */}
      <div className="mb-4">
        <h1 className="text-3xl font-poppins text-gray-800">
             Adarsh Education Hub
        </h1>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
        />
        <input
          placeholder="Search..."
          className="w-full pl-11 pr-4 py-3 rounded-full bg-white shadow-md outline-none"
        />
      </div>

      {/* Cards */}
      <div className="space-y-4">
        {menuItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              onClick={() => navigate(item.path)}
              className={`bg-gradient-to-r ${item.gradient} p-4 rounded-2xl shadow-md cursor-pointer active:scale-95 transition`}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <Icon size={18} className="text-gray-700" />
                </div>

                <h2 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h2>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}