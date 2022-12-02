import React from "react";
import { Link } from "react-router-dom";
import * as userService from "../../utilities/UserRequests/users-service"

export default function NavBar(props) {
  function handleLogOut() {
    userService.logOut();
    props.setUser(null);
  }
  return (
    <nav style={{border: "1px solid blue"}}> This is the nav bar: 
    {/* Add own links */}
      <Link to="/">Home</Link>----
      <Link to="/chats">Chats</Link>----
      <Link to="" onClick={handleLogOut}>
        Log Out
      </Link>
      {props.user && <span>----Welcome, {props.user?.firstname}!</span>}
    </nav>
  );
}
