import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import { Avatar, makeStyles } from "@material-ui/core";
// import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import DoctorIcon from "../../images/DoctorIcon.png";
import { useNavigate } from "react-router-dom";

const user = {
  name: "Admin",
};

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    height: 50,
    width: 50,
  },
}));

function Adheader() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    navigate("/AdminLogin");
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          backgroundColor: "#e1dee3",
        }}
      >
        <header className="header">
          <div className="header_toggle">
            {/* <i
              className={`bi ${showNav ? "" : "bi-list"}`}
              onClick={() => setShowNav(!showNav)}
            /> */}
          </div>
          <h2 style={{ paddingTop: 10, paddingLeft: 10 }}>CareConnect</h2>
          <Button
            aria-controls="fade-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            {user.name}
            <Avatar
              className={classes.avatar}
              src={DoctorIcon}
              style={{
                marginLeft: "10px",
              }}
            />
          </Button>
        </header>
      </div>

      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export default Adheader;
