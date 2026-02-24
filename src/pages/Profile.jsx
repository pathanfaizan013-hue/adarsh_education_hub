import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, User, Mail, BookOpen, Pencil } from "lucide-react";

export default function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [bio, setBio] = useState("");
  const [username, setUsername] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
      navigate("/login");
    } else {
      setUser(currentUser);
      setUsername(currentUser.username);
      setBio(currentUser.bio || "");
      setProfileImage(currentUser.profileImage || null);
    }
  }, []);

  const handleSave = () => {
    const updatedUser = {
      ...user,
      username,
      bio,
      profileImage,
    };

    localStorage.setItem("currentUser", JSON.stringify(updatedUser));

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const updatedUsers = users.map((u) =>
      u.email === updatedUser.email ? updatedUser : u
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setUser(updatedUser);
    setEditMode(false);
  };

  const handleImageUpload = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      setProfileImage(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  if (!user) return null;

  return (
    <div className="min-h-screen flex items-center justify-center 
    bg-gradient-to-br from-orange-200 via-pink-200 to-purple-200 p-6">

      <div className="w-[380px] bg-white/60 backdrop-blur-xl 
      rounded-[35px] shadow-2xl p-8">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <ArrowLeft
              size={24}
              className="cursor-pointer"
              onClick={() => navigate(-1)}
            />
            <h2 className="text-2xl font-semibold text-gray-700">
              Profile
            </h2>
          </div>

          <Pencil
            size={20}
            className="cursor-pointer text-gray-600"
            onClick={() => setEditMode(!editMode)}
          />
        </div>

        {/* Profile Image */}
        <div className="flex flex-col items-center mb-6">

          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover shadow-lg"
            />
          ) : (
            <div className="w-24 h-24 rounded-full 
            bg-gradient-to-r from-orange-400 to-pink-500 
            flex items-center justify-center text-white 
            text-3xl font-bold shadow-lg">
              {username?.charAt(0).toUpperCase()}
            </div>
          )}

          {editMode && (
            <input
              type="file"
              onChange={handleImageUpload}
              className="mt-3 text-sm"
            />
          )}
        </div>

        {/* User Info */}
        <div className="space-y-4">

          {/* Username */}
          <div className="bg-white/80 p-3 rounded-xl shadow-inner flex items-center gap-3">
            <User size={20} />
            {editMode ? (
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-transparent outline-none w-full"
              />
            ) : (
              <span>{username}</span>
            )}
          </div>

          {/* Email (Not editable) */}
          <div className="bg-white/80 p-3 rounded-xl shadow-inner flex items-center gap-3">
            <Mail size={20} />
            <span>{user.email}</span>
          </div>

          {/* Course */}
          <div className="bg-white/80 p-3 rounded-xl shadow-inner flex items-center gap-3">
            <BookOpen size={20} />
            <span>BCA Third Year</span>
          </div>

          {/* Bio */}
          <div className="bg-white/80 p-4 rounded-xl shadow-inner">
            {editMode ? (
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full bg-transparent outline-none text-sm"
              />
            ) : (
              <p className="text-sm text-gray-600">
                {bio ||
                  "Passionate student of Adarsh Education Hub. Learning React, Node.js & MongoDB 🚀"}
              </p>
            )}
          </div>

          {editMode && (
            <button
              onClick={handleSave}
              className="w-full py-3 rounded-xl text-white font-semibold
              bg-gradient-to-r from-orange-400 to-pink-500 shadow-lg"
            >
              Save Changes
            </button>
          )}

        </div>
      </div>
    </div>
  );
}