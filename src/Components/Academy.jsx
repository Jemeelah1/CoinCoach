import React, { useEffect } from "react";
import academypic from "../Assets/Pngs/GroupA.png";
import coinAcademy from "../Assets/Pngs/coinAcademy.png";
import { Link } from "react-router-dom";
import about3 from "../Assets/Pngs/About3.png";
import about4 from "../Assets/Pngs/About4.png";
import about5 from "../Assets/Pngs/About5.png";
import about6 from "../Assets/Pngs/About6.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AOS from "aos";
import "aos/dist/aos.css";

const Academy = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <div>
      {/* 1st SECTION */}
      <div className="md:flex-row flex-col text-xs pt-20">
        <p data-aos="fade-left" data-aos-duration="1500" className=" ml-90 ">
          <img src={coinAcademy} alt="logo" className="ml-36" />
        </p>
      </div>

      {/* 2nd SECTION */}
      <div className="w-screen md:flex-row flex-col">
        <p data-aos="fade-left" data-aos-duration="1500" className=" text-3xl font-semibold pt-5 pb-5 w-w-5/6 flex justify-center items-center">
          <img src={academypic} alt="contact" className="w-5/6 flex" />
        </p>
      </div>

      {/* Article */}
      <div data-aos="fade-right" data-aos-duration="1500" className="md:flex-row flex-col text-xl justify-center items-center space-y-4 mx-36 pt-10 pb-10">
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
      <div data-aos="fade-In" data-aos-duration="1500">
        <div className="pb-4 flex space-x-4 mr-72 justify-end">
          <Link to="/vidoe">
            <p>
              View All <ArrowForwardIosIcon />{" "}
            </p>
          </Link>
        </div>
        <div className="flex md:flex-row flex-col justify-center items-center mb-20 space-x-12">
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
              <Link to="/contact" className="text-white hover:text-primary">
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
              <Link to="/contact" className="text-white hover:text-primary">
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
              <Link to="/" className="text-white hover:text-primary">
                <input type="button" value="Watch now" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Article */}
      <div data-aos="fade-In" data-aos-duration="1500">
        <div className="pb-4 flex space-x-4 mr-72 justify-end">
          <Link to="/article">
            <p>
              View All <ArrowForwardIosIcon />{" "}
            </p>
          </Link>
        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-bottom"
              data-aos-duration="1500" className=" flex justify-center items-center mb-20 space-x-6">
            <a href="/" className="hover:underline pt-5 text-xs text-orange">
              <img src={about3} alt="about" />
            </a>
            <a href="/" className="hover:underline pt-5 text-xs text-orange">
              <img src={about4} alt="about" />
            </a>
            <a href="/" className="hover:underline pt-5 text-xs text-orange">
              <img src={about5} alt="about" />
            </a>
            <a href="/" className="hover:underline pt-5 text-xs text-orange">
              <img src={about6} alt="about" />
            </a>
          </div>
      </div>
    </div>
  );
};

export default Academy;
