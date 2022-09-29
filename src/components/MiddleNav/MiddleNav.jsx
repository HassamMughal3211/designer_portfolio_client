import { Grid } from '@mui/material';
import React from 'react';
import "./MiddleNav.css"

const MiddleNav = () => {
  return (
    <Grid container className="middleNavMain flex">
        <Grid md={6} item className='flex'>
            <button className="middleNavButtonShadow " >2D Animation</button>
            <button className="middleNavButtonShadow" >3D Animation</button>
            <button className="middleNavButton" >Whiteboard</button>
        </Grid>
        <Grid item container className='gridPage' xs={12} >

        </Grid>
    </Grid>
  )
}

export default MiddleNav