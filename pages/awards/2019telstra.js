import Footer from "@components/footer";
import Layout from "@components/layout";
import Link from "next/link";
import React from "react";
import { ArrowLeftCircleFill } from "react-bootstrap-icons";

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
          backgroundImage: `url(${"../images/banners/banner3.jpg"})`,
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
        <h1>2019 EBC Subcontractor of the Year</h1>
        <div className="row justify-content-center individual">
          <div className="col-12 col-md-4">
            <img src="/images/awards/Picture14.png" />
          </div>
          <div className="col-12 col-md-4">
            <img src="/images/awards/Picture15.png" />
          </div>
          <div className="col-12 col-md-4">
            <img src="/images/awards/Picture16.png" />
          </div>
          <div className="col-12 col-md-4">
            <img src="/images/awards/Picture17.png" />
          </div>
          <div className="col-12 col-md-4">
            <img src="/images/awards/Picture18.png" />
          </div>
          <div className="col-12 col-md-4">
            <img src="/images/awards/Picture19.png" />
          </div>
          <div className="col-12 col-md-4">
            <img src="/images/awards/Picture20.png" />
          </div>
          <div className="col-12 col-md-4">
            <img src="/images/awards/Picture21.png" />
          </div>
          <div className="col-12 col-md-4">
            <img src="/images/awards/Picture22.png" />
          </div>
          <div className="col-12 col-md-4">
            <img src="/images/awards/Picture23.png" />
          </div>
          <div className="col-12 col-md-4">
            <img src="/images/awards/Picture24.png" />
          </div>
          <div className="col-12 col-md-4">
            <img src="/images/awards/Picture25.png" />
          </div>
          <div className="col-12 col-md-4">
            <img src="/images/awards/Picture26.png" />
          </div>
        </div>
        <Link href="/awards">
          <ArrowLeftCircleFill color="black" size={60} className="arrowBack" />
        </Link>
      </section>
      <Footer />
    </div>
  </Layout>
);

export default About;