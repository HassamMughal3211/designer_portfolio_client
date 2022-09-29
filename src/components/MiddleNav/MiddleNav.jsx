import { Grid } from '@mui/material';
import React from 'react';
import "./MiddleNav.css"

const MiddleNav = () => {
  return (
    <Grid container className="middleNavMain flex">
        <Grid md={6} item className='flex'>
            <button className="middleNavButton middleNavButtonShadow " >2D Animation</button>
            <button className="middleNavButton" >3D Animation</button>
            <button className="middleNavButton" >Whiteboard</button>
        </Grid>
    </Grid>
  )
}

export default MiddleNav