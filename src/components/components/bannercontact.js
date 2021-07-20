import React from "react";
import { Link } from "@reach/router";

export default () => (
  <section className="container-fluid p-md-0">
    <div className="row">
      <div className="col-md-6">
        <img
          src="./images/bannerInterior2.jpg"
          alt="imgbanner"
          className="w-100 border-radius"
        />
      </div>
      <div className="col-md-6 centered">
        <div>
          <div className="subheading mt-md-0 mt-5">You can trust us</div>
          <div className="heading">
            No brilliant design is too difficult as we can always turn it into
            reality.
          </div>
          <p>
            Over the years we have developed strong working relationships with a
            number of principal contractors and specialised sub-contractors and
            these assist in the completion of specific works not included in the
            NTS trade list. This enables us to provide a complete service to
            clients without the inconvenience of multiple trade accounts.
            <br></br>
            <br></br>
            We are proudly accredited members of the Master Builders Association
            (MBA) of the Northern Territory. NTS Project Managers have their
            Test and Tag Accreditation. One of our Executive Directors holds a
            Certificate IV in Building and can act as a consultant in various
            building and construction situations.
          </p>
          <Link className="btn" to="/contact">
            <span className="shine"></span>
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </div>
  </section>
);
