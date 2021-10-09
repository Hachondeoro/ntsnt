import React from "react";
import Link from "next/link";
import ImageGallery from "@components/ImageGallery";
import Footer from "@components/footer";
import Layout from "@components/layout";
import introduction from "public/content/introduction.json";
import features from "public/content/features.json";
import positions from "public/content/positions.json";

const Employment = () => {
  return (
    <Layout
      pageTitle="Northern Trade Solutions"
      pageDescription="Northern Trade Solutions (NTS) has been providing the Northern
            Territory building industry with a comprehensive range of
            building and fit out services since 2010. "
      keyWords="nt building construction">
      <div className="netlify">
        <section
          className="jumbotron breadcumb"
          style={{ backgroundImage: `url(${"/images/banners/highriseBanner.png"})` }}>
          <div className="mainbreadcumb">
            <div className="container-fluid">
              <div className="row m-10-hor">
                <div className="col-md-6">
                  <h1>EMPLOYMENT</h1>
                </div>
                <div className="col-md-6">
                  <div className="list">
                    <Link className="link" href="/">
                      Home
                    </Link>
                    <span className="dash">/</span>
                    <span>Employment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="col-12 col-md-9 mx-auto d-block">
          <section className="container-fluid black" style={{ color: "black" }}>
            <div className="row m-10-hor">
              <div className="col-md-5">
                <div className="heading">{introduction.introduction}</div>
              </div>
              <div className="col-md-7">
                <p className="content">{introduction.content}</p>
              </div>
            </div>
          </section>
          <section className="container-fluid employment">
            <div className="row">
              {features.features.map((item) => (
                <div key={item.title} className="col-md-3">
                  <img src={item.image} width="40%" alt="img" />
                  <h2>{item.title}</h2>
                  {item.description}
                </div>
              ))}
            </div>
          </section>
          <section className="container-fluid employment">
            <div className="row justify-content-md-center">
              <div className="col-md-4 ">
                <h2>{positions.positions}</h2>
                {positions.positions_list.replace(/\*/g, '•')}
              </div>
              <div className="col-md-4">
                <h2>{positions.requirements}</h2>
                {positions.requirements_list.replace(/\*/g, '•')}
              </div>
              <div className="m-4">
                Written applications, including an up-to-date resume and related accreditations and tickets should be
                emailed to
                <a href="mailto:jessie@ntsnt.com.au">jessie@ntsnt.com.au</a>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

export default Employment;
