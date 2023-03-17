import { useEffect, useState } from "react";
import Web3 from "web3";
import background from "../Assets/Pngs/donationpic.png";
import Box from "@mui/material/Box";
import AOS from "aos";
import "aos/dist/aos.css";

const DonationForm = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  const [donationAmount, setDonationAmount] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleDonation = async () => {
    if (!window.ethereum) {
      setErrorMessage(
        "Metamask not detected. Please install Metamask to donate in Ethereum."
      );
      return;
    }

    const web3 = new Web3(window.ethereum);

    try {
      await window.ethereum.enable(); // enable Metamask
      const accounts = await web3.eth.getAccounts();
      const account = accounts[0];
      const amount = web3.utils.toWei(donationAmount, "ether");

      // send transaction
      await web3.eth.sendTransaction({
        from: account,
        to: "0x0C42e1f54B68d2097441d26D6cd4107b9CBA431F", // coin coach wallet ID
        value: amount,
      });

      // reset form and error message
      setDonationAmount("");
      setErrorMessage("");
    } catch (err) {
      console.error(err);
      setErrorMessage("An error occurred while processing your donation.");
    }
  };

  const handleInputChange = (event) => {
    setDonationAmount(event.target.value);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
      className="flex md:flex-row sm:flex-row flex-col items-center justify-center h-screen"
    >
      <Box
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1500"
        sx={{
          width: 700,
          height: 500,
          backgroundColor: "white",
        }}
        className="mx-32 mb-24 bg-white rounded-md"
      >
        <div className="mt-20 mx-5 space-y-4 items-center">
          <h1 className="font-bold font-mono text-center text-2xl">
            Like what we do at coin coach?
          </h1>
          <h2 className="text-center text-xl font-mono pb-3">
            Your Ethereum donation would help us do more{" "}
          </h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <label
              htmlFor="donation-amount"
              class="block text-gray-700 font-bold mb-2"
            >
              Donation Amount (ETH)
            </label>
            <input
              type="text"
              id="donation-amount"
              value={donationAmount}
              onChange={handleInputChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <div class="flex items-center justify-center">
              <button
                onClick={handleDonation}
                className="bg-orange rounded-md text-center shadow-md mt-6 p-3 pl-5 w-24 text-white mb-10 flex items-center mx-auto hover-underline"
              >
                Donate
              </button>
            </div>
            {errorMessage && <p>{errorMessage}</p>}
          </form>
        </div>
      </Box>
    </div>
  );
};

export default DonationForm;
