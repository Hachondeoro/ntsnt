import Footer from "@components/footer";
import Layout from "@components/layout";
import Link from "next/link";
import React from "react";

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
          backgroundImage: `url(${"./images/banners/banner3.jpg"})`,
        }}
      >
        <div className="mainbreadcumb">
          <div className="container-fluid">
            <div className="row m-10-hor">
              <div className="col-md-6">
                <h1>AWARDS</h1>
              </div>
              <div className="col-md-6">
                <div className="list">
                  <Link className="link" href="/">
                    Home
                  </Link>
                  <span className="dash">/</span>
                  <span>Awards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h1 style={{ textAlign: "center" }}>OUR AWARDS</h1>
      <section className="col-12 col-md-10 mx-auto d-block text-center awards">
        <div className="row justify-content-center">
          <div className="col-12 col-md-4">
            <h1>2018 EBC Subcontractor of the Year</h1>
            <br></br>
            <Link href="/awards/2018subcontractor">
              <img src="/images/awards/ebc2018awards.png" width="70%" />
            </Link>
          </div>
          <div className="col-12 col-md-4">
            <h1>2019 EBC Cladding Subcontractor of the Year</h1>
            <Link href="/awards/2019cladding">
              <img src="/images/awards/claddingsubcontractor.png" width="80%" />
            </Link>
          </div>
          <div className="col-12 col-md-4">
            <h1>2019 EBC Subcontractor of the Year</h1>
            <Link href="/awards/2019subcontractor">
              <img
                src="/images/awards/2019subcontractoryear.png"
                width="100%"
              />
            </Link>
          </div>
          <div className="col-12 col-md-4">
            <h1>2019 Telstra NT Business of the Year</h1>
            <Link href="/awards/2019telstra">
              <img
                src="/images/awards/2019subcontractoryear.png"
                width="100%"
              />
            </Link>
          </div>
          <div className="col-12 col-md-4">
            <h1>2020 EBC Subcontractor of the Year</h1>
            <br></br>
            <Link href="/awards/2020finalist">
              <img src="/images/awards/2020subcontractor.png" width="75%" />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  </Layout>
);

export default About;
