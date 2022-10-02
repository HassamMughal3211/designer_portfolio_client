import { Grid } from "@mui/material";
import React from "react";
import "./SecondNavbar.css";

const SecondNavbar = () => {
  return (
    <Grid container className="secondNav flex">
      <Grid iem md={12} item className="flex">
        <button item className="secondNavButtonShadow ">
          2D Animation
        </button>
        <button item className="secondNavButtonShadow">
          3D Animation
        </button>
        <button item className="secondNavButton">
          Whiteboard
        </button>
        <button item className="secondNavButtonShadow ">
          2D Animation
        </button>
        <button item className="secondNavButtonShadow">
          3D Animation
        </button>
        <button item className="secondNavButton">
          Whiteboard
        </button>
      </Grid>
      <Grid item container className="gridPage" xs={12}></Grid>
    </Grid>
  );
};

export default SecondNavbar;
