import React from "react";
import logo from "../Assets/Pngs/CoinCoach.png";

function Footer() {
  return (
    <div className="bg-primary text-white">
      <div className="  mx-auto  font-avenir-light space-y-4 items-center">
        <div className=" container flex flex-wrap items-center justify-between mx-auto text-justify">
          <div className=" text-l my-auto pb-24 pt-10">
            <p className=" text-3xl my-auto font-semibold pb-5 ">
              <img src={logo} alt="logo" />
            </p>
          </div>
          <div className="pb-24 pt-10">
            <h2 class="mb-6 text-l font-semibold text-gray-500 uppercase dark:text-gray-400">
              About Us
            </h2>
            <ul class="text-gray-500 dark:text-gray-400">
              <li class="mb-4">
                <a href="/" className=" hover:underline">
                  About
                </a>
              </li>
              <li class="mb-4">
                <a href="/" className="hover:underline">
                  Careers
                </a>
              </li>
              <li class="mb-4">
                <a href="/" className="hover:underline">
                  Blogs
                </a>
              </li>
              <li class="mb-4">
                <a href="/" className="hover:underline">
                  Legal & Privacy
                </a>
              </li>
            </ul>
          </div>
          <div className="pb-24 pt-10">
            <h2 class="mb-6 text-l font-semibold text-gray-500 uppercase dark:text-gray-400">
              Services
            </h2>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <a href="/" className=" hover:underline">
                  Application
                </a>
              </li>
              <li class="mb-4">
                <a href="/" className="hover:underline">
                  Buy Crypto
                </a>
              </li>
              <li class="mb-4">
                <a href="/" className="hover:underline">
                  Affilliate
                </a>
              </li>
              <li class="mb-4">
                <a href="/" className="hover:underline">
                  Institutional Services
                </a>
              </li>
            </ul>
          </div>
          <div className="pb-24 pt-10">
            <h2 class="mb-6 text-l font-semibold text-gray-500 uppercase dark:text-gray-400">
              Learn
            </h2>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <a href="/" className=" hover:underline">
                  What is Cryptocurrency?
                </a>
              </li>
              <li class="mb-4">
                <a href="/" className="hover:underline">
                  Crypto Basic
                </a>
              </li>
              <li class="mb-4">
                <a href="/" className="hover:underline">
                  Tips and Tutorials
                </a>
              </li>
              <li class="mb-4">
                <a href="/" className="hover:underline">
                  Market Update
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            borderTop: "2px solid #CE5A29 ",
            marginLeft: 20,
            marginRight: 20,
          }}
        ></div>
        <p className=" text-center pb-4">2023 CoinCoach. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
