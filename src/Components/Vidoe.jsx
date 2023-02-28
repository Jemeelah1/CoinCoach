import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const Vidoe = () => {
  return (
    <>
      <div className="py-10 px-60 flex justify-center space-x-14">
        <ButtonGroup variant="contained" className="">
          <Button variant="">Videos</Button>
          <Button variant="">Articles</Button>
        </ButtonGroup>
      </div>
      <div className="flex justify-center items-center mt-20 mb-20 space-x-6">
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
            <Link to="/contact" className="text-white">
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
            <Link to="/contact" className="text-white">
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
            <Link to="/" className="text-white">
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
      <div className="flex justify-center items-center mb-20 space-x-12">
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
            <Link to="/contact" className="text-white">
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
            <Link to="/contact" className="text-white">
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
            <Link to="/contact" className="text-white">
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
            <Link to="/" className="text-white">
              <input type="button" value="Save for Later" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vidoe;
