import React, { Component } from "react";
import Slider from "react-slick";

class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return <div {...props}></div>;
  }
}

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
            dots: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          },
        },
      ],
    };
    return (
      <>
        <section
          className="container-fluid  wraper-testimony"
          style={{ color:"#fff"}}
        >
          <div className="row m-10-hor">
            <div className="testimony">
              {/* <Slider {...settings}> */}
              <Slider>
                <CustomSlide className="itm" index={1}>
                  <div className="blockquote">
                    <div className="fa"></div>
                    <div className="conesti">
                      <p>Northern Trade Solutions, Your best solutions!!!!!</p>
                      <div className="bytesti">
                        William Wang
                      </div>
                    </div>
                  </div>
                </CustomSlide>
              </Slider>
            </div>
          </div>
        </section>
      </>
    );
  }
}
