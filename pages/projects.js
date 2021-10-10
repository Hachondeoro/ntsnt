import { request } from "@components/DatoCMS/datocms";
import Footer from "@components/footer";
import { FadeInImageGrid, FadeInRegular } from "@components/gsap/gsapComponents";
import Layout from "@components/layout";
import Link from "next/link";
import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import ReactMarkdown from "react-markdown";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Button, Card, CardTitle, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";

const Projects = () => {
  const contextResidential = require.context("public/residential", true, /.json$/);
  const residentialProjects = [];
  contextResidential.keys().forEach((key) => {
    const fileName = key.replace("./", "");
    const resource = require(`public/residential/${fileName}`);
    residentialProjects.push(JSON.parse(JSON.stringify(resource)));
  });

  const contextCommercial = require.context("public/commercial", true, /.json$/);
  const commercialProjects = [];
  contextCommercial.keys().forEach((key) => {
    const fileName = key.replace("./", "");
    const resource = require(`public/commercial/${fileName}`);
    commercialProjects.push(JSON.parse(JSON.stringify(resource)));
  });

  
  const [modal, setModal] = useState(false);
  const [residential, setResidential] = useState(0);
  const [commercial, setCommercial] = useState(0);

  const toggleResidential = (project) => {
    setResidential(project);
    setModal(!modal);
  };

  const toggleCommercial = (project) => {
    setCommercial(project);
    setModal(!modal);
  };
  const toggle = () => setModal(!modal);

  const residentialGallery = residentialProjects[residential].image.map((image) => ({
    original: image,
    thumbnail: image,
  }));
  const commercialGallery = commercialProjects[commercial].image.map((image) => ({
    original: image,
    thumbnail: image,
  }));

  return (
    <Layout
      pageTitle="Northern Trade Solutions"
      pageDescription="Northern Trade Solutions (NTS) has been providing the Northern
            Territory building industry with a comprehensive range of
            building and fit out services since 2010. "
      keyWords="nt building construction">
      <div>
        <section
          className="jumbotron breadcumb"
          style={{
            backgroundImage: `url(${"/images/banners/highriseBanner.png"})`,
          }}>
          <div className="mainbreadcumb">
            <div className="container-fluid">
              <div className="row m-10-hor">
                <div className="col-md-6">
                  <h1>PROJECTS</h1>
                </div>
                <div className="col-md-6">
                  <div className="list">
                    <Link className="link" href="/">
                      Home
                    </Link>
                    <span className="dash">/</span>
                    <span>Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid black">
          <div className="row m-10-hor">
            <div className="col-md-5">
              <FadeInRegular>
                <div className="heading" style={{ color: "black" }}>
                  Perfection in<span className="br"></span> Design
                </div>
              </FadeInRegular>
            </div>

            <div className="col-md-7">
              <p className="content">
                Northern Trade Solutions (NTS) is proud of the size and importance of projects we have been involved in
                since 2010. As a relatively young, but experienced company, we believe these projects are a reflection
                of our strong position in the building and construction industry and the need for quality building and
                fit out services in the Territory.
              </p>
            </div>
          </div>
        </section>
        <div>
          <Tabs className="reactTabs">
            <TabList className="tab" style={{ color: "black" }}>
              <Tab>COMMERCIAL</Tab>
              <Tab>RESIDENTIAL</Tab>
            </TabList>
            <TabPanel>
              <div>
                {/* The Modal residentialProjects[currentIndex] is a bit messy, but that's it */}
                <Modal isOpen={modal} toggle={toggle} className="parentCard markdown">
                  <ModalHeader toggle={toggle}>{commercialProjects[commercial].title}</ModalHeader>
                  <ModalBody>
                    <ImageGallery items={commercialGallery} />
                    <ReactMarkdown children={commercialProjects[commercial].projectDetails} />
                    <p>{commercialProjects[commercial].shortDescription}</p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                      Close
                    </Button>{" "}
                  </ModalFooter>
                </Modal>
              </div>
              <div className="projectCards col-12 mx-auto d-block p-0">
                <Row className="justify-content-center projectPadding">
                  {commercialProjects.map((item, index) => (
                    <FadeInImageGrid>
                      <div>
                        <Card>
                          <img height="200px" width="280px" src={item.image[0]} alt="Card image cap" />
                          <div className="special-card">
                            <CardTitle tag="h5" className="mb-0 heading-card">
                              <Button onClick={() => toggleCommercial(index)} className="special-button">
                                {item.title}
                              </Button>
                            </CardTitle>
                          </div>
                        </Card>
                      </div>
                    </FadeInImageGrid>
                  ))}
                </Row>
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                {/* The Modal residentialProjects[currentIndex] is a bit messy, but that's it */}
                <Modal isOpen={modal} toggle={toggle} className="parentCard markdown">
                  <ModalHeader toggle={toggle}>{residentialProjects[residential].title}</ModalHeader>
                  <ModalBody>
                    <ImageGallery items={residentialGallery} />
                    <ReactMarkdown children={residentialProjects[residential].projectDetails} />
                    <p>{residentialProjects[residential].shortDescription}</p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                      Close
                    </Button>{" "}
                  </ModalFooter>
                </Modal>
              </div>
              <div className="projectCards col-12 mx-auto d-block p-0">
                <Row className="justify-content-center projectPadding">
                  {residentialProjects.map((item, index) => (
                    <FadeInImageGrid>
                      <div>
                        <Card>
                          <img height="200px" width="280px" src={item.image[0]} alt="Card image cap" />

                          <div className="special-card">
                            <CardTitle tag="h5" className="mb-0 heading-card">
                              <Button onClick={() => toggleResidential(index)} className="special-button">
                                {item.title}
                              </Button>
                            </CardTitle>
                          </div>
                        </Card>
                      </div>
                    </FadeInImageGrid>
                  ))}
                </Row>
              </div>
            </TabPanel>
          </Tabs>
        </div>

        <Footer />
      </div>
    </Layout>
  );
};

export default Projects;
