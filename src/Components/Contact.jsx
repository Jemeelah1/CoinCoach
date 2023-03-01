import React, { useEffect } from "react";
import contactpic from "../Assets/Pngs/ContactPic.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  const [formStatus, setFormStatus] = React.useState("Send");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };

  return (
    <div>
      {/* 1st SECTION */}
      <div className="w-screen">
        <p data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1500" className=" text-3xl my-auto font-semibold pb-5 w-full">
          <img src={contactpic} alt="contact" className="w-full" />
        </p>
      </div>

      {/* 2nd SECTION */}
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1500" className="space-y-4 mt-20 mb-10 justify-center items-center mx-96 text-center">
        <h1 className="text-4xl font-bold">We would love to hear from you</h1>
        <p className="text-xl">
          Feel free to contact us anytime. we will get back to you as soon as we
          can!
        </p>
      </div>

      {/* 3rd SECTION */}
      <div data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-duration="1500" className="mt-2 mb-20 justify-center items-center">
        <form onSubmit={onSubmit}>
          <div className="mt-5 mx-auto space-x-20 space-y-10 flex justify-center items-center">
          <div className="space-y-10">
            <div className="mb-3 space-y-4">
              <label className="form-label" htmlFor="name">
                NAME
              </label><br />
              <input className="form-control border w-96 h-10 p-2 rounded-md" type="text" placeholder="Enter your name" required />
            </div>
            <div className="mb-3 space-y-4">
              <label className="form-label" htmlFor="email">
                EMAIL
              </label><br />
              <input
                className="form-control border w-96 h-10 p-2 rounded-md"
                type="email"
                placeholder="Enter your email"
                id="email"
                required
              />
            </div>
            <div className="mb-3 space-y-4">
              <label className="form-label" htmlFor="email">
                PHONE NUMBER
              </label><br />
              <input className="form-control border w-96 h-10 p-2 rounded-md" type="tel" id="phone" placeholder="+234000000000" required />
            </div>
          </div>
          <div className="mb-3 space-y-4">
            <label className="form-label" htmlFor="message">
              SEND US A MESSAGE
            </label><br />
            <textarea className="form-control border h-80 w-96 p-2 rounded-md" id="message" placeholder="Write us a message" required />
          </div>
          </div>
          <button className="bg-orange rounded-md text-center shadow-md mt-6 p-2 pl-7 w-24 text-white mb-20 flex items-center mx-auto" type="submit">
            {formStatus}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
