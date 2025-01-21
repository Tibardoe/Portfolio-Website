import Link from "next/link";

type navBarProp = {
  isVisible: boolean;
};

export default function NavBar({ isVisible }: navBarProp) {
  return (
    <>
      <nav className="text-white font-bold mt-28 p-4 align-middle hidden md:flex">
        <div className="p-2 gap-5 flex flex-wrap items-center">
          <Link className="hover:text-xl duration-300" href="#about">
            About Me
          </Link>
          <Link className="hover:text-xl duration-300" href="#projects">
            Projects
          </Link>
          <Link className="hover:text-xl duration-300" href="#skills">
            Skills
          </Link>
          <Link
            className="bg-white p-2 rounded-full text-black hover:text-white  hover:bg-transparent hover:border transition duration-300"
            href="#contact"
          >
            Contact Me
          </Link>
        </div>
      </nav>

      {/* On smaller screens */}

      <nav
        className={`text-white relative font-bold p-4 border-t-2 border-t-white justify-center transition duration-300 ease-in ${
          isVisible ? "opacity-100" : "opacity-0"
        } flex md:hidden`}
      >
        <div className="p-2 space-y-5 flex flex-col items-center">
          <Link className="hover:text-xl duration-300" href="#about">
            About Me
          </Link>
          <Link className="hover:text-xl duration-300" href="#projects">
            Projects
          </Link>
          <Link className="hover:text-xl duration-300" href="#skills">
            Skills
          </Link>
          <Link
            className="bg-white p-2 rounded-full text-black hover:text-white  hover:bg-transparent hover:border transition duration-300"
            href="#contact"
          >
            Contact Me
          </Link>
        </div>
      </nav>
    </>
  );
}
