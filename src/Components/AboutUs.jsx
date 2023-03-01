import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import visionpic from "../Assets/Pngs/vision.png";
import approachpic from "../Assets/Pngs/approach.png";
import processpic from "../Assets/Pngs/process.png";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <div className="md:flex-row flex-col">
      {/* 1st SECTION */}
      <div className="items-center mx-96 mt-20 mb-10 text-center">
        <h1 data-aos="fade-right" data-aos-duration="1500" className="text-4xl font-semibold">About Us</h1>
      </div>

      {/* 2nd SECTION */}
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1500" className="container flex flex-wrap items-center space-x-72 ml-72 mx-auto pb-6 pt-6 ">
        <div className="pb-48">
          <h1 className="text-3xl font-semibold pb-3 text-center">Our Vision</h1>
          <p className="text-xl">
             We envision a continent where Africans, anywhere has the
            <br /> resources and education to enrich their world through easy
            <br /> to understand Blockchain and Cryptocurrency learning 
            <br /> contents.
          </p>
        </div>
        <div className="my-auto font-semibold pb-5 ">
          <img src={visionpic} alt="logo" className="max-h-96 w-auto"/>
        </div>
      </div>

      {/* 3rd SECTION */}
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1500" className="container flex flex-wrap items-center space-x-72 ml-72 mx-auto pb-6 pt-6 ">
        <div className=" my-auto font-semibold pb-5 ">
          <img src={approachpic} alt="logo" className="max-h-96 w-auto" />
        </div>
        <div className="className">
          <h1 className="text-3xl font-semibold pb-3 text-center">Our Approach</h1>
          <p className="text-xl">
            Our mission is to democratize access to blockchain
            <br /> education in Africa by leveraging technology to simplify the 
            <br /> learning experience. We believe that blockchain has the
            <br /> potential to transform many aspects of the society and the
            <br /> economy, but that its adoption is hindered by a lack of
            <br /> understanding and knowledge. Therefore, we strive to 
            <br /> provide the simplest possible way for Africans to learn 
            <br /> about blockchain through our platform, which features a 
            <br /> chat bot that interacts with the users to answer queries
            <br /> about blockchain and a risk analyzzer that helps users 
            <br /> determine their risk appetite and receive 
            recommendations.
          </p>
        </div>
      </div>

      {/* 4th SECTION */}
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1500" className="container flex flex-wrap items-center space-x-72 ml-72 mx-auto pb-6 pt-6 ">
        <div className="pb-48">
          <h1 className="text-3xl font-semibold items-center pb-3 text-center">Our Goal</h1>
          <p className="text-xl">
            Our goal is to empower individuals and organizations
            <br /> across Africa to leverage blockchain for social and economic
            <br /> development .
          </p>
        </div>
        <div className="my-auto font-semibold pb-5">
          <img src={processpic} alt="logo" className="max-h-96 w-auto" />
        </div>
      </div>
      <div className="bg-orange rounded-md text-center shadow-md mt-6 p-4 pl-7 w-32 text-white mb-20 flex items-center mx-auto">
        <Link to="/contact" className="text-white">
          <input
            type="button"
            value="Contact Us"
          />
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
