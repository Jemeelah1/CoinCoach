import React from "react";
import contactpic from "../Assets/Pngs/ContactPic.png";

const Contact = () => {
  return (
    <div>
      {/* 1st SECTION */}
      <div className="w-screen">
        <p className=" text-3xl my-auto font-semibold pb-5 w-full">
          <img src={contactpic} alt="contact" className="w-full" />
        </p>
      </div>

      {/* 2nd SECTION */}
      <div className="space-y-4 mt-20 mb-20 justify-center items-center mx-96 text-center">
        <h1 className="text-4xl font-bold">We would love to hear from you</h1>
        <p className="text-xl">
          Feel free to contact us anytime. we will get back to you as soon as we
          can!
        </p>
      </div>

      {/* 3rd SECTION */}
      <div className=" pb-20">
        <div className="className">
          {/* name */}
          <div className="className">
            <label for="name">Name</label>
            <input
              className="border-primary rounded-md py-3 pl-10  p-10 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm border"
              type="text"
              placeholder="Enter your name" required
            />
          </div>

          {/* email */}
          <div className="className">
            <label for="name">Email</label>
            <input
              className="border-primary rounded-md py-3 pl-10  p-10 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm border"
              type="email"
              placeholder="Enter your email" required
            />
          </div>

          {/* phone number */}
          <div className="className">
            <label for="name">Phone Number</label>
            <input
              className="border-primary rounded-md py-3 pl-10  p-10 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm border"
              type="tel"
              placeholder="Enter your Phone number" required
            />
          </div>
        </div>
        {/* text area */}
        <div className="">
          <label for="name">Send us a message</label>
          <input
            className="border-primary rounded-md py-3 pl-10  p-10 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm border"
            type="textarea" cols="30" rows="10"
            placeholder="Write something...." required
          />
        </div>

        {/* button */}
        <div className="bg-orange rounded-md shadow-md mt-4 p-2 w-32 text-white mx-96 text-center">
          <input type="button" value="Submit" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
