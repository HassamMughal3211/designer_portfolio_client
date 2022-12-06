import React, { useState } from "react";
import LandingNavbar from "../../components/LandingNavbar/LandingNavbar";
import Content from "../Illustration/Content";

const Logo = () => {
  const [subCategory, setSubCategory] = useState("logo");

  return (
    <div className="illusionConatiner content">
      <LandingNavbar />
      <div style={{ height: "10vh" }}></div>
      <Content subCategory={subCategory} />
    </div>
  );
};

export default Logo;
