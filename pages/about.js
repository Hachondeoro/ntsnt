import React from "react";
import Link from "next/link";
import Testimony from "@components/carouseltestimony";
import Footer from "@components/footer";
import Layout from "@components/layout";

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
        <img src="/images/aboutus.jpg" width="100%"/>
      </section>
      <section className="container-fluid black_more">
        <div className="row m-10-hor">
          <div className="col-md-10 mx-auto">
            <div className="content">
              Northern Trade Solutions (NTS) has been providing the Northern
              Territory building industry with a comprehensive range of building
              and fit out services since 2010. These services include, but are
              not limited to, partition and ceiling installation, metal
              fabrication, carpentry and joinery, glazing, external facade
              services, demolition and asbestos removal.
            </div>
            <div className="content">
              NTS is committed to constant improvement and maintaining a
              positive reputation in the Territory building and construction
              industry. We pride ourselves on high-quality workmanship and
              professional services and employ staff from a range of trade
              backgrounds with various building industry affiliations to support
              the diverse needs of our industry.
            </div>
            <div className="content">
              Over the years we have developed strong working relationships with
              a number of principal contractors and specialised sub-contractors
              and these assist in the completion of specific works not included
              in the NTS trade list. This enables us to provide a complete
              service to clients without the inconvenience of multiple trade
              accounts.
            </div>
            <div className="content">
              We are proudly accredited members of the Master Builders
              Association (MBA) of the Northern Territory. NTS Project Managers
              have their Test and Tag Accreditation. One of our Executive
              Directors holds a Certificate IV in Building and can act as a
              consultant in various building and construction situations.
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  </Layout>
);

export default About;
