import React from "react";
import { Link } from "react-router-dom";
import * as userService from "../../utilities/UserRequests/users-service";
import { AppBar } from "@mui/material";
import Button from "@mui/material/Button";

export default function NavBar(props) {
  function handleLogOut() {
    userService.logOut();
    props.setUser(null);
  }
  return (
    <AppBar position="static" color="transparent" sx={{ zIndex: "0" }}>
      <nav style={{ border: "1px solid blue" }}>
        {" "}
        This is the nav bar:
        {/* Add own links */}
        <Link color="secondary" to="/">
          Home
        </Link>
        <Link to="/chats">Chats</Link>
        <Link to="" onClick={handleLogOut}>
          Log Out
        </Link>
        {props.user && <span>Welcome, {props.user?.firstname}!</span>}
      </nav>
    </AppBar>
  );
}
