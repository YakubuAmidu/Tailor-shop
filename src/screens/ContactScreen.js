import React from "react";
import { Col, Row, Form } from "react-bootstrap";
import Links from "../components/Links";
import Service from "../components/Service";

const ContactScreen = () => {
  return (
    <div>
      <Links />
      <div className="Contact_section">
        <h1 className="About_header">ContactScreen</h1>
        <p className="About_header-paragraph">
          This is just a place holder, so you can see what the site would look
          like. This is just a place holder, so you can see what the site would
          look like.
        </p>
        <p className="About_header-paragraph">
          This is just a place holder, so you can see what the site would look
          like. This is just a place holder, so you can see what the site would
          look like.
        </p>

        <Row>
          <Col sm={6}>
            <div className="Contact_address">
              <p className="Shop">SHOP DETAILS</p>
              <p className="Shop_paragraph">
                126-U This is just a place holder, so you can see what the site
                would look like., 9183
              </p>
              <p className="Email">EMAIL</p>
              <p className="Email_address">company@email.com</p>
              <p className="Phone_header">Call</p>
              <p className="Number">987 654 3210</p>
              <p lassName="Number">987 654 3210</p>
              <p lassName="Number">987 654 3210</p>
              <p lassName="Buiness">BUSINESS HOURS</p>
              <p className="Days">Monday to Friday: 9AM - 8PM</p>
            </div>
          </Col>
          <Col sm={6}>
            <div className="Contact_message">
              <Form>
                <Form.Label>Your name</Form.Label>
                <Form.Control placeholder="Your name" />
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Label>Your message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form>
            </div>
          </Col>
        </Row>
      </div>
      <Service />
    </div>
  );
};

export default ContactScreen;
