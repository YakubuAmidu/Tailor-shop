import React from "react";
import { Col, Row, Form } from "react-bootstrap";
import Links from "../components/Links";
import Service from "../components/Service";

const ContactScreen = () => {
  return (
    <div>
      <Links />
      <div>
        <h1>ContactScreen</h1>
        <p>
          This is just a place holder, so you can see what the site would look
          like. This is just a place holder, so you can see what the site would
          look like.
        </p>
        <p>
          This is just a place holder, so you can see what the site would look
          like. This is just a place holder, so you can see what the site would
          look like.
        </p>
      </div>

      <Row>
        <Col>
          <div>
            <p>SHOP DETAILS</p>
            <p>
              126-U This is just a place holder, so you can see what the site
              would look like., 9183
            </p>
            <p>EMAIL</p>
            <p>company@email.com</p>
            <p>Call</p>
            <p>987 654 3210</p>
            <p>987 654 3210</p>
            <p>987 654 3210</p>
            <p>BUSINESS HOURS</p>
            <p>Monday to Friday: 9AM - 8PM</p>
          </div>
        </Col>
        <Col>
          <div>
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
      <Service />
    </div>
  );
};

export default ContactScreen;
