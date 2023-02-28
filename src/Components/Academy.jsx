import React from "react";
import academypic from "../Assets/Pngs/GroupA.png";
import coinAcademy from "../Assets/Pngs/coinAcademy.png";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Academy = () => {
  return (
    <div>
      {/* 1st SECTION */}
      <div className=" text-xs pt-20">
        <p className=" ml-90 ">
          <img src={coinAcademy} alt="logo" className="ml-36" />
        </p>
      </div>

      {/* 2nd SECTION */}
      <div className="w-screen">
        <p className=" text-3xl font-semibold pt-5 pb-5 w-w-5/6 flex justify-center items-center">
          <img src={academypic} alt="contact" className="w-5/6 flex" />
        </p>
      </div>

      {/* Article */}
      <div className="text-xl justify-center items-center space-y-4 mx-36 pt-10 pb-10">
        <p>
          Your ultimate guide to navigating the exciting world of
          cryptocurrency!
        </p>
        <p>
          Our platform is designed to provide you with the best possible
          experience, so you can learn about the ins and outs of the crypto
          industry with ease. Whether you're a beginner or an experienced
          trader, we've got you covered.
        </p>

        <p>
          We offer a variety of educational resources, including in-depth
          articles, videos, and tutorials, all created by experts in the field.
          You'll learn everything you need to know about buying, selling, and
          trading cryptocurrencies, as well as the latest industry news and
          trends.
        </p>

        <p>
          Coin Coach is here to guide you every step of the way. Welcome aboard!
        </p>
      </div>

      {/* Vidoes */}
      <div>
        <div className="pb-4 flex space-x-4 mr-72 justify-end">
          <Link to="/vidoe">
            <p>
              View All <ArrowForwardIosIcon />{" "}
            </p>
          </Link>
        </div>
        <div className="flex justify-center items-center mb-20 space-x-12">
          {/* div 1 */}
          <div className="bg-grey2 p-10 rounded-md">
            <iframe
              src="https://www.youtube.com/embed/iP6sdETl2Fw"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              title="video"
            />
            <h1 className="text-xl text-l font-bold pt-2 pb-2">
              What is Cryptocurrency
            </h1>
            <p>
              This is a simple introduction to
              <br /> cryptocurrency and some basic
              <br /> informations on cryptocurrency.
            </p>
            <div className="bg-orange rounded-md text-center shadow-md mt-4 p-2 w-32">
              <Link to="/contact" className="text-white">
                <input type="button" value="Watch now" />
              </Link>
            </div>
          </div>

          {/* div 2 */}
          <div className="bg-grey2 p-10 rounded-md">
            <iframe
              src="https://www.youtube.com/embed/pGD6UHuHMwc"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              title="video"
            />
            <h1 className="text-xl text-l font-bold pt-2 pb-2">
              Blockchain in Industries
            </h1>
            <p>
              Do you want to know what
              <br /> it takes to advance with your
              <br /> use of Blockchain.
            </p>
            <div className="bg-orange rounded-md text-center shadow-md mt-4 p-2 w-32">
              <Link to="/contact" className="text-white">
                <input type="button" value="Watch now" />
              </Link>
            </div>
          </div>

          {/* div 3 */}
          <div className="bg-grey2 p-10 rounded-md">
            <iframe
              src="https://www.youtube.com/embed/8EBi02c5UYg"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              title="video"
            />
            <h1 className="text-xl text-l font-bold pt-2 pb-2">
              Skills needed in Blockchain
            </h1>
            <p>
              Gain average knowledge about
              <br /> Blockchain and Cryptocurrency by
              <br /> watching Coin Coach content
            </p>
            <div className="bg-orange rounded-md text-center shadow-md mt-4 p-2 w-32">
              <Link to="/" className="text-white">
                <input type="button" value="Watch now" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Article */}
      <div>
        <div className="pb-4 flex space-x-4 mr-72 justify-end">
          <Link to="/article">
            <p>
              View All <ArrowForwardIosIcon />{" "}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Academy;
