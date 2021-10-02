import React from "react";
import Link from "next/link";

const Footer = () => (
  <>
    <footer className="container-fluid">
      <div className="row m-10-hor">
        <div className="col-md-4">
          <div className="footer-col">
            <div className="heading">
              <h2 className="font-weight-bold ">Northern Trade Solutions</h2>
            </div>
            <div className="content">
              <p>
                Northern Trade Solutions (NTS) is a well-recognised provider of
                full project solutions, fit out solutions and building and
                construction services in the Northern Territory.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="footer-col">
            <div className="heading">Useful links</div>
            <div className="content">
              <Link href="/about">
                <div className="link">About</div>
              </Link>
              <Link href="/projects">
                <div className="link">Projects</div>
              </Link>
              <Link href="/services">
                <div className="link">Services</div>
              </Link>
              <Link href="/employment">
                <div className="link">Employment</div>
              </Link>
              <Link href="/contact">
                <div className="link">Contact us</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="footer-col">
            <div className="heading">Follow Us</div>
            <div className="content">
              <p>You can find our social media channels here:</p>
              <div className="socialicon">
                <span className="shine"></span>
                <a
                  href="https://www.facebook.com/northerntradesolutions/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-facebook-f"></i>
                </a>
              </div>
              <div className="socialicon">
                <span className="shine"></span>
                <a
                  href="https://www.linkedin.com/company/northern-trade-solutions"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
              {/* <div className="socialicon">
                <span className="shine"></span>
                <i className="fa  fa-instagram"></i>
              </div> */}
              <div className="list mt-2">
                <i className="fa fa-envelope-o"></i>
                <a
                  href="mailto:info@ntsnt.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  info@ntsnt.com.au
                </a>
              </div>
              <div className="list mt-2">
                <i className="fa fa-phone"></i> (08) 88 88 88 88
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="subfooter">
        <div className="row m-10-hor">
          <div className="col-md-6">
            <div className="content">
              © Copyright {new Date().getFullYear()} by Frank Espinoza. All
              rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  </>
);

export default Footer;
