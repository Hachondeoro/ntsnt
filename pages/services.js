import Footer from "@components/footer";
import Layout from "@components/layout";
import Link from "next/link";
import React from "react";
import ourservices from "public/content/ourservices.json";

const Services = () => {
  return (
    <Layout
      pageTitle="Northern Trade Solutions"
      pageDescription="Northern Trade Solutions (NTS) has been providing the Northern
        Territory building industry with a comprehensive range of
        building and fit out services since 2010. "
      keyWords="nt building construction">
      <div className="wraperitem">
        <section
          className="jumbotron breadcumb"
          style={{ backgroundImage: `url(${"/images/banners/highriseBanner.png"})` }}>
          <div className="mainbreadcumb">
            <div className="container-fluid">
              <div className="row m-10-hor">
                <div className="col-md-6">
                  <h1>SERVICES</h1>
                </div>
                <div className="col-md-6">
                  <div className="list">
                    <Link className="link" href="/">
                      Home
                    </Link>
                    <span className="dash">/</span>
                    <span>Services</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid p-md-0 ourservices">
          <br></br>
          <h1 style={{ textAlign: "center" }}>OUR SERVICES</h1>
          <br></br>
          <div className="col-12 col-md-9 mx-auto d-block">
            <div className="row">
              <hr className="w-100 my-0" style={{ backgroundColor: "#565555", height: 5 }} />
              {ourservices.services.map((item) => (
                <>
                  <div className="col-md-6 centered p-5 pb-5" key={item.title}>
                    <div className="p-md-5">
                      <div className="heading">{item.title}</div>
                      <p className="mt-3">{item.description}</p>
                    </div>
                    <div className="col-md-6 pl-md-0">
                      <img src={item.image} alt="#" />
                    </div>
                  </div>
                  <hr className="w-100 my-0" style={{ backgroundColor: "#fff", height: 10 }} />
                </>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </Layout>
  );
};

export default Services;
