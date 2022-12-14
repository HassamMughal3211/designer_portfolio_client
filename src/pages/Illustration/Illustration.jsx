import React, { useState } from "react";
import LandingNavbar from "../../components/LandingNavbar/LandingNavbar";
import Content from "./Content";

const Illustration = () => {
  const [subCategory, setSubCategory] = useState("illustration");

  return (
    <div className="illusionConatiner content">
      <LandingNavbar />
      <div style={{ height: "10vh" }}></div>
      <Content subCategory={subCategory} />
    </div>
  );
};

export default Illustration;
