import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Fade from '@material-ui/core/Fade'
import { Avatar, makeStyles } from '@material-ui/core'
// import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import DoctorIcon from '../../images/DoctorIcon.png'

const user = {
  name: 'Patient',
}

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    height: 50,
    width: 50,
  },
}))

function PProfile() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const classes = useStyles()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row-reverse',
        }}
      >
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
              marginLeft: '10px',
            }}
          />
        </Button>
      </div>

      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  )
}

export default PProfile
