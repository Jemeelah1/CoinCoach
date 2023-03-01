import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Assets/Pngs/CoinCoach.png";

function Nav() {
  const active = ({ isActive }) => {
    console.log(isActive)
    return { color: isActive ? "#CE5A29" : ""}
  }

  return (
    <div className="bg-primary text-white">
      <div className="container flex flex-wrap items-center justify-between mx-auto text-justify">
        <div className=" text-xs my-auto pb-5 pt-5">
          <p className=" text-3xl my-auto font-semibold pb-5 ">
            <img src={logo} alt="logo" />
          </p>
        </div>
        <div className=" text-white flex items-center font-semibold justify-between text-justify px-10  space-x-10 hover:bg-orange-700 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300">
          <NavLink to="/" style={active} className="text-white hover:text-orange">
            Home
          </NavLink>
          <NavLink to="/academy" style={active} className="text-white hover:text-orange">
            Academy
          </NavLink>
          <NavLink to="/tools" style={active} className="text-white hover:text-orange">
            Tools
          </NavLink>
          <NavLink to="/profile" style={active} className="text-white hover:text-orange">
            Profile
          </NavLink>
          <NavLink to="/community" style={active} className="text-white hover:text-orange">
            Community
          </NavLink>
          <NavLink to="/aboutus" style={active} className="text-white hover:text-orange">
            About us
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Nav;
