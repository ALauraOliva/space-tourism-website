"use client";
import { useRef, useState } from "react";
import { MobileMenuButton } from "./MobileMenuButton";
import { NavButton } from "./NavButton";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function NavBar() {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const container = useRef<HTMLInputElement | null>(null);
  const { contextSafe } = useGSAP({ scope: container });
  const openNav: () => void = contextSafe(() => {
    console.log("navOpen esta    ->", navOpen);
    const tl = gsap.timeline({
      defaults: {
        duration: 0.08,
      },
    });

    if (!navOpen) {
      tl.to("#lineTop", { y: 5 })
        .to("#lineBottom", { y: -5 }, 0)
        .to("#mobileMenu", {
          opacity: 1,
          display: "flex",
          ease: "power3.out",
          onComplete: () => {
            setNavOpen(true);
          },
        });
    } else {
      tl.to("#lineTop", { y: 0 })
        .to("#lineBottom", { y: 0 }, 0)
        .to("#mobileMenu", {
          opacity: 0, // Animación de salida
          duration: 0.2,
          display: "none",
          ease: "power3.out",
        });

      setNavOpen(false);
    }
  });
  console.log("navopen pas a ->>>" + navOpen);

  return (
    <nav
      className="flex items-center justify-between  w-full h-[15vh] fixed z-10"
      ref={container}
    >
      <img src="/svg/logo.svg" alt="logo-navbar SVG" className="pl-7 z-10" />
      {/* Mobile Menu */}
      <button
        id="toggler"
        onClick={openNav}
        value={navOpen.toString()}
        className="sm:hidden rounded-full w-14 h-14 backdrop-blur-sd transition-all hover:bg-cream hover:bg-opacity-15 relative
        duration-200 ease-in-out flex flex-col items-center group z-10 mr-7"
      >
        <div
          id="lineTop"
          className="w-3/4 h-0.5 rounded-md bg-white absolute top-[40%] transition-all ease-in-out duration-200 group-hover:w-1/3"
        ></div>
        <div
          id="lineBottom"
          className="w-3/4 h-0.5 rounded-md bg-white absolute bottom-[40%] transition-all ease-in-out duration-200 group-hover:w-1/3"
        ></div>
      </button>

      {/* List of Links */}

      <div
        id="mobileMenu"
        className="hidden bg-opacity-15 bg-cream backdrop-blur-md w-screen min-h-screen absolute top-0 left-0 flex-col items-center
        justify-center"
      >
        <div className="flex flex-col items-start justify-center gap-9">
          <MobileMenuButton number={"00"} link={"home"} />
          <MobileMenuButton number={"01"} link={"destination"} />
          <MobileMenuButton number={"02"} link={"crew"} />
          <MobileMenuButton number={"03"} link={"technology"} />
        </div>
      </div>

      {/* END List of Links */}

      {/* END Mobile Menu */}

      <div
        className="max-sm:hidden flex lg:h-3/4 justify-center gap-10 backdrop-blur-md lg:w-3/5 bg-opacity-15 bg-cream lg:relative lg:before:absolute
      lg:before:bg-gray lg:before:w-[33vw] lg:before:h-px lg:before:top-1/2 lg:before:-left-1/2 max-lg:before:hidden max-lg:h-full max-lg:w-4/5 pr-7"
      >
        <NavButton number={"00"} link={"home"} />
        <NavButton number={"01"} link={"destination"} />
        <NavButton number={"02"} link={"crew"} />
        <NavButton number={"03"} link={"technology"} />
      </div>
    </nav>
  );
}
