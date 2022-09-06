import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

const LandingNavbar = () => {
  return (
    <Box
      style={{
        height: "10vh",
        background: "orange",
        display: "flex",
        // flexFlow: "row",
        justifyItems: "space-around",
      }}
    >
      <Grid xs={3} item>
        Logo
      </Grid>
      <Grid xs={9} item container>
        <Grid item>Animations</Grid>
        <Grid item>Illustrations</Grid>
        <Grid item>Graphic Designing</Grid>
        <Grid item>Book Illustrations</Grid>
      </Grid>{" "}
    </Box>
  );
};

export default LandingNavbar;
