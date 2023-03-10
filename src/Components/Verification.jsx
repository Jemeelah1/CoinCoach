import React from "react";
import background from "../Assets/Svgs/SignIn.svg";

function Verification() {

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
        className="flex justify-end items-center"
      >
      </div>
    </>
  );
}

export default Verification;
