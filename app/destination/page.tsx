"use client";

import { useState } from "react";
import data from "@/lib/data.json";
import Image from "next/image";

export default function Destination() {
  const { destinations } = data;
  const [planet, setPlanet] = useState(destinations[0]); //read moon data first
  const changePlanet = (event: React.MouseEvent<HTMLButtonElement>) => {
    const planetSelected = destinations.find(
      (filterPlanet) => filterPlanet.name === event.target.value
    );
    if (planetSelected) {
      setPlanet(planetSelected);
    }
  };

  return (
    <main className="bg-destination-bg-sm w-screen min-h-screen bg-left-top sm:bg-destination-bg-md lg:bg-destination-bg-lg bg-cover">
      <div className="grid grid-cols-2 grid-rows-1 gap-4 w-screen pt-[14vh] lg:min-h-screen lg:pt-[20vh] sm:pt-[20vh] lg:w-[85vw] m-auto">
        <div className="h-fit col-span-2 title flex flex-col items-center justify-center gap-8 lg:col-span-1 lg:row-span-2">
          <h3 className="text-center sm:text-left w-full sm:pl-10">
            <span className="title-span">01</span>
            &nbsp;&nbsp;&nbsp;Pick your destination
          </h3>
          <Image
            src={`/assets/destination/image-${planet.name}.webp`}
            alt={planet.name}
            width={200}
            height={200}
            className="md:min-h-[60vh] md:w-auto md:pt-11"
          ></Image>
        </div>
        <div className=" lg:w-4/5 col-span-2 row-start-2 text-cream lg:col-span-1 lg:row-span-2 lg:col-start-2 flex flex-col items-center lg:pt-[10vh]">
          <ul className=" w-3/4 sm:w-1/2 lg:w-full  flex justify-between title lg:justify-start lg:gap-8">
            {destinations.map((destination, index) => (
              <button
                key={index}
                className="uppercase"
                value={destination.name}
                onClick={changePlanet}
              >
                {destination.name}
              </button>
            ))}
          </ul>
          <h4 className="lg:w-full font-bellefair uppercase text-7xl mt-5">
            {planet.name}
          </h4>
          <p className="text-center w-3/4 sm:w-1/2 lg:full mb-8 lg:text-start lg:self-start lg:w-full lg:pr-10">
            {planet.description}
          </p>
          <div className="lg:w-full w-3/4 sm:w-1/2 h-[1.5px] bg-cream"></div>
          <div className="lg:flex lg:self-start lg:gap-11">
            <div className="mt-8 title text-center lg:text-start">
              AVG. DISTANCE
              <br />
              <span className="font-bellefair uppercase text-4xl tracking-normal">
                {planet.distance}
              </span>
            </div>
            <div className="mt-8 title text-center mb-8 lg:text-start">
              EST. TRAVEL TIME
              <br />
              <span className="font-bellefair uppercase text-4xl tracking-normal">
                {planet.travel}
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
