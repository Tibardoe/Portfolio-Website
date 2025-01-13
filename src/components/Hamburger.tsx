"use client";
import { useState } from "react";

type clickedd = {
  isClicked: string;
};

export default function Hamburger() {
  const [clicked, setClicked] = useState(false);
  function handleCLick() {
    setClicked((prevState) => !prevState);
  }
  return (
    <button
      type="button"
      className="bg-transparent w-10 h-8 flex flex-col relative cursor-pointer"
      onClick={handleCLick}
    >
      {clicked ? (
        <>
          <span className="h-1 w-full rounded-full bg-white absolute top-0 origin-top-right -rotate-45 transition duration-200" />
          <span className="h-1 w-full rounded-full bg-white absolute top-1/2 -translate-y-1/2 opacity-0 transition duration-200" />
          <span className="h-1 w-full rounded-full bg-white absolute bottom-0 origin-bottom-right rotate-45 transition duration-200" />
        </>
      ) : (
        <>
          <span className="h-1 w-full rounded-full bg-white absolute top-0 origin-top-right transition duration-200" />
          <span className="h-1 w-full rounded-full bg-white absolute top-1/2 -translate-y-1/2 transition duration-200" />
          <span className="h-1 w-full rounded-full bg-white absolute bottom-0 origin-bottom-right transition duration-200" />
        </>
      )}
    </button>
  );
}
