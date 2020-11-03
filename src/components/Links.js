import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./App.css";

class Links extends Component {
  render() {
    return (
      <div className="Navbar">
        <Navbar bg="dark" expand="md">
          <Navbar.Brand href="#home">
            <strong className="Talent_one">TAILOR SHOP</strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">
                <Link to="/#" className="Links_home">
                  HOME
                </Link>
              </Nav.Link>
              <Nav.Link href="#home">
                <Link to="/Product" className="Links_product">
                  Product
                </Link>
              </Nav.Link>
              <Nav.Link href="#home">
                <Link to="/Services" className="Links_services">
                  Services
                </Link>
              </Nav.Link>
              <Nav.Link href="#home">
                <Link to="/Blog" className="Links_blog">
                  Blog
                </Link>
              </Nav.Link>
              <Nav.Link href="#home">
                <Link to="/About" className="Links_about">
                  About
                </Link>
              </Nav.Link>
              <Nav.Link href="#home">
                <Link to="/Contact" className="Links_contact">
                  Contact
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Links;
