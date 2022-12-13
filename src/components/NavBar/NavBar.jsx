import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import * as userService from "../../utilities/UserRequests/users-service";
import { AppBar, Grid, IconButton, Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import Stack from "@mui/material/Stack";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import { Container } from "react-bootstrap";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import UpdateUserModal from "../../components/UpdateUserModal/UpdateUserModal";
import "./NavBar.css";

export default function NavBar(props) {
  const [modalOpened, setModalOpened] = useState(false);
  function handleLogOut() {
    userService.logOut();
    props.setUser(null);
  }
  return (
    // <Grid container>
    //   <Grid item xs={12} md={12} lg={12} xl={12}>
    <div>
      <nav>
        <img
          className="nav-user-icon"
          src={
            props.user?.profilePicture === ""
              ? "./logo192.png"
              : props.user?.profilePicture
          }
          alt="profileimage"
        />
        
        <div className="nav-buttons">
          <IconButton size="large" alignItems="center">
            <Link color="secondary" to="/profile">
              <PersonOutlineIcon color="primary"></PersonOutlineIcon>
            </Link>
          </IconButton>
          <IconButton size="large">
            <Link onClick={() => setModalOpened(true)}>
              <SettingsOutlinedIcon color="primary"></SettingsOutlinedIcon>
            </Link>
          </IconButton>
          <IconButton size="large">
            <Link to="/chats">
              <ChatBubbleOutlineIcon color="primary"></ChatBubbleOutlineIcon>
            </Link>
          </IconButton>
          <IconButton size="large">
            <Link to="" onClick={handleLogOut}>
              <LogoutIcon color="primary"></LogoutIcon>
            </Link>
          </IconButton>
          <UpdateUserModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
            user={props.user}
            setUser={props.setUser}
          />
          <br></br>
          {/* </Stack> */}
        </div>
      </nav>
    </div>
    //   </Grid>
    // </Grid>
  );
}
