"use client";
import { NavButton } from "./NavButton";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import Link from "next/link";
import { MobileMenuButton } from "./MobileMenuButton";

export default function NavBar() {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const container = useRef<HTMLInputElement | null>(null);
  const { contextSafe } = useGSAP({ scope: container });
  const openNav: () => void = contextSafe(() => {
    const tl = gsap.timeline({
      defaults: {
        duration: 0.08,
      },
    });

    if (!navOpen) {
      tl.to("#lineTop", {
        y: 5,
      }).to(
        "#lineBottom",
        {
          y: -5,
        },
        0
      );

      setNavOpen(true);
    } else {
      tl.to("#lineTop", {
        y: 0,
      }).to(
        "#lineBottom",
        {
          y: 0,
        },
        0
      );
      setNavOpen(false);
    }
  });

  return (
    <nav
      className="flex items-center justify-between max-w-full h-[15vh] max-sm:pr-7"
      ref={container}
    >
      <img src="/svg/logo.svg" alt="logo-navbar SVG" className="pl-7 z-20" />
      {/* Mobile Menu */}
      <button
        id="toggler"
        onClick={openNav}
        value={navOpen.toString()}
        className="sm:hidden rounded-full w-14 h-14 backdrop-blur-sd transition-all hover:bg-cream hover:bg-opacity-15 relative
        duration-200 ease-in-out flex flex-col items-center group z-20"
      >
        <div
          id="lineTop"
          className="sm:hidden w-3/4 h-0.5 rounded-md bg-white absolute top-[40%] transition-all ease-in-out duration-200 group-hover:w-1/3"
        ></div>
        <div
          id="lineBottom"
          className="sm:hidden w-3/4 h-0.5 rounded-md bg-white absolute bottom-[40%] transition-all ease-in-out duration-200 group-hover:w-1/3"
        ></div>
      </button>

      {/* List of Links */}
      {navOpen && (
        <div
          id="mobileMenu"
          className="sm:hidden bg-opacity-15 bg-cream backdrop-blur-md w-screen h-screen absolute top-0 left- flex flex-col items-center
        justify-center"
        >
          <div className="flex flex-col items-start justify-center gap-9">
            <MobileMenuButton number={"00"} link={"home"} />
            <MobileMenuButton number={"01"} link={"destination"} />
            <MobileMenuButton number={"02"} link={"crew"} />
            <MobileMenuButton number={"03"} link={"technology"} />
          </div>
        </div>
      )}
      {/* END List of Links */}

      {/* END Mobile Menu */}

      <div
        className="max-sm:hidden flex lg:h-3/4 justify-center gap-10 backdrop-blur-md lg:w-3/5 bg-opacity-15 bg-cream lg:relative lg:before:absolute
      lg:before:bg-gray lg:before:w-[33vw] lg:before:h-px lg:before:top-1/2 lg:before:-left-1/2 max-lg:before:hidden max-lg:h-full max-lg:w-4/5 "
      >
        <NavButton number={"00"} link={"home"} />
        <NavButton number={"01"} link={"destination"} />
        <NavButton number={"02"} link={"crew"} />
        <NavButton number={"03"} link={"technology"} />
      </div>
    </nav>
  );
}
