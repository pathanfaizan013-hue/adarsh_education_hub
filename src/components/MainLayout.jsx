import { Outlet } from "react-router-dom";
import BottomNavbar from "./BottomNavbar";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br 
    from-orange-200 via-pink-200 to-purple-200 flex justify-center">

      <div className="w-[390px] min-h-screen 
      bg-white/30 backdrop-blur-xl 
      rounded-[40px] shadow-2xl 
      relative overflow-hidden">

        {/* Page Content */}
        <div className="pb-24">
          <Outlet />
        </div>

        {/* Bottom Navbar Fixed */}
        <div className="absolute bottom-0 left-0 w-full">
          <BottomNavbar />
        </div>

      </div>
    </div>
  );
}