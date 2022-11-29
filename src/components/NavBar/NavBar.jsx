import React from "react";
import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service"

export default function NavBar(props) {
  function handleLogOut() {
    userService.logOut();
    props.setUser(null);
  }
  return (
    <nav>
      <Link to="/orders">Order History</Link>----
      <Link to="/orders/new">New Order</Link>----
      <Link to="" onClick={handleLogOut}>
        Log Out
      </Link>
      {props.user && <span>----Welcome, {props.user?.name}!</span>}
    </nav>
  );
}
