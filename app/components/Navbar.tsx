import { NavButton } from "./NavButton";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between max-w-full h-[15vh] max-sm:pr-7">
      <img src="/svg/logo.svg" alt="logo-navbar SVG" className="pl-7" />

      {/* Hamburguer Icon - Animation */}
      <button
        id="toggler"
        className="sm:hidden rounded-full w-14 h-14 backdrop-blur-sd hover:bg-cream hover:bg-opacity-15 relative
        flex flex-col items-center"
      >
        <div className="sm:hidden w-1/2 h-0.5 bg-white absolute top-[40%]"></div>
        <div className="sm:hidden w-1/2 h-0.5 bg-white absolute bottom-[40%]"></div>
      </button>
      {/* END Hamburguer Icon - Animation */}

      <div
        className="max-sm:hidden flex lg:h-3/4 justify-center gap-10 backdrop-blur-md lg:w-3/5 bg-opacity-15 bg-cream lg:relative lg:before:absolute
      lg:before:bg-gray lg:before:w-[33vw] lg:before:h-px lg:before:top-1/2 lg:before:-left-1/2 max-lg:before:hidden max-lg:h-full max-lg:w-4/5 "
      >
        <NavButton number={"00"} link={"HOME"} />
        <NavButton number={"01"} link={"DESTINATION"} />
        <NavButton number={"02"} link={"CREW"} />
        <NavButton number={"03"} link={"TECHNOLOGY"} />
      </div>
    </nav>
  );
}
