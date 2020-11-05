import React, { Component } from "react";
import { Col, Row, Button } from "react-bootstrap";
import Suit_one from "../assets/Suit_one.png";
import Suit_two from "../assets/Suit_two.png";
import Suit from "../assets/Suit.png";

class Header extends Component {
  render() {
    return (
      <div className="Header_section">
        <Row>
          <Col sm={4}>
            <div className="Header_info">
              <h2 className="Header_title">
                World's Finest and Elegant Tuxedo
              </h2>
              <p className="Header_paragraph-one">
                This is just a place holder, so you can see what the site would
                look like. This is just a place holder, so you can see what the
                site would look like. This is just a place holder, so you can
                see what the site would look like. This is just a place holder,
                so you can see what the site would look like.
              </p>
              <Button className="Button_shop" variant="outline-success">
                Shop Now
              </Button>
            </div>
          </Col>
          <Col className="Header_image" sm={4}>
            <img src={Suit} alt="suit-img" className="Image_one" />
          </Col>
          <Col className="Header_image-one">
            <p className="Header_title">Handcrafted and made from 100% wool</p>

            <div className="Image_two-sub">
              <img src={Suit_one} alt="suit-img" className="Image_two" />
              <p className="Image_sub-paragraph">This is just a place holder</p>
              <p className="Image_sub-paragraph">This is just a place holder</p>
            </div>
            <div className="Image_two-sub">
              <img src={Suit_two} alt="suit-img" className="Image_two" />
              <p className="Image_sub-paragraph">This is just a place holder</p>
              <p className="Image_sub-paragraph">This is just a place holder</p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
