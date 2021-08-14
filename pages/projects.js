import { request } from "@components/DatoCMS/datocms";
import Footer from "@components/footer";
import { FadeInImage, FadeInRegular } from "@components/gsap/gsapComponents";
import Layout from "@components/layout";
import Link from "next/link";
import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import ReactMarkdown from "react-markdown";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import {
  Button,
  Card,
  CardImg,
  CardTitle,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row
} from "reactstrap";

const MYQUERY = `query MyQuery {
  allProjects (first:40){
    title
    image {
      url
    }
    shortDescription
    projectDetails(markdown: false)
  }
  allProjectCommercials (first:40){
    title
    image {
      url
    }
    shortDescription
    projectDetails(markdown: false)
  }
}
`;

export async function getStaticProps() {
  const data = await request({
    query: MYQUERY,
  });
  return {
    props: { data },
    revalidate: 10,
  };
}

const Projects = ({ data }) => {
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

  const residentialGallery = data.allProjects[residential].image.map((v) => ({
    original: v.url,
    thumbnail: v.url,
  }));
  const commercialGallery = data.allProjectCommercials[commercial].image.map(
    (v) => ({
      original: v.url,
      thumbnail: v.url,
    })
  );

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
          style={{
            backgroundImage: `url(${"/images/banners/highriseBanner.png"})`,
          }}
        >
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
                <div className="heading">
                  Perfection in<span className="br"></span> Design
                </div>
              </FadeInRegular>
            </div>

            <div className="col-md-7">
              <div className="content">
                Northern Trade Solutions (NTS) is proud of the size and
                importance of projects we have been involved in since 2010. As a
                relatively young, but experienced company, we believe these
                projects are a reflection of our strong position in the building
                and construction industry and the need for quality building and
                fit out services in the Territory.
              </div>
            </div>
          </div>
        </section>
        <div>
          <Tabs className="reactTabs">
            <TabList className="tab">
              <Tab>COMMERCIAL</Tab>
              <Tab>RESIDENTIAL</Tab>
            </TabList>
            <TabPanel className="col-12 col-md-9 mx-auto d-block">
              <div>
                {/* The Modal data.allProjects[currentIndex] is a bit messy, but that's it */}
                <Modal
                  isOpen={modal}
                  toggle={toggle}
                  className="parentCard markdown"
                >
                  <ModalHeader toggle={toggle}>
                    {data.allProjectCommercials[commercial].title}
                  </ModalHeader>
                  <ModalBody>
                    <ImageGallery items={commercialGallery} />
                    <ReactMarkdown
                      children={
                        data.allProjectCommercials[commercial].projectDetails
                      }
                    />
                    <p>
                      {data.allProjectCommercials[commercial].shortDescription}
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                      Close
                    </Button>{" "}
                  </ModalFooter>
                </Modal>
              </div>
              <div>
                <section className="container-fluid black_more">
                  <div className="projectCards">
                    <Row>
                      {data.allProjectCommercials.map((item, index) => (
                        <Col className="ml-auto mr-auto text-center" md="6" lg="4" xl="3">
                          <FadeInImage>
                            <div>
                              <Card className="h-100">
                                <CardImg
                                  top
                                  width="100%"
                                  height="200px"
                                  src={item.image[0].url}
                                  alt="Card image cap"
                                />

                                <div className="special-card">
                                  <CardTitle
                                    tag="h5"
                                    className="mb-0 heading-card"
                                  >
                                    <Button
                                      onClick={() => toggleCommercial(index)}
                                      className="special-button"
                                    >
                                      {item.title}
                                    </Button>
                                  </CardTitle>
                                </div>
                              </Card>
                            </div>
                          </FadeInImage>
                        </Col>
                      ))}
                    </Row>
                  </div>
                </section>
              </div>
            </TabPanel>
            <TabPanel className="col-12 col-md-9 mx-auto d-block">
              <div>
                {/* The Modal data.allProjects[currentIndex] is a bit messy, but that's it */}
                <Modal
                  isOpen={modal}
                  toggle={toggle}
                  className="parentCard markdown"
                >
                  <ModalHeader toggle={toggle}>
                    {data.allProjects[residential].title}
                  </ModalHeader>
                  <ModalBody>
                    <ImageGallery items={residentialGallery} />
                    <ReactMarkdown
                      children={data.allProjects[residential].projectDetails}
                    />
                    <p>{data.allProjects[residential].shortDescription}</p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                      Close
                    </Button>{" "}
                  </ModalFooter>
                </Modal>
              </div>
              <div>
                <section className="container-fluid black_more">
                  <div className="projectCards">
                    <Row>
                      {data.allProjects.map((item, index) => (
                        <Col className="ml-auto mr-auto text-center" md="6" lg="4" xl="3">
                          <FadeInImage>
                            <div>
                              <Card className="h-100">
                                <CardImg
                                  top
                                  width="100%"
                                  height="200px"
                                  src={item.image[0].url}
                                  alt="Card image cap"
                                />

                                <div className="special-card">
                                  <CardTitle
                                    tag="h5"
                                    className="mb-0 heading-card"
                                  >
                                    <Button
                                      onClick={() => toggleResidential(index)}
                                      className="special-button"
                                    >
                                      {item.title}
                                    </Button>
                                  </CardTitle>
                                </div>
                              </Card>
                            </div>
                          </FadeInImage>
                        </Col>
                      ))}
                    </Row>
                  </div>
                </section>
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
