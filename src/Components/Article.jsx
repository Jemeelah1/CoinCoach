import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import nfts from "../Assets/Pngs/Nfts.png";
import about1 from "../Assets/Pngs/About1.png";
import about2 from "../Assets/Pngs/About2.png";
import about3 from "../Assets/Pngs/About3.png";
import about4 from "../Assets/Pngs/About4.png";
import about5 from "../Assets/Pngs/About5.png";
import about6 from "../Assets/Pngs/About6.png";

const Article = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <>
      {/* Header */}
      <div className="items-center mx-96 mt-20 mb-10 text-center">
        <h1
          data-aos="fade-right"
          data-aos-duration="1500"
          className="text-3xl font-semibold"
        >
          Learn About Blockchain
        </h1>
        <p className="pt-4 text-xl">
          Learn all about cryptocurrency to start investing
        </p>
      </div>

      {/* article page */}
      <div
        data-aos="fade-left"
        data-aos-duration="2000"
        className="container flex md:flex-row sm:flex-row flex-col justify-center items-center mt-20 mb-20 mx-auto space-x-4 space-y-4"
      >
        <div className="bg-grey2 p-10 rounded-md">
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/0*_-D6UU-yooZoSSfv"
            className="rounded-lg w-80 h-40"
            alt="/"
          />
          <h1 className="text-xl text-l font-bold pt-3">
            Introduction to gRPCs
            <br /> and Websockets Subscriptions
            <br /> on Cosmos Chain
          </h1>
          <p className="py-3">
            gRPC is an open-source, high-performance
            <br /> Remote Procedure Call (RPC) framework
            <br /> that can run in any environment.
            <br /> It uses HTTP/2 as the underlying
            <br /> transport protocol ....
            <Link
              to="https://medium.com/@leomofthings/introduction-to-grpcs-and-websockets-subscriptions-on-cosmos-chain-c84eed30637c"
              className="hover-underline"
            >
              <span className="text-orange pt-4 italic">continue reading</span>
            </Link>
          </p>
          <p>
            Author:{" "}
            <span className="text-orange pt-4 italic">
              Aransiola Leom Ayodele
            </span>
          </p>
        </div>

        {/* article 2 */}
        <div className="bg-grey2 p-10 rounded-md">
          <img
            src="https://miro.medium.com/v2/resize:fit:1248/format:webp/0*FT6ephplmdhgrsBS.jpg"
            className="rounded-lg w-80 h-40"
            alt="/"
          />
          <h1 className="text-xl text-l font-bold pt-2 pb-2">
            The basics of Cryptocurrency
            <br /> for beginners…Part 1
          </h1>
          <p className="py-3">
            Cryptocurrency is a digital or
            <br /> virtual currency that uses cryptography
            <br /> (the practice of secure communication) for
            <br /> security. Unlike traditional currencies
            <br /> cryptocurrency operates independently of a<br /> central bank
            and is...
            <Link
              to="https://medium.com/@jemiladotto/the-basics-of-cryptocurrency-for-beginners-8c6c98de8f9e"
              className="hover-underline"
            >
              <span className="text-orange pt-4 italic">continue reading</span>
            </Link>
          </p>
          <p>
            Author:{" "}
            <span className="text-orange pt-4 italic">
              Jemila Dotto Ibrahim
            </span>
          </p>
        </div>

        {/* artcle 3 */}
        <div className="bg-grey2 p-10 rounded-md">
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*hDqojj32MR_sFQKd.jpg"
            className="rounded-lg w-80 h-40"
            alt="/"
          />
          <h1 className="text-xl text-l font-bold pt-2 pb-2">
            The basics of Cryptocurrency
            <br /> for beginners…Part 2
          </h1>
          <p className="py-3">
            Cryptocurrency is a digital or
            <br /> virtual currency that uses cryptography
            <br /> (the practice of secure communication) for
            <br /> security. Unlike traditional currencies
            <br /> cryptocurrency operates independently of a<br /> central bank
            and is...
            <Link
              to="https://medium.com/@jemiladotto/the-basics-of-cryptocurrency-for-beginners-part-2-6b8e6bb453a"
              className="hover-underline"
            >
              <span className="text-orange pt-4 italic">continue reading</span>
            </Link>
          </p>
          <p>
            Author:{" "}
            <span className="text-orange pt-4 italic">
              Jemila Dotto Ibrahim
            </span>
          </p>
        </div>

        {/* article 4 */}
        <div className="bg-grey2 p-10 rounded-md">
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*XQhXpuat8FZExf-q.jpg"
            className="rounded-lg w-80 h-40"
            alt="/"
          />
          <h1 className="text-xl text-l font-bold pt-2 pb-2">
            The basics of Cryptocurrency
            <br /> for beginners…Part 3
          </h1>
          <p className="py-3">
            Cryptocurrency is a digital or
            <br /> virtual currency that uses cryptography
            <br /> (the practice of secure communication) for
            <br /> security. Unlike traditional currencies
            <br /> cryptocurrency operates independently of a<br /> central bank
            and is...
            <Link
              to="https://medium.com/@jemiladotto/the-basics-of-cryptocurrency-for-beginners-part-3-7d245fed860"
              className="hover-underline"
            >
              <span className="text-orange pt-4 italic">continue reading</span>
            </Link>
          </p>
          <p>
            Author:{" "}
            <span className="text-orange pt-4 italic">
              Jemila Dotto Ibrahim
            </span>
          </p>
        </div>
      </div>

      {/* Header 2 */}
      <div className="items-center mx-96 mt-20 mb-10 text-center">
        <h1
          data-aos="fade-right"
          data-aos-duration="1500"
          className="text-3xl font-semibold md:flex-row sm:flex-row flex-row"
        >
          Articles on CoinCoach
        </h1>
        <p className="pt-4 text-xl">
          Learn all about coincoach to start investing
        </p>
      </div>

      <div
        data-aos="fade-right"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1500"
        className=" flex justify-center items-center mt-20 mb-20"
      >
        <div className="space-y-6 ">
          <div className=" container flex md:flex-row sm:flex-row flex-col items-center mx-auto  px-8 space-x-4">
            <Link
              to="https://www.momint.so/learn-about-nfts?utm_source=Google+Search+Ad&utm_medium=CPC&utm_campaign=Search+Ad+|+What+Are+NFTs+(Africa)"
              className="hover:underline pt-5 text-xs text-orange"
            >
              <img src={nfts} alt="about" />
            </Link>
            <Link
              to="https://www.kaspersky.com/resource-center/definitions/what-is-cryptocurrency"
              className="hover:underline pt-5 text-xs text-orange"
            >
              <img src={about1} alt="about" />
            </Link>
            <Link
              to="https://thebitcoinmanual.com/articles/what-is-coin-control/"
              className="hover:underline pt-5 text-xs text-orange"
            >
              <img src={about2} alt="about" />
            </Link>
          </div>
          <div className=" container flex md:flex-row sm:flex-row flex-col items-center mx-auto px-8  space-x-4 ">
            <Link
              to="https://www.cryptovantage.com/guides/setting-up-crypto-wallet/"
              className="hover:underline pt-5 text-xs text-orange"
            >
              <img src={about3} alt="about" />
            </Link>
            <Link
              to="/aboutus"
              className="hover:underline pt-5 text-xs text-orange"
            >
              <img src={about4} alt="about" />
            </Link>
            <Link
              to="https://www.getearlybird.io/blog/is-crypto-safe"
              className="hover:underline pt-5 text-xs text-orange"
            >
              <img src={about5} alt="about" />
            </Link>
            <Link
              to="https://unbanked.com/defi-the-wild-west-of-crypto/#:~:text=DeFi%20is%20called%20the%20Wild,of%20middlemen%20or%20complicated%20paperwork."
              className="hover:underline pt-5 text-xs text-orange"
            >
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

      {/* go back link */}
      <div className="bg-orange rounded-md text-center shadow-md mt-6 p-3 pl-7 w-32 text-white mb-20 flex items-center mx-auto hover-underline">
        <Link to="/academy" className="text-white">
          <input type="button" value="Go Back" />
        </Link>
      </div>
    </>
  );
};

export default Article;
