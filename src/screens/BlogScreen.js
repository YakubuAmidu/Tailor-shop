import React from "react";
import Links from "../components/Links";
import { Col, Row } from "react-bootstrap";
import Brideone from "../assets/Brideone.png";
import Bridetwo from "../assets/Bridetwo.png";
import Tailorone from "../assets/Tailorone.png";
import Service from "../components/Service";

const Blog = () => {
  return (
    <div>
      <Links />
      <div className="Blog_section-main">
        <p className="Blogheader">Blog</p>
        <Row>
          <Col>
            <div className="Blog_date">
              <p className="Blog_date-one">
                May 1, 2012 posted by: Jo This is just a place holder.
              </p>
              <img src={Brideone} alt="img" className="Blog_image-one" />
              <p className="Blog_paragraph">
                This is just a place holder, so you can see what the site would
                look like. This is just a place holder, so you can see what the
                site would look like. - read more
              </p>
            </div>
          </Col>
          <Col>
            <div className="Blog_date">
              <p className="Blog_date-one">
                May 1, 2012 posted by: Jo This is just a place holder.
              </p>
              <img src={Bridetwo} alt="img" className="Blog_image-one" />
              <p className="Blog_paragraph">
                This is just a place holder, so you can see what the site would
                look like. This is just a place holder, so you can see what the
                site would look like. - read more
              </p>
            </div>
          </Col>
        </Row>

        <div>
          <Row>
            <Col>
              <div className="Blog_detail-one">
                <p className="Blog_categories">CATEGORIES:</p>
                <ul className="Blog_list">
                  <li>This is just a place holder.</li>
                  <li>This is just a place holder.</li>
                  <li>This is just a place holder.</li>
                  <li>This is just a place holder.</li>
                  <li>This is just a place holder.</li>
                  <li>This is just a place holder.</li>
                </ul>
              </div>
            </Col>
            <Col>
              <div className="Blog_detail-one">
                <p className="Blog_categories">CATEGORIES:</p>
                <ul className="Blog_list">
                  <li>This is just a place holder.</li>
                  <li>This is just a place holder.</li>
                  <li>This is just a place holder.</li>
                  <li>This is just a place holder.</li>
                  <li>This is just a place holder.</li>
                  <li>This is just a place holder.</li>
                </ul>
              </div>
            </Col>
            <Col>
              <div className="Blog_detail-one">
                <p lassName="Blog_categories">CATEGORIES:</p>
                <ul className="Blog_list">
                  <li>This is just a place holder.</li>
                  <li>This is just a place holder.</li>
                  <li>This is just a place holder.</li>
                  <li>This is just a place holder.</li>
                  <li>This is just a place holder.</li>
                  <li>This is just a place holder.</li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>

        <div>
          <Row>
            <Col>
              <div className="Tailor_details">
                <p className="Tailor_detail-one">
                  May 6, 2012 posted by: Mark This is just a place holder. This
                  is just a place holder, so you can see what the site would
                  look like. This is just a place holder, so you can see what
                  the site would look like. This is just a place holder, so you
                  can see what the site would look like. This is just a place
                  holder, so you can see what the site would look like. This is
                  just a place holder, so you can see what the site would look
                  like. This is just a place holder, so you can see what the
                  site would look like. - read more
                </p>
              </div>
            </Col>
            <Col>
              <div className="Tailor_image">
                <img src={Tailorone} alt="img" className="Tailor_image-one" />
              </div>
            </Col>
          </Row>
        </div>
        <Service />
      </div>
    </div>
  );
};

export default Blog;
