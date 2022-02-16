import { Menu, MenuItem } from "@material-ui/core";
import { NotificationsNone, Settings } from "@material-ui/icons";
import React from "react";
import "./topbar.css";
import Icons from "constants/icons";

export default function Topbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isLoggedIn = Boolean(localStorage.getItem("access_token"));

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">
            <img
              width="32px"
              height="32px"
              src={Icons.LOGO_ICON}
              alt=""
              style={{ marginRight: 8 }}
            />
            E-Decor
          </span>
        </div>
        {isLoggedIn && (
          <div className="topRight">
            <div className="topbarIconContainer">
              <NotificationsNone />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <Settings />
            </div>
            <img
              src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="topAvatar"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            />
            <Menu
              elevation={2}
              keepMounted={false}
              id="simple-menu"
              anchorEl={anchorEl}
              // keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              PaperProps={{
                style: {
                  transform: "translateX(-40px) translateY(40px)",
                },
              }}
              disableScrollLock={true}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        )}
      </div>
    </div>
  );
}
