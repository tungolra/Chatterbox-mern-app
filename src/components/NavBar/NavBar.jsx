import React from "react";
import * as userService from "../../utilities/users-service"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../NavBar/NavBar.css"
import { Link } from "react-router-dom";


export default function NavBar(props) {
  function handleLogOut() {
    userService.logOut();
    props.setUser(null);
  }
  return (
    <>
    <Navbar className="customCard" >
      <Container>
        <Navbar.Brand className="navbar-link" href="#home">HILTON NIAGARA HOTEL </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto customCard">
            <Nav.Link className="navbar-link" href="/hotels/">Hotels</Nav.Link>
            <Nav.Link className="navbar-link" href="/actors">Lets Chat</Nav.Link>
            <Nav.Link className="navbar-link" href="/actors" onClick={handleLogOut}>Log Out</Nav.Link>
            <Nav.Link className="navbar-link" href="" >{props.user && <span>Welcome, {props.user?.name}!</span>}</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 

    <nav style={{border: "1px solid blue"}}> This is the nav bar: 
    {/* Add own links */}
      <Link to="/">Home</Link>----
      <Link to="/chats">Chats</Link>----
      <Link to="" onClick={handleLogOut}>
        Log Out
      </Link>
      {props.user && <span>----Welcome, {props.user?.firstname}!</span>}
    </nav>
    </>
  );
}
