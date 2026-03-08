
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  User,
  Users,
  BookOpen,
  FileText,
  Clock,
  GraduationCap,
  LayoutGrid,
  Info
} from "lucide-react";

export default function Home() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const Option = ({ icon: Icon, title, gradient, path }) => {
    // Search filter
    if (
      search &&
      !title.toLowerCase().includes(search.toLowerCase())
    ) {
      return null;
    }

    return (
      <div
        onClick={() => path && navigate(path)}
        className={`flex items-center gap-4 px-4 py-3 rounded-2xl border border-white/60 shadow-sm backdrop-blur-md cursor-pointer transition hover:scale-[1.02] ${gradient}`}
      >
        <div className="bg-white p-2 rounded-xl shadow">
          <Icon size={20} />
        </div>
        <span className="text-[15px] font-medium text-gray-700">
          {title}
        </span>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex justify-center items-start bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 py-6">

      <div className="w-[380px] bg-white/30 backdrop-blur-xl rounded-[40px] shadow-xl border border-white/50 overflow-hidden">

        {/* Header */}
        <div className="p-6 pb-4 bg-gradient-to-br from-purple-100 via-purple-100 to-yellow-100">
          <h1 className="text-2xl font-semibold text-gray-700 text-center">
            Adarsh Education Hub
          </h1>

          {/* Search */}
          <div className="mt-4">
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

        {/* Options */}
        <div className="px-6 py-4 space-y-4">

          <Option
            icon={User}
            title="Head of Institute"
            gradient="bg-gradient-to-r from-yellow-200 to-pink-200"
            path="/head"
          />

          <Option
            icon={Users}
            title="Teachers Information"
            gradient="bg-gradient-to-r from-yellow-200 to-pink-200"
            path="/teachers"
          />

          <Option
            icon={BookOpen}
            title="Courses"
            gradient="bg-gradient-to-r from-blue-200 to-purple-200"
            path="/course"
          />

          <Option
            icon={FileText}
            title="Forms"
            gradient="bg-gradient-to-r from-blue-200 to-purple-200"
            path="/forms"
          />

          <Option
            icon={Clock}
            title="Time Table"
            gradient="bg-gradient-to-r from-yellow-200 to-pink-200"
            path="/timetable"
          />

          <Option
            icon={GraduationCap}
            title="Staff of College"
            gradient="bg-gradient-to-r from-yellow-200 to-pink-200"
            path="/staff"
          />

          <Option
            icon={LayoutGrid}
            title="Other’s"
            gradient="bg-gradient-to-r from-blue-200 to-purple-200"
            path="/others"
          />

          <Option
            icon={Info}
            title="About App"
            gradient="bg-gradient-to-r from-blue-200 to-purple-200"
            path="/about"
          />

        </div>

      </div>
    </div>
  );
}