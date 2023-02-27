import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Nav";


const Sponsor = () => {
  return (
    <>
      <Navbar />

      <Outlet />
    </>
  )
}

export default Sponsor;
