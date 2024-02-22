import Link from "next/link";

type params = {
  number: string;
  link: string;
};

export const NavButton = ({ number, link }: params) => {
  return (
    <Link
      href={link === "home" ? "/" : `/${link}`}
      className=" group text-cream font-barlow font-extralight flex flex-col justify-center items-center relative tracking-widest before:absolute
          before:w-0 before:h-0.5 before:bottom-0 before:rounded-sm hover:before:bg-cream hover:before:w-full
          hover:before:transition-all hover:before:duration-500 before:transition-all before:duration-500"
    >
      <div className=" overflow-hidden relative">
        <div className="transition duration-500 ease-out group-hover:-translate-y-[120%] uppercase">
          <span className="font-semibold">{number}&nbsp;&nbsp;</span>
          {link}
        </div>
        <div
          className="absolute left-0 translate-y-[50%] rotate-12 transition duration-500 ease-out
            group-hover:-translate-y-[100%] group-hover:rotate-0 uppercase"
        >
          <span className="font-semibold">{number}&nbsp;&nbsp;</span>
          {link}
        </div>
      </div>
    </Link>
  );
};
