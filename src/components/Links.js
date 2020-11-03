import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./App.css";

class Links extends Component {
  render() {
    return (
      <div className="Navbar">
        <Navbar className="bg-dark" expand="sm">
          <Navbar.Brand href="#home">
            <strong className="Link Link_tailor">TAILOR SHOP</strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">
                <Link to="/#" className="Link Link_header">
                  HOME
                </Link>
              </Nav.Link>
              <Nav.Link href="#home">
                <Link to="/Product" className="Link Link_header">
                  Product
                </Link>
              </Nav.Link>
              <Nav.Link href="#home">
                <Link to="/Services" className="Link Link_header">
                  Services
                </Link>
              </Nav.Link>
              <Nav.Link href="#home">
                <Link to="/Blog" className="Link Link_header">
                  Blog
                </Link>
              </Nav.Link>
              <Nav.Link href="#home">
                <Link to="/About" className="Link Link_header">
                  About
                </Link>
              </Nav.Link>
              <Nav.Link href="#home">
                <Link to="/Contact" className="Link Link_header">
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
