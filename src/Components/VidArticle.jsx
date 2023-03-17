import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import SwitchSelector from "react-switch-selector";
import Article from "./Article";
import Vidoe from "./Vidoe";
// import SearchIcon from "../Assets/Pngs/search.png";

const VidArticle = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    setTab(0);
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();
  const [tab, setTab] = useState(0);
  const currentParams = searchParams.get("va");

  useEffect(() => {
    if (currentParams) {
      if (currentParams === "vidoes") setTab(0);
      if (currentParams === "articles") setTab(1);
    }
  }, [currentParams]);

  const options = [
    {
      label: "Vidoes",
      value: "vidoes",
      selectedBackgroundColor: "#CE5A29",
    },
    {
      label: "Articles",
      value: "articles",
      selectedBackgroundColor: "#CE5A29",
    },
  ];

  const onChange = (newValue) => {
    console.log(newValue);
    setSearchParams({ va: newValue });
  };

  const initialSelectedIndex = options.findIndex(
    ({ value }) => value === "vidoes"
  );

  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1500"
        className="container mx-auto mb-10 mt-10 space-x-2"
      >
        <div className="items-center flex md:flex-row sm:flex-row flex-col bg-white justify-center">
          <div className="grow p-2 ">
            <div
              className="border-2 border-orange rounded-md"
              style={{ width: 1000, height: 70 }}
            >
              <SwitchSelector
                onChange={onChange}
                options={options}
                initialSelectedIndex={initialSelectedIndex}
                backgroundColor={"#ffffff"}
                fontColor={"#CE5A29"}
                fontSize="3em"
                className="text-center rounded-l-lg hover:bg-white hover:text-orange"
              />
            </div>
          </div>
          <div className="w-80 items-center justify-end pr-4">
            <input
              type="text"
              className="pl-8 py-2 w-full rounded-md border-gray-400 border-2 focus:border-orange focus:outline-none"
              placeholder="Search"
              value={searchValue}
              onChange={handleSearchChange}
            />
            {/* <SearchIcon className="absolute left-2" /> */}
          </div>
        </div>
      </div>
      {tab === 0 && <Vidoe />}
      {tab === 1 && <Article />}
    </>
  );
};

export default VidArticle;
