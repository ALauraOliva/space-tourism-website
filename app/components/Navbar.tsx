import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between max-w-full max-lg:h-15vh h-15vh">
      <img src="/svg/logo.svg" alt="logo-navbar SVG" className="pl-7" />
      <div
        className="flex h-3/4 justify-center gap-10 backdrop-blur-md w-3/5 bg-opacity-15 bg-cream relative before:absolute before:bg-gray
        before:w-33vw before:h-px before:top-1/2 before:-left-1/2 max-lg:before:hidden max-lg:h-full max-lg:w-4/5 "
      >
        <Link
          href="/"
          className="text-cream font-barlow font-extralight flex items-center relative tracking-widest before:absolute
          before:w-full before:h-0.5 before:bottom-0 before:rounded-sm hover:before:bg-cream"
        >
          <span className="font-semibold">00&nbsp;&nbsp;</span>HOME
        </Link>

        <Link
          href="/"
          className="text-cream font-barlow font-extralight flex items-center relative tracking-widest before:absolute
          before:w-full before:h-0.5 before:bottom-0 before:rounded-sm hover:before:bg-cream"
        >
          <span className="font-semibold">01&nbsp;&nbsp;</span> DESTINATION
        </Link>

        <Link
          href="/"
          className="text-cream font-barlow font-extralight flex items-center relative tracking-widest before:absolute
          before:w-full before:h-0.5 before:bottom-0 before:rounded-sm hover:before:bg-cream"
        >
          <span className="font-semibold">02&nbsp;&nbsp;</span> CREW
        </Link>

        <Link
          href="/"
          className="text-cream font-barlow font-extralight flex items-center relative tracking-widest before:absolute
          before:w-full before:h-0.5 before:bottom-0 before:rounded-sm hover:before:bg-cream"
        >
          <span className="font-semibold">03&nbsp;&nbsp;</span> TECHNOLOGY
        </Link>
      </div>
    </nav>
  );
}
