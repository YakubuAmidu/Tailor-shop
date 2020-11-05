import React from "react";
import { Col, Row } from "react-bootstrap";
import Links from "../components/Links";
import Service from "../components/Service";
import Measureone from "../assets/Measureone.png";
import Measuretwo from "../assets/Measuretwo.png";
import Measurethree from "../assets/Measurethree.png";
import Measurefour from "../assets/Measurefour.png";

const ServicesScreen = () => {
  return (
    <div>
      <Links />
      <div className="Service_section-main">
        <h1 className="Services_screen">Services</h1>
        <Row>
          <Col sm={4}>
            <div className="Service_image">
              <img src={Measureone} alt="img" className="Measureone" />
            </div>
          </Col>
          <Col sm={8}>
            <div className="Measure_main">
              <p className="Measure_paragraph">
                This website template has been designed by Free Website
                Templates for you, for free. You can replace all this text with
                your own text. Want an easier solution for a Free Website? Head
                straight to Wix and immediately start customizing your website!
                Wix is an online website builder with a simple drag & drop
                interface, meaning you do the work online and instantly publish
                to the web. Nothing to download,
              </p>
            </div>
          </Col>
        </Row>
        <br />
        <Row>
          <Col sm={4}>
            <div className="Measure_paragraph-one">
              <img src={Measurethree} alt="img" className="Measuretwo" />
              <p className="Measure_paragraph-two">
                Wix also offers a ton of free design elements right inside the
                editor, like images, icons, animation files, and interactive
                widgets. Publish your Free Website in minutes!
              </p>
            </div>
          </Col>
          <Col sm={4}>
            <div className="Measure_paragraph-one">
              <img src={Measurefour} alt="img" className="Measuretwo" />
              <p className="Measure_paragraph-two">
                Wix also offers a ton of free design elements right inside the
                editor, like images, icons, animation files, and interactive
                widgets. Publish your Free Website in minutes!
              </p>
            </div>
          </Col>
          <Col sm={4}>
            <div className="Measure_paragraph-one">
              <img src={Measuretwo} alt="img" className="Measuretwo" />
              <p className="Measure_paragraph-two">
                Wix also offers a ton of free design elements right inside the
                editor, like images, icons, animation files, and interactive
                widgets. Publish your Free Website in minutes!
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <div className="Appointment_header">
              <p className="Appointment">
                For appointment
                <br />
                This is just a place holder, so you can see what the site would
                look like.
              </p>
            </div>
          </Col>
          <Col sm={4}>
            <div className="Number_header">
              <p className="Number">
                Call: 987 654 3210 765 432 1098
                <br />
                Email: company@emailcom
              </p>
            </div>
          </Col>
          <Col sm={4}>
            <div className="Location_header">
              <p className="Location">
                Location:
                <br />
                126-U This is just a place holder, so you can see what the site
                would look like., 9183
              </p>
            </div>
          </Col>
        </Row>
        <Service />
      </div>
    </div>
  );
};

export default ServicesScreen;
