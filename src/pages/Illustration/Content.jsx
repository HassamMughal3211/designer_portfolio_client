import React, { useEffect, useState } from "react";
import { AspectRatio } from "@mui/joy";
import { Grid, Typography } from "@mui/material";
import "./Illustration.css";
import img from "../../assets/img.jpg";
import { BASE_URL } from "../constants/constants";

const Content = () => {
  const [imgArray, setImgArray] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  //   const imgArray = [
  //     {
  //       imageUrl: img,
  //       category: "Logo",
  //     },
  //     {
  //       imageUrl: img,
  //       category: "Logo",
  //     },
  //     {
  //       imageUrl: img,
  //       category: "Logo",
  //     },
  //     {
  //       imageUrl: img,
  //       category: "Logo",
  //     },
  //     {
  //       imageUrl: img,
  //       category: "Logo",
  //     },
  //     {
  //       imageUrl: img,
  //       category: "Logo",
  //     },
  //     {
  //       imageUrl: img,
  //       category: "Logo",
  //     },
  //     {
  //       imageUrl: img,
  //       category: "Logo",
  //     },
  //     {
  //       imageUrl: img,
  //       category: "Logo",
  //     },
  //     {
  //       imageUrl: img,
  //       category: "Logo",
  //     },
  //     {
  //       imageUrl: img,
  //       category: "Logo",
  //     },
  //     {
  //       imageUrl: img,
  //       category: "Logo",
  //     },
  //     {
  //       imageUrl: img,
  //       category: "Logo",
  //     },
  //     {
  //       imageUrl: img,
  //       category: "Logo",
  //     },
  //     {
  //       imageUrl: img,
  //       category: "Logo",
  //     },
  //     {
  //       imageUrl: img,
  //       category: "Logo",
  //     },
  //     {
  //       imageUrl: img,
  //       category: "Logo",
  //     },
  //     {
  //       imageUrl: img,
  //       category: "Logo",
  //     },
  //   ];

  const getAllImg = async () => {
    try {
      await fetch(
        `${BASE_URL}/api/v1/project/filterProjects?category=${"illustrations"}&subCategory=${"logo"}`
      )
        .then((response) => response.json())
        .then((data) => {
          let arr = data.data.map((img) => {
            return {
              ...img,
              imageUrl: `${BASE_URL}${img.fileData[0]}`,
            };
          });
          console.log(arr);
          setImgArray(arr);
          setIsLoaded(true);
        });
    } catch (error) {}
  };

  useEffect(() => {
    getAllImg();
  }, []);
  return (
    <>
      {isLoaded ? (
        <Grid Container className="content">
          <Grid className="title flex">
            <Typography variant="h3" className="flex">
              {" "}
              Logo{" "}
            </Typography>
          </Grid>

          {/* first content */}

          <Grid item container className="row1" xs={12}>
            <Grid item container className="column1" md={3} xs={12}>
              <Grid item className="item1 flex" xs={12}>
                <AspectRatio
                  ratio="5/3"
                  sx={{
                    minWidth: 350,
                    borderRadius: "sm",
                    overflow: "auto",
                  }}
                >
                  <img
                    style={{ background: "black" }}
                    height="100%"
                    width="100%"
                    src={imgArray[0].imageUrl}
                    // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                    alt={"item.titl"}
                  />
                </AspectRatio>
              </Grid>
              <Grid item className="item1 flex" xs={12}>
                <AspectRatio
                  ratio="5/3"
                  sx={{
                    minWidth: 350,
                    borderRadius: "sm",
                    overflow: "auto",
                  }}
                >
                  <img
                    style={{ background: "black" }}
                    height="100%"
                    width="100%"
                    src={imgArray[1].imageUrl}
                    // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                    alt={"item.titl"}
                  />
                </AspectRatio>
              </Grid>
            </Grid>
            <Grid item container className="column2" md={6} xs={12}>
              <Grid item className="item2 flex" xs={12}>
                <AspectRatio
                  ratio="5/3"
                  sx={{
                    minWidth: 700,
                    borderRadius: "sm",
                    overflow: "auto",
                  }}
                >
                  <img
                    style={{ background: "black" }}
                    height="100"
                    width="100"
                    src={imgArray[2].imageUrl}
                    // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                    alt={"item.titl"}
                  />
                </AspectRatio>
              </Grid>
            </Grid>
            <Grid item container className="column1" md={3} xs={12}>
              <Grid item className="item1 flex" xs={12}>
                <AspectRatio
                  ratio="5/3"
                  sx={{
                    minWidth: 350,
                    borderRadius: "sm",
                    overflow: "auto",
                  }}
                >
                  <img
                    style={{ background: "black" }}
                    height="100%"
                    width="100%"
                    src={imgArray[3].imageUrl}
                    // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                    alt={"item.titl"}
                  />
                </AspectRatio>
              </Grid>
              <Grid item className="item1 flex" xs={12}>
                <AspectRatio
                  ratio="5/3"
                  sx={{
                    minWidth: 350,
                    borderRadius: "sm",
                    overflow: "auto",
                  }}
                >
                  <img
                    style={{ background: "black" }}
                    height="100%"
                    width="100%"
                    src={imgArray[4].imageUrl}
                    // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                    alt={"item.titl"}
                  />
                </AspectRatio>
              </Grid>
            </Grid>
          </Grid>

          <Grid container item className="row2" xs={12}>
            <Grid item className="item2 flex" md={3} xs={12}>
              {" "}
              <AspectRatio
                ratio="5/3"
                sx={{
                  minWidth: 350,
                  borderRadius: "sm",
                  overflow: "auto",
                }}
              >
                <img
                  style={{ background: "black" }}
                  height="100%"
                  width="100%"
                  src={imgArray[5].imageUrl}
                  // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                  alt={"item.titl"}
                />
              </AspectRatio>
            </Grid>
            <Grid item className="item2 flex" md={3} xs={12}>
              {" "}
              <AspectRatio
                ratio="5/3"
                sx={{
                  minWidth: 350,
                  borderRadius: "sm",
                  overflow: "auto",
                }}
              >
                <img
                  style={{ background: "black" }}
                  height="100%"
                  width="100%"
                  src={imgArray[6].imageUrl}
                  // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                  alt={"item.titl"}
                />
              </AspectRatio>
            </Grid>
            <Grid item className="item2 flex" md={3} xs={12}>
              {" "}
              <AspectRatio
                ratio="5/3"
                sx={{
                  minWidth: 350,
                  borderRadius: "sm",
                  overflow: "auto",
                }}
              >
                <img
                  style={{ background: "black" }}
                  height="100%"
                  width="100%"
                  src={imgArray[7].imageUrl}
                  // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                  alt={"item.titl"}
                />
              </AspectRatio>
            </Grid>
            <Grid item className="item2 flex" md={3} xs={12}>
              {" "}
              <AspectRatio
                ratio="5/3"
                sx={{
                  minWidth: 350,
                  borderRadius: "sm",
                  overflow: "auto",
                }}
              >
                <img
                  style={{ background: "black" }}
                  height="100%"
                  width="100%"
                  src={imgArray[8].imageUrl}
                  // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                  alt={"item.titl"}
                />
              </AspectRatio>
            </Grid>
          </Grid>

          {/* second content */}

          <Grid item container className="row1" xs={12}>
            <Grid item container className="column1" md={3} xs={12}>
              <Grid item className="item1 flex" xs={12}>
                <AspectRatio
                  ratio="5/3"
                  sx={{
                    minWidth: 350,
                    borderRadius: "sm",
                    overflow: "auto",
                  }}
                >
                  <img
                    style={{ background: "black" }}
                    height="100%"
                    width="100%"
                    src={imgArray[9].imageUrl}
                    // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                    alt={"item.titl"}
                  />
                </AspectRatio>
              </Grid>
              <Grid item className="item1 flex" xs={12}>
                <AspectRatio
                  ratio="5/3"
                  sx={{
                    minWidth: 350,
                    borderRadius: "sm",
                    overflow: "auto",
                  }}
                >
                  <img
                    style={{ background: "black" }}
                    height="100%"
                    width="100%"
                    src={imgArray[10].imageUrl}
                    // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                    alt={"item.titl"}
                  />
                </AspectRatio>
              </Grid>
            </Grid>
            <Grid item container className="column2" md={6} xs={12}>
              <Grid item className="item2 flex" xs={12}>
                <AspectRatio
                  ratio="5/3"
                  sx={{
                    minWidth: 700,
                    borderRadius: "sm",
                    overflow: "auto",
                  }}
                >
                  <img
                    style={{ background: "black" }}
                    height="100"
                    width="100"
                    src={imgArray[11].imageUrl}
                    // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                    alt={"item.titl"}
                  />
                </AspectRatio>
              </Grid>
            </Grid>
            <Grid item container className="column1" md={3} xs={12}>
              <Grid item className="item1 flex" xs={12}>
                <AspectRatio
                  ratio="5/3"
                  sx={{
                    minWidth: 350,
                    borderRadius: "sm",
                    overflow: "auto",
                  }}
                >
                  <img
                    style={{ background: "black" }}
                    height="100%"
                    width="100%"
                    src={imgArray[12].imageUrl}
                    // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                    alt={"item.titl"}
                  />
                </AspectRatio>
              </Grid>
              <Grid item className="item1 flex" xs={12}>
                <AspectRatio
                  ratio="5/3"
                  sx={{
                    minWidth: 350,
                    borderRadius: "sm",
                    overflow: "auto",
                  }}
                >
                  <img
                    style={{ background: "black" }}
                    height="100%"
                    width="100%"
                    src={imgArray[13].imageUrl}
                    // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                    alt={"item.titl"}
                  />
                </AspectRatio>
              </Grid>
            </Grid>
          </Grid>

          <Grid container item className="row2" xs={12}>
            <Grid item className="item2 flex" md={3} xs={12}>
              {" "}
              <AspectRatio
                ratio="5/3"
                sx={{
                  minWidth: 350,
                  borderRadius: "sm",
                  overflow: "auto",
                }}
              >
                <img
                  style={{ background: "black" }}
                  height="100%"
                  width="100%"
                  src={imgArray[14].imageUrl}
                  // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                  alt={"item.titl"}
                />
              </AspectRatio>
            </Grid>
            <Grid item className="item2 flex" md={3} xs={12}>
              {" "}
              <AspectRatio
                ratio="5/3"
                sx={{
                  minWidth: 350,
                  borderRadius: "sm",
                  overflow: "auto",
                }}
              >
                <img
                  style={{ background: "black" }}
                  height="100%"
                  width="100%"
                  src={imgArray[15].imageUrl}
                  // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                  alt={"item.titl"}
                />
              </AspectRatio>
            </Grid>
            <Grid item className="item2 flex" md={3} xs={12}>
              {" "}
              <AspectRatio
                ratio="5/3"
                sx={{
                  minWidth: 350,
                  borderRadius: "sm",
                  overflow: "auto",
                }}
              >
                <img
                  style={{ background: "black" }}
                  height="100%"
                  width="100%"
                  src={imgArray[16].imageUrl}
                  // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                  alt={"item.titl"}
                />
              </AspectRatio>
            </Grid>
            <Grid item className="item2 flex" md={3} xs={12}>
              {" "}
              <AspectRatio
                ratio="5/3"
                sx={{
                  minWidth: 350,
                  borderRadius: "sm",
                  overflow: "auto",
                }}
              >
                <img
                  style={{ background: "black" }}
                  height="100%"
                  width="100%"
                  src={imgArray[17].imageUrl}
                  // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                  alt={"item.titl"}
                />
              </AspectRatio>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        "loading"
      )}
    </>
  );
};

export default Content;
