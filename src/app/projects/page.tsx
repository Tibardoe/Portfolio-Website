"use client";

import HeaderBox from "@/components/HeaderBox";
import ProjectList from "@/utils/ProjectList";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ProjectId from "./[projectId]/page";

export default function Project() {
  const [clicked, setClicked] = useState(false);
  const [id, setId] = useState(Number);

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: number,
  ) => {
    event.preventDefault();
    setClicked((prevState) => !prevState);
    setId(id);
  };

  const handleClose = (state: boolean) => {
    setClicked(state);
  };

  return (
    <>
      <section
        id="projects"
        className="relative flex-col p-5 space-y-10 mb-16 items-center h-screen w-full hidden xl:flex"
      >
        {clicked && <ProjectId id={id} click={handleClose} />}
        <HeaderBox>
          <h1>PROJECTS</h1>
        </HeaderBox>
        <ul className="grid grid-cols-2 justify-between w-3/4 p-10 gap-10 overflow-x-auto shadow-lg">
          {ProjectList.map((project) => (
            <Link
              onClick={(event) => handleClick(event, project.id)}
              href={`/"projects"/${project.id}`}
              key={project.id}
              className="hover:scale-110 transition duration-300"
            >
              <li className="bg-slate-700 text-white rounded-2xl h-full">
                <Image
                  className="w-full rounded-t-2xl"
                  src={project.images[0]}
                  alt={project.title}
                  width={500}
                  height={3}
                />
                <h1 className="p-5 font-bold text-xl">{project.title}</h1>
                <p className="p-5">{project.description}</p>
                <ul className="flex flex-wrap gap-5 p-5">
                  {project.techStack.map((stack) => (
                    <li
                      key={stack.name}
                      className="flex gap-5 p-2 bg-slate-500 justify-center rounded-lg"
                    >
                      <div className="flex gap-1 align-middle items-center text-sm">
                        {stack.image}
                        {stack.name}
                      </div>
                    </li>
                  ))}
                </ul>
              </li>
            </Link>
          ))}
        </ul>
      </section>

      {/* On medium screens */}

      <section
        id="projects"
        className="flex-col space-y-10 items-center w-full mb-28 hidden lg:flex xl:hidden"
      >
        {clicked && <ProjectId id={id} click={handleClose} />}
        <HeaderBox>
          <h1>PROJECTS</h1>
        </HeaderBox>
        <ul className="w-4/5 flex flex-col items-center gap-10">
          {ProjectList.map((project) => (
            <Link
              href="#"
              onClick={(event) => handleClick(event, project.id)}
              key={project.id}
              className="hover:scale-110 transition duration-300 w-4/5"
            >
              <li className="bg-slate-700 text-white rounded-2xl h-full">
                <Image
                  className="w-full rounded-t-2xl"
                  src={project.images[0]}
                  alt={project.title}
                  width={500}
                  height={3}
                />
                <h1 className="p-5 font-bold text-lg">{project.title}</h1>
                <p className="px-5 text-sm text-justify">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-5 p-5">
                  {project.techStack.map((stack) => (
                    <li
                      key={stack.name}
                      className="flex gap-5 p-2 bg-slate-500 justify-center rounded-lg"
                    >
                      <div className="flex gap-1 align-middle items-center text-sm">
                        {stack.image}
                        {stack.name}
                      </div>
                    </li>
                  ))}
                </ul>
              </li>
            </Link>
          ))}
        </ul>
      </section>

      {/* on smaller screens */}

      <section className="flex-col space-y-10 items-center w-full mb-28 flex lg:hidden">
        {clicked && <ProjectId id={id} click={handleClose} />}
        <HeaderBox>
          <h1>PROJECTS</h1>
        </HeaderBox>
        <ul className="w-4/5 flex flex-col items-center gap-10">
          {ProjectList.map((project) => (
            <Link
              href="#"
              onClick={(event) => handleClick(event, project.id)}
              key={project.id}
              className="hover:scale-110 transition duration-300 w-4/5"
            >
              <li className="bg-slate-700 text-white rounded-2xl h-full">
                <Image
                  className="w-full rounded-t-2xl"
                  src={project.images[0]}
                  alt={project.title}
                  width={500}
                  height={3}
                />
                <h1 className="p-5 font-bold text-lg">{project.title}</h1>
                <p className="px-5 text-sm text-justify">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-5 p-5">
                  {project.techStack.map((stack) => (
                    <li
                      key={stack.name}
                      className="flex gap-5 p-2 bg-slate-500 justify-center rounded-lg"
                    >
                      <div className="flex gap-1 align-middle items-center text-sm">
                        {stack.image}
                        {stack.name}
                      </div>
                    </li>
                  ))}
                </ul>
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </>
  );
}
