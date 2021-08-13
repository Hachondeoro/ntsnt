// import Carouselteam from "@components/carouselteam";
import Bannercontact from "@components/bannercontact";
import Testimony from "@components/carouseltestimony";
import Footer from "@components/footer";
import {
  FadeInImage, FadeInLeft, FadeInRegular
} from "@components/gsap/gsapComponents";
import Layout from "@components/layout";
import Slider from "@components/sliderhome";
import Link from "next/link";
import React from "react";
import { Button } from "reactstrap";

const Home = () => {
  return (
    <Layout
      pageTitle="Northern Trade Solutions"
      pageDescription="Northern Trade Solutions (NTS) is a well-recognised provider of
                full project solutions, fit out solutions and building and
                construction services in the Northern Territory."
      keyWords="nt building construction"
    >
      <div className="wraperitem">
        <section className="jumbotron jumbomain">
          <Slider />
          <div className="icon-scroll-wraper">
            <div className="icon-scroll">
              <div className="icon-scroll-screen"></div>
            </div>
          </div>
        </section>

        <section className="container-fluid black_more">
          <div className="row m-10-hor">
            <div className="col-md-5">
              <FadeInLeft>
                <div className="heading">
                  Northern Trade <span className="br"></span> Solutions
                </div>
              </FadeInLeft>

              <div className="subheading">The building experts</div>
            </div>

            <div className="col-md-7">
              <div className="content">
                Northern Trade Solutions (NTS) has been providing the Northern
                Territory building industry with a comprehensive range of
                building and fit out services since 2010. These services
                include, but are not limited to, partition and ceiling
                installation, metal fabrication, carpentry and joinery, glazing,
                external facade services, demolition and asbestos removal.
              </div>
            </div>
          </div>
        </section>

        <Bannercontact />
        {/* <Pricing /> */}
        <Testimony />
        <Footer />
      </div>
    </Layout>
  );
};

export default Home;
