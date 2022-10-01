import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../pages/constants/constants';
import "./MiddleNav.css"

const MiddleNav = () => {
  const [allFiles,setAllFiles] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/api/v1/project/getAll`).then((response) => response.json()).then((data) => setAllFiles(data.data))
  }, [])
  
  return (
    <Grid container className="middleNavMain flex">
        <Grid md={6} item style={{height:'100%'}} className='flex'>
            <button className="middleNavButtonShadow " >2D Animation</button>
            <button className="middleNavButtonShadow" >3D Animation</button>
            <button className="middleNavButton" >Whiteboard</button>
        </Grid>
        <Grid item container className='gridPage flex' xs={12} >
            <Grid item container xs={12} style={{ height:"100%", justifyContent:"space-evenly", marginBottom:"20px"}} >
              {
                allFiles.map((item,idx) =>(
                  <Grid item md={3.8} className="gridPageBox">
                    <img src={`${BASE_URL}${item.fileData[0]}`} alt={idx} id={idx} height="100%" width="100%" />
                  </Grid>
                ))
              }
                {/* <Grid item md={3.8} className="gridPageBox" ></Grid>
                <Grid item md={3.8} className="gridPageBox" ></Grid>
                <Grid item md={3.8} className="gridPageBox" ></Grid>
                <Grid item md={3.8} className="gridPageBox" ></Grid>
                <Grid item md={3.8} className="gridPageBox" ></Grid>
                <Grid item md={3.8} className="gridPageBox" ></Grid>
                <Grid item md={3.8} className="gridPageBox" ></Grid>
                <Grid item md={3.8} className="gridPageBox" ></Grid> */}
                
            </Grid>
        </Grid>
    </Grid>
  )
}

export default MiddleNav