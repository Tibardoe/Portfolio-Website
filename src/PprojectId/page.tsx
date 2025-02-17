import ProjectList from "@/utils/ProjectList";
import Image from "next/image";
import Link from "next/link";

type ProjectIdProp = {
  id: number;
  click: (state: boolean) => void;
};

export default function ProjectId({ id, click }: ProjectIdProp) {
  return (
    <div className="fixed z-10 flex justify-center items-center top-0 left-0 w-full h-screen bg-black bg-opacity-30">
      <button onClick={() => click(false)} type="button">
        <Image
          src="/assets/images/close.svg"
          alt="Exit"
          width={25}
          height={25}
          className="absolute z-20 top-2 right-16"
        />
      </button>
      {ProjectList.map(
        (project) =>
          project.id === id && (
            <div
              key={project.id}
              className="w-11/12 h-5/6 text-white bg-slate-700 animate-popup overflow-y-auto"
            >
              <Image
                src={project.images[0]}
                alt="Project image"
                width={1500}
                height={0}
                className="w-full mb-3"
              />
              <div className="px-5 text-xl space-y-5">
                <h1 className="font-bold text-4xl mb-5">
                  {project.title} |{" "}
                  <Link
                    className="font-normal text-lg"
                    href={project.gitHubLink}
                  >
                    Github Link
                  </Link>
                </h1>
                <p>{project.projectDetails.fullDescription}</p>
                <ul className="space-y-2">
                  <h2 className="font-bold text-2xl">Features:</h2>
                  {project.projectDetails.features.map((feature) => (
                    <div className="pl-5" key={feature}>
                      <li className="list-disc marker:text-white">{feature}</li>
                    </div>
                  ))}
                </ul>
                <div className="py-5">
                  <h2 className="font-bold text-2xl mb-3">Images</h2>
                  <ul className="grid grid-cols-1 xl:grid-cols-4 place-items-center gap-5">
                    {project.images.map((image) => (
                      <div key={image}>
                        <Image
                          src={image}
                          alt="Image"
                          width={500}
                          height={100}
                          className="h-52 object-cover"
                        />
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ),
      )}
    </div>
  );
}
