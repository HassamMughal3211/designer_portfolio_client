import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../pages/constants/constants";
import "./MiddleNav.css";
import CircularProgress from "@mui/material/CircularProgress";
import { Link, useParams } from "react-router-dom";

const MiddleNav = () => {
  const params = useParams();
  const [allFiles, setAllFiles] = useState([]);
  const [category, setCategory] = useState("animation");
  const [subCategory, setSubCategory] = useState("2danimation");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(params.id, "123123")
    setLoading(true);
    setSubCategory(params.id)
    fetch(
      `${BASE_URL}/api/v1/project/filterProjects?category=${category}&subCategory=${params.id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setAllFiles(data.data);
      });
  }, [params]);


  return (
    <Grid container className="middleNavMain flex">
      <Grid
        xs={12}
        item
        style={{ height: "100%", background: "white", zIndex: "1", overflow:"hidden" }}
        className="flex"
      >
        <Grid
          md={6}
          xs={12}
          item
          style={{ height: "100%", background: "white" }}
          className="flex"
        >
          <Link to="/2danimation">

            <button
              className={
                subCategory === "2danimation"
                  ? "middleNavButton"
                  : "middleNavButtonShadow"
              }
            >
              2D Animation
            </button>
          </Link>
          <Link to="/3danimation">
            <button
              className={
                subCategory === "3danimation"
                  ? "middleNavButton"
                  : "middleNavButtonShadow"
              }
            >
              3D Animation
            </button>
          </Link>
          <Link to="/whiteboard">

            <button
              className={
                subCategory === "whiteboard"
                  ? "middleNavButton"
                  : "middleNavButtonShadow"
              }
            >
              Whiteboard
            </button>
          </Link>
          <Link to="/demovideos">

            <button
              className={
                subCategory === "demovideos"
                  ? "middleNavButton"
                  : "middleNavButtonShadow"
              }
            >
              Demo Videos
            </button>
          </Link>
        </Grid>
      </Grid>
      <Grid
        item
        container
        className="gridPage flex"
        xs={12}
        style={{ zIndex: "2" }}
      >
        <Grid
          item
          container
          md={12}
          xs={11}
          style={{
            height: "100%",
            justifyContent: "space-evenly",
            marginBottom: "20px",
          }}
        >
          {!loading ? (
            allFiles.map((item, idx) => (
              <Grid item sm={3.8} xs={12} className="gridPageBox">
                <video
                  src={`${BASE_URL}${item.fileData[0]}`}
                  alt={idx}
                  id={idx}
                  controls={false}
                  autoPlay={true}
                  loop={true}
                  muted
                  height="100%"
                  width="100%"
                />
              </Grid>
            ))
          ) : (
            <CircularProgress className="animationLoader" disableShrink />
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MiddleNav;
