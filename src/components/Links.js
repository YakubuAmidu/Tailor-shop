import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

class Links extends Component {
  render() {
    return (
      <div className="Navbar">
        <Navbar bg="dark" expand="md">
          <Navbar.Brand href="#home">Tailer Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link to="/#" className="Link_home">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/#" className="Link_product">
                  Product
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/#" className="Link_services">
                  Services
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/#" className="Link_blog">
                  Blog
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/#" className="Link_about">
                  About
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/#" className="Link_contact">
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
