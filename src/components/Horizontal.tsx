import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Horizontal = () => {
  const racesRef = useRef<HTMLDivElement>(null);
  const racesWrapperRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const races = racesRef.current;
    const racesWrapper = racesWrapperRef.current;

    if (!races || !racesWrapper) return;

    const getScrollAmount = (): number => {
      const racesWidth = races.scrollWidth;
      return -(racesWidth - window.innerWidth);
    };

    const tween = gsap.to(races, {
      x: getScrollAmount,
      duration: 3,
      ease: "none",
      scrollTrigger: {
        trigger: racesWrapper,
        start: "top 20%",
        end: () => `+=${getScrollAmount() * -1}`,
        scrub: 1,
        pin: true,
      },
    });

    // ScrollTrigger.create({
    //   trigger: racesWrapper,
    //   start: "top 20%",
    //   end: () => `+=${getScrollAmount() * -1}`,
    //   pin: true,
    //   //   animation: tween,
    //   scrub: 1,
    //   invalidateOnRefresh: true,
    //   markers: true,
    // });
  }, []);
  return (
    <div>
      <div className="h-screen bg-slate-500"></div>
      <div className="h-screen bg-slate-900 race-wrapper" ref={racesWrapperRef}>
        <div className="races" ref={racesRef}>
          <h2>Monaco</h2>
          <h2>Austria</h2>
          <h2>Hungary</h2>
          <h2>Netherlands</h2>
          <h2>Japan</h2>
        </div>
      </div>
      <div className="h-screen  bg-slate-500"></div>
    </div>
  );
};

export default Horizontal;
