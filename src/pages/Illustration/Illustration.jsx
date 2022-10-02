import { AspectRatio } from "@mui/joy";
import { Grid, Typography } from "@mui/material";
import React from "react";
import LandingNavbar from "../../components/LandingNavbar/LandingNavbar";
import SecondNavbar from "../../components/SecondNavbar/SecondNavbar";
// import "./Illustration.css";
// import img from "../../assets/img.jpg";
import Content from "./Content";

const Illustration = () => {
  return (
    <div className="illusionConatiner">
    <LandingNavbar />
      <SecondNavbar />
      {/* <div className="space">s</div> */}
      <Content />
    
    </div>
     );
};

export default Illustration;
