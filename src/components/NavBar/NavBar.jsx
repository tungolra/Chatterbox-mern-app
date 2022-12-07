import React from "react";
import { Link } from "react-router-dom";
import * as userService from "../../utilities/UserRequests/users-service";
import { AppBar, Grid, IconButton, Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import Stack from "@mui/material/Stack";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import { Container } from "react-bootstrap";

export default function NavBar(props) {
  function handleLogOut() {
    userService.logOut();
    props.setUser(null);
  }
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <h1 className="logo">chatter[box]</h1>
        <Container>
          {props.user && <span>Welcome, {props.user?.firstname}!</span>}
        </Container>
        <AppBar
          boxShadow="none"
          position="static"
          color="transparent"
          sx={{
            zIndex: "0",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0",
          }}
        >
          {" "}
          <br></br>
          <Stack
            direction="row"
            alignItems="center"
            spacing={3}
            justifyContent="center"
            sx={{
              width: "25vw",
              border: "3px solid #2f15d1",
              margin: "10px",
              borderRadius: "30px",
            }}
          >
            <IconButton alignItems="center">
              <Link color="secondary" to="/">
                <PersonOutlineIcon color="secondary">Home</PersonOutlineIcon>
              </Link>
            </IconButton>
            <IconButton>
              <Link to="/chats">
                <ChatBubbleOutlineIcon color="secondary"></ChatBubbleOutlineIcon>
              </Link>
            </IconButton>
            <IconButton>
              <Link to="" onClick={handleLogOut}>
                <LogoutIcon color="secondary"></LogoutIcon>
              </Link>
            </IconButton>
            <br></br>
          </Stack>
        </AppBar>
      </Grid>
    </Grid>
  );
}
