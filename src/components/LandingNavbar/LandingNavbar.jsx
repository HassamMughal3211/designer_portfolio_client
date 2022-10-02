import { Box, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./LandingNavbar.css"
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Button from '@mui/material/Button';

const LandingNavbar = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <h3 style={{ minHeight: "8vh", width: "100%" }} className="flex" >Logo Here</h3>
      <Divider />
      <List>
        {['Animation', 'Illustration', 'Graphic Designing', 'Book Illustration'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Grid container className="mainNavbar">
        <Box item container md={0.5} sx={{ display: { xs: "none", md: "block" } }} ></Box>
        <Grid item container md={1.5} xs={10} style={{ height: '100%' }} className='flex'>Logo</Grid>
        <Box item container md={4} sx={{ display: { xs: "none", md: "block" } }} ></Box>
        <Box item container sx={{ display: { xs: "none", md: "flex" }, width:"50%", marginLeft:"30%" }} style={{ height: '100%' }} >
          <Grid item md={12} className='flex menuOptions' >
            <span>
              <Link to="/">
                Animation
              </Link>
            </span>
            <span>
              <Link to="/illustration">
                Illustration
              </Link>
            </span>
            <span>Graphic Designing</span>
            <span>Book Illustration</span>
          </Grid>
        </Box>
        <Box item container xs={2} display={{ md: "none" }} style={{ height: '100%' }} >
          <Box item xs={12} display={{ md: "none" }} style={{ height: "100%" }} className='flex menuOptions' >
            <span onClick={toggleDrawer("right", true)} ><MenuIcon style={{ fontSize: "32px" }} /></span>
          </Box>
        </Box>
        <Box item container md={1} sx={{ display: { xs: "none", md: "block" } }}  ></Box>
        <div>
          {['left', 'right', 'top', 'bottom'].map((anchor) => (
            <React.Fragment key={anchor}>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>
      </Grid>

    </>
  );
};

export default LandingNavbar;
