import { FadeInImage, FadeInRegular } from "@components/gsap/gsapComponents";
import Link from "next/link";
import React from "react";
import descriptiontwo from "public/content/descriptiontwo.json";

const BannerContact = () => (
  <>
    <section className="container-fluid p-md-0 pt-1">
      <div className="row">
        <div className="col-md-6">
          <FadeInImage>
            <img src="./images/bannerInterior2.jpg" alt="imgbanner" className="w-100 rounded" />
          </FadeInImage>
        </div>
        <div className="col-md-6 centered netlify" style={{ color: "black" }}>
          <div>
            <FadeInRegular>
              <div className="heading" style={{ fontVariant: "all-small-caps" }}>
                {descriptiontwo.title}
              </div>
            </FadeInRegular>
            <p>{descriptiontwo.content}</p>
            <Link href="/contact">
              <div className="btn">
                <span className="shine"></span>
                <span style={{ color: "black" }}>Contact Us</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default BannerContact;
