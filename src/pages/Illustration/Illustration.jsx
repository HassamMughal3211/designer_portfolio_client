import { AspectRatio } from "@mui/joy";
import { Grid, Typography } from "@mui/material";
import React from "react";
import LandingNavbar from "../../components/LandingNavbar/LandingNavbar";
import SecondNavbar from "../../components/SecondNavbar/SecondNavbar";
import "./Illustration.css";

const Illustration = () => {
  return (
    <>
      <LandingNavbar />
      <SecondNavbar />
      <Grid Container className="content">
        <Grid className="title flex">
          <Typography variant="h3"> Logo </Typography>
        </Grid>

        {/* first content */}

        <Grid item container className="row1" xs={12}>
          <Grid item container className="column1" md={3} xs={12}>
            <Grid item className="item1 flex" xs={12}>
              <AspectRatio
                ratio="1"
                sx={{ minWidth: 100, borderRadius: "sm", overflow: "auto" }}
              >
                <img
                  style={{ background: "black" }}
                  height="100"
                  width="100"
                  src={
                    "https://play-lh.googleusercontent.com/gCyyBvrSQ1jiiZxgBu4Mm2wgH7F5rBRXE2H-Uji9wnRHcnDwxx6kMp3kEy8TWlKvsg"
                  }
                  // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                  alt={"item.titl"}
                />
              </AspectRatio>
            </Grid>
            <Grid item className="item1 flex" xs={12}>
              <AspectRatio
                ratio="1"
                sx={{ minWidth: 100, borderRadius: "sm", overflow: "auto" }}
              >
                <img
                  style={{ background: "black" }}
                  height="100"
                  width="100"
                  src={
                    "https://play-lh.googleusercontent.com/gCyyBvrSQ1jiiZxgBu4Mm2wgH7F5rBRXE2H-Uji9wnRHcnDwxx6kMp3kEy8TWlKvsg"
                  }
                  // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                  alt={"item.titl"}
                />
              </AspectRatio>
            </Grid>{" "}
          </Grid>
          <Grid item container className="column2" md={6} xs={12}>
            <Grid item className="item2 flex" xs={12}>
              <AspectRatio
                ratio="1"
                sx={{ minWidth: 100, borderRadius: "sm", overflow: "auto" }}
              >
                <img
                  style={{ background: "black" }}
                  height="100"
                  width="100"
                  src={
                    "https://play-lh.googleusercontent.com/gCyyBvrSQ1jiiZxgBu4Mm2wgH7F5rBRXE2H-Uji9wnRHcnDwxx6kMp3kEy8TWlKvsg"
                  }
                  // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                  alt={"item.titl"}
                />
              </AspectRatio>
            </Grid>
          </Grid>
          <Grid item container className="column1" md={3} xs={12}>
            <Grid item className="item1 flex" xs={12}>
              <AspectRatio
                ratio="1"
                sx={{ minWidth: 100, borderRadius: "sm", overflow: "auto" }}
              >
                <img
                  style={{ background: "black" }}
                  height="100"
                  width="100"
                  src={
                    "https://play-lh.googleusercontent.com/gCyyBvrSQ1jiiZxgBu4Mm2wgH7F5rBRXE2H-Uji9wnRHcnDwxx6kMp3kEy8TWlKvsg"
                  }
                  // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                  alt={"item.titl"}
                />
              </AspectRatio>
            </Grid>{" "}
            <Grid item className="item1 flex" xs={12}>
              <AspectRatio
                ratio="1"
                sx={{ minWidth: 100, borderRadius: "sm", overflow: "auto" }}
              >
                <img
                  style={{ background: "black" }}
                  height="100"
                  width="100"
                  src={
                    "https://play-lh.googleusercontent.com/gCyyBvrSQ1jiiZxgBu4Mm2wgH7F5rBRXE2H-Uji9wnRHcnDwxx6kMp3kEy8TWlKvsg"
                  }
                  // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                  alt={"item.titl"}
                />
              </AspectRatio>
            </Grid>{" "}
          </Grid>
        </Grid>

        <Grid container item className="row2" xs={12}>
          <Grid item className="item2 flex" md={3} xs={12}>
            {" "}
            <AspectRatio
              ratio="1"
              sx={{ minWidth: 100, borderRadius: "sm", overflow: "auto" }}
            >
              <img
                style={{ background: "black" }}
                height="100"
                width="100"
                src={
                  "https://play-lh.googleusercontent.com/gCyyBvrSQ1jiiZxgBu4Mm2wgH7F5rBRXE2H-Uji9wnRHcnDwxx6kMp3kEy8TWlKvsg"
                }
                // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                alt={"item.titl"}
              />
            </AspectRatio>
          </Grid>
          <Grid item className="item2 flex" md={3} xs={12}>
            {" "}
            <AspectRatio
              ratio="1"
              sx={{ minWidth: 100, borderRadius: "sm", overflow: "auto" }}
            >
              <img
                style={{ background: "black" }}
                height="100"
                width="100"
                src={
                  "https://play-lh.googleusercontent.com/gCyyBvrSQ1jiiZxgBu4Mm2wgH7F5rBRXE2H-Uji9wnRHcnDwxx6kMp3kEy8TWlKvsg"
                }
                // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                alt={"item.titl"}
              />
            </AspectRatio>
          </Grid>
          <Grid item className="item2 flex" md={3} xs={12}>
            {" "}
            <AspectRatio
              ratio="1"
              sx={{ minWidth: 100, borderRadius: "sm", overflow: "auto" }}
            >
              <img
                style={{ background: "black" }}
                height="100"
                width="100"
                src={
                  "https://play-lh.googleusercontent.com/gCyyBvrSQ1jiiZxgBu4Mm2wgH7F5rBRXE2H-Uji9wnRHcnDwxx6kMp3kEy8TWlKvsg"
                }
                // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                alt={"item.titl"}
              />
            </AspectRatio>
          </Grid>
          <Grid item className="item2 flex" md={3} xs={12}>
            {" "}
            <AspectRatio
              ratio="1"
              sx={{ minWidth: 100, borderRadius: "sm", overflow: "auto" }}
            >
              <img
                style={{ background: "black" }}
                height="100"
                width="100"
                src={
                  "https://play-lh.googleusercontent.com/gCyyBvrSQ1jiiZxgBu4Mm2wgH7F5rBRXE2H-Uji9wnRHcnDwxx6kMp3kEy8TWlKvsg"
                }
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
                ratio="1"
                sx={{ minWidth: 100, borderRadius: "sm", overflow: "auto" }}
              >
                <img
                  style={{ background: "black" }}
                  height="100"
                  width="100"
                  src={
                    "https://play-lh.googleusercontent.com/gCyyBvrSQ1jiiZxgBu4Mm2wgH7F5rBRXE2H-Uji9wnRHcnDwxx6kMp3kEy8TWlKvsg"
                  }
                  // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                  alt={"item.titl"}
                />
              </AspectRatio>
            </Grid>
            <Grid item className="item1 flex" xs={12}>
              <AspectRatio
                ratio="1"
                sx={{ minWidth: 100, borderRadius: "sm", overflow: "auto" }}
              >
                <img
                  style={{ background: "black" }}
                  height="100"
                  width="100"
                  src={
                    "https://play-lh.googleusercontent.com/gCyyBvrSQ1jiiZxgBu4Mm2wgH7F5rBRXE2H-Uji9wnRHcnDwxx6kMp3kEy8TWlKvsg"
                  }
                  // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                  alt={"item.titl"}
                />
              </AspectRatio>
            </Grid>{" "}
          </Grid>
          <Grid item container className="column2" md={6} xs={12}>
            <Grid item className="item2 flex" xs={12}>
              <AspectRatio
                ratio="1"
                sx={{ minWidth: 100, borderRadius: "sm", overflow: "auto" }}
              >
                <img
                  style={{ background: "black" }}
                  height="100"
                  width="100"
                  src={
                    "https://play-lh.googleusercontent.com/gCyyBvrSQ1jiiZxgBu4Mm2wgH7F5rBRXE2H-Uji9wnRHcnDwxx6kMp3kEy8TWlKvsg"
                  }
                  // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                  alt={"item.titl"}
                />
              </AspectRatio>
            </Grid>
          </Grid>
          <Grid item container className="column1" md={3} xs={12}>
            <Grid item className="item1 flex" xs={12}>
              <AspectRatio
                ratio="1"
                sx={{ minWidth: 100, borderRadius: "sm", overflow: "auto" }}
              >
                <img
                  style={{ background: "black" }}
                  height="100"
                  width="100"
                  src={
                    "https://play-lh.googleusercontent.com/gCyyBvrSQ1jiiZxgBu4Mm2wgH7F5rBRXE2H-Uji9wnRHcnDwxx6kMp3kEy8TWlKvsg"
                  }
                  // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                  alt={"item.titl"}
                />
              </AspectRatio>
            </Grid>{" "}
            <Grid item className="item1 flex" xs={12}>
              <AspectRatio
                ratio="1"
                sx={{ minWidth: 100, borderRadius: "sm", overflow: "auto" }}
              >
                <img
                  style={{ background: "black" }}
                  height="100"
                  width="100"
                  src={
                    "https://play-lh.googleusercontent.com/gCyyBvrSQ1jiiZxgBu4Mm2wgH7F5rBRXE2H-Uji9wnRHcnDwxx6kMp3kEy8TWlKvsg"
                  }
                  // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                  alt={"item.titl"}
                />
              </AspectRatio>
            </Grid>{" "}
          </Grid>
        </Grid>

        <Grid container item className="row2" xs={12}>
          <Grid item className="item2 flex" md={3} xs={12}>
            {" "}
            <AspectRatio
              ratio="1"
              sx={{ minWidth: 100, borderRadius: "sm", overflow: "auto" }}
            >
              <img
                style={{ background: "black" }}
                height="100"
                width="100"
                src={
                  "https://play-lh.googleusercontent.com/gCyyBvrSQ1jiiZxgBu4Mm2wgH7F5rBRXE2H-Uji9wnRHcnDwxx6kMp3kEy8TWlKvsg"
                }
                // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                alt={"item.titl"}
              />
            </AspectRatio>
          </Grid>
          <Grid item className="item2 flex" md={3} xs={12}>
            {" "}
            <AspectRatio
              ratio="1"
              sx={{ minWidth: 100, borderRadius: "sm", overflow: "auto" }}
            >
              <img
                style={{ background: "black" }}
                height="100"
                width="100"
                src={
                  "https://play-lh.googleusercontent.com/gCyyBvrSQ1jiiZxgBu4Mm2wgH7F5rBRXE2H-Uji9wnRHcnDwxx6kMp3kEy8TWlKvsg"
                }
                // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                alt={"item.titl"}
              />
            </AspectRatio>
          </Grid>
          <Grid item className="item2 flex" md={3} xs={12}>
            {" "}
            <AspectRatio
              ratio="1"
              sx={{ minWidth: 100, borderRadius: "sm", overflow: "auto" }}
            >
              <img
                style={{ background: "black" }}
                height="100"
                width="100"
                src={
                  "https://play-lh.googleusercontent.com/gCyyBvrSQ1jiiZxgBu4Mm2wgH7F5rBRXE2H-Uji9wnRHcnDwxx6kMp3kEy8TWlKvsg"
                }
                // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                alt={"item.titl"}
              />
            </AspectRatio>
          </Grid>
          <Grid item className="item2 flex" md={3} xs={12}>
            {" "}
            <AspectRatio
              ratio="1"
              sx={{ minWidth: 100, borderRadius: "sm", overflow: "auto" }}
            >
              <img
                style={{ background: "black" }}
                height="100"
                width="100"
                src={
                  "https://play-lh.googleusercontent.com/gCyyBvrSQ1jiiZxgBu4Mm2wgH7F5rBRXE2H-Uji9wnRHcnDwxx6kMp3kEy8TWlKvsg"
                }
                // srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                alt={"item.titl"}
              />
            </AspectRatio>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Illustration;
