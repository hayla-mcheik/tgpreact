import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const onMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    const text = textRef.current;

    const onMouseEnter = () => {
      gsap.to(cursor, { scale: 2, opacity: 1 });
      gsap.to(text, { opacity: 1 });
    };
    const onMouseLeave = () => {
      gsap.to(cursor, { scale: 1, opacity: 0 });
      gsap.to(text, { opacity: 0 });
    };
    const onMouseMove = () => {
      gsap.to(cursor, { x: position.x, y: position.y, duration: 0.1 });
    };

    const image = document.querySelector(".image");

    image.addEventListener("mouseenter", onMouseEnter);
    image.addEventListener("mouseleave", onMouseLeave);
    image.addEventListener("mousemove", onMouseMove);

    return () => {
      image.removeEventListener("mouseenter", onMouseEnter);
      image.removeEventListener("mouseleave", onMouseLeave);
      image.removeEventListener("mousemove", onMouseMove);
    };
  }, [position]);

  return (
    <div>
      <div className="cursor" ref={cursorRef}></div>
      <div className="text" ref={textRef}>
        Hover on image
      </div>
    </div>
  );
};

export default CustomCursor