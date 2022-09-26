import { Box, Grid } from "@mui/material";
import React from "react";
import LandingNavbar from "../../Components/LandingNavbar/LandingNavbar";

const Home = () => {
  const pictures = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <>
      <LandingNavbar />
      <Box>
        <Grid xs={12}
          sx={{ height: "100vh", background: "blue" }}
        ></Grid>;
        
        <Grid container xs={12} sx={{ background: "black", display: "flex" ,gap:"1%" , justifyContent:"space-around"}}>
          {pictures.map(() => (
            <Grid
              item
              md={3}
              xs={12}
              mt={2}
              mb={2}
              sx={{
                background: "grey",
                border: "2px solid white",
                minHeight: "300px",
                minWidth: "300px",
              }}
            ></Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Home;
