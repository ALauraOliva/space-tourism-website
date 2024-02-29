"use client";
import { useEffect, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    const cursor = document.getElementById("custom-cursor");
    const links = document.querySelectorAll("a");
    const cursorText = document.getElementById("text-cursor");

    const onMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      if (cursor) {
        gsap.to(cursor, { x: clientX, y: clientY });
      }
    };

    const onMouseEnterLink = (event: MouseEvent) => {
      const link = event.target;
      if (link) {
        gsap.to(cursor, { scale: 4 });
        if (cursorText) {
          cursorText.style.display = "block";
        }
      } else {
        gsap.to(cursor, { scale: 0 });
      }
    };

    const onMouseLeaveLink = () => {
      gsap.to(cursor, { scale: 1 });
      if (cursorText) {
        cursorText.style.display = "none";
      }
    };

    if (isWideScreen) {
      document.addEventListener("mousemove", onMouseMove);
      links.forEach((link) => {
        link.addEventListener("mouseenter", onMouseEnterLink);
        link.addEventListener("mouseleave", onMouseLeaveLink);
      });
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousemove", onMouseMove);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", onMouseEnterLink);
        link.removeEventListener("mouseleave", onMouseLeaveLink);
      });
    };
  }, [isWideScreen]);

  if (!isWideScreen) {
    return null; // No renderizar el cursor si la pantalla es demasiado estrecha
  }

  return (
    <div>
      <div
        id="custom-cursor"
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference p-3 flex justify-center items-center bg-white"
      >
        <span
          id="text-cursor"
          className="text-[5px] font-semibold hidden font-barlow"
        >
          GO
        </span>
      </div>
    </div>
  );
}
