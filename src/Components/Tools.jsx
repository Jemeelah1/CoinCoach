import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Tools = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      });
    
      return (
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500"
          className="items-center mx-96 mt-96 mb-96 text-center text-9xl"
        >
          <span className="text-orange font-extrabold text-8xl">COMING</span>
          <span className="text-primary font-extrabold text-8xl">SOON !</span> 
        </div>
      );
    }
export default Tools;