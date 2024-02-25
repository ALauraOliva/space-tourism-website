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
    <main
      className="bg-destination-bg-sm w-screen min-h-screen bg-left-top sm:bg-destination-bg-md lg:bg-destination-bg-lg bg-cover
      flex justify-center items-center"
    >
      <div className="grid grid-cols-2 grid-rows-2 gap-4 w-[85vw]">
        <div className="col-span-2 title flex flex-col items-center">
          <h3 className="text-center">
            <span className="title-span">01</span>
            &nbsp;&nbsp;&nbsp;Pick your destination
          </h3>
          <Image
            src={`/assets/destination/image-${planet.name}.webp`}
            alt={planet.name}
            width={200}
            height={200}
          ></Image>
          <ul className="bg-red-200 flex justify-around w-full">
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
        </div>
        <div className="col-span-2 row-start-2 text-cream">
          <h4>{planet.name}</h4>
          <p>{planet.description}</p>
          <div>
            AVG. DISTANCE <span>{planet.distance}</span>
          </div>
          <div>
            EST. TRAVEL TIME <span>{planet.travel}</span>
          </div>
        </div>
      </div>
    </main>
  );
}
