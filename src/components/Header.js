import React, { Component } from "react";
import { Col, Row, Button } from "react-bootstrap";
import Suit from "../assets/Suit.png";
import Suit_one from "../assets/Suit_one.png";
import Suit_two from "../assets/Suit_two.png";

class Header extends Component {
  render() {
    return (
      <div className="">
        <Row>
          <Col>
            <div>
              <h2>World's Finest and Elegant Tuxedo</h2>
              <p>
                This is just a place holder, so you can see what the site would
                look like. This is just a place holder, so you can see what the
                site would look like. This is just a place holder, so you can
                see what the site would look like. This is just a place holder,
                so you can see what the site would look like.
              </p>
              <Button>Shop Now</Button>
            </div>
          </Col>
          <Col>
            <img src={Suit} alt="suit-img" />
          </Col>
          <Col>
            <div>
              <p>Handcrafted and made from 100% wool</p>
              <div>
                <img src={Suit_one} alt="suit-img" />
                <img src={Suit_two} alt="suit-img" />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
