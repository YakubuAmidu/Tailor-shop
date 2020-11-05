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
      <Row>
        <Col>
          <div>
            <p>May 1, 2012 posted by: Jo This is just a place holder.</p>
            <img src={Brideone} alt="img" />
            <p>
              This is just a place holder, so you can see what the site would
              look like. This is just a place holder, so you can see what the
              site would look like. - read more
            </p>
          </div>
        </Col>
        <Col>
          <div>
            <p>May 1, 2012 posted by: Jo This is just a place holder.</p>
            <img src={Bridetwo} alt="img" />
            <p>
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
            <div>
              <p>CATEGORIES:</p>
              <ul>
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
            <div>
              <p>CATEGORIES:</p>
              <ul>
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
            <div>
              <p>CATEGORIES:</p>
              <ul>
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
            <div>
              <p>
                May 6, 2012 posted by: Mark This is just a place holder. This is
                just a place holder, so you can see what the site would look
                like. This is just a place holder, so you can see what the site
                would look like. This is just a place holder, so you can see
                what the site would look like. This is just a place holder, so
                you can see what the site would look like. This is just a place
                holder, so you can see what the site would look like. This is
                just a place holder, so you can see what the site would look
                like. - read more
              </p>
            </div>
          </Col>
          <Col>
            <div>
              <img src={Tailorone} alt="img" />
            </div>
          </Col>
        </Row>
      </div>
      <Service />
    </div>
  );
};

export default Blog;
