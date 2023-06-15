import { Box, Grid } from "@mui/material";
import React from "react";
import "./SecondNavbar.css";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  {
    key: "Book Illustrations",
    value: "Book Illustrations",
    path: "/bookillustration/Book Illustrations",
  },
  {
    key: "Digital Illustrations",
    value: "Digital Illustrations",
    path: "/bookillustration/Digital Illustrations",
  },
  {
    key: "Book Covers",
    value: "Book Covers",
    path: "/bookillustration/Book Covers",
  },
  {
    key: "Animal Illustrations",
    value: "Animal Illustrations",
    path: "/bookillustration/Animal Illustrations",
  },
  // 'Logo', 'T-shirt', 'Banner', 'Business Card', 'Brand identity', 'Social media post'
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const SecondNavbar = ({ setSubCategory, subCategory }) => {
  var navigate = useNavigate();
  const [personName, setPersonName] = React.useState("Logo");
  const theme = useTheme();
  const handleChange = (e) => {
    console.log(e);
    setPersonName(e.target.value);
    names.map((item) => {
      if (item.value === e.target.value) {
        setSubCategory(item.key);
        navigate(item.path);
      }
    });
  };

  return (
    <Grid container className="secondNav flex">
      <Box display={{ xs: "none", md: "block" }} className="flex">
        <button
          item
          onClick={() => {
            navigate("/bookillustration/Book Illustrations");
            setSubCategory("Book Illustrations");
          }}
          className={
            subCategory === "Book Illustrations"
              ? "secondNavButton"
              : "secondNavButtonShadow "
          }
        >
          Book Illustrations
        </button>
        <button
          item
          onClick={() => {
            navigate("/bookillustration/Digital Illustrations");
            setSubCategory("Digital Illustrations");
          }}
          className={
            subCategory === "Digital Illustrations"
              ? "secondNavButton"
              : "secondNavButtonShadow "
          }
        >
          Digital Illustrations
        </button>
        <button
          item
          onClick={() => {
            navigate("/bookillustration/Book Covers");
            setSubCategory("Book Covers");
          }}
          className={
            subCategory === "Book Covers"
              ? "secondNavButton"
              : "secondNavButtonShadow "
          }
        >
          Book Covers
        </button>
        <button
          item
          onClick={() => {
            navigate("/bookillustration/Animal Illustrations");
            setSubCategory("Animal Illustrations");
          }}
          className={
            subCategory === "Animal Illustrations"
              ? "secondNavButton"
              : "secondNavButtonShadow "
          }
        >
          Animal Illustrations
        </button>
      </Box>
      <Box display={{ xs: "block", md: "none" }} className="flex">
        <div>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-name-label">Sub category</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Sub category" />}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name.key}
                  value={name.value}
                  style={getStyles(name.key, personName, theme)}
                >
                  {name.value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </Box>
    </Grid>
  );
};

export default SecondNavbar;
