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

        <section className="container-fluid p-md-0">
          <div className="row">
            <div className="col-md-6 pr-md-0">
              <FadeInImage>
                <img
                  src="/images/partition-ceilings.png"
                  width="100%"
                  alt="#"
                />
              </FadeInImage>
            </div>

            <div className="col-md-6 centered p-5">
              <div className="p-md-5">
                <FadeInRegular>
                  <div className="heading">PARTITIONS & CEILINGS</div>
                </FadeInRegular>
                <p className="mt-3">
                  NTS provide specialised partitions and ceiling services. This
                  includes the installation of fire-rated partitions and
                  ceilings, acoustic partitions and ceilings, impact-resistant
                  wall systems, cinema wall and ceiling systems, radiation
                  resistant partitions and ceilings, decorative walls and
                  ceiling paneling systems.
                </p>
              </div>
            </div>
            <hr
              className="w-100 my-0"
              style={{ backgroundColor: "#565555", height: 5 }}
            />

            <div className="col-md-6 centered p-5 pb-5">
              <div className="p-md-5">
                <FadeInRegular>
                  <div className="heading">METAL FABRICATION</div>
                </FadeInRegular>
                <p className="mt-3">
                  NTS offer a full range of metal building components, including
                  sun-hood screens, window awnings, balustrade and handrails,
                  fences, feature building screens and more.
                </p>
              </div>
            </div>

            <div className="col-md-6 pl-md-0">
              <FadeInImage>
                <img src="/images/metal-fabrication.png" width="100%" alt="#" />
              </FadeInImage>
            </div>
            <hr
              className="w-100 my-0"
              style={{ backgroundColor: "#fff", height: 10 }}
            />
            <div className="col-md-6 pr-md-0">
              <FadeInImage>
                <img src="/images/carpentry.png" width="100%" alt="#" />
              </FadeInImage>
            </div>

            <div className="col-md-6 centered p-5">
              <div className="p-md-5">
                <FadeInRegular>
                  <div className="heading">CARPENTRY & JOINERY</div>
                </FadeInRegular>
                <p className="mt-3">
                  NTS are proud of our carpentry and joinery services and our
                  attention to detail and finish in these areas. The services we
                  offer include wardrobes, kitchen cabinets, decorative wall and
                  ceiling panelling, door and hardware, toilet partitions,
                  skirtings and more.
                </p>
              </div>
            </div>
            <Link href="/services">
              <Button color="primary" className="custom-button">
                View More
              </Button>
            </Link>
            <hr
              className="w-100 my-0"
              style={{ backgroundColor: "#565555", height: 5 }}
            />
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
