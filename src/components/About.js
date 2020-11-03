import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import SuitThree from "../assets/Suit_three.png";
import SuitFour from "../assets/Suit_four.png";
import SuitFive from "../assets/Suit_five.png";

class About extends Component {
  render() {
    return (
      <Row className="About_section">
        <h1 className="About_header">About</h1>
        <Col>
          <p>We are Makers of custom handmade Tailored suits</p>
          <div>
            <img src={SuitThree} alt="Suit-img" />
            <p>HANDMADE</p>
            <p>
              This is just a place holder, so you can see what the site would
              look like.
            </p>
          </div>
          <div>
            <img src={SuitFive} alt="Suit-img" />
            <p>HANDMADE</p>
            <p>
              This is just a place holder, so you can see what the site would
              look like.
            </p>
          </div>
          <div>
            <img src={SuitFour} alt="Suit_img" />
            <p>HANDMADE</p>
            <p>
              This is just a place holder, so you can see what the site would
              look like.
            </p>
          </div>
        </Col>

        <Col>
          <p>Blog</p>
          <div>
            <p>May 1, 2012 posted by: Jo</p>
            <p>
              This is just a place holder. This is just a place holder. This is
              just a place holder. - read more
            </p>
          </div>
          <div>
            <p>May 1, 2012 posted by: Jo</p>
            <p>
              This is just a place holder. This is just a place holder. This is
              just a place holder. - read more
            </p>
          </div>
          <div>
            <p>May 1, 2012 posted by: Jo</p>
            <p>
              This is just a place holder. This is just a place holder. This is
              just a place holder. - read more
            </p>
          </div>
        </Col>
      </Row>
    );
  }
}

export default About;
