"use client";

import { useState, useRef } from "react";
import data from "@/lib/data.json";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Destination() {
  const container = useRef<HTMLInputElement | null>(null);
  const { destinations } = data;
  const [imageLoaded, setImageLoaded] = useState(false);
  const [planet, setPlanet] = useState(destinations[0]); //read moon data first
  const { contextSafe } = useGSAP({ scope: container });
  const changePlanet = contextSafe(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const planetSelected = destinations.find(
        (filterPlanet) => filterPlanet.name === event.currentTarget.value
      );

      gsap.fromTo(
        "#destinationTitles > img, #planetDesc>:not(ul)",
        {
          delay: 0,
          x: 0,
        },
        {
          x: 100,
          opacity: 0,
          duration: 1.2,
          ease: "circ.out",
          onComplete: () => {
            if (planetSelected) {
              setPlanet(planetSelected);
            }
            if (imageLoaded) {
              gsap.fromTo(
                "#destinationTitles > img , #planetDesc>:not(ul)",
                {
                  delay: 0,
                  x: -100,
                  opacity: 0,
                },
                {
                  x: 0,
                  duration: 1.5,
                  opacity: 1,
                  ease: "slow",
                }
              );
            }
          },
        }
      );
    }
  );

  useGSAP(
    () => {
      gsap.from("#destinationTitles, #planetDesc", {
        delay: 0,
        duration: 2.5,
        opacity: 0,
        scale: 0.4,
        ease: "circ.inOut",
      });
    },
    { scope: container }
  );

  return (
    <main
      ref={container}
      className="bg-destination-bg-sm w-screen min-h-screen bg-left-top md:bg-destination-bg-md lg:bg-destination-bg-lg bg-cover"
    >
      <div className="grid grid-cols-2 grid-rows-1 gap-4 w-screen pt-[14vh] lg:min-h-screen lg:pt-[20vh] lg:w-[85vw] m-auto">
        <div
          id="destinationTitles"
          className="h-fit col-span-2 title flex flex-col items-center justify-center gap-8 lg:col-span-1 lg:row-span-2"
        >
          <h1 className="text-center md:text-left w-full md:pl-10">
            <span className="title-span">01</span>
            &nbsp;&nbsp;&nbsp;Pick your destination
          </h1>
          <Image
            src={`/assets/destination/image-${planet.name.toLowerCase()}.webp`}
            alt={planet.name}
            width={200}
            height={200}
            className="lg:min-h-[60vh] md:w-auto md:pt-11 md:min-h-[40vh]"
            onLoadingComplete={() => setImageLoaded(true)}
          ></Image>
        </div>
        <div
          id="planetDesc"
          className="lg:w-4/5 col-span-2 row-start-2 text-lightBlue lg:col-span-1 lg:row-span-2 lg:col-start-2 flex flex-col items-center lg:pt-[8vh]"
        >
          <ul className="w-3/4 md:w-1/2 lg:w-full flex justify-around title lg:justify-start lg:gap-8 pt-7">
            {destinations.map((destination, index) => (
              <button
                key={index}
                value={destination.name}
                onClick={changePlanet}
              >
                <div
                  id="border"
                  className={`uppercase pb-2 border-b-[2.5px] tracking-widest text-xl ${
                    planet.name === destination.name
                      ? " border-cream text-cream"
                      : "border-transparent hover:opacity-60 text-lightBlue"
                  }`}
                >
                  {destination.name}
                </div>
              </button>
            ))}
          </ul>
          <h2 className="lg:w-full font-bellefair uppercase text-7xl mt-10 text-cream">
            {planet.name}
          </h2>
          <p className="text-center w-3/4 md:w-1/2 lg:full mb-8 lg:text-start lg:self-start lg:w-full lg:pr-10 leading-8 font-thin">
            {planet.description}
          </p>
          <div className="lg:w-full w-3/4 md:w-1/2 h-[0.5px] bg-cream"></div>
          <div className="md:flex lg:self-start md:gap-11">
            <div className="mt-8 title text-center lg:text-start flex flex-col text-lightBlue">
              AVG. DISTANCE
              <br />
              <span className="font-bellefair uppercase text-4xl tracking-normal pt-2 text-cream">
                {planet.distance}
              </span>
            </div>
            <div className="mt-8 title text-center lg:text-start flex flex-col mb-4 text-lightBlue">
              EST. TRAVEL TIME
              <br />
              <span className="font-bellefair uppercase text-4xl tracking-normal pt-2 text-cream">
                {planet.travel}
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
