"use client";

import { useState, useRef } from "react";
import data from "@/app/lib/data.json";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Crew() {
  const container = useRef<HTMLInputElement | null>(null); //GSAP
  const [initialAnimationDone, setInitialAnimationDone] = useState(false);
  const { crew } = data;
  const [member, setMember] = useState(crew[0]); //read the first default member data
  const { contextSafe } = useGSAP({ scope: container });
  const changeMember = contextSafe(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const memberSelected = crew.find(
        (filterMember) => filterMember.name === event.currentTarget.value
      );

      gsap.fromTo(
        "#gridCrew>:not(h1, ul)",
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
            if (memberSelected) {
              setMember(memberSelected);
            }
          },
        }
      );
    }
  );

  useGSAP(
    () => {
      gsap.from("#gridCrew", {
        delay: 0,
        duration: 2.5,
        opacity: 0,
        scale: 0.4,
        ease: "circ.inOut",
        onComplete: () => {
          setInitialAnimationDone(true);
        },
      });
    },
    { scope: container }
  );

  return (
    <main ref={container}>
      <div className="bg-crew-bg-sm w-screen md:bg-crew-bg-md lg:bg-crew-bg-lg bg-cover min-h-screen bg-bottom fixed"></div>
      <div
        id="gridCrew"
        className="grid grid-cols-2 grid-rows-[fit-content] gap-4 w-screen pt-[14vh] lg:min-h-screen lg:w-[85vw] m-auto lg:pt-[20vh]"
      >
        <h1 className="col-start-1 col-span-2 title text-center md:text-left md:pl-10 lg:col-span-1">
          <span className="title-span">02</span>
          &nbsp;&nbsp;&nbsp;Meet your crew
        </h1>

        <div className="col-start-1 col-span-2 row-start-2 md:row-start-4 lg:row-start-1 lg:row-span-3 lg:col-start-2 lg:col-span-1">
          <Image
            src={`/assets/crew/image-${member.name
              .replace(" ", "-")
              .toLowerCase()}.webp`}
            alt={member.name}
            width={200}
            height={200}
            priority
            className="lg:h-[80vh] lg:pt-11 md:h-[50vh] mx-auto w-auto select-none"
            onLoad={() => {
              if (initialAnimationDone) {
                gsap.fromTo(
                  "#gridCrew>:not(h1, ul)",
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
            }}
          ></Image>
          <div className="w-4/5 h-[0.5px] bg-trueGray-500 mx-auto rounded-sm lg:hidden"></div>
        </div>

        <ul className="col-span-2 row-start-3 flex justify-center items-start gap-5 lg:col-start-1 lg:col-span-1 lg:pl-10 lg:justify-start">
          {crew.map((memberList, index) => (
            <button
              key={index}
              value={memberList.name}
              className={`w-3 h-3 rounded-full my-5  ${
                memberList.name === member.name
                  ? "bg-cream"
                  : "bg-trueGray-500 hover:bg-warmGray-400"
              }`}
              onClick={changeMember}
            ></button>
          ))}
        </ul>

        <div className="col-span-2 text-cream md:row-start-2 lg:row-start-2 lg:col-start-1 lg:col-span-1 lg:pl-10 lg:mt-28 md:mt-8">
          <h2 className="text-trueGray-500 font-bellefair uppercase text-xl mx-auto text-center lg:text-start lg:text-4xl">
            {member.role}
          </h2>
          <h3 className="font-bellefair text-3xl text-cream uppercase text-center py-5 lg:text-start lg:text-6xl md:text-4xl">
            {member.name}
          </h3>
          <p className="text-center w-3/4 mx-auto leading-7 font-thin mb-4 md:w-1/2 lg:text-start lg:mx-0 lg:w-2/3 text-lightBlue">
            {member.bio}
          </p>
        </div>
      </div>
    </main>
  );
}
