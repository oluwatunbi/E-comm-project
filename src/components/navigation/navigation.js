import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";
import { IconContext } from "react-icons";
import "./navigation.css";

const Navigation = () => {
  return (
    <Navbar
      className="toggle"
      bg="primary"
      variant="dark"
      collapseOnSelect
      expand="md"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Brand className="brandicon" href="#home">
        Navbar
      </Navbar.Brand>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto responsive-navbar-nav">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Form inline className="mr-auto">
        <FormControl type="text" placeholder="Search" className="searchbox" />
      </Form>

      <Navbar className="toggle-form">
        <Nav className="toggle-icon">
          <IconContext.Provider value={{ size: "1.5em" }}>
            <Button className="search-icon">
              <FcSearch />
            </Button>
          </IconContext.Provider>

          <IconContext.Provider value={{ size: "1.5em", color: "white" }}>
            <Nav.Link href="#User" className="mr-2">
              <FaUserCircle />
            </Nav.Link>
            <Nav.Link href="#cart">
              <FaShoppingCart />
            </Nav.Link>
          </IconContext.Provider>
        </Nav>
      </Navbar>
    </Navbar>
  );
};

export default Navigation;
