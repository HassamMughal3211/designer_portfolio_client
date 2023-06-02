import React, { useState } from "react";
import LandingNavbar from "../../components/LandingNavbar/LandingNavbar";
import Content from "../Illustration/Content";
import SecondNavbar from "../../components/SecondNavbar/SecondNavbar";

const BookIllustration = () => {
  const [subCategory, setSubCategory] = useState("book illustration");

  return (
    <div className="illusionConatiner content">
      <LandingNavbar />
      <div style={{ height: "10vh" }}></div>
      <SecondNavbar setSubCategory={setSubCategory} subCategory={subCategory} />
      {/* <Content subCategory={subCategory} /> */}
    </div>
  );
};

export default BookIllustration;
