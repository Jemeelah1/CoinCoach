import React from 'react';
import { Link } from "react-router-dom";
import logo from "../Assets/Pngs/CoinCoach.png";

function Nav () {
  return (
    <div className="bg-primary text-white">
        <div className="container flex flex-wrap items-center justify-between mx-auto text-justify">
          <div className=" text-xs my-auto pb-5 pt-5">
            <p className=" text-3xl my-auto font-semibold pb-5 ">
              <img src={logo} alt="logo" />
            </p>
          </div>
          <div className=" text-white flex items-center font-semibold justify-between text-justify px-10  space-x-10 hover:bg-orange-700 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300">
                <Link to="/" className="text-white">
                  Home
                </Link>
                <Link to="/" className="text-white">
                  Academy
                </Link>
                <Link to="/" className="text-white">
                  Tools
                </Link>
                <Link to="/" className="text-white">
                  Wallet
                </Link>
                <Link to="/contact" className="text-white">
                  Contact us
                </Link>
          </div>
        </div>
    </div>
  )
}

export default Nav;
