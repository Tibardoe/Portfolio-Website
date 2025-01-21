import HeaderBox from "@/components/HeaderBox";
import ProjectList from "@/utils/ProjectList";
import Image from "next/image";
import Link from "next/link";

export default function Project() {
  return (
    <>
      <section
        id="projects"
        className="flex-col space-y-10 items-center w-full mb-28 hidden xl:flex"
      >
        <HeaderBox>
          <h1>PROJECTS</h1>
        </HeaderBox>
        <ul className="w-3/5 flex justify-between gap-10">
          {ProjectList.map((project) => (
            <Link
              href="/"
              key={project.id}
              className="hover:scale-110 transition duration-300 w-3/5"
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
        <HeaderBox>
          <h1>PROJECTS</h1>
        </HeaderBox>
        <ul className="w-4/5 flex flex-col items-center gap-10">
          {ProjectList.map((project) => (
            <Link
              href="/"
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
        <HeaderBox>
          <h1>PROJECTS</h1>
        </HeaderBox>
        <ul className="w-4/5 flex flex-col items-center gap-10">
          {ProjectList.map((project) => (
            <Link
              href="/"
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
