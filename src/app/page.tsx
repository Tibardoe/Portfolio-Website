"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import About from "./about/page";
import Contact from "./contact/page";
import HomePage from "./home/page";
import Project from "./projects/page";
import Skills from "./skills/page";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

      {showButton && (
        <button
          onClick={scrollToTop}
          type="button"
          className="h-16 w-16 bg-black fixed bottom-5 right-5 rounded-full text-white text-5xl font-bold justify-center items-center hidden md:flex"
        >
          ↑
        </button>
      )}

      {showButton && (
        <button
          onClick={scrollToTop}
          type="button"
          className="h-12 w-12 bg-black fixed bottom-5 right-5 rounded-full text-white text-3xl font-bold justify-center items-center flex md:hidden"
        >
          ↑
        </button>
      )}
    </main>
  );
}
