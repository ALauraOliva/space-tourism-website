"use client";

import { useState, useRef } from "react";
import data from "@/lib/data.json";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Crew() {
  const container = useRef<HTMLInputElement | null>(null);
  const { crew } = data;
  const [member, setMember] = useState(crew[0]); //read moon data first

  return (
    <main
      ref={container}
      className="bg-crew-bg-sm w-screen bg-center-bottom md:bg-crew-bg-md lg:bg-crew-bg-lg bg-cover min-h-screen"
    >
      <div className="grid grid-cols-2 grid-rows-[fit-content] gap-4 w-screen pt-[14vh] lg:min-h-screen md:pt-[20vh] lg:w-[85vw] m-auto">
        <h1 className="col-start-1 col-span-2 title text-center md:text-left md:pl-10 lg:col-span-1">
          <span className="title-span">02</span>
          &nbsp;&nbsp;&nbsp;Meet your crew
        </h1>

        <div className="col-start-1 col-span-2 row-start-2 md:row-start-3 lg:row-start-1 lg:row-span-3 lg:col-start-2 lg:col-span-1">
          <Image
            src={`/assets/crew/image-${member.name
              .replace(" ", "-")
              .toLowerCase()}.webp`}
            alt={member.name}
            width={200}
            height={200}
            className="lg:min-h-[80vh] lg:pt-11 md:min-h-[50vh] mx-auto w-auto"
          ></Image>
          <div className="w-full h-[1px]"></div>
        </div>

        <div className="col-span-2 text-cream md:row-start-2 lg:row-start-2 lg:col-start-1 lg:col-span-1 lg:pl-10 lg:mt-28 md:mt-8">
          <h2 className="text-trueGray-500 font-bellefair uppercase text-xl mx-auto text-center lg:text-start lg:text-4xl">
            {member.role}
          </h2>
          <h3 className="font-bellefair text-3xl text-cream uppercase text-center py-5 lg:text-start lg:text-6xl md:text-4xl">
            {member.name}
          </h3>
          <p className="text-center w-3/4 mx-auto leading-7 font-thin mb-4 md:w-1/2 lg:text-start lg:mx-0 lg:w-2/3">
            {member.bio}
          </p>
        </div>
      </div>
    </main>
  );
}
