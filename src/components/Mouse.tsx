"use client";
import { gsap } from "gsap";
import { useState } from "react";
import useMousePosition from "../hooks/useMousePosition";
import { useGSAP } from "@gsap/react";

const Mouse = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 300 : 10;

  useGSAP(() => {
    gsap.to(".mask", {
      WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
      WebkitMaskSize: `${size}px`,
      duration: 0.5,
      ease: "power4.out",
      delay: 0.2,
    });
  }, [x, y, isHovered]);

  return (
    <div className="main-section">
      <div className="mask">
        <p
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="font-bold text-4xl text-white text-center"
        >
          A visual designer - with skills that haven't been replaced by A.I
        </p>
      </div>
      <div className="body">
        <p className="font-bold text-4xl text-black text-center">
          A visual designer - with skills that haven't been replaced by A.I
        </p>
      </div>
    </div>
  );
};

export default Mouse;
