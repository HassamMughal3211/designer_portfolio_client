import { Grid } from "@mui/material";
import React from "react";
import "./SecondNavbar.css";

const SecondNavbar = () => {
  return (
    <Grid container className="secondNav flex">
      {/* <span className="space" style={{height:"10vh", width:"100v", backghroundColor:"black"}} >     </span> */}
      <Grid iem md={12} sx={{p:0.5, mt:"10vh" }}  item className="flex">
        <button item className="secondNavButtonShadow ">
          LOGO
        </button>
        <button item className="secondNavButtonShadow">
          T-shirt
        </button>
        <button item className="secondNavButton">
          Banners
        </button>
        <button item className="secondNavButtonShadow ">
          Business Card
        </button>
        <button item className="secondNavButtonShadow">
          Brand identity
        </button>
        <button item className="secondNavButton">
          Social media post
        </button>
      </Grid>
    </Grid>
  );
};

export default SecondNavbar;
