import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./components/MainLayout";

// Pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
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
import Staff from "./pages/Staff";
import About from "./pages/About";
import Others from "./pages/Others";
import Forms from "./pages/Forms";
import TimeTable from "./pages/TimeTable";

function App() {
  const isLoggedIn = localStorage.getItem("currentUser");

  return (
    <Router>
      <Routes>

        {/* Smart Default Route */}
        <Route
          path="/"
          element={
            isLoggedIn
              ? <Navigate to="/home" />
              : <Navigate to="/login" />
          }
        />

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route element={<MainLayout />}>

          <Route
            path="/home"
            element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
          />

          <Route
            path="/course"
            element={isLoggedIn ? <Course /> : <Navigate to="/login" />}
          />

          <Route
            path="/downloads"
            element={isLoggedIn ? <Downloads /> : <Navigate to="/login" />}
          />

          <Route
            path="/menu"
            element={isLoggedIn ? <MenuPage /> : <Navigate to="/login" />}
          />

          <Route
            path="/profile"
            element={isLoggedIn ? <Profile /> : <Navigate to="/login" />}
          />

          <Route path="/head" element={<Head />} />
          <Route path="/teachers" element={<DepartmentTeachers />} />
          <Route path="/bca" element={<BCA />} />
          <Route path="/semester/:id" element={<SemesterSubjects />} />
          <Route path="/subject/:id" element={<SubjectDetails />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/about" element={<About />} />
          <Route path="/others" element={<Others />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/timetable" element={<TimeTable />} />

        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </Router>
  );
}

export default App;