import { Grid } from '@mui/material';
import React from 'react';
import "./MiddleNav.css"

const MiddleNav = () => {
  return (
    <Grid container className="middleNavMain flex">
        <Grid md={6} item style={{height:'100%'}} className='flex'>
            <button className="middleNavButtonShadow " >2D Animation</button>
            <button className="middleNavButtonShadow" >3D Animation</button>
            <button className="middleNavButton" >Whiteboard</button>
        </Grid>
        <Grid item container className='gridPage flex' xs={12} >
            <Grid item container xs={12} style={{ height:"100%", justifyContent:"space-evenly"}} >
                <Grid item md={3.8} className="gridPageBox" ></Grid>
                <Grid item md={3.8} className="gridPageBox" ></Grid>
                <Grid item md={3.8} className="gridPageBox" ></Grid>
                <Grid item md={3.8} className="gridPageBox" ></Grid>
                <Grid item md={3.8} className="gridPageBox" ></Grid>
                <Grid item md={3.8} className="gridPageBox" ></Grid>
                <Grid item md={3.8} className="gridPageBox" ></Grid>
                <Grid item md={3.8} className="gridPageBox" ></Grid>
                <Grid item md={3.8} className="gridPageBox" ></Grid>
                
            </Grid>
        </Grid>
    </Grid>
  )
}

export default MiddleNav