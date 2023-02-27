import React from "react";
import background from "../Assets/Pngs/donationpic.png";
import Typography from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const Donations = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
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
            <div className="bg-grey">
              <div className="className">
                
              </div>

            </div>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Donations;
