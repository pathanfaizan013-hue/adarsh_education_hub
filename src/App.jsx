import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./components/MainLayout";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Course from "./pages/Course";
import Downloads from "./pages/Downloads";
import MenuPage from "./pages/MenuPage";
import Profile from "./pages/Profile";
import Head from "./pages/Head";
import DepartmentTeachers from "./pages/DepartmentTeachers";
import BCA from "./pages/BCA";
import SemesterSubjects from "./pages/SemesterSubjects";
import SubjectDetails from "./pages/SubjectDetails";
import Syllabus from "./pages/Syllabus";
import Teachers from "./pages/Teachers";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Default open -> Login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Login Page (No Navbar) */}
        <Route path="/login" element={<Login />} />

        {/* All pages with Bottom Navbar */}
        <Route element={<MainLayout />}>

          <Route path="/home" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/head" element={<Head />} />
          <Route path="/teachers" element={<DepartmentTeachers />} />
          <Route path="/bca" element={<BCA />} />

          <Route path="/semester/:id" element={<SemesterSubjects />} />
          <Route path="/subject/:id" element={<SubjectDetails />} />
          <Route path="/syllabus" element={<Syllabus />} />
        </Route>

        {/* Unknown route fallback */}
        <Route path="*" element={<Navigate to="/login" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;