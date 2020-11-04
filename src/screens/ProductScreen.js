import React from "react";
import Service from "../components/Service";
import Links from "../components/Links";
import Menone from "../assets/Menone.png";
import Mentwo from "../assets/Mentwo.png";
import Menthree from "../assets/Menthree.png";
import Menfour from "../assets/Menfour.png";
import { Col, Row } from "react-bootstrap";

const ProductScreen = () => {
  return (
    <div className="Product_section">
      <Links />
      <p className="Suit_header">World's finest and elegant tuxedo's</p>
      <Row>
        <Col sm={6}>
          <div className="Suit_image">
            <img src={Menone} alt="img" className="Suit_img" />
            <h4 className="Suit_title">product name</h4>
            <p className="Suit_price">$1,000.00</p>
          </div>
          <div className="Suit_image">
            <img src={Mentwo} alt="img" className="Suit_img" />
            <h4 className="Suit_title">product name</h4>
            <p className="Suit_price">$1,000.00</p>
          </div>
        </Col>
        <Col sm={6}>
          <div className="Suit_image">
            <img src={Menthree} alt="img" className="Suit_img" />
            <h4 className="Suit_title">product name</h4>
            <p className="Suit_price">$1,000.00</p>
          </div>
          <div className="Suit_image">
            <img src={Menfour} alt="img" className="Suit_img" />
            <h4 className="Suit_title">product name</h4>
            <p className="Suit_price">$1,000.00</p>
          </div>
        </Col>
      </Row>
      <hr />
      <Service />
    </div>
  );
};

export default ProductScreen;
