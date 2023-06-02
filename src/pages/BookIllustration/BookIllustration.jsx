import React, { useState } from "react";
import LandingNavbar from "../../components/LandingNavbar/LandingNavbar";
import Content from "../Illustration/Content";
import SecondNavbar from "../../components/SecondNavbar/SecondNavbar";
import { useParams } from "react-router-dom";

const BookIllustration = () => {
  
  var {key} = useParams();
  console.log("params" , key)
  const [subCategory, setSubCategory] = useState(key);

  return (
    <div className="illusionConatiner content">
      <LandingNavbar />
      <div style={{ height: "10vh" }}></div>
      <SecondNavbar setSubCategory={setSubCategory} subCategory={subCategory} />
      <Content subCategory={subCategory} />
    </div>
  );
};

export default BookIllustration;
