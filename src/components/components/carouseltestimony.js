import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      <section
        className="container-fluid  wraper-testimony"
        style={{ backgroundImage: `url(${"./img/testimony.jpg"})` }}
      >
        <div className="row m-10-hor">
          <div className="testimony">
            <Slider {...settings}>
              <CustomSlide className="itm" index={1}>
                <div className="blockquote">
                  <div className="fa"></div>
                  <div className="conesti">
                    <p>
                      The best company in Darwin for building and construction.
                      Will definitely hire again
                    </p>
                    <div className="bytesti">
                      Darwin Constructors Association
                    </div>
                  </div>
                </div>
              </CustomSlide>
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}
