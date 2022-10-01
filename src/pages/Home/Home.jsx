import { Grid } from '@mui/material'
import React from 'react'
import LandingNavbar from '../../components/LandingNavbar/LandingNavbar'
import MiddleNav from '../../components/MiddleNav/MiddleNav'
import "./Home.css"

const Home = () => {
  return (
    <>
      <LandingNavbar />
      <Grid container className="flex heroDiv" >

      </Grid>
      <MiddleNav />
    </>
  )
}

export default Home