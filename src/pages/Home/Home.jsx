import { Grid } from '@mui/material'
import React from 'react'
import LandingNavbar from '../../components/LandingNavbar/LandingNavbar'
import MiddleNav from '../../components/MiddleNav/MiddleNav'

const Home = () => {
  return (
    <>
    <LandingNavbar />
    <Grid container className="flex" style={{height:"90vh", border:"1px solid red"}} >
      <h1 style={{color:"grey"}} >Background Here...</h1>
    </Grid>
    <MiddleNav />
    </>
  )
}

export default Home