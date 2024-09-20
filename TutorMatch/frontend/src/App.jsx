import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import UserHomepage from "./pages/user/homepage"
import TutorHomepage from "./pages/tutor/homepage"
import YourChoice from "./pages/user/YourChoice"
import Courses from "./pages/tutor/Courses"
import AddCourse from "./pages/tutor/AddCourse"
import Register from "./Forms/Register"
import Login from "./Forms/Login"

function App() {
  return (
    <Router>
      <Routes>
        {/* tutor  */}
        <Route path="/tutor/dashboard" element={<TutorHomepage />} />
        <Route path="/tutor/courses" element={<Courses />} />
        <Route path="/tutor/add-course" element={<AddCourse />} />

        {/* user  */}
        <Route path="/" element={<UserHomepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/choose-you-like" element={<YourChoice />} />
      </Routes>
    </Router>
  )
}

export default App
