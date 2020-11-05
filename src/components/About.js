import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import SuitThree from "../assets/Suit_three.png";
import SuitFour from "../assets/Suit_four.png";
import SuitFive from "../assets/Suit_five.png";

class About extends Component {
  render() {
    return (
      <div className="About_section">
        <h1 className="About_header">What we do:</h1>
        <p
          className="Header_paragraph
        "
        >
          We are Makers of custom handmade Tailored suits
        </p>
        <Row>
          <Col sm={4}>
            <div className="About_image">
              <img src={SuitThree} alt="Suit-img" className="Image_three" />
              <p className="Image_title">HANDMADE</p>
              <p className="Image_paragraph">
                This is just a place holder, so you can see what the site would
                look like.
              </p>
            </div>
          </Col>
          <Col sm={4}>
            <div className="About_image">
              <img src={SuitFive} alt="Suit-img" className="Image_three" />
              <p className="Image_title">DESIGNS</p>
              <p className="Image_paragraph">
                This is just a place holder, so you can see what the site would
                look like.
              </p>
            </div>
          </Col>
          <Col sm={4}>
            <div className="About_image">
              <img src={SuitFour} alt="Suit_img" className="Image_three" />
              <p className="Image_title">PERFECT FIT</p>
              <p className="Image_paragraph">
                This is just a place holder, so you can see what the site would
                look like.
              </p>
            </div>
          </Col>
        </Row>

        <div className="Blog_section">
          <p className="Blog_header">Blog</p>
          <Row>
            <Col sm={4}>
              <div className="Blog_info">
                <p className="Blog_date">May 1, 2012 posted by: Jo</p>
                <p className="Blog_detail">
                  This is just a place holder. This is just a place holder. This
                  is just a place holder. - read more
                </p>
              </div>
            </Col>
            <Col sm={4}>
              <div className="Blog_info">
                <p className="Blog_date">May 1, 2012 posted by: Jo</p>
                <p className="Blog_detail">
                  This is just a place holder. This is just a place holder. This
                  is just a place holder. - read more
                </p>
              </div>
            </Col>
            <Col sm={4}>
              <div className="Blog_info">
                <p className="Blog_date">May 1, 2012 posted by: Jo</p>
                <p className="Blog_detail">
                  This is just a place holder. This is just a place holder. This
                  is just a place holder. - read more
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default About;
