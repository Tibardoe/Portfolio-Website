import Hamburger from "@/components/Hamburger";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";
import About from "./about/page";
import Contact from "./contact/page";
import HomePage from "./home/page";
import Project from "./projects/page";
import Skills from "./skills/page";

export default function Home() {
  return (
    <main className="mb-10 flex flex-col items-center">
      <HomePage />

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
