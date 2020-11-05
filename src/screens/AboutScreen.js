import React from "react";
import Links from "../components/Links";
import Service from "../components/Service";

const AboutScreen = () => {
  return (
    <div>
      <Links />
      <div className="About_section">
        <h1 className="About_header">AboutScreen</h1>
        <p className="About_paragraph-header">
          This is just a place holder, so you can see what the site would look
          like. This is just a place holder, so you can see what the site would
          look like.
        </p>
        <div className="About_header-one">
          <p className="About_header-title">
            We Have Free Templates for Everyone
          </p>
          <p className="About_paragraph">
            Our website templates are created with inspiration, checked for
            quality and originality and meticulously sliced and coded. What's
            more, they're absolutely free! You can do a lot with them. You can
            modify them. You can use them to design websites for clients, so
            long as you agree with the Terms of Use. You can even remove all our
            links if you want to.
          </p>
        </div>

        <div className="About_header-one">
          <p className="About_header-title">
            We Have Free Templates for Everyone
          </p>
          <p className="About_paragraph">
            Our website templates are created with inspiration, checked for
            quality and originality and meticulously sliced and coded. What's
            more, they're absolutely free! You can do a lot with them. You can
            modify them. You can use them to design websites for clients, so
            long as you agree with the Terms of Use. You can even remove all our
            links if you want to.
          </p>
        </div>

        <div className="About_header-one">
          <p className="About_header-title">
            We Have Free Templates for Everyone
          </p>
          <p className="About_paragraph">
            Our website templates are created with inspiration, checked for
            quality and originality and meticulously sliced and coded. What's
            more, they're absolutely free! You can do a lot with them. You can
            modify them. You can use them to design websites for clients, so
            long as you agree with the Terms of Use. You can even remove all our
            links if you want to.
          </p>
        </div>
      </div>
      <Service />
    </div>
  );
};

export default AboutScreen;
