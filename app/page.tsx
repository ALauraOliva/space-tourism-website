export default function Home() {
  return (
    <main
      className="absolute top-0 w-full h-full bg-hero-bg-sm bg-cover bg-center
      sm:bg-hero-bg-md lg:bg-hero-bg-lg flex flex-col justify-center items-center text-cream
      lg:flex-row"
    >
      <article className="w-[70vw] text-center mb-10 lg:w-[50vw] lg:mb-0">
        <h1 className="font-bellefair tracking-wider text-8xl">
          <span className="text-sm font-barlow font-extralight">
            SO, YOU WANT TO TRAVEL TO<br></br>
          </span>
          SPACE
        </h1>
        <p className="font-barlow font-extralight mt-10 tracking-wide">
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind on the edge of it. Well sit back,
          and relax because we'll give you a truly out of this world experience!
        </p>
      </article>
      <button className="bg-cream text-black font-bellefair tracking-widest p-10 w-44 h-44 rounded-full text-xl">
        EXPLORE
      </button>
    </main>
  );
}
