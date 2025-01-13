import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="text-white font-bold mt-28 p-4 flex align-middle">
      <div className="p-2 space-x-5">
        <Link className="hover:text-xl duration-300" href="/about">
          About Me
        </Link>
        <Link className="hover:text-xl duration-300" href="/projects">
          Projects
        </Link>
        <Link className="hover:text-xl duration-300" href="/skills">
          Skills
        </Link>
        <Link
          className="bg-white p-2 rounded-full text-black hover:text-white  hover:bg-transparent hover:border transition duration-300"
          href="/contact"
        >
          Contact Me
        </Link>
      </div>
    </nav>
  );
}
