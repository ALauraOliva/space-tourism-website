"use client";

import { useState, useRef } from "react";
import data from "@/lib/data.json";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Technology() {
  const container = useRef<HTMLInputElement | null>(null);
  const { technology } = data;
  const [tech, setTech] = useState(technology[0]);
  const { contextSafe } = useGSAP({ scope: container });
  const changeTech = contextSafe(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const techSelected = technology.find(
        (filterTech) => filterTech.name === event.currentTarget.value
      );

      gsap.fromTo(
        "#gridTech>:not(h1, ul)",
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
            if (techSelected) {
              setTech(techSelected);
            }
            gsap.fromTo(
              "#gridTech>:not(h1, ul)",
              {
                delay: 0,
                x: -30,
                opacity: 0,
              },
              {
                x: 0,
                duration: 1.5,
                opacity: 1,
                ease: "slow",
              }
            );
          },
        }
      );
    }
  );

  useGSAP(
    () => {
      gsap.from("#gridTech", {
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
      className="bg-technology-bg-sm w-screen md:bg-technology-bg-md lg:bg-technology-bg-lg bg-cover min-h-screen bg-bottom"
    >
      <div
        id="gridTech"
        className="grid grid-cols-[fit-content] grid-rows-[fit-content] gap-4 w-screen pt-[14vh] lg:min-h-fit lg:w-[85vw] m-auto lg:pt-[20vh]"
      >
        <h1 className="col-start-1 col-span-2 title text-center md:text-left md:pl-10 lg:col-span-2">
          <span className="title-span">03</span>
          &nbsp;&nbsp;&nbsp;Space lunch 101
        </h1>

        <div className="col-start-1 col-span-2 row-start-2 lg:col-start-3 lg:row-start-1 lg:row-span-3 lg:col-span-1 lg:w-[33vw]">
          <Image
            src={`/assets/technology/image-${tech.name
              .replace(" ", "-")
              .toLowerCase()}-landscape.jpg`}
            alt={tech.name}
            width={200}
            height={200}
            className="w-full lg:hidden select-none" // Oculta la imagen en pantallas grandes (landscape)
          />

          <Image
            src={`/assets/technology/image-${tech.name
              .replace(" ", "-")
              .toLowerCase()}-portrait.jpg`}
            alt={tech.name}
            width={200}
            height={200}
            className="w-full hidden lg:block lg:w-auto lg:h-full select-none" // Oculta la imagen en pantallas pequeñas (portrait)
          />
        </div>

        <ul
          className="col-span-2 row-start-3 flex justify-center items-start gap-5 font-bellefair text-cream lg:col-start-1
        lg:row-start-2 lg:flex-col lg:pl-10 lg:col-span-1 lg:justify-between lg:text-2xl lg:mt-28 lg:h-[37vh]"
        >
          {technology.map((techList, index) => (
            <button
              key={index}
              value={techList.name}
              onClick={changeTech}
              className={`w-10 h-10 rounded-full my-5 border lg:my-0 lg:w-16 lg:h-16 ${
                techList.name === tech.name
                  ? "bg-cream text-blue"
                  : "bg-transparent border-trueGray-500 hover:border-cream"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </ul>

        <div className="col-span-2 text-cream lg:col-start-2 lg:row-start-2 lg:col-span-1 lg:ml-10 lg:mt-28">
          <h2 className="font-barlow text-xl text-center tracking-widest lg:text-start lg:text-2xl text-lightBlue">
            THE TERMINOLOGY ...
          </h2>
          <h3 className="font-bellefair text-3xl uppercase text-center py-5 lg:text-start lg:text-6xl md:text-4xl text-cream">
            {tech.name}
          </h3>
          <p className="text-center w-3/4 mx-auto leading-7 font-thin mb-4 md:w-1/2 lg:text-start lg:m-0 lg:w-3/4 lg:mb-0 text-lightBlue">
            {tech.description}
          </p>
        </div>
      </div>
    </main>
  );
}
