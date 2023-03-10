import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../Assets/Pngs/Datasecurity.png";
import subtitle from "../Assets/Pngs/Subtitle1.png";
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
import AOS from "aos";
import "aos/dist/aos.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#E0E0E0",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const style2 = {
  color: "white",
};

function LandingPage() {
  useEffect(() => {
    AOS.init({
      disableMutationObserver: false,
      mirror: false,
    });
    AOS.refresh();
  }, []);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="">
      <div className="bg-primary text-white md:flex-row flex-col">
        {/* 1st SECTION */}
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500"
          className="  mx-auto  font-avenir-light space-y-4 items-center"
        >
          <div className=" container flex flex-wrap items-center justify-between mx-auto text-justify">
            <div className=" text-l my-auto pb-24">
              <p className=" text-3xl my-auto font-semibold pb-5 ">
                <img src={subtitle} alt="logo" />
              </p>
              <p>
                Only at CoinCoach can you gain extensive knowledge of <br />
                cryptocurrency and learn best practices for trading. Are <br />
                you ready? Let’s get started.
              </p>
              <div className="bg-orange rounded-md text-center shadow-md mt-4 p-2 w-32">
                <Button
                  sx={style2}
                  onClick={handleOpen}
                  type="button"
                  className="pr-6 w-32 text-white"
                >
                  Get Started
                </Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      How much do you know about Blockchain/cryptocurrency?
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      Why not take this assessment to know how much knowledge
                      you have about blockchain.
                    </Typography>
                    <div className="bg-orange rounded-md text-center shadow-md mt-6 p-4 pl-7 w-48 text-white flex items-center mx-auto">
                      <Link
                        to="https://docs.google.com/forms/d/1MQ-lLMSx88T3BIj7vrH0Hh6w04Sh4L7Lmvm3AxtWIu4/edit"
                        className="text-white hover:text-primary"
                      >
                        <input type="button" value="Take assessment" />
                      </Link>
                    </div>
                  </Box>
                </Modal>
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
      <div
        data-aos="fade-in"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1500"
        className="border border-orange rounded-md container flex md:flex-row flex-col flex-wrap items-center justify-between mx-auto text-justify m-10 mt-20 px-8 py-8 "
      >
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
          <Link to="/academy" className="hover:text-primary">
            <input type="button" value=" Explore Academy Now" />
          </Link>
        </div>
      </div>

      {/* 3rd SECTION */}
      <div
        data-aos="fade-right"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1500"
        className="md:flex-row flex-col space-y-4 mt-20 items-center mx-96 text-center"
      >
        <h1 className="text-2xl text-l font-bold">
          CoinCoach Value propositions
        </h1>
        <p>
          Discover eye-catching features to plan your ideal cryptocurrency
          investment
        </p>
      </div>

      {/* 4th SECTION */}
      <div
        data-aos="fade-left"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1500"
        className=" container flex md:flex-row flex-col items-center justify-between mx-auto text-justify mt-20"
      >
        {/* 1st */}
        <div className="pb-24 pt-10">
          <p className=" text-3xl my-auto font-semibold pb-5 ">
            <img src={img1} alt="image1" />
          </p>
          <h2 class="mb-4 text-l font-semibold text-gray-500 uppercase dark:text-gray-400">
            Donate in coincoach
          </h2>
          <ul class="text-gray-500 dark:text-gray-400">
            <li>
              Support our CoinCoach platform to
              <br /> provide easy Blockchain and <br />
              Cryptocurrency learning
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
              Your personal data shared on
              <br /> our platform is safe with
               us!<br /> Cyber security is updated
              <br /> regularly
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
              <Link
                to="/academy"
                className="hover:underline pt-5 text-xs text-orange"
              >
                See Explained
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* 5th SECTION */}
      <div
        data-aos="fade-in"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1500"
        className="space-y-4 mt-20 mb-20 mx-96 text-center"
      >
        <h1 className="text-2xl text-l font-bold">Learn About Blockchain</h1>
        <p>Learn all about cryptocurrency to start investing</p>
      </div>

      {/* 6th SECTION */}
      <div
        data-aos="fade-right"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1500"
        className=" flex justify-center items-center mt-20 mb-20"
      >
        <div className="space-y-6 ">
          <div className=" container flex items-center mx-auto  px-8 space-x-4">
            <Link to="https://www.momint.so/learn-about-nfts?utm_source=Google+Search+Ad&utm_medium=CPC&utm_campaign=Search+Ad+|+What+Are+NFTs+(Africa)" className="hover:underline pt-5 text-xs text-orange">
              <img src={nfts} alt="about" />
            </Link>
            <Link to="https://www.kaspersky.com/resource-center/definitions/what-is-cryptocurrency" className="hover:underline pt-5 text-xs text-orange">
              <img src={about1} alt="about" />
            </Link>
            <Link to="https://thebitcoinmanual.com/articles/what-is-coin-control/" className="hover:underline pt-5 text-xs text-orange">
              <img src={about2} alt="about" />
            </Link>
          </div>
          <div className=" container flex items-center mx-auto px-8  space-x-4 ">
            <Link to="https://www.cryptovantage.com/guides/setting-up-crypto-wallet/" className="hover:underline pt-5 text-xs text-orange">
              <img src={about3} alt="about" />
            </Link>
            <Link to="/aboutus" className="hover:underline pt-5 text-xs text-orange">
              <img src={about4} alt="about" />
            </Link>
            <Link to="https://www.getearlybird.io/blog/is-crypto-safe" className="hover:underline pt-5 text-xs text-orange">
              <img src={about5} alt="about" />
            </Link>
            <Link to="https://unbanked.com/defi-the-wild-west-of-crypto/#:~:text=DeFi%20is%20called%20the%20Wild,of%20middlemen%20or%20complicated%20paperwork." className="hover:underline pt-5 text-xs text-orange">
              <img src={about6} alt="about" />
            </Link>
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
      <div
        data-aos="fade-right"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1500"
        className="md:flex-row flex-col space-y-4 mt-20 mb-20 mx-96 text-center"
      >
        <h1 className="text-2xl text-l font-bold">Learn About Blockchain</h1>
        <p>
          Have access to thousands of videos to learn more about
          cryptocurrencies. Watch, save, download and share.
        </p>
      </div>

      {/* 8th SECTION */}
      {/* Vidoe and links */}
      <div
        data-aos="fade-left"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="2000"
        className="flex md:flex-row flex-col justify-center items-center mt-20 mb-20 space-x-6"
      >
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
            <Link to="/contact" className="text-white hover:text-primary">
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
            <Link to="/contact" className="text-white hover:text-primary">
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
            <Link to="/" className="text-white hover:text-primary">
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

      {/* 9th SECTION  */}
      <div
        data-aos="fade-left"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1500"
        className="container flex md:flex-row flex-col flex-wrap items-center justify-between mx-auto text-justify space-x-2"
      >
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
            <Link to="/contact" className="text-white hover:text-primary">
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
