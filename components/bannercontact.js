import {
  FadeInImage, FadeInRegular
} from "@components/gsap/gsapComponents";
import Link from "next/link";
import React from "react";

const BannerContact = () => (
  <>
    <section className="container-fluid p-md-0 pt-1">
      <div className="row">
        <div className="col-md-6">
          <FadeInImage>
            <img
              src="./images/bannerInterior2.jpg"
              alt="imgbanner"
              className="w-100 border-radius"
            />
          </FadeInImage>
        </div>
        <div className="col-md-6 centered">
          <div>
            <FadeInRegular>
              <div
                className="heading"
                style={{ fontVariant: "all-small-caps" }}
              >
                No brilliant design is too difficult for us
              </div>
            </FadeInRegular>
            <p>
              Over the years we have developed strong working relationships with
              a number of principal contractors and specialised sub-contractors
              and these assist in the completion of specific works not included
              in the NTS trade list. This enables us to provide a complete
              service to clients without the inconvenience of multiple trade
              accounts.
              <br></br>
              <br></br>
              We are proudly accredited members of the Master Builders
              Association (MBA) of the Northern Territory. NTS Project Managers
              have their Test and Tag Accreditation. One of our Executive
              Directors holds a Certificate IV in Building and can act as a
              consultant in various building and construction situations.
            </p>
            <Link href="/contact">
              <div className="btn">
                <span className="shine"></span>
                <span>Contact Us</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default BannerContact;
