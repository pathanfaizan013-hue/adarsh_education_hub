
import { Outlet } from "react-router-dom";
import BottomNavbar from "./BottomNavbar";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 p-4">
      <div className="w-[390px] h-[820px] bg-white/30 backdrop-blur-xl rounded-[40px] shadow-2xl relative overflow-hidden">

        <div className="h-full overflow-y-auto pb-24">
          <Outlet />
        </div>

        <BottomNavbar />

      </div>
    </div>
  );
}