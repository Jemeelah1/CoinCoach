import React from "react";
import { Link } from "react-router-dom";
import data from "../Assets/Pngs/Datasecurity.png";
import subtitle from "../Assets/Pngs/Subtitle.png";
import img1 from "../Assets/Pngs/feature-image1.png";
import img2 from "../Assets/Pngs/feature-image2.png";
import img3 from "../Assets/Pngs/feature-image3.png";
import img4 from "../Assets/Pngs/feature-image4.png";
import nfts from "../Assets/Pngs/Nfts.png";
import about1 from "../Assets/Pngs/About1.png";
import about2 from "../Assets/Pngs/About2.png";
import about3 from "../Assets/Pngs/About3.png";
import about4 from "../Assets/Pngs/About4.png";
import about5 from "../Assets/Pngs/About5.png";
import about6 from "../Assets/Pngs/About6.png";
import group from "../Assets/Pngs/GroupPic.png";

function LandingPage() {
  return (
    <div>
      <div className="bg-primary text-white">
        {/* 1st SECTION */}
        <div className="  mx-auto  font-avenir-light space-y-4 items-center">
          <div className=" container flex flex-wrap items-center justify-between mx-auto text-justify">
            <div className=" text-l my-auto pb-24">
              <p className=" text-3xl my-auto font-semibold pb-5 ">
                <img src={subtitle} alt="logo" />
              </p>
              <p>
                Only at
                <span className="text-orange">CoinCoach</span>
                can you gain extensive knowledge of <br />
                cryptocurrency and learn best practices for trading. Are <br />
                you ready? Let’s get started.
              </p>
              <div className="bg-orange rounded-md text-center shadow-md mt-4 p-2 w-32">
                <input type="button" value="Get Started" />
              </div>
            </div>
            <div className=" text-l my-auto pb-24 pt-10">
              <p className=" text-3xl my-auto font-semibold pb-5 ">
                <img src={data} alt="logo" />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd SECTION */}
      <div className="border border-orange rounded-md container flex flex-wrap items-center justify-between mx-auto text-justify m-10 mt-20 px-8 py-8 ">
        <div>
          <h1 className="text-2xl font-semibold">New to Cryptocurrency?</h1>
          <p>
            We at CoinCoach will assist you in comprehending what <br />
            cryptocurrencies are, how they operate, and which ones are the
            <br />
            ideal to buy. So let's get started.
          </p>
        </div>
        <div className="bg-orange text-white rounded-md text-center shadow-md mt-4 p-2 w-48">
          <Link to="/academy">
            <input type="button" value=" Explore Academy Now" />
          </Link>
        </div>
      </div>

      {/* 3rd SECTION */}
      <div className="space-y-4 mt-20 items-center mx-96 text-center">
        <h1 className="text-2xl text-l font-bold">
          CoinCoach Value propositions
        </h1>
        <p>
          Discover eye-catching features to plan your ideal cryptocurrency
          investment
        </p>
      </div>

      {/* 4th SECTION */}
      <div className=" container flex items-center justify-between mx-auto text-justify mt-20">
        {/* 1st */}
        <div className="pb-24 pt-10">
          <p className=" text-3xl my-auto font-semibold pb-5 ">
            <img src={img1} alt="image1" />
          </p>
          <h2 class="mb-4 text-l font-semibold text-gray-500 uppercase dark:text-gray-400">
            Invest in coincoach
          </h2>
          <ul class="text-gray-500 dark:text-gray-400">
            <li>
              Buy and sell popular digital <br /> currencies, keep track of them
              in <br /> the one place.
            </li>
            <li>
              <Link
                to="/donation"
                className="hover:underline pt-5 text-xs text-orange"
              >
                See Explained
              </Link>
            </li>
          </ul>
        </div>

        {/* 2nd */}
        <div className="pb-24 pt-10">
          <p className=" text-3xl my-auto font-semibold pb-5 ">
            <img src={img2} alt="image1" />
          </p>
          <h2 class="mb-4 text-l font-semibold text-gray-500 uppercase dark:text-gray-400">
            Protected Securely
          </h2>
          <ul class="text-gray-500 dark:text-gray-400">
            <li>
              All cash balances are covered by
              <br /> FDIC insurance, up to a<br /> maximum of $250,000.
            </li>
            <li>
              <a href="/" className="hover:underline pt-5 text-xs text-orange">
                See Explained
              </a>
            </li>
          </ul>
        </div>

        {/* 3rd */}
        <div className="pb-24 pt-10">
          <p className=" text-3xl my-auto font-semibold pb-5 ">
            <img src={img3} alt="image3" />
          </p>
          <h2 class="mb-4 text-l font-semibold text-gray-500 uppercase dark:text-gray-400">
            chatbot
          </h2>
          <ul class="text-gray-500 dark:text-gray-400">
            <li>
              Supports a variety of the most
              <br /> popular digital currencies and
              <br /> always uptodate.
            </li>
            <li>
              <Link to="/" className="hover:underline pt-5 text-xs text-orange">
                See Explained
              </Link>
            </li>
          </ul>
        </div>

        {/* 4th */}
        <div className="pb-24 pt-10">
          <p className=" text-3xl my-auto font-semibold pb-5 ">
            <img src={img4} alt="image4" />
          </p>
          <h2 class="mb-4 text-l font-semibold text-gray-500 uppercase dark:text-gray-400">
            The coincoach academy
          </h2>
          <ul class="text-gray-500 dark:text-gray-400">
            <li>
              Easy to know how to
              <br /> cryptocurrency works and
              <br /> friendly to newbie.
            </li>
            <li>
              <Link to="/academy" className="hover:underline pt-5 text-xs text-orange">
                See Explained
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* 5th SECTION */}
      <div className="space-y-4 mt-20 mb-20 mx-96 text-center">
        <h1 className="text-2xl text-l font-bold">Learn About Blockchain</h1>
        <p>Learn all about cryptocurrency to start investing</p>
      </div>

      {/* 6th SECTION */}
      <div className=" flex justify-center items-center mt-20 mb-20">
        <div className="space-y-6 ">
          <div className=" container flex items-center mx-auto  px-8 space-x-4">
            <a href="/" className="hover:underline pt-5 text-xs text-orange">
              <img src={nfts} alt="about" />
            </a>
            <a href="/" className="hover:underline pt-5 text-xs text-orange">
              <img src={about1} alt="about" />
            </a>
            <a href="/" className="hover:underline pt-5 text-xs text-orange">
              <img src={about2} alt="about" />
            </a>
          </div>
          <div className=" container flex items-center mx-auto px-8  space-x-4 ">
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
          <a
            href="/"
            className="hover:underline pt-5 text-xs text-orange mx-10"
          >
            See All Articles
          </a>
        </div>
      </div>

      {/* 7th SECTION */}
      <div className="space-y-4 mt-20 mb-20 mx-96 text-center">
        <h1 className="text-2xl text-l font-bold">Learn About Blockchain</h1>
        <p>
          Have access to thousands of videos to learn more about
          cryptocurrencies. Watch, save, download and share.
        </p>
      </div>

      {/* 8th SECTION */}
      {/* Vidoe and links */}
      <div className="flex justify-center items-center mt-20 mb-20 space-x-6">
        {/* div 1 */}
        <div className="className">
          <iframe
            src="https://www.youtube.com/embed/axGzh4iVoZU"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            title="video"
          />
          <h1 className="text-xl text-l font-bold">
            Understanding crypto
            <br /> charts
          </h1>
          <p>Understanding crypto charts</p>
          <div className="bg-orange rounded-md text-center shadow-md mt-4 p-2 w-32">
            <Link to="/contact" className="text-white">
              <input type="button" value="Save for Later" />
            </Link>
          </div>
        </div>

        {/* div 2 */}
        <div className="className">
          <iframe
            src="https://www.youtube.com/embed/Yb6825iv0Vk"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            title="video"
          />
          <h1 className="text-xl text-l font-bold">
            How To Invest In Crypto
            <br /> Full Beginners Guide in 2023
          </h1>
          <p>Understanding crypto charts</p>
          <div className="bg-orange rounded-md text-center shadow-md mt-4 p-2 w-32">
            <Link to="/contact" className="text-white">
              <input type="button" value="Save for Later" />
            </Link>
          </div>
        </div>

        {/* div 3 */}
        <div className="className">
          <iframe
            src="https://www.youtube.com/embed/N920p250fmU"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            title="video"
          />
          <h1 className="text-xl text-l font-bold">
            Crypto Trading Course For
            <br /> Beginners - Part 1 [Trading Basics]
          </h1>
          <p>Understanding crypto charts</p>
          <div className="bg-orange rounded-md text-center shadow-md mt-4 p-2 w-32">
            <Link to="/" className="text-white">
              <input type="button" value="Save for Later" />
            </Link>
          </div>
        </div>

        {/* div 4 */}
        <div className="className">
          <iframe
            src="https://www.youtube.com/embed/a5XfQWUUZM8"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            title="video"
          />
          <h1 className="text-xl text-l font-bold">
            What is Cryptocurrency
            <br />
            Explained For Beginners
          </h1>
          <p>Understanding crypto charts</p>
          <div className="bg-orange rounded-md text-center shadow-md mt-4 p-2 w-32">
            <Link to="/" className="text-white">
              <input
                type="button"
                value="Save for Later"
                onClick={() => alert("Saving...")}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* 9th SECTION  */}
      <div className="container flex flex-wrap items-center justify-between mx-auto text-justify space-x-2">
        <div className="space-y-4 mt-20 mb-20">
          <h1 className="text-4xl text-l font-bold">Learn About Blockchain</h1>
          <p className="font-semibold text-2xl">
            “ Good communication is the bridge between
            <br /> confusion and reality.” -
            <span className="text-orange">NAT TURNER</span>
          </p>
          <p className="text-xl">
            Are you ready to invest, learn, and make money?
            <br /> Yes, I suppose. You should contact us right away.
            <br /> Let's study, invest, and earn together.
          </p>
          <div className="bg-orange rounded-md text-center shadow-md mt-4 p-2 w-32">
            <Link to="/contact" className="text-white">
              <input type="button" value="Contact Us" />
            </Link>
          </div>
        </div>
        <div className=" text-l my-auto pb-24 pt-10">
          <img src={group} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
