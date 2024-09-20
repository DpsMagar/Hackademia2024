import React from "react"
import { Link } from "react-router-dom"
import Logo from "./Logo"
import Avatar from "@mui/material/Avatar"
import { deepOrange } from "@mui/material/colors"

const NavUser = () => {
  return (
    <header className="fixed top-0 right-0 left-0 z-10 w-full bg-white shadow-md text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to="/">
          <span className="ml-3 text-xl">
            <Logo />
          </span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/login" className="mr-5 hover:text-gray-900">Login</Link> 
          <Link to="/about" className="mr-5 hover:text-gray-900">About</Link> 
          <Link to="/third" className="mr-5 hover:text-gray-900">Third Link</Link>
        </nav>
        <div>
          <Avatar sx={{ bgcolor: deepOrange[500] }}>SK</Avatar>
        </div>
      </div>
    </header>
  )
}

export default NavUser
