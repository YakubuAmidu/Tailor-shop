import React, { Component } from "react";
import { Col, Row, Button } from "react-bootstrap";
import Suit from "../assets/Suit.png";
import Suit_one from "../assets/Suit_one.png";
import Suit_two from "../assets/Suit_two.png";

class Header extends Component {
  render() {
    return (
      <Row className="Header_section">
        <Col className="Header_info" sm={4}>
          <h2 className="Header_title">World's Finest and Elegant Tuxedo</h2>
          <p className="Paragraph_one">
            This is just a place holder, so you can see what the site would look
            like. This is just a place holder, so you can see what the site
            would look like. This is just a place holder, so you can see what
            the site would look like. This is just a place holder, so you can
            see what the site would look like.
          </p>
          <Button className="Button_shop" variant="outline-success">
            Shop Now
          </Button>
        </Col>
        <Col className="Header_image" sm={4}>
          <img src={Suit} alt="suit-img" className="Image_one" />
        </Col>
        <Col className="Header_image-one">
          <p className="Header_title">Handcrafted and made from 100% wool</p>

          <img src={Suit_one} alt="suit-img" className="Image_two" />
          <img src={Suit_two} alt="suit-img" className="Image_two" />
        </Col>
      </Row>
    );
  }
}

export default Header;
