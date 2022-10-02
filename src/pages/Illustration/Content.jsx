import React, { useEffect, useState } from "react";
import { AspectRatio } from "@mui/joy";
import { Grid, Typography } from "@mui/material";
import "./Illustration.css";
import img from "../../assets/img.jpg";
import { BASE_URL } from "../constants/constants";

const Content = ({ subCategory }) => {
  const [imgArray, setImgArray] = useState();
  const [isLoaded, setIsLoaded] = useState(true);
  const [heading, setHeading] = useState("Logo");
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

  const names = [
    { key: "logo", value: "Logo" },
    { key: "tshirt", value: "T-Shirt" },
    { key: "banner", value: "Banner" },
    { key: "businesscard", value: "Business Card" },
    { key: "brandidentity", value: "Brand Identity" },
    { key: "socialmediapost", value: "Social Media Post" },

    // 'Logo', 'T-shirt', 'Banner', 'Business Card', 'Brand identity', 'Social media post'
  ];

  const mainHeading = () => {
    names.filter((item) => {
      if (item.key === subCategory) {
        setHeading(item.value)
      }
    })
  }

  useEffect(() => {
    console.log(subCategory)
    getAllImg()
    mainHeading()
  }, [subCategory])

  const getAllImg = async () => {
    setIsLoaded(true)
    try {
      await fetch(
        `${BASE_URL}/api/v1/project/filterProjects?category=${"illustrations"}&subCategory=${subCategory ? subCategory : "logo"}`
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
          setIsLoaded(false);
        });
    } catch (error) { }
  };

  useEffect(() => {
    getAllImg();
  }, []);


  return (
    <>
      {!isLoaded ? (
        <Grid Container className="content">
          <Grid item  className="title flex">
            <Typography variant="h3" className="flex">
              {`${heading}`}
            </Typography>
          </Grid>

          {/* first content */}

          <Grid item container className="row1" xs={12}>
            <Grid item container className="column1" sm={3} xs={12}>
              <Grid item className="item1 flex" xs={12}>
                <AspectRatio className="images"
                  ratio="5/3"
                  sx={{
                    minWidth: window.innerWidth > 1000  ? 320 : window.innerWidth > 600 ? 180 :  320,
                    borderRadius: "sm",
                    overflow: "auto",
                  }}
                >
                  <img
                    style={{ background: "black" , margin:"10px 0px"}}
                    height="100%"
                    width="100%"
                    src={imgArray[0].imageUrl}
                    // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                    alt={"item.titl"}
                  />
                </AspectRatio>
              </Grid>
              <Grid item className="item1 flex" xs={12}>
                <AspectRatio className="images"
                  ratio="5/3"
                  sx={{
                    minWidth: window.innerWidth > 1000  ? 320 : window.innerWidth > 600 ? 180 :  320,
                    borderRadius: "sm",
                    overflow: "auto",
                  }}
                >
                  <img
                    style={{ background: "black" , margin:"10px 0px"}}
                    height="100%"
                    width="100%"
                    src={imgArray[1].imageUrl}
                    // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                    alt={imgArray[1].imageUrl}
                  />
                </AspectRatio>
              </Grid>
            </Grid>
            <Grid item container className="column2" sm={6} xs={12}>
              <Grid item className="item2 flex" xs={12}>
                <AspectRatio className="images"
                  ratio="5/3"
                  sx={{
                    minWidth: window.innerWidth > 1000  ? 700 : window.innerWidth > 600 ? 350 :  320,
                    borderRadius: "sm",
                    overflow: "auto",
                  }}
                >
                  <img
                    style={{ background: "black" , margin:"10px 0px"}}
                    height="100"
                    width="100"
                    src={imgArray[2].imageUrl}
                    // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                    alt={imgArray[2].imageUrl}
                  />
                </AspectRatio>
              </Grid>
            </Grid>
            <Grid item container className="column1" sm={3} xs={12}>
              <Grid item className="item1 flex" xs={12}>
                <AspectRatio className="images"
                  ratio="5/3"
                  sx={{
                    minWidth: window.innerWidth > 1000  ? 320 : window.innerWidth > 600 ? 180 :  320,
                    borderRadius: "sm",
                    overflow: "auto",
                  }}
                >
                  <img
                    style={{ background: "black" , margin:"10px 0px"}}
                    height="100%"
                    width="100%"
                    src={imgArray[3].imageUrl}
                    // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                    alt={imgArray[3].imageUrl}
                  />
                </AspectRatio>
              </Grid>
              <Grid item className="item1 flex" xs={12}>
                <AspectRatio className="images"
                  ratio="5/3"
                  sx={{
                    minWidth: window.innerWidth > 1000  ? 320 : window.innerWidth > 600 ? 180 :  320,
                    borderRadius: "sm",
                    overflow: "auto",
                  }}
                >
                  <img
                    style={{ background: "black" , margin:"10px 0px"}}
                    height="100%"
                    width="100%"
                    src={imgArray[4].imageUrl}
                    // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                    alt={imgArray[4].imageUrl}
                  />
                </AspectRatio>
              </Grid>
            </Grid>
          </Grid>

          <Grid container item className="row2" xs={12}>
            <Grid item className="item2 flex" sm={3} xs={12}>
              {" "}
              <AspectRatio className="images"
                ratio="5/3"
                sx={{
                  minWidth: window.innerWidth > 1000  ? 320 : window.innerWidth > 600 ? 180 :  320,
                  borderRadius: "sm",
                  overflow: "auto",
                }}
              >
                <img
                  style={{ background: "black" , margin:"10px 0px"}}
                  height="100%"
                  width="100%"
                  src={imgArray[5].imageUrl}
                  // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                  alt={imgArray[5].imageUrl}
                />
              </AspectRatio>
            </Grid>
            <Grid item className="item2 flex" sm={3} xs={12}>
              {" "}
              <AspectRatio className="images"
                ratio="5/3"
                sx={{
                  minWidth: window.innerWidth > 1000  ? 320 : window.innerWidth > 600 ? 180 :  320,
                  borderRadius: "sm",
                  overflow: "auto",
                }}
              >
                <img
                  style={{ background: "black" , margin:"10px 0px"}}
                  height="100%"
                  width="100%"
                  src={imgArray[6].imageUrl}
                  // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                  alt={"item.titl"}
                />
              </AspectRatio>
            </Grid>
            <Grid item className="item2 flex" sm={3} xs={12}>
              {" "}
              <AspectRatio className="images"
                ratio="5/3"
                sx={{
                  minWidth: window.innerWidth > 1000  ? 320 : window.innerWidth > 600 ? 180 :  320,
                  borderRadius: "sm",
                  overflow: "auto",
                }}
              >
                <img
                  style={{ background: "black" , margin:"10px 0px"}}
                  height="100%"
                  width="100%"
                  src={imgArray[7].imageUrl}
                  // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                  alt={"item.titl"}
                />
              </AspectRatio>
            </Grid>
            <Grid item className="item2 flex" sm={3} xs={12}>
              {" "}
              <AspectRatio className="images"
                ratio="5/3"
                sx={{
                  minWidth: window.innerWidth > 1000  ? 320 : window.innerWidth > 600 ? 180 :  320,
                  borderRadius: "sm",
                  overflow: "auto",
                }}
              >
                <img
                  style={{ background: "black" , margin:"10px 0px"}}
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
            <Grid item container className="column1" sm={3} xs={12}>
              <Grid item className="item1 flex" xs={12}>
                <AspectRatio className="images"
                  ratio="5/3"
                  sx={{
                    minWidth: window.innerWidth > 1000  ? 320 : window.innerWidth > 600 ? 180 :  320,
                    borderRadius: "sm",
                    overflow: "auto",
                  }}
                >
                  <img
                    style={{ background: "black" , margin:"10px 0px"}}
                    height="100%"
                    width="100%"
                    src={imgArray[9].imageUrl}
                    // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                    alt={"item.titl"}
                  />
                </AspectRatio>
              </Grid>
              <Grid item className="item1 flex" xs={12}>
                <AspectRatio className="images"
                  ratio="5/3"
                  sx={{
                    minWidth: window.innerWidth > 1000  ? 320 : window.innerWidth > 600 ? 180 :  320,
                    borderRadius: "sm",
                    overflow: "auto",
                  }}
                >
                  <img
                    style={{ background: "black" , margin:"10px 0px"}}
                    height="100%"
                    width="100%"
                    src={imgArray[10].imageUrl}
                    // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                    alt={"item.titl"}
                  />
                </AspectRatio>
              </Grid>
            </Grid>
            <Grid item container className="column2" sm={6} xs={12}>
              <Grid item className="item2 flex" xs={12}>
                <AspectRatio className="images"
                  ratio="5/3"
                  sx={{
                    minWidth: window.innerWidth > 1000  ? 700 : window.innerWidth > 600 ? 350 :  320,
                    borderRadius: "sm",
                    overflow: "auto",
                  }}
                >
                  <img
                    style={{ background: "black" , margin:"10px 0px"}}
                    height="100"
                    width="100"
                    src={imgArray[11].imageUrl}
                    // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                    alt={"item.titl"}
                  />
                </AspectRatio>
              </Grid>
            </Grid>
            <Grid item container className="column1" sm={3} xs={12}>
              <Grid item className="item1 flex" xs={12}>
                <AspectRatio className="images"
                  ratio="5/3"
                  sx={{
                    minWidth: window.innerWidth > 1000  ? 320 : window.innerWidth > 600 ? 180 :  320,
                    borderRadius: "sm",
                    overflow: "auto",
                  }}
                >
                  <img
                    style={{ background: "black" , margin:"10px 0px"}}
                    height="100%"
                    width="100%"
                    src={imgArray[12].imageUrl}
                    // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                    alt={"item.titl"}
                  />
                </AspectRatio>
              </Grid>
              <Grid item className="item1 flex" xs={12}>
                <AspectRatio className="images"
                  ratio="5/3"
                  sx={{
                    minWidth: window.innerWidth > 1000  ? 320 : window.innerWidth > 600 ? 180 :  320,
                    borderRadius: "sm",
                    overflow: "auto",
                  }}
                >
                  <img
                    style={{ background: "black" , margin:"10px 0px"}}
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
            <Grid item className="item2 flex" sm={3} xs={12}>
              {" "}
              <AspectRatio className="images"
                ratio="5/3"
                sx={{
                  minWidth: window.innerWidth > 1000  ? 320 : window.innerWidth > 600 ? 180 :  320,
                  borderRadius: "sm",
                  overflow: "auto",
                }}
              >
                <img
                  style={{ background: "black" , margin:"10px 0px"}}
                  height="100%"
                  width="100%"
                  src={imgArray[14].imageUrl}
                  // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                  alt={"item.titl"}
                />
              </AspectRatio>
            </Grid>
            <Grid item className="item2 flex" sm={3} xs={12}>
              {" "}
              <AspectRatio className="images"
                ratio="5/3"
                sx={{
                  minWidth: window.innerWidth > 1000  ? 320 : window.innerWidth > 600 ? 180 :  320,
                  borderRadius: "sm",
                  overflow: "auto",
                }}
              >
                <img
                  style={{ background: "black" , margin:"10px 0px"}}
                  height="100%"
                  width="100%"
                  src={imgArray[15].imageUrl}
                  // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                  alt={"item.titl"}
                />
              </AspectRatio>
            </Grid>
            <Grid item className="item2 flex" sm={3} xs={12}>
              {" "}
              <AspectRatio className="images"
                ratio="5/3"
                sx={{
                  minWidth: window.innerWidth > 1000  ? 320 : window.innerWidth > 600 ? 180 :  320,
                  borderRadius: "sm",
                  overflow: "auto",
                }}
              >
                <img
                  style={{ background: "black" , margin:"10px 0px"}}
                  height="100%"
                  width="100%"
                  src={imgArray[16].imageUrl}
                  // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                  alt={"item.titl"}
                />
              </AspectRatio>
            </Grid>
            <Grid item className="item2 flex" sm={3} xs={12}>
              {" "}
              <AspectRatio className="images"
                ratio="5/3"
                sx={{
                  minWidth: window.innerWidth > 1000  ? 320 : window.innerWidth > 600 ? 180 :  320,
                  borderRadius: "sm",
                  overflow: "auto",
                }}
              >
                <img
                  style={{ background: "black" , margin:"10px 0px"}}
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
