import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import AOS from "aos";
import "aos/dist/aos.css";

const Vidoe = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <>
      <div className="py-10 px-60 flex justify-center space-x-14">
        <ButtonGroup variant="contained" className="">
          <Button variant="">Videos</Button>
          <Button variant="">Articles</Button>
        </ButtonGroup>
      </div>
      <div data-aos="fade-left" data-aos-duration="2000" className="flex md:flex-row flex-col justify-center items-center mt-20 mb-20 space-x-6">
        {/* div 1 */}
        <div className="bg-grey2 p-10 rounded-md">
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
            <Link to="/contact" className="text-white hover:text-primary">
              <input type="button" value="Save for Later" />
            </Link>
          </div>
        </div>

        {/* div 2 */}
        <div className="bg-grey2 p-10 rounded-md">
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
            <Link to="/contact" className="text-white hover:text-primary">
              <input type="button" value="Save for Later" />
            </Link>
          </div>
        </div>

        {/* div 3 */}
        <div className="bg-grey2 p-10 rounded-md">
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
            <Link to="/" className="text-white hover:text-primary">
              <input type="button" value="Save for Later" />
            </Link>
          </div>
        </div>

        {/* div 4 */}
        <div className="bg-grey2 p-10 rounded-md">
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
            <Link to="/" className="text-white hover:text-primary">
              <input
                type="button"
                value="Save for Later"
                onClick={() => alert("Saving...")}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-center items-center mb-20 space-x-12">
        {/* div 0 */}
        <div className="bg-grey2 p-10 rounded-md">
          <iframe
            src="https://www.youtube.com/embed/BFQbDYGSjuQ"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            title="video"
          />
          <h1 className="text-xl text-l font-bold pt-2 pb-2">
            History of Blockchain
          </h1>
          <p>
            This is a simple introduction to
            <br /> cryptocurrency and some basic
            <br /> informations on cryptocurrency.
          </p>
          <div className="bg-orange rounded-md text-center shadow-md mt-4 p-2 w-32">
            <Link to="/contact" className="text-white hover:text-primary">
              <input type="button" value="Save for Later" />
            </Link>
          </div>
        </div>

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
            The Coin Coach Platform provides this
            <br /> video for individuals with low knowledge
            <br /> of Blockchain and Cryptocurrency.
          </p>
          <div className="bg-orange rounded-md text-center shadow-md mt-4 p-2 w-32">
            <Link to="/contact" className="text-white hover:text-primary">
              <input type="button" value="Save for Later" />
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
              <input type="button" value="Save for Later" />
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
              <input type="button" value="Save for Later" />
            </Link>
          </div>
        </div>
      </div>

      <Box className="bg-yellow pb-5 pt-1 mt-2 px-6">
        {/* 1st SECTION */}
        <div data-aos="fade-right" data-aos-duration="1500" className="items-center mx-96 mt-20 mb-10 text-center">
          <h1 className="text-4xl font-semibold">Become a Coach</h1>
          <p className="text-xl">
            Join our tutors to share your knowledge on blockchain
            <br /> technology with enthusiastic learners and earn our
            <br />
            <span className="text-orange font-extrabold text-2xl">COIN</span>
            <span className="text-primary font-extrabold text-2xl">
              COACH
            </span>{" "}
            coins.
          </p>
          <div className="bg-orange rounded-md text-center shadow-md mt-6 p-4 pl-7 w-48 text-white mb-20 flex items-center mx-auto">
            <Link
              to="https://docs.google.com/forms/d/1MQ-lLMSx88T3BIj7vrH0Hh6w04Sh4L7Lmvm3AxtWIu4/edit"
              className="text-white hover:text-primary"
            >
              <input type="button" value="Become a Coach" />
            </Link>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Vidoe;
