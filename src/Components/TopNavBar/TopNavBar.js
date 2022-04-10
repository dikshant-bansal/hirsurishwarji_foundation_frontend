import React from "react";
import {
  Navbar,
  Nav,
  Container,
} from "react-bootstrap";
import { Link } from 'react-router-dom';

const TopNavBar = () => {
  return (
    <div id="TopNavBar">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">HIRSURISHWARJI FOUNDATION</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll ">
            <Nav className="me-auto my-2 my-lg-0">
              <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
              <Nav.Link as={Link} to={"/application"}>Application</Nav.Link>
              <Nav.Link as={Link} to={"/applicationList"}>Application List</Nav.Link>
              <Nav.Link as={Link} to={"/contactUs"}>Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopNavBar;
