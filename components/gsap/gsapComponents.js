import { Reveal, ScrollTrigger, Timeline, Tween } from "react-gsap";
import useWindowDimensions from "./useWindowDimensions";

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
  <ScrollTrigger start="-350px center" end="+=300" scrub={0.5}>
    <Tween from={{ opacity: 0 }} duration={2}>
      {children}
    </Tween>
  </ScrollTrigger>
);

export const FadeInImage = ({ children }) => (
  <ScrollTrigger start="-550px center" end="+=100" scrub={0.5}>
    <Tween from={{ opacity: 0, scale: 0 }} ease="expo.inout">
      {children}
    </Tween>
  </ScrollTrigger>
);

export const RepeatTilt = ({ children }) => (
  <Tween
    to={{ opacity: 0, repeat: -1, yoyo: true, repeatDelay: 0.5 }}
    duration={2}
  >
    {children}
  </Tween>
);
export const FadeInText = ({ children }) => (
  <Timeline target={children} repeat={-1}>
    {/* prettier-ignore */}
    <>
      <Tween from={{ opacity: 0,  scale:0.1}}/>
      <Tween to={{ opacity: 1, scale:1.0}} duration={4} ease="expo.out(1.2)"/>
      <Tween to={{ opacity: 0, scale:1.0}} duration={3}/>
    </>
  </Timeline>
);

export const BounceAround = ({ children }) => {
  var { height, width } = useWindowDimensions();
  var width = width * 0.6;
  return (
    <Timeline target={children} repeat={-1} yoyo="true">
      {/* prettier-ignore */}
      <>
        <Tween duration={0} to={{opacity:0.3 , filter: "invert(23%) sepia(90%) saturate(1378%) hue-rotate(192deg) brightness(99%) contrast(96%)" }}/>

        <Tween duration={3} to={{ x: `${width}px`,y: "200px"}} />
        <Tween duration={0} to={{filter:"invert(88%) sepia(3%) saturate(4267%) hue-rotate(168deg) brightness(107%) contrast(80%)"}} />

        <Tween duration={3} to={{ x: "0", y: "500px", rotation:"360deg"}} />
        <Tween duration={0} to={{ filter: "invert(23%) sepia(90%) saturate(1378%) hue-rotate(192deg) brightness(99%) contrast(96%)"}} />

        <Tween duration={3} to={{ x: `${width}px`, y: "700px", rotation:"360deg"}} />
        <Tween duration={0} to={{ filter: "invert(23%) sepia(90%) saturate(1378%) hue-rotate(192deg) brightness(99%) contrast(96%)" }} />

        <Tween duration={3} to={{ x: "0", y: "1000px", rotation:"360deg"}} />
        <Tween duration={0} to={{ filter: "invert(23%) sepia(90%) saturate(1378%) hue-rotate(192deg) brightness(99%) contrast(96%)" }} />

        <Tween duration={3} to={{ x: `${width}px`, y: "1300px" }} />
    </>
    </Timeline>
  );
};

export const BounceAround2 = ({ children }) => {
  var { height, width } = useWindowDimensions();
  var width = width * 0.6;
  return (
    <Timeline target={children} repeat={-1} yoyo="true">
      {/* prettier-ignore */}
      <>
        <Tween duration={0} to={{x: `${width}px`, opacity:0.3 ,}}/>
        <Tween duration={4} to={{ x: "0",y: "100px"}} />
        <Tween duration={2} to={{ x: `${width}px`, y: "300px"}} />
        <Tween duration={2} to={{ x: 0, y: "800px", rotation:"360deg"}} />
        <Tween duration={4} to={{ x: `${width}px`, y: "1200px"}} />
        <Tween duration={3} to={{ x: "0", y: "1600px", rotation:"360deg"}} />
    </>
    </Timeline>
  );
};
