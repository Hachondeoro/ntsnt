import React from "react";
import Link from 'next/link'
import Carouselteam from "@components/carouselteam";
import Bannercontact from "@components/bannercontact";
import Testimony from "@components/carouseltestimony";
import Footer from "@components/footer";
import Slider from "@components/sliderhome";

export default () => (
  <div>
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
          <div className="heading">
            Northern Trade <span className="br"></span> Solutions
          </div>
          <div className="subheading">The building experts</div>
        </div>

        <div className="col-md-7">
          <div className="content">
            Northern Trade Solutions (NTS) has been providing the Northern
            Territory building industry with a comprehensive range of building
            and fit out services since 2010. These services include, but are not
            limited to, partition and ceiling installation, metal fabrication,
            carpentry and joinery, glazing, external facade services, demolition
            and asbestos removal.
          </div>
        </div>
      </div>
    </section>

    <section className="container-fluid p-0 black">
      <div className="row">
        <div className="col-md-6 pr-md-0">
          <img
            src="./images/partition-ceilings.png"
            className="imgslickz"
            alt="#"
          />
        </div>

        <div className="col-md-6 centered p-5">
          <div className="p-md-5">
            <div className="heading">PARTITIONS & CEILINGS</div>
            <p className="mt-3">
              NTS provide specialised partitions and ceiling services. This
              includes the installation of fire-rated partitions and ceilings,
              acoustic partitions and ceilings, impact-resistant wall systems,
              cinema wall and ceiling systems, radiation resistant partitions
              and ceilings, decorative walls and ceiling paneling systems.
            </p>
            <Link className="btn" href="#0">
              <span className="shine"></span>
              <span>More Detail</span>
            </Link>
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
            <Link className="btn" href="#0">
              <span className="shine"></span>
              <span>More Detail</span>
            </Link>
          </div>
        </div>

        <div className="col-md-6 pl-md-0">
          <img
            src="./images/metal-fabrication.png"
            className="imgslickz"
            alt="#"
          />
        </div>
        <hr
          className="w-100 my-0"
          style={{ backgroundColor: "#fff", height: 10 }}
        />
        <div className="col-md-6 pr-md-0">
          <img src="./images/carpentry.png" className="imgslickz" alt="#" />
        </div>

        <div className="col-md-6 centered p-5">
          <div className="p-md-5">
            <div className="heading">CARPENTRY & JOINERY</div>
            <p className="mt-3">
              NTS are proud of our carpentry and joinery services and our
              attention to detail and finish in these areas. The services we
              offer include wardrobes, kitchen cabinets, decorative wall and
              ceiling panelling, door and hardware, toilet partitions, skirtings
              and more.
            </p>
            <Link className="btn" href="#0">
              <span className="shine"></span>
              <span>More Detail</span>
            </Link>
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
              NTS offer all glazing related services for residential, commercial
              and industrial sites including external glazing curtain wall
              system, glazing shop front, internal integrated glazing partition
              systems, glazing windows and doors, balustrades and more.
            </p>
            <Link className="btn" href="#0">
              <span className="shine"></span>
              <span>More Detail</span>
            </Link>
          </div>
        </div>

        <div className="col-md-6 pl-md-0">
          <img src="./images/glazing.png" className="imgslickz" alt="#" />
        </div>
        <hr
          className="w-100 my-0"
          style={{ backgroundColor: "#fff", height: 10 }}
        />

        <div className="col-md-6 pr-md-0">
          <img src="./images/facades.png" className="imgslickz" alt="#" />
        </div>

        <div className="col-md-6 centered p-5">
          <div className="p-md-5">
            <div className="heading">EXTERNAL FACADES</div>
            <p className="mt-3">
              NTS offer professional installation and a wide range of external
              facade systems, including aluminium composite panel system,
              glazing facade systems, CFC facade system and more.
            </p>
            <Link className="btn" href="#0">
              <span className="shine"></span>
              <span>More Detail</span>
            </Link>
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
              NTS holds a Class A Licence in asbestos removal and demolition, so
              we can undertake the complicated process of removals and
              demolitions with asbestos contained materials.
            </p>
            <Link className="btn" href="#0">
              <span className="shine"></span>
              <span>More Detail</span>
            </Link>
          </div>
        </div>

        <div className="col-md-6 pl-md-0">
          <img src="./images/demolition.png" className="imgslickz" alt="#" />
        </div>
      </div>
    </section>

    {/* <section className="container-fluid black_more">
      <div className="row m-10-hor">
        <div className="col-12 text-center">
          <div className="subheading">Our team</div>
          <div className="heading">About Our Team</div>
          <div className="row">
            <div className="col-md-8 mx-auto">
              <p className="content">
                Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed
                suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus
                metus sollicitudin. Quisque vitae sodales lectus. Nam p orttitor
                justo sed mi finibus, vel tristique risus faucibus.
              </p>
            </div>
          </div>
        </div>
        <Carouselteam />
      </div>
    </section> */}

    <Bannercontact />
    {/* <Pricing /> */}
    <Testimony />
    <Footer />
  </div>
);
