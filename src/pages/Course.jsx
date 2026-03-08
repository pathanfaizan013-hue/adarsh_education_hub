import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, GraduationCap, FolderOpen, Book, FileText } from "lucide-react";

export default function Course() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const DepartmentCard = ({ icon: Icon, title, gradient, path }) => {
    if (
      search &&
      !title.toLowerCase().includes(search.toLowerCase())
    ) {
      return null;
    }

    return (
      <div
        onClick={() => navigate(path)}
        className={`flex items-center gap-4 px-5 py-4 rounded-2xl border border-white/60 shadow-md backdrop-blur-lg cursor-pointer transition hover:scale-[1.02] ${gradient}`}
      >
        <div className="bg-white p-3 rounded-xl shadow">
          <Icon size={22} />
        </div>
        <span className="text-lg font-medium text-gray-700">
          {title}
        </span>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex justify-center bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 py-6">

      <div className="w-[380px] bg-white/30 backdrop-blur-xl rounded-[40px] shadow-xl border border-white/50 overflow-hidden">

        {/* Header Section */}
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
            Courses
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

        {/* Departments */}
        <div className="px-6 py-6 space-y-5">

          <DepartmentCard
            icon={GraduationCap}
            title="B.Sc Department"
            gradient="bg-gradient-to-r from-green-200 to-pink-200"
            path="/bsc"
          />

          <DepartmentCard
            icon={FolderOpen}
            title="BCA Department"
            gradient="bg-gradient-to-r from-yellow-200 to-pink-200"
            path="/bca"
          />

          <DepartmentCard
            icon={Book}
            title="BCS Department"
            gradient="bg-gradient-to-r from-blue-200 to-purple-200"
            path="/bcs"
          />

          <DepartmentCard
            icon={FileText}
            title="BA Department"
            gradient="bg-gradient-to-r from-yellow-200 to-purple-200"
            path="/ba"
          />

          <DepartmentCard
            icon={GraduationCap}
            title="B.Com Department"
            gradient="bg-gradient-to-r from-yellow-200 to-blue-200"
            path="/bcom"
          />

        </div>

      </div>
    </div>
  );
}