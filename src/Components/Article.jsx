import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
// import SearchIcon from "../Assets/Pngs/search.png";

const Article = () => {
  // const active = ({ isActive }) => {
  //   console.log(isActive);
  //   return { color: isActive ? "#CE5A29" : "" };
  // };

  // const [searchValue, setSearchValue] = useState("");

  // const handleSearchChange = (event) => {
  //   setSearchValue(event.target.value);
  // };

  // return (
  //   // <>
  //   //   <div className="container mx-auto mb-10 mt-10 space-x-2">
  //   //     <div className="items-center flex md:flex-row flex-col bg-white justify-center">
  //   //       <div className="grow p-2 ">
  //   //         <Link
  //   //           to="/videos"
  //   //           className="py-4 px-40 text-center bg-orange text-white font-bold rounded-l-lg hover:bg-white hover:text-orange"
  //   //         >
  //   //           Videos
  //   //         </Link>
  //   //         <Link
  //   //           to="/articles"
  //   //           className="px-40 py-4 text-center bg-orange text-white font-bold rounded-r-lg hover:bg-white hover:text-orange"
  //   //         >
  //   //           Articles
  //   //         </Link>
  //   //       </div>
  //   //       <div className="w-80 items-center justify-end pr-4">
  //   //         <input
  //   //           type="text"
  //   //           className="pl-8 py-2 w-full rounded-md border-gray-400 border-2 focus:border-orange focus:outline-none"
  //   //           placeholder="Search"
  //   //           value={searchValue}
  //   //           onChange={handleSearchChange}
  //   //         />
  //   //         {/* <SearchIcon className="absolute left-2" /> */}
  //   //       </div>
  //   //     </div>
  //   //   </div>
  //   // </>
    
  // );
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
  )
};

export default Article;
