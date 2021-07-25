import React, { useEffect, useState } from "react";
import Breakpoint, {
  BreakpointProvider,
  setDefaultBreakpoints,
} from "react-socks";
import Link from "next/link";
import { header } from "react-bootstrap";
import useOnclickOutside from "react-cool-onclickoutside";

setDefaultBreakpoints([{ xs: 0 }, { l: 1199 }, { xl: 1200 }]);

const Header = () => {
  const NavLink = (props) => (
    <Link
      {...props}
      getProps={({ isCurrent }) => {
        // the object returned here is passed to the
        // anchor element's props
        return {
          className: isCurrent ? "active" : "non-active",
        };
      }}
    />
  );

  const [openMenu, setOpenMenu] = React.useState(false);
  const [openMenu1, setOpenMenu1] = React.useState(false);
  const name = (params) => {};
  const handleBtnClick = () => {
    setOpenMenu(!openMenu);
  };
  const handleBtnClick1 = () => {
    setOpenMenu1(!openMenu1);
  };
  const closeMenu = () => {
    setOpenMenu(false);
  };
  const closeMenu1 = () => {
    setOpenMenu1(false);
  };
  const ref = useOnclickOutside(() => {
    closeMenu();
  });
  const ref1 = useOnclickOutside(() => {
    closeMenu1();
  });

  const [showmenu, btn_icon] = React.useState(false);

  useEffect(() => {
    const header = document.getElementById("myHeader");
    const totop = document.getElementById("scroll-to-top");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      btn_icon(false);
      if (window.pageYOffset > sticky + 300) {
        header.classList.add("sticky");
        totop.classList.add("show");
      } else {
        header.classList.remove("sticky");
        totop.classList.remove("show");
      }
      if (window.pageYOffset > sticky) {
        closeMenu();
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);
  return (
    <header id="myHeader" className="navbar">
      <div className="container-fluid">
        <div className="row m-2-hor w-100-nav">
          <div className="logo">
            <div className="navbar-title navbar-item">
              <NavLink href="/">
                <img
                  src="./images/footer-logo.png"
                  className="img-fluid"
                  alt="#"
                />
              </NavLink>
            </div>
          </div>

          <BreakpointProvider>
            <Breakpoint l down>
              {showmenu && (
                <div className="menu">
                  <div className="navbar-item">
                    <NavLink href="/" onClick={() => btn_icon(!showmenu)}>
                      Home
                    </NavLink>
                  </div>
                  <div className="navbar-item">
                    <NavLink href="/about" onClick={() => btn_icon(!showmenu)}>
                      About Us
                    </NavLink>
                  </div>
                  <div className="navbar-item">
                    <NavLink
                      href="/projects"
                      onClick={() => btn_icon(!showmenu)}
                    >
                      Projects
                    </NavLink>
                  </div>
                  <div className="navbar-item">
                    <NavLink href="/services" onClick={() => btn_icon(!showmenu)}>
                      Services
                    </NavLink>
                  </div>
                  {/* <div className="navbar-item">
                    <div ref={ref1}>
                      <div
                        className="dropdown-custom dropdown-toggle btn"
                        onClick={handleBtnClick1}
                      >
                        Service
                      </div>
                      {openMenu1 && (
                        <div className="item-dropdown">
                          <div className="dropdown" onClick={closeMenu1}>
                            <NavLink
                              to="/service"
                              onClick={() => btn_icon(!showmenu)}
                            >
                              Modern Design
                            </NavLink>
                            <NavLink
                              to="/service1"
                              onClick={() => btn_icon(!showmenu)}
                            >
                              Interior
                            </NavLink>
                            <NavLink
                              to="/service2"
                              onClick={() => btn_icon(!showmenu)}
                            >
                              Architecture
                            </NavLink>
                            <NavLink
                              to="/service3"
                              onClick={() => btn_icon(!showmenu)}
                            >
                              Exterior
                            </NavLink>
                          </div>
                        </div>
                      )}
                    </div>
                  </div> */}
                  <div className="navbar-item">
                    <NavLink
                      href="/employment"
                      onClick={() => btn_icon(!showmenu)}
                    >
                      Employment
                    </NavLink>
                  </div>
                  <div className="navbar-item">
                    <NavLink
                      href="/contact"
                      onClick={() => btn_icon(!showmenu)}
                    >
                      Contact
                    </NavLink>
                  </div>
                </div>
              )}
            </Breakpoint>

            <Breakpoint xl>
              <div className="menu">
                <div className="navbar-item">
                  <NavLink href="/">Home</NavLink>
                </div>
                <div className="navbar-item">
                  <NavLink href="/about">About Us</NavLink>
                </div>
                <div className="navbar-item">
                  <NavLink href="/projects">Projects</NavLink>
                </div>
                <div className="navbar-item">
                  <NavLink href="/services">Services</NavLink>
                </div>
                {/* <div className="navbar-item">
                  <div ref={ref1}>
                    <div
                      className="dropdown-custom dropdown-toggle btn"
                      onMouseEnter={handleBtnClick1}
                      onMouseLeave={closeMenu1}
                    >
                      Service
                      {openMenu1 && (
                        <div className="item-dropdown">
                          <div className="dropdown" onClick={closeMenu1}>
                            <NavLink href="/service">Modern Design</NavLink>
                            <NavLink href="/service1">Interior</NavLink>
                            <NavLink href="/service2">Architecture</NavLink>
                            <NavLink href="/service3">Exterior</NavLink>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div> */}
                <div className="navbar-item">
                  <NavLink href="/employment">Employment</NavLink>
                </div>
                <div className="navbar-item">
                  <NavLink href="/contact">Contact</NavLink>
                </div>
              </div>
            </Breakpoint>
          </BreakpointProvider>
        </div>

        <button className="nav-icon" onClick={() => btn_icon(!showmenu)}>
          <div className="menu-line white"></div>
          <div className="menu-line1 white"></div>
          <div className="menu-line2 white"></div>
        </button>
      </div>
    </header>
  );
};

export default Header;
