"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Home() {
  const container = useRef<HTMLInputElement | null>(null);

  useGSAP(
    () => {
      gsap.set("#overlay div > h2, #overlay div > h3", {
        color: "#0B0D17",
      });

      gsap.from("#overlay div > h2, #overlay div > h3", {
        y: 200,
        delay: 0,
        ease: "power2.inOut",
        duration: 2,
        //skewY: 7,
      });

      gsap.to("#overlay div > h2, #overlay div > h3", {
        opacity: 0,
        y: -100,
        delay: 2,
        ease: "power2.inOut",
        duration: 1.5,
      });

      gsap.to("#overlay", {
        yPercent: -100,
        delay: 2,
        ease: "power2.inOut",
        duration: 1.8,
      });

      gsap.from("#text span, #text h1, #text p, #exploreBtn", {
        delay: 3.6,
        duration: 1,
        ease: "power2.inOut",
        opacity: 0,
        y: 20,
      });
    },
    { scope: container }
  );

  return (
    <main
      ref={container}
      className="max-w-screen min-h-screen bg-hero-bg-sm sm:bg-hero-bg-md lg:bg-hero-bg-lg bg-cover
      bg-center flex flex-col justify-center items-center text-cream lg:flex-row gap-24 relative"
    >
      <div
        id="overlay"
        className="absolute top-0 left-0 w-full h-screen bg-cream flex flex-col justify-center content-center z-10 text-cream"
      >
        <div className="text-center overflow-hidden">
          <h2 className="font-bellefair lg:text-7xl text-4xl ">
            DISCOVER <span className="italic">new</span>
          </h2>
        </div>
        <div className="text-center overflow-hidden ">
          <h3 className="font-bellefair lg:text-9xl text-6xl">WORLDS</h3>
        </div>
      </div>

      <article
        id="text"
        className="w-[70vw] flex flex-col items-center mb-10 pt-[10vh] xl:w-[30vw] md:w-[40vw] lg:mb-0 lg:absolute
       lg:bottom-[15vh] lg:left-[5vw] lg:text-start lg:content-start"
      >
        <h1 className="font-bellefair tracking-wider text-8xl lg:text-9xl lg:w-full text-center max-sm:text-7xl lg:text-start">
          <span className="text-sm lg:text-2xl font-barlow text-center max-sm:text-xs">
            SO, YOU WANT TO TRAVEL TO<br></br>
          </span>
          SPACE
        </h1>
        <p className="font-barlow mt-10 tracking-wide lg:text-xl text-center lg:text-start line-clamp-6">
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind on the edge of it. Well sit back,
          and relax because we'll give you a truly out of this world experience!
        </p>
      </article>
      <button
        id="exploreBtn"
        className="bg-cream text-black font-bellefair tracking-widest p-10 w-44 h-44 rounded-full text-xl lg:absolute
      lg:bottom-[15vh] lg:right-[15vw] lg:w-56 lg:h-56 lg:text-2xl m-3"
      >
        EXPLORE
      </button>
    </main>
  );
}
