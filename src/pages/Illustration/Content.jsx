import React, { useEffect, useState } from "react";
import { AspectRatio } from "@mui/joy";
import { CircularProgress, Grid, Typography } from "@mui/material";
import "./Illustration.css";
import img from "../../assets/img.jpg";
import { BASE_URL } from "../constants/constants";
import ImageCard from "../../components/ImageCard/ImageCard";

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
        setHeading(item.value);
      }
    });
  };

  useEffect(() => {
    console.log(subCategory);
    getAllImg();
    mainHeading();
  }, [subCategory]);

  const getAllImg = async () => {
    setIsLoaded(true);
    try {
      await fetch(
        `${BASE_URL}/api/v1/project/filterProjects?category=${"illustrations"}&subCategory=${
          subCategory ? subCategory : "logo"
        }`
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
    } catch (error) {}
  };

  useEffect(() => {
    getAllImg();
  }, []);

  return (
    <>
      {!isLoaded ? (
        <Grid container xs={12} className="content">
          <Grid
            xs={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" gutterBottom style={{ color: "white" }} sx={{pt:2}}>
              {subCategory.toUpperCase()}
            </Typography>
          </Grid>
          <Grid container xs={12}>
            {imgArray.map((img) => (
              <>
                <Grid item xs={12} md={6} lg={4} sx={{ p: 1 }}>
                  <ImageCard xs={12} width={"100%"} imgUrl={img.imageUrl} />
                </Grid>
              </>
            ))}{" "}
          </Grid>
        </Grid>
      ) : (
        <Grid
          container
          style={{
            height: "100vh",
            Display: "flex",
            justifyContent: "center",
            alignItem: "center",
          }}
        >
          <CircularProgress item sx={{ color: `#ecb830`, fontSize: "200%" }} />
        </Grid>
      )}
    </>
  );
};

export default Content;
