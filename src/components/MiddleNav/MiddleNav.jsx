import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../pages/constants/constants';
import "./MiddleNav.css"

const MiddleNav = () => {
  const [allFiles, setAllFiles] = useState([]);
  const [category, setCategory] = useState("2danimation");

  useEffect(() => {
    fetch(`${BASE_URL}/api/v1/project/filterProjects?category=${category}`).then((response) => response.json()).then((data) => setAllFiles(data.data))
  }, []);

  const categoryButtonClicked = (param) => {
    setCategory(param);
    fetch(`${BASE_URL}/api/v1/project/filterProjects?category=${param}`).then((response) => response.json()).then((data) => setAllFiles(data.data))
  }

  return (
    <Grid container className="middleNavMain flex">
      <Grid md={6} xs={12} item style={{ height: '100%' }} className='flex'>
        <button 
        className={category === '2danimation' ? "middleNavButton" : "middleNavButtonShadow" }
         onClick={() => categoryButtonClicked('2danimation')} >2D Animation</button>
        <button 
        className={category === '3danimation' ? "middleNavButton" : "middleNavButtonShadow" }
         onClick={() => categoryButtonClicked('3danimation')} >3D Animation</button>
        <button 
        className={category === 'whiteboard' ? "middleNavButton" : "middleNavButtonShadow" } 
        onClick={() => categoryButtonClicked('whiteboard')} >Whiteboard</button>
      </Grid>
      <Grid item container className='gridPage flex' xs={12} >
        <Grid item container md={12} xs={11} style={{ height: "100%", justifyContent: "space-evenly", marginBottom: "20px" }} >
          {
            allFiles.map((item, idx) => (
              <Grid item md={3.8} xs={12} className="gridPageBox">
                <img src={`${BASE_URL}${item.fileData[0]}`} alt={idx} id={idx} height="100%" width="100%" />
              </Grid>
            ))
          }
        </Grid>
      </Grid>
    </Grid>
  )
}

export default MiddleNav