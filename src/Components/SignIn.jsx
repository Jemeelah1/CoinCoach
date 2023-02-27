import React from "react";
import background from "../Assets/Svgs/SignIn.svg";

function SignIn() {
    return (
      <>
          <div style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: 'center', height: '100vh'}}>
            <h1>Hello</h1>    
          </div>
      </>
    );
  }
  
  export default SignIn;