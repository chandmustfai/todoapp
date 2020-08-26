import React, { Component } from "react";
import "./TopNav.css";
import { Navbar,Nav,Link } from "react-bootstrap";
class TopNav extends Component {
  render() {
    return (
      <div className="top-nav-main">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>100Daysofcode</Navbar.Brand>
          <div className="nav-heading">
          <Nav.Link >Home</Nav.Link>
          <Nav.Link >Features</Nav.Link>
          <Nav.Link >Pricing</Nav.Link>
        </div>
        </Navbar>
      </div>
    );
  }
}

export default TopNav;
