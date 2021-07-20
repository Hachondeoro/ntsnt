import React from "react";

export default () => (
  <footer className="container-fluid black_more">
    <div className="bg-footer">
      <img src="./img/footer-img.jpg" alt="bg-footer" />
    </div>
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
          <div
            className="link-call"
            onClick={() => window.open("mailto:info@ntsnt.com.au", "_self")}
          >
            info@ntsnt.com.au
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="footer-col">
          <div className="heading">Useful links</div>
          <div className="content">
            <div className="link">About</div>
            <div className="link">Projects</div>
            <div className="link">Services</div>
            <div className="link">Employment</div>
            <div className="link">Contact us</div>
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
            <div className="socialicon">
              <span className="shine"></span>
              <i className="fa  fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="subfooter">
      <div className="row m-10-hor">
        <div className="col-md-6">
          <div className="content">
            © copyright {new Date().getFullYear()} by Frank Espinoza. All rights
            reserved.
          </div>
        </div>
      </div>
    </div>
  </footer>
);
