import React from "react";
import emailjs from "emailjs-com";
import Link from "next/link";
import Footer from "@components/footer";
import Layout from "@components/layout";

const Contact = () => {
  function sendEmail(e) {
    const success = document.getElementById("success");
    const button = document.getElementById("buttonsent");
    const failed = document.getElementById("failed");
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_csfdEZiA",
        e.target,
        "user_zu7p2b3lDibMCDutH5hif"
      )
      .then(
        (result) => {
          console.log(result.text);
          success.classList.add("show");
          button.classList.add("show");
          failed.classList.remove("show");
        },
        (error) => {
          console.log(error.text);
          failed.classList.add("show");
        }
      );
  }

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
          style={{ backgroundImage: `url(${"/images/banners/banner3.jpg"})` }}
        >
          <div className="mainbreadcumb">
            <div className="container-fluid">
              <div className="row m-10-hor">
                <div className="col-md-6">
                  <h1>Contact</h1>
                </div>
                <div className="col-md-6">
                  <div className="list">
                    <Link className="link" href="/">
                      Home
                    </Link>
                    <span className="dash">/</span>
                    <span>Contact</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid black_more">
          <div className="row m-10-hor">
            <div className="col-md-6">
              <div className="text-side">
                <h2>Get in Touch</h2>
                <p>
                  Please contact NTS to discuss your project needs and how we
                  can work together to support the Northern Territory building &
                  construction industry.
                </p>

                <div className="address">
                  <div className="heading">Our Office</div>
                  <div className="list">
                    <i className="fa fa-map"></i>
                    15 Mel Rd, Berrimah NT 0828
                  </div>
                  <div className="list">
                    <i className="fa fa-map-marker"></i>
                    PO Box 39231 Winnellie NT 0821
                  </div>
                  <div className="list">
                    <i className="fa fa-envelope-o"></i>
                    <a
                      href="mailto:info@ntsnt.com.au"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      info@ntsnt.com.au
                    </a>
                  </div>
                  <div className="list">
                    <i className="fa fa-phone"></i>
                    (08) 88 88 88 88
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-side">
                <form className="formcontact" onSubmit={sendEmail}>
                  <label>Name</label>
                  <input type="text" name="user_name" required />
                  <label>Email</label>
                  <input type="email" name="user_email" required />
                  <label>Message</label>
                  <textarea name="message" required />
                  <div id="success" className="hide">
                    Your message has been sent...
                  </div>
                  <div id="failed" className="hide">
                    Message failed...
                  </div>
                  <button type="submit" id="buttonsent">
                    <span className="shine"></span>
                    <span>Send</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </Layout>
  );
};

export default Contact;
