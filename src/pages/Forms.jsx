import { useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronRight } from "lucide-react";

export default function Forms() {
  const navigate = useNavigate();

  const forms = [
    { title: "Admission Form", path: "/admission-form" },
    { title: "Exam Form", path: "/exam-form" },
    { title: "Fees Form", path: "/fees-form" },
    { title: "Documents", path: "/documents" },
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
            Forms
          </p>
        </div>

        {/* Forms List */}
        <div className="px-6 py-6 space-y-5">

          {forms.map((form, index) => (
            <div
              key={index}
              onClick={() => navigate(form.path)}
              className="flex items-center justify-between px-5 py-4 rounded-2xl bg-gradient-to-r from-yellow-100 to-purple-100 shadow-md border border-white/60 backdrop-blur-lg cursor-pointer transition hover:scale-[1.02]"
            >
              <span className="text-lg font-medium text-gray-700">
                {form.title}
              </span>
              <ChevronRight size={20} className="text-gray-500" />
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}