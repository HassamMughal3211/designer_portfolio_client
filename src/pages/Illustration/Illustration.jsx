import { AspectRatio } from "@mui/joy";
import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import LandingNavbar from "../../components/LandingNavbar/LandingNavbar";
import SecondNavbar from "../../components/SecondNavbar/SecondNavbar";
// import "./Illustration.css";
// import img from "../../assets/img.jpg";
import Content from "./Content";

const Illustration = () => {
  const [subCategory,setSubCategory] = useState("logo")


  return (
    <div className="illusionConatiner">
    <LandingNavbar />
      <div style={{height:"10vh"}} ></div>
      <SecondNavbar subCategory = {subCategory} setSubCategory = {setSubCategory}/>
          <Content  subCategory = {subCategory}/>
    
    </div>
     );
};

export default Illustration;
