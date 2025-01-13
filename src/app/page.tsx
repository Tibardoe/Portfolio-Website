import Hamburger from "@/components/Hamburger";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";
import About from "./about/page";
import Contact from "./contact/page";
import Project from "./projects/page";
import Skills from "./skills/page";

export default function Home() {
  function isClicked() {
    console.log("Humburger clicked");
  }
  return (
    <main className="mb-10 flex flex-col items-center">
      <section className="h-dvh relative w-full hidden lg:flex">
        {/* Left card */}
        <div className="bg-cream h-full flex justify-start absolute leftt">
          {/* Left inner content */}
          <div className="container h-4/5 flex flex-col justify-around space-y-10 ml-40">
            <div>logo</div>

            <div className="flex flex-col">
              <span className="text-lg font-bold mb-5">Hi, I am</span>
              <h1 className="font-bold text-5xl">Benjamin Tibardoe</h1>
              <p className="font-bold text-gray-600">A Full-Stack Developer</p>
            </div>

            <div className="flex space-x-3">
              <Link
                className="bg-buttonBg p-2 drop-shadow-lg rounded-full-2 relative hover:top-2 duration-300"
                href="https://x.com/Big_Tibardoe"
              >
                <Image
                  src="/assets/images/twitter.svg"
                  width={30}
                  height={30}
                  alt="Twitter"
                />
              </Link>

              <Link
                className="bg-buttonBg p-2 drop-shadow-lg rounded-full-2 relative hover:top-2 transition duration-300"
                href="https://github.com/dashboard"
              >
                <Image
                  src="/assets/images/github.svg"
                  width={30}
                  height={30}
                  alt="GitHub"
                />
              </Link>

              <Link
                className="bg-buttonBg p-2 drop-shadow-lg rounded-full-2 relative hover:top-2 transition duration-300"
                href="https://www.linkedin.com/in/tibardoe-benjamin"
              >
                <Image
                  className="rounded-full"
                  src="/assets/images/linkedin.svg"
                  width={30}
                  height={30}
                  alt="LinkedIn"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Card  bg-black  */}
        <div className="h-full absolute right-0 rightt flex flex-col justify-center">
          <NavBar />
        </div>
      </section>

      {/* On medium screens */}

      <section className="h-screen relative w-full hidden md:flex lg:hidden">
        {/* Left card */}
        <div className="bg-cream h-full flex justify-start absolute leftt">
          {/* Left inner content */}
          <div className="h-4/5 w-full flex flex-col justify-around items-start space-y-10 ml-10">
            <div>logo</div>

            <div className="flex flex-col">
              <span className="text-lg font-bold mb-3">Hi, I am</span>
              <h1 className="font-bold text-3xl">Benjamin Tibardoe</h1>
              <p className="font-bold text-gray-600">A Full-Stack Developer</p>
            </div>

            <div className="flex space-x-3">
              <Link
                className="bg-buttonBg p-2 drop-shadow-lg rounded-full-2 relative hover:top-2 duration-300"
                href="https://x.com/Big_Tibardoe"
              >
                <Image
                  src="/assets/images/twitter.svg"
                  width={30}
                  height={30}
                  alt="Twitter"
                />
              </Link>

              <Link
                className="bg-buttonBg p-2 drop-shadow-lg rounded-full-2 relative hover:top-2 transition duration-300"
                href="https://github.com/dashboard"
              >
                <Image
                  src="/assets/images/github.svg"
                  width={30}
                  height={30}
                  alt="GitHub"
                />
              </Link>

              <Link
                className="bg-buttonBg p-2 drop-shadow-lg rounded-full-2 relative hover:top-2 transition duration-300"
                href="https://www.linkedin.com/in/tibardoe-benjamin"
              >
                <Image
                  className="rounded-full"
                  src="/assets/images/linkedin.svg"
                  width={30}
                  height={30}
                  alt="LinkedIn"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Card  bg-black  */}
        <div className="h-full absolute right-0 rightt flex flex-col justify-center">
          <NavBar />
        </div>
      </section>

      {/* On smaller screens */}
      <section className="h-dvh relative w-full flex md:hidden">
        {/* Left card */}
        <div className="bg-black h-full w-full flex flex-col text-white">
          {/* top bar */}
          <div className="flex justify-between items-center w-full p-4">
            <div>logo</div>
            <Hamburger />
          </div>

          <NavBar />

          {/* bottom Card  bg-black  */}
          <div className="bg-slate-600 flex justify-around p-5 absolute bottom-0 w-full">
            <div className="flex flex-col text-white">
              <span className="text-base font-semibold mb-2">Hi, I am</span>
              <h1 className="font-bold text-3xl">Benjamin Tibardoe</h1>
              <p className="font-semibold text-white">A Full-Stack Developer</p>
            </div>

            <div className="flex flex-col space-y-3">
              <Link href="https://x.com/Big_Tibardoe">
                <Image
                  src="/assets/images/twitter.svg"
                  width={30}
                  height={30}
                  alt="Twitter"
                />
              </Link>

              <Link href="https://github.com/dashboard">
                <Image
                  src="/assets/images/github.svg"
                  width={30}
                  height={30}
                  alt="GitHub"
                />
              </Link>

              <Link href="https://www.linkedin.com/in/tibardoe-benjamin">
                <Image
                  className="rounded-full"
                  src="/assets/images/linkedin.svg"
                  width={30}
                  height={30}
                  alt="LinkedIn"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <About />

      <Image
        src="assets/images/separatorBlack.svg"
        alt="separator"
        width={100}
        height={70}
      />

      <Skills />

      <Image
        src="assets/images/separatorBlack.svg"
        alt="separator"
        width={100}
        height={70}
      />

      <Project />

      <Contact />
    </main>
  );
}
