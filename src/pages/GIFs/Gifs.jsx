import React, { useState } from "react";
import LandingNavbar from "../../components/LandingNavbar/LandingNavbar";
import Content from "../Illustration/Content";

const Gifs = () => {
  const [subCategory, setSubCategory] = useState("Gifs");

  return (
    <div className="illusionConatiner content">
      <LandingNavbar />
      <div style={{ height: "10vh" }}></div>
      <Content subCategory={subCategory} />
    </div>
  );
};

export default Gifs;
