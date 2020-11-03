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
        <Col className="About_title">
          <p className="Paragraph_title">
            We are Makers of custom handmade Tailored suits
          </p>
          <div div className="Image_title">
            <img src={SuitThree} alt="Suit-img" className="Image_three" />
            <p className="Title_header">HANDMADE</p>
            <p className="Title_paragraph">
              This is just a place holder, so you can see what the site would
              look like.
            </p>
          </div>
          <div className="Image_title">
            <img src={SuitFive} alt="Suit-img" className="Image_three" />
            <p className="Title_header">HANDMADE</p>
            <p className="Title_paragraph">
              This is just a place holder, so you can see what the site would
              look like.
            </p>
          </div>
          <div className="Image_title">
            <img src={SuitFour} alt="Suit_img" className="Image_three" />
            <p className="Title_header">HANDMADE</p>
            <p className="Title_paragraph">
              This is just a place holder, so you can see what the site would
              look like.
            </p>
          </div>
        </Col>

        <Col>
          <p className="Blog_header">Blog</p>
          <div className="Blog_title">
            <p className="Blog_date">May 1, 2012 posted by: Jo</p>
            <p className="Blot_detail">
              This is just a place holder. This is just a place holder. This is
              just a place holder. - read more
            </p>
          </div>
          <div className="Blog_title">
            <p className="Blog_date">May 1, 2012 posted by: Jo</p>
            <p className="Blot_detail">
              This is just a place holder. This is just a place holder. This is
              just a place holder. - read more
            </p>
          </div>
          <div className="Blog_title">
            <p className="Blog_date">May 1, 2012 posted by: Jo</p>
            <p lassName="Blot_detail">
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
