import { Tween, Reveal, ScrollTrigger } from "react-gsap";

export const FadeInLeft = ({ children }) => (
  <Reveal repeat trigger={<div />}>
    <Tween
      from={{ opacity: 0, transform: "translate3d(-40vw, 0, 0)" }}
      ease="back.out(1.4)"
    >
      {children}
    </Tween>
  </Reveal>
);
export const FadeInRight = ({ children }) => (
  <Reveal repeat trigger={<div />}>
    <Tween
      from={{ opacity: 0, transform: "translate3d(+40vw, 0, 0)" }}
      ease="back.out(1.4)"
    >
      {children}
    </Tween>
  </Reveal>
);

export const FadeInRegular = ({ children }) => (
  <ScrollTrigger start="-250px center" end="200px center" scrub={0.5}>
    <Tween from={{ opacity: 0 }} duration={2}>
      {children}
    </Tween>
  </ScrollTrigger>
);
