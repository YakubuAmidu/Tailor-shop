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
    <div className="Service_section">
      <Links />
      <h1>ServicesScreen</h1>
      <Row>
        <Col className="Service_image" sm={4}>
          <img src={Measureone} alt="img" className="Measureone" />
        </Col>
        <Col className="Measure_paragraph" sm={4}>
          <p className="Paragraph_info">
            This website template has been designed by Free Website Templates
            for you, for free. You can replace all this text with your own text.
            Want an easier solution for a Free Website? Head straight to Wix and
            immediately start customizing your website! Wix is an online website
            builder with a simple drag & drop interface, meaning you do the work
            online and instantly publish to the web. Nothing to download,
          </p>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <img src={Measurethree} alt="img" className="Measuretwo" />
          <p>
            Wix also offers a ton of free design elements right inside the
            editor, like images, icons, animation files, and interactive
            widgets. Publish your Free Website in minutes!
          </p>
        </Col>
        <Col sm={4}>
          <img src={Measurefour} alt="img" className="Measuretwo" />
          <p>
            Wix also offers a ton of free design elements right inside the
            editor, like images, icons, animation files, and interactive
            widgets. Publish your Free Website in minutes!
          </p>
        </Col>
        <Col sm={4}>
          <img src={Measuretwo} alt="img" className="Measuretwo" />
          <p>
            Wix also offers a ton of free design elements right inside the
            editor, like images, icons, animation files, and interactive
            widgets. Publish your Free Website in minutes!
          </p>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <p>
            For appointment
            <br />
            This is just a place holder, so you can see what the site would look
            like.
          </p>
        </Col>
        <Col sm={4}>
          <p>
            Call: 987 654 3210 765 432 1098
            <br />
            Email: company@emailcom
          </p>
        </Col>
        <Col sm={4}>
          <p>
            Location:
            <br />
            126-U This is just a place holder, so you can see what the site
            would look like., 9183
          </p>
        </Col>
      </Row>
      <Service />
    </div>
  );
};

export default ServicesScreen;
