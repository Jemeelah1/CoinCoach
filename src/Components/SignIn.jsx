import React from "react";
import background from "../Assets/png/Sign-in.png";

function SignIn() {
    return (
      <>
          <div style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: 'center',}}>
                <h1 className="text-2xl">This Ecommerce Application will be built by Team Intel</h1>
          </div>
      </>
    );
  }
  
  export default SignIn;