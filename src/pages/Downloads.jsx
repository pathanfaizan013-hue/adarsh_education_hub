import React from "react";

export default function Downloads() {
  const downloads = [
    {
      title: "Python Syllabus",
      size: "800 KB",
      icon: "📄",
    },
    {
      title: "Cyber Security Question Papers",
      size: "1.5 MB",
      icon: "📘",
    },
    {
      title: "Notes on Software Engineering",
      size: "2.8 MB",
      icon: "📝",
    },
    {
      title: "BCA Internship Notes",
      size: "890 KB",
      icon: "📚",
    },
    {
      title: "Python E-Book",
      size: "4.2 MB",
      icon: "📕",
    },
  ];

  return (
    <div className="min-h-screen pb-24 bg-gradient-to-b from-pink-200 via-purple-200 to-blue-200">

      {/* Header */}
      <div className="pt-10 px-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Downloads
        </h1>
      </div>

      {/* Download Cards */}
      <div className="px-6 space-y-4">
        {downloads.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-white/40 backdrop-blur-lg border border-white/40 rounded-2xl p-4 shadow-lg"
          >
            {/* Left */}
            <div className="flex items-center space-x-4">
              <div className="text-3xl">
                {item.icon}
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-600">
                  {item.size}
                </p>
              </div>
            </div>

            {/* Right Check Icon */}
            <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md">
              ✔
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}