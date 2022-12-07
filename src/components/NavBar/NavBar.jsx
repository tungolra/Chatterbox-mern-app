import React from "react";
import { Link } from "react-router-dom";
import * as userService from "../../utilities/UserRequests/users-service";
import { AppBar, Grid } from "@mui/material";

export default function NavBar(props) {
  function handleLogOut() {
    userService.logOut();
    props.setUser(null);
  }
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <h1 className="logo">chatter[box]</h1>
        <AppBar
          position="static"
          color="transparent"
          sx={{
            zIndex: "0",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <nav
            style={{
              width: "25vw",
              border: "2px solid #2f15d1",
            }}
          >
            {" "}
            {/* Add own links */}
            <br></br>
            <Link color="secondary" to="/">
              Home&nbsp;
            </Link>
            <Link to="/chats">Chats&nbsp;</Link>
            <Link to="" onClick={handleLogOut}>
              Log Out&nbsp;
            </Link>
            <br></br>
            {props.user && <span>Welcome, {props.user?.firstname}!</span>}
          </nav>
        </AppBar>
      </Grid>
    </Grid>
  );
}
