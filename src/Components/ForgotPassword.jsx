import React from "react";
import { Link } from "react-router-dom";
import background from "../Assets/Svgs/SignIn.svg";
import "react-toastify/dist/ReactToastify.css";
import Userfront from "@userfront/core";

Userfront.init("demo1234");

Userfront.sendResetLink("viewer@example.com");

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      error: null,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onSubmit = (event) => {
    const { email } = this.state;

    email
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...event });
      })
      .catch((error) => {
        this.setState(byPropKey("error", error));
        this.timer(); //show alert message for some seconds
      });

    event.preventDefault();
  };

  timer = () => {
    this.setState({
      showingAlert: true,
    });

    setTimeout(() => {
      this.setState({
        showingAlert: false,
      });
    }, 4000);
  };

  // Whenever an input changes value, change the corresponding state variable
  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    this.setState({
      [target.name]: target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // Verify that the passwords match
    if (this.state.email !== this.state.emailVerify) {
      return;
    }
    // Call Userfront.resetPassword()
    Userfront.resetPassword({
      email: this.state.email,
    });
  }

  render() {
    const { email, error, showingAlert } = this.state;
    const isInvalid = email === "";
    return (
      <>
        {showingAlert && (
          <alert color="danger" onLoad={this.timer}>
            {error.message}
          </alert>
        )}
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
          }}
          className="flex justify-end items-center"
        >
          <div className="">
            <form onSubmit={this.handleSubmit}>
              <div className="text-2xl item-center mr-80 text-center">
                <h1>
                  <span className="text-orange">FORGOT PASSWORD?</span>
                </h1>
              </div>
              <div className="text-xl item-center mr-80 text-center py-4">
                <p>
                  Please type your email or phone number below
                  <br /> to receive OTP code to reset your password
                </p>
              </div>
              <div className=" font-semibold item-center p-7 py-4 mr-80">
                <label>
                  Email <br />
                  <input
                    name="email"
                    type="email"
                    value={this.state.email}
                    // onChange={this.handleInputChange}
                    placeholder="user@gmail.com"
                    onChange={(event) =>
                      this.setState(byPropKey("email", event.target.value))
                    }
                    className="border w-96 h-10 p-2 rounded-md"
                  />
                </label>
              </div>
              <div className="pt-4 p-5">
                <button
                  style={{
                    background: "#CE5A29",
                    color: "white",
                    textAlign: "center",
                    marginLeft: "6em",
                    width: "30%",
                    height: "3em",
                    borderRadius: "6px",
                  }}
                  disabled={isInvalid}
                  type="submit"
                >
                  Send Code
                </button>
              </div>
            </form>
            {/* go back link */}
            <div className="text-center mr-80 mt-6 text-orange items-center mx-auto hover-underline">
              <Link to="/signin" className="text-orange hover-underline">
                <p>Go Back</p>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ForgotPassword;
