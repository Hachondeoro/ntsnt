import Link from "next/link";
import React from "react";
import Slider from "react-animated-slider";

const content = [
  {
    title: "Northern Trade Solutions",
    description: "Your best solutions",
    button: "More Detail",
    link: "/about",
    image: "./images/bannerInterior2.jpg",
  },
  {
    title: "Northern Trade Solutions",
    description: "Your best solutions",
    button: "More Detail",
    link: "/about",
    image: "./images/bannerConferenceroom.jpg",
  },
  {
    title: "Northern Trade Solutions",
    description: "Your best solutions",
    button: "More Detail",
    link: "/about",
    image: "./images/banner2Fancyhouse.jpg",
  },
];

const SliderHome = () => (
  <>
    <Slider className="slider-wrapper" autoplay={6000}>
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
          <div className="inner backgroundHome">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <Link href={item.link}>
              <button>
                <span className="shine"></span>
                <span>{item.button}</span>
              </button>
            </Link>
          </div>
        </div>
      ))}
    </Slider>
  </>
);

export default SliderHome;
