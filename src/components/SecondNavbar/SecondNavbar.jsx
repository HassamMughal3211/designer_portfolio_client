import { Box, Grid } from "@mui/material";
import React from "react";
import "./SecondNavbar.css";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';

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
  'Logo', 'T-shirt', 'Banner', 'Business Card', 'Brand identity', 'Social media post'
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const SecondNavbar = ({ setSubCategory }) => {
  const [personName, setPersonName] = React.useState('Logo');
  const theme = useTheme();
  const handleChange = (e) => {
    console.log(e.target.value)
    setPersonName(e.target.value)
    setSubCategory(e.target.value)
  };




  return (
    <Grid container className="secondNav flex">
      {/* <span className="space" style={{height:"10vh", width:"100v", backghroundColor:"black"}} >     </span> */}
      <Box display={{ xs: "none", md: "block" }} className="flex">
        <button item onClick={() => setSubCategory("logo")} className="secondNavButtonShadow ">
          LOGO
        </button>
        <button item onClick={() => setSubCategory("t-shirt")} className="secondNavButtonShadow">
          T-shirt
        </button>
        <button item onClick={() => setSubCategory("banner")} className="secondNavButton">
          Banner
        </button>
        <button item onClick={() => setSubCategory("businesscard")} className="secondNavButtonShadow ">
          Business Card
        </button>
        <button item onClick={() => setSubCategory("brandidentity")} className="secondNavButtonShadow">
          Brand identity
        </button>
        <button item onClick={() => setSubCategory("socailmediapost")} className="secondNavButton">
          Social media post
        </button>
      </Box>
      <Box display={{ xs: "block", md: "none" }} className="flex" >
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
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
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
