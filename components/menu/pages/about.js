import React from "react";
import Link from "next/link";
import Testimony from "@components/carouseltestimony";
import Footer from "@components/footer";

const About = ()  => (
  <div className="wraperitem">
    <section
      className="jumbotron breadcumb"
      style={{ backgroundImage: `url(${"./img/testimony.jpg"})` }}
    >
      <div className="mainbreadcumb">
        <div className="container-fluid">
          <div className="row m-10-hor">
            <div className="col-md-6">
              <h1>About us</h1>
            </div>
            <div className="col-md-6">
              <div className="list">
                <Link className="link" href="/home">
                  Home
                </Link>
                <span className="dash">/</span>
                <span>About</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="container-fluid black_more">
      <div className="row m-10-hor">
        <div className="col-md-5">
          <div className="heading">
            Perfection<span className="br"></span> concept
            <span className="br"></span> Design
          </div>
        </div>

        <div className="col-md-7">
          <div className="content">
            et lobortis Nulla in odio quis augue ultrices blandit. Phasellus
            ipsum nibh, porta non sapien non efficitur pulvinar neque. Sed ut
            perspiciatis unde omnis iste natus errorsit voluptatem accusantium
            natus error sit.Mauris interdum libero vitae tellus vestibulum, nec
            sollicitudin dui mollis.
          </div>
          <div className="content">
            Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed
            suscipit. Quisque vitae sodales lectus, vel tristique risus
            faucibus.
          </div>
        </div>
      </div>
    </section>

    <section className="container-fluid p-0">
      <div className="row">
        <div className="col-md-6 px-0">
          <img src="/img/blog.jpg" className="imgslickz" alt="#" />
        </div>

        <div className="col-md-6 centered p-md-5 pt-5">
          <div className="p-md-5">
            <div className="subheading">January 14, 2019</div>
            <div className="heading">Living Your Dreams</div>
            <p className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmodt temp to the incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis a nostr a exercitation ullamco
              laboris nisi ut aliquip.
            </p>
            <Link href="/#">
              <div className="btn">
                <span className="shine"></span>
                <span>More Detail</span>
              </div>
            </Link>
          </div>
        </div>

        <div className="col-md-6 centered p-md-5 pt-5 pb-5">
          <div className="p-md-5">
            <div className="subheading">January 22, 2019</div>
            <div className="heading">Interior Design</div>
            <p className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmodt temp to the incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis a nostr a exercitation ullamco
              laboris nisi ut aliquip.
            </p>
            <Link className="btn" href="">
              <span className="shine"></span>
              <span>More Detail</span>
            </Link>
          </div>
        </div>

        <div className="col-md-6 px-0">
          <img src="/img/blog1.jpg" className="imgslickz" alt="#" />
        </div>
      </div>
    </section>

    <Testimony />
    <Footer />
  </div>
);

export default About;