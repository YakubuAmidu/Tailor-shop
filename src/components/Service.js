import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class Service extends Component {
  render() {
    return (
      <div className="Service_section">
        <Row>
          <Col>
            <div className="Service_header">
              <h1 className="Service_title">Sercvices</h1>
              <p className="Service_paragraph">
                This website template has been designed by Free Website
                Templates for you, for free. You can replace all this text with
                your own text. You can remove any link to our website from this
                website template, you're free to use this website template
                without linking back to us. If you're having problems editing
                this website template, then don't hesitate to ask for help on
                the Forums.
              </p>

              <div className="Social_icons">
                <h5 className="Social_title">Connect with me</h5>
                <i class="fa fa-facebook-official" aria-hidden="true"></i>
                <i class="fa fa-twitter-square" aria-hidden="true"></i>
                <i class="fa fa-google-plus-square" aria-hidden="true"></i>
              </div>
              <div>
                <p className="News_letter">NewLetter</p>
                <input type="text" name="email" placeholder="Enter email" />
                <button className="btn-dark">go</button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Service;
