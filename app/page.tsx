export default function Home() {
  return (
    <main
      className="absolute top-0 w-full min-h-[100vh] bg-hero-bg-sm bg-cover bg-center
      sm:bg-hero-bg-md lg:bg-hero-bg-lg flex flex-col justify-center items-center text-cream
      lg:flex-row gap-24 max-sm:pb-6"
    >
      <article
        className="w-[70vw] flex flex-col items-center mb-10 pt-[10vh] xl:w-[30vw] md:w-[40vw] lg:mb-0 lg:absolute
       lg:bottom-[15vh] lg:left-[5vw] lg:text-start lg:content-start"
      >
        <h1 className="font-bellefair tracking-wider text-8xl lg:text-9xl lg:w-full text-center max-sm:text-7xl lg:text-start">
          <span className="text-sm lg:text-2xl font-barlow font-extralight text-center max-sm:text-xs">
            SO, YOU WANT TO TRAVEL TO<br></br>
          </span>
          SPACE
        </h1>
        <p className="font-barlow font-extralight mt-10 tracking-wide lg:text-xl text-center lg:text-start line-clamp-6">
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind on the edge of it. Well sit back,
          and relax because we'll give you a truly out of this world experience!
        </p>
      </article>
      <button
        className="bg-cream text-black font-bellefair tracking-widest p-10 w-44 h-44 rounded-full text-xl lg:absolute
      lg:bottom-[15vh] lg:right-[15vw] lg:w-56 lg:h-56 lg:text-2xl  "
      >
        EXPLORE
      </button>
    </main>
  );
}
