import { Grid } from '@mui/material'
import React from 'react'
import LandingNavbar from '../../components/LandingNavbar/LandingNavbar'
import MiddleNav from '../../components/MiddleNav/MiddleNav'
import "./Home.css"
import backGroundVideo from "../../assets/No-Black-Start-Mobile-test.mp4"

const Home = () => {
  return (
    <>
      <LandingNavbar />
      <Grid container className="flex heroDiv" >
        <video width="100%" height="auto" controls={false} autoPlay={true} loop="true" muted >
          <source src={backGroundVideo} type="video/mp4" />
        </video>

      </Grid>
      <MiddleNav />
    </>
  )
}

export default Home