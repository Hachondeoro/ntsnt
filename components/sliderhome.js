import { FadeInText } from "@components/gsap/gsapComponents";
import Link from "next/link";
import React from "react";
import Slider from "react-animated-slider";
import backgrounds from "public/content/backgrounds.json"

const SliderHome = () => (
  <>
    <Slider className="slider-wrapper" autoplay={6000} touchDisabled={true}>
      {backgrounds.images.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${item}') no-repeat center center` }}
        >
          <div className="inner backgroundHome">
            <FadeInText>
              <div className="fadeText">
                <h1>Northern Trade Solutions</h1>
                <p>Your best solutions</p>
                <Link href='/about'>
                  <button>
                    <span className="shine"></span>
                    <span>More Detail</span>
                  </button>
                </Link>
              </div>
            </FadeInText>
          </div>
        </div>
      ))}
    </Slider>
  </>
);

export default SliderHome;
