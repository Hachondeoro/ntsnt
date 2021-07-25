import React from "react";
import Link from "next/link";
import Testimony from "@components/carouseltestimony";
import Layout from "@components/layout";
import Footer from "@components/footer";

const Services = () => {
  return (
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
          style={{ backgroundImage: `url(${"./images/banners/banner2.jpg"})` }}
        >
          <div className="mainbreadcumb">
            <div className="container-fluid">
              <div className="row m-10-hor">
                <div className="col-md-6">
                  <h1>Services</h1>
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

        <section className="container-fluid p-md-0">
          <br></br>
          <h1 style={{ textAlign: "center" }}>OUR SERVICES</h1>
          <br></br>
          <div className="row">
            <div className="col-md-6 pr-md-0">
              <img
                src="/images/partition-ceilings.png"
                width="100%"
                alt="#"
              />
            </div>

            <div className="col-md-6 centered p-5">
              <div className="p-md-5">
                <div className="heading">PARTITIONS & CEILINGS</div>
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
                <div className="heading">METAL FABRICATION</div>
                <p className="mt-3">
                  NTS offer a full range of metal building components, including
                  sun-hood screens, window awnings, balustrade and handrails,
                  fences, feature building screens and more.
                </p>
                
              </div>
            </div>

            <div className="col-md-6 pl-md-0">
              <img
                src="/images/metal-fabrication.png"
                width="100%"
                alt="#"
              />
            </div>
            <hr
              className="w-100 my-0"
              style={{ backgroundColor: "#fff", height: 10 }}
            />
            <div className="col-md-6 pr-md-0">
              <img src="/images/carpentry.png" width="100%" alt="#" />
            </div>

            <div className="col-md-6 centered p-5">
              <div className="p-md-5">
                <div className="heading">CARPENTRY & JOINERY</div>
                <p className="mt-3">
                  NTS are proud of our carpentry and joinery services and our
                  attention to detail and finish in these areas. The services we
                  offer include wardrobes, kitchen cabinets, decorative wall and
                  ceiling panelling, door and hardware, toilet partitions,
                  skirtings and more.
                </p>
                
              </div>
            </div>
            <hr
              className="w-100 my-0"
              style={{ backgroundColor: "#565555", height: 5 }}
            />

            <div className="col-md-6 centered p-5 pb-5">
              <div className="p-md-5">
                <div className="heading">GLAZING</div>
                <p className="mt-3">
                  NTS offer all glazing related services for residential,
                  commercial and industrial sites including external glazing
                  curtain wall system, glazing shop front, internal integrated
                  glazing partition systems, glazing windows and doors,
                  balustrades and more.
                </p>
                
              </div>
            </div>

            <div className="col-md-6 pl-md-0">
              <img src="/images/glazing.png" width="100%" alt="#" />
            </div>
            <hr
              className="w-100 my-0"
              style={{ backgroundColor: "#fff", height: 10 }}
            />

            <div className="col-md-6 pr-md-0">
              <img src="/images/facades.png" width="100%" alt="#" />
            </div>

            <div className="col-md-6 centered p-5">
              <div className="p-md-5">
                <div className="heading">EXTERNAL FACADES</div>
                <p className="mt-3">
                  NTS offer professional installation and a wide range of
                  external facade systems, including aluminium composite panel
                  system, glazing facade systems, CFC facade system and more.
                </p>
                
              </div>
            </div>
            <hr
              className="w-100 my-0"
              style={{ backgroundColor: "#565555", height: 5 }}
            />

            <div className="col-md-6 centered p-5 pb-5">
              <div className="p-md-5">
                <div className="heading">DEMOLITION & ASBESTOS</div>
                <p className="mt-3">
                  NTS holds a Class A Licence in asbestos removal and
                  demolition, so we can undertake the complicated process of
                  removals and demolitions with asbestos contained materials.
                </p>
                
              </div>
            </div>

            <div className="col-md-6 pl-md-0">
              <img
                src="/images/demolition.png"
                width="100%"
                alt="#"
              />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </Layout>
  );
};

export default Services;
