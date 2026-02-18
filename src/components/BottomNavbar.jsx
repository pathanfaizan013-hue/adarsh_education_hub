
import { NavLink } from "react-router-dom";
import { Home, Download, Menu, User } from "lucide-react";

export default function BottomNavbar() {
  const linkStyle = ({ isActive }) =>
    `flex flex-col items-center text-xs ${
      isActive ? "text-blue-600" : "text-gray-500"
    }`;

  return (
    <div className="absolute bottom-0 w-full bg-white/70 backdrop-blur-md border-t border-white/40 py-3 rounded-b-[40px]">
      <div className="flex justify-around">

        <NavLink to="/home" className={linkStyle}>
          <Home size={22} />
          <span>Home</span>
        </NavLink>

        <NavLink to="/downloads" className={linkStyle}>
          <Download size={22} />
          <span>Download</span>
        </NavLink>

        <NavLink to="/menu" className={linkStyle}>
          <Menu size={22} />
          <span>Menu</span>
        </NavLink>

        <NavLink to="/profile" className={linkStyle}>
          <User size={22} />
          <span>Profile</span>
        </NavLink>

      </div>
    </div>
  );
}