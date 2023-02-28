import React from "react";
import background from "../Assets/Pngs/donationpic.png";
import Typography from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Checkbox from "@mui/material/Checkbox";

const Donations = () => {
  const [formStatus, setFormStatus] = React.useState("Send");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { address1, address2, email, message } = e.target.elements;
    let conFom = {
      address1: address1.value,
      address2: address2.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
        className="flex justify-center items-center"
      >
        <div>
          <Box
            sx={{
              width: 700,
              height: 600,
              backgroundColor: "white",
            }}
            className="items-center justify-between mx-auto my-auto bg-white rounded-md"
          >
            {/* 1st Div */}
            <div className="p-10 flex justify-center space-x-14">
              <div>
                <Typography variant="h1" component="h2">
                  Choose an amount
                </Typography>
                <ButtonGroup variant="space" className="pt-4 space-x-1">
                  <Button variant="outlined">$5</Button>
                  <Button variant="outlined">$10</Button>
                  <Button variant="outlined">$25</Button>
                  <Button variant="outlined">$50</Button>
                  <Button variant="outlined">$100</Button>
                </ButtonGroup>
              </div>
              <div>
                <Typography variant="h1" component="h2">
                  OR
                </Typography>
              </div>
              <div>
                <Typography variant="h1" component="h2" className="pb-4">
                  Enter your own
                </Typography>
                <input
                  className="border-primary rounded-md py-3 pl-10  p-10 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm border"
                  type="tel"
                  placeholder="$00000000000000"
                  required
                />
              </div>
            </div>

            {/* 2nd Div */}
            <Box className="bg-grey2 pb-5 pt-4 px-6">
              <div className="mt-10 mb-20 justify-center items-center">
                <form onSubmit={onSubmit}>
                  <div className="mt-5 mx-auto space-x-20 space-y-2 flex justify-center items-center">
                    <div className="">
                      <div className="mb-3 space-y-4">
                        <label
                          className="form-label text-xl font-bold"
                          htmlFor="name"
                        >
                          Address
                        </label>
                        <br />
                        <input
                          className="form-control border w-64 h-10 p-2 rounded-md"
                          type="text"
                          placeholder="Address Line 1"
                          required
                        />
                      </div>
                      <div className="mb-3 space-y-4">
                        <br />
                        <input
                          className="form-control border w-64 h-10 p-2 rounded-md"
                          type="text"
                          placeholder="Address Line 2"
                          id="text"
                          required
                        />
                      </div>
                      <div className="mb-3 space-y-4">
                        <input
                          className="form-control border w-40 h-10 p-2 rounded-md"
                          type="text"
                          placeholder="State/Country"
                          id="text"
                          required
                        />
                        <input
                          className="form-control border w-24 h-10 p-2 rounded-md"
                          type="text"
                          placeholder="Postcode"
                          id="text"
                          required
                        />
                      </div>
                    </div>

                    <div className="pb-20">
                      <div className="mb-3 space-y-4">
                        <label
                          className="form-label text-xl font-bold"
                          htmlFor="email"
                        >
                          Enter your email address
                        </label>
                        <br />
                        <input
                          className="form-control border w-64 h-10 p-2 rounded-md"
                          type="email"
                          placeholder="Enter your email"
                          id="email"
                          required
                        />
                      </div>
                      <div className="className">
                        <div className="font-bold">
                          <Typography variant="h1" component="h2">
                            Gift Aid
                          </Typography>
                        </div>
                        <div className="text-xs flex">
                          <div>
                            <Checkbox
                              checked={checked}
                              onChange={handleChange}
                              inputProps={{ "aria-label": "controlled" }}
                            />
                          </div>
                          <Typography variant="p" component="p">
                            All gifts of money that I have in the past 4 years
                            and all future gifts of money that I make from the
                            date of this declaration as Gift Aid donations until
                            I notify you otherwise.
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* buttons */}
                  <div className="flex items-center justify-center space-y-7 space-x-1">
                      <Link 
                      // to="/contact" 
                      className="bg-grey rounded-md text-center shadow-md mt-7 p-4 pl-7 w-32 text-white">
                        <input type="button" value="Add Details" />
                      </Link>
                      <Link
                        // to="/contact"
                        className="bg-orange rounded-md text-center shadow-md mb-4 p-4 pl-4 w-32 text-white"
                        value="Contact Us"
                      >
                        {formStatus}
                      </Link>
                  </div>
                </form>
              </div>
            </Box>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Donations;
