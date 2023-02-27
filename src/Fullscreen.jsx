import React from 'react'
import { Outlet } from "react-router-dom";

import Footer from "./Components/Footer";
import Navbar from "./Components/Nav";


const Fullscreen = () => {
  return (
    <>
      <Navbar />
        <Outlet />
      <Footer />
    </>
  )
}

export default Fullscreen;
