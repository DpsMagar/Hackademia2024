import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import UserHomepage from "./pages/user/homepage"
import TutorHomepage from "./pages/tutor/homepage"
import YourChoice from "./pages/user/YourChoice"
import Courses from "./pages/tutor/Courses"
import AddCourse from "./pages/tutor/AddCourse"
import RegisterAsTutor from "./Forms/RegisterAsTutor"
import Login from "./Forms/Login"
import About from "./components/About"
import TutorOrUser from "./components/TutorOrUser"
import LandingPage from "./components/LandingPage"
import RegisterAsUser from "./Forms/RegisterAsUser"
function App() {
  return (
    <Router>
      <Routes>
        {/* tutor  */}
        <Route path="/tutor/dashboard" element={<TutorHomepage />} />
        <Route path="/user/dashboard" element={<TutorHomepage />} />
        <Route path="/tutor/courses" element={<Courses />} />
        <Route path="/tutor/add-course" element={<AddCourse />} />

        {/* user  */}
        <Route path="/" element={<LandingPage />} />
        <Route path="whichone" element={<TutorOrUser />} />
        <Route path="/tutorregister" element={<RegisterAsTutor />} />
        <Route path="/userregister" element={<RegisterAsUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/choose-you-like" element={<YourChoice />} />
      </Routes>
    </Router>
  )
}

export default App
