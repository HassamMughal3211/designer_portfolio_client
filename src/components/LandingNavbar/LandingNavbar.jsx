import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import "./LandingNavbar.css"

const LandingNavbar = () => {
  return (
    <Grid container className="mainNavbar">
      <Grid item container md={0.5}></Grid>
      <Grid item container md={1.5} style={{height:'100%'}} className='flex'>Logo</Grid>
      <Grid item container md={4} ></Grid>
      <Grid item container md={5} style={{height:'100%'}} >
        <Grid item md={12} className='flex menuOptions' >
          <span>Animation</span>
          <span>Illustration</span>
          <span>Graphic Designing</span>
          <span>Book Illustration</span> 
          </Grid>
        {/* <Grid item md={2} className='flex'>Illustrations</Grid>
        <Grid item md={2} className='flex'>Graphic Designing</Grid>
        <Grid item md={2} className='flex'>Book Illustrations</Grid> */}
      </Grid>
      <Grid item container md={1} ></Grid>

    </Grid>
  );
};

export default LandingNavbar;
