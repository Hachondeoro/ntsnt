import React from "react";
import Link from "next/link";
import Testimony from "@components/carouseltestimony";
import Footer from "@components/footer";
import Layout from "@components/layout";
import aboutus from "public/content/aboutus.json"

const About = () => (
  <Layout
    pageTitle="Northern Trade Solutions"
    pageDescription="Northern Trade Solutions (NTS) has been providing the Northern
            Territory building industry with a comprehensive range of
            building and fit out services since 2010. "
    keyWords="nt building construction"
  >
    <div className="wraperitem">
      <section
        className="jumbotron breadcumb"
        style={{
          backgroundImage: `url(${"/images/banners/highriseBanner.png"})`,
        }}
      >
        <div className="mainbreadcumb">
          <div className="container-fluid">
            <div className="row m-10-hor">
              <div className="col-md-6">
                <h1>ABOUT US</h1>
              </div>
              <div className="col-md-6">
                <div className="list">
                  <Link className="link" href="/">
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
      <section className="col-12 col-md-9 mx-auto d-block">
        <img src={aboutus.image} width="100%"/>
      </section>
      <section className="container-fluid black_more pt-0">
        <div className="row m-10-hor">
          <div className="col-md-10 mx-auto">
            <p className="netlify">
             {aboutus.content}
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  </Layout>
);

export default About;
