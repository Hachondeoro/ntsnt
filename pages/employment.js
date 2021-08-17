import React from "react";
import Link from "next/link";
import ImageGallery from "@components/ImageGallery";
import Footer from "@components/footer";
import Layout from "@components/layout";

const Employment = () => {
  return (
    <Layout
      pageTitle="Northern Trade Solutions"
      pageDescription="Northern Trade Solutions (NTS) has been providing the Northern
            Territory building industry with a comprehensive range of
            building and fit out services since 2010. "
      keyWords="nt building construction"
    >
      <div>
        <section
          className="jumbotron breadcumb"
          style={{ backgroundImage: `url(${"/images/banners/highriseBanner.png"})` }}
        >
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
        <section className="container-fluid black">
          <div className="row m-10-hor">
            <div className="col-md-5">
              <div className="heading">
                Perfection<span className="br"></span> concept
                <span className="br"></span> Design
              </div>
            </div>

            <div className="col-md-7">
              <div className="content">
                The Northern Trade Solutions (NTS) philosophy “empowering
                people” is at the forefront of our recruitment. We endeavour to
                work with passionate, dedicated and reliable professionals to
                ensure the Territory building and construction industry has
                access to high quality workmanship and services.
              </div>
              <div className="content">
                NTS is constantly on the lookout for experienced and passionate
                employees to join our team. We seek employees who value:
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid employment">
          <div className="row">
            <div className="col-md-3">
              <img
                src="/images/employment/engineer.png"
                width="40%"
                alt="img"
              />
              <br></br>
              <br></br>
              <h2>CUSTOMER SERVICE</h2>
              We are dedicated to the Territory building industry and pride
              ourselves on a solid reputation for delivering timely and quality
              services to satisfy our client’s diverse needs. We pride ourselves
              on our repeat business and long-term client partnerships.
            </div>
            <div className="col-md-3">
              <img
                src="/images/employment/marketing.png"
                width="40%"
                alt="img"
              />
              <br></br>
              <br></br>
              <h2>CONTINUOUS IMPROVEMENT</h2>
              We value self improvement and business progression in everything
              that we do. NTS is proudly driven by a need to continuously
              improve in our services and our involvement in the community. We
              know that the more we improve, the more the Northern Territory
              building and construction industry improves.
            </div>
            <div className="col-md-3">
              <img
                src="/images/employment/linked-symbol.png"
                width="40%"
                alt="img"
              />
              <br></br>
              <br></br>
              <h2>CULTURAL DIVERSITY</h2>
              NTS is dedicated to bringing talented, hard working people from
              diverse backgrounds together. NTS values a culturally diverse
              workplace and is actively involved in Indigenous communities with
              a vibrant Indigenous employment program.
            </div>
            <div className="col-md-3">
              <img
                src="/images/employment/users-group.png"
                width="40%"
                alt="img"
              />
              <br></br>
              <br></br>
              <h2>TEAM WORK</h2>
              We believe in a satisfied and empowered workforce. NTS is focused
              on the wellbeing and happiness of our employees and put a strong
              focus on team work and a positive work environment for our staff.
            </div>
          </div>
        </section>
        <section className="container-fluid employment">
          <div className="row justify-content-md-center">
            <div className="col-md-4 ">
              <h2>POSITIONS AVAILABLE</h2>
              <ul>
                <li>Ceiling and Partition Framer</li>
                <li>Plasterboard Flusher</li>
                <li>Carpenter</li>
                <li>Welder</li>
                <li>Metal Fabricator</li>
                <li>Apprentice Carpenter</li>
                <li>Apprentice Metal Fabricator</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h2>APPLICANTS WILL HAVE</h2>
              <ul>
                <li>
                  A minimum of three years experience in the relevant field
                </li>
                <li>A hard working and reliable attitude towards work</li>
                <li>Strong communication skills and interpersonal skills</li>
                <li>Excellent time management skills</li>
                <li>A High level of attention to detail.</li>
                <li>No experience requirement for Apprentice Candiate</li>
              </ul>
            </div>
            <div className="m-4">
              Written applications, including an up-to-date resume and related
              accreditations and tickets should be emailed to
              <a href="mailto:jessie@ntsnt.com.au">jessie@ntsnt.com.au</a>
            </div>
          </div>
        </section>
        </div >

        <Footer />
      </div>
    </Layout>
  );
};

export default Employment;
