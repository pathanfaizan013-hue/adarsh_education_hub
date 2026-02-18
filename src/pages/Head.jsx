import React from "react";

export default function Head() {
  return (
    <div className="min-h-screen pb-24 bg-gradient-to-b from-pink-200 via-purple-200 to-blue-200">

      {/* Header */}
      <div className="pt-10 px-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Head of Institute
        </h1>

        {/* Profile Card */}
        <div className="bg-white/40 backdrop-blur-lg rounded-3xl p-4 shadow-xl border border-white/40">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
            alt="Principal"
            className="w-full h-60 object-cover rounded-2xl"
          />

          <div className="text-center mt-4">
            <h2 className="text-2xl font-bold text-gray-800">
              Rajesh Sharma
            </h2>
            <p className="text-yellow-600 font-semibold text-lg">
              Principal
            </p>
          </div>
        </div>
      </div>

      {/* Qualification */}
      <div className="px-6 mt-6">
        <div className="bg-white/40 backdrop-blur-md rounded-2xl p-4 shadow-md border border-white/40">
          <h3 className="text-xl font-bold text-orange-600 mb-2">
            Qualification
          </h3>
          <p className="text-gray-700">
            Ph.D. in Education, M.Ed.
          </p>
        </div>
      </div>

      {/* Experience */}
      <div className="px-6 mt-4">
        <div className="bg-white/40 backdrop-blur-md rounded-2xl p-4 shadow-md border border-white/40">
          <h3 className="text-xl font-bold text-orange-600 mb-2">
            Experience
          </h3>
          <p className="text-gray-700">
            20+ Years in the field of education
          </p>
        </div>
      </div>

      {/* Message */}
      <div className="px-6 mt-4">
        <div className="bg-white/40 backdrop-blur-md rounded-2xl p-4 shadow-md border border-white/40">
          <h3 className="text-xl font-bold text-orange-600 mb-2">
            Message
          </h3>
          <p className="text-gray-700">
            Welcome to our institution! We are dedicated to providing quality
            education and fostering academic excellence. Feel free to reach out
            for any assistance.
          </p>
        </div>
      </div>

      {/* Contact */}
      <div className="px-6 mt-4">
        <div className="bg-white/40 backdrop-blur-md rounded-2xl p-4 shadow-md border border-white/40">
          <h3 className="text-xl font-bold text-gray-800 mb-3">
            Contact
          </h3>

          <div className="flex justify-between items-center text-gray-700">
            <span>📞 123-456-7890</span>
            <span>✉ principal@example.com</span>
          </div>
        </div>
      </div>

    </div>
  );
}