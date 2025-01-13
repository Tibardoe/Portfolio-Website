import HeaderBox from "@/components/HeaderBox";
import Image from "next/image";

export default function Skills() {
  return (
    <>
      <section className="flex-col space-y-14 w-3/4 m-auto items-center hidden lg:flex">
        <HeaderBox>
          <h1>SKILLS</h1>
        </HeaderBox>
        <div className="container grid grid-cols-4 space-y-5">
          <h2 className="font-bold text-xl col-span-4">USING NOW:</h2>
          <div className="flex flex-col space-y-3 mt-5 items-center">
            <Image
              src="assets/images/html.svg"
              alt="HTML logo"
              height={80}
              width={80}
            />
            <p>HTML 5</p>
          </div>

          <div className="flex flex-col space-y-3 items-center">
            <Image
              src="assets/images/css.svg"
              alt="CSS logo"
              height={80}
              width={80}
            />
            <p>CSS 3</p>
          </div>

          <div className="flex flex-col space-y-3 items-center">
            <Image
              src="assets/images/bootstrap.svg"
              alt="Bootstrap logo"
              height={80}
              width={80}
            />
            <p>BOOTSTRAP</p>
          </div>

          <div className="flex flex-col space-y-3 items-center">
            <Image
              src="assets/images/javascript.svg"
              alt="JavaScript logo"
              height={80}
              width={80}
            />
            <p>JAVASCRIPT</p>
          </div>

          <div className="flex flex-col space-y-3 items-center">
            <Image
              src="assets/images/reactjs.svg"
              alt="React js logo"
              height={80}
              width={80}
            />
            <p>REACT JS</p>
          </div>

          <div className="flex flex-col space-y-3 items-center">
            <Image
              src="assets/images/nextjs.svg"
              alt="Next js logo"
              height={80}
              width={80}
            />
            <p>NEXT JS</p>
          </div>

          <div className="flex flex-col space-y-3 items-center">
            <Image
              src="assets/images/typescript.svg"
              alt="Typescript logo"
              height={80}
              width={80}
            />
            <p>TYPESCRIPT</p>
          </div>

          <div className="flex flex-col space-y-3 items-center">
            <Image
              src="assets/images/nodejs.svg"
              alt="Node js logo"
              height={80}
              width={80}
            />
            <p>NODE JS</p>
          </div>

          <div className="flex flex-col space-y-3 items-center">
            <Image
              src="assets/images/postgresql.svg"
              alt="PostgreSQL logo"
              height={80}
              width={80}
            />
            <p>POSTGRESQL</p>
          </div>

          <div className="flex flex-col space-y-3 items-center">
            <Image
              src="assets/images/mysql.svg"
              alt="MSQL logo"
              height={80}
              width={80}
            />
            <p>MYSQL</p>
          </div>

          <div className="flex flex-col space-y-3 items-center">
            <Image
              src="assets/images/tailwindcss.svg"
              alt="Tailwind CSS logo"
              height={80}
              width={80}
            />
            <p>TAILWIND CSS</p>
          </div>

          <div className="flex flex-col space-y-3 mt-5 items-center">
            <Image
              src="assets/images/git.svg"
              alt="Git logo"
              height={80}
              width={80}
            />
            <p>GIT</p>
          </div>

          <div className="flex flex-col space-y-3 mt-5 items-center">
            <Image
              src="assets/images/figma.svg"
              alt="Figma logo"
              height={80}
              width={80}
            />
            <p>FIGMA</p>
          </div>
        </div>

        {/* Other skills */}

        <div className="container grid grid-cols-4 space-y-5">
          <h2 className="font-bold text-xl col-span-4">OTHER SKILLS</h2>
          <div className="flex flex-col space-y-3 items-center">
            <Image
              src="assets/images/python.svg"
              alt="Python logo"
              height={80}
              width={80}
            />
            <p>Python</p>
          </div>
        </div>
      </section>

      {/* ON smaller screens */}

      <section className="flex-col space-y-14 w-3/4 text-sm m-auto items-center flex lg:hidden">
        <HeaderBox>
          <h1>SKILLS</h1>
        </HeaderBox>
        <div className="container grid grid-cols-3 space-y-5">
          <h2 className="font-bold text-lg col-span-3">USING NOW:</h2>
          <div className="flex flex-col space-y-3 mt-5 items-center">
            <Image
              src="assets/images/html.svg"
              alt="HTML logo"
              height={60}
              width={60}
            />
            <p>HTML 5</p>
          </div>

          <div className="flex flex-col space-y-3 items-center">
            <Image
              src="assets/images/css.svg"
              alt="CSS logo"
              height={60}
              width={60}
            />
            <p>CSS 3</p>
          </div>

          <div className="flex flex-col space-y-3 items-center">
            <Image
              src="assets/images/bootstrap.svg"
              alt="Bootstrap logo"
              height={60}
              width={60}
            />
            <p>BOOTSTRAP</p>
          </div>

          <div className="flex flex-col space-y-3 items-center">
            <Image
              src="assets/images/javascript.svg"
              alt="JavaScript logo"
              height={60}
              width={60}
            />
            <p>JAVASCRIPT</p>
          </div>

          <div className="flex flex-col space-y-3 items-center">
            <Image
              src="assets/images/reactjs.svg"
              alt="React js logo"
              height={60}
              width={60}
            />
            <p>REACT JS</p>
          </div>

          <div className="flex flex-col space-y-3 items-center">
            <Image
              src="assets/images/nextjs.svg"
              alt="Next js logo"
              height={60}
              width={60}
            />
            <p>NEXT JS</p>
          </div>

          <div className="flex flex-col space-y-3 items-center">
            <Image
              src="assets/images/typescript.svg"
              alt="Typescript logo"
              height={60}
              width={60}
            />
            <p>TYPESCRIPT</p>
          </div>

          <div className="flex flex-col space-y-3 items-center">
            <Image
              src="assets/images/nodejs.svg"
              alt="Node js logo"
              height={60}
              width={60}
            />
            <p>NODE JS</p>
          </div>

          <div className="flex flex-col space-y-3 items-center">
            <Image
              src="assets/images/postgresql.svg"
              alt="PostgreSQL logo"
              height={60}
              width={60}
            />
            <p>POSTGRESQL</p>
          </div>

          <div className="flex flex-col space-y-3 items-center">
            <Image
              src="assets/images/mysql.svg"
              alt="MSQL logo"
              height={60}
              width={60}
            />
            <p>MYSQL</p>
          </div>

          <div className="flex flex-col space-y-3 items-center">
            <Image
              src="assets/images/tailwindcss.svg"
              alt="Tailwind CSS logo"
              height={60}
              width={60}
            />
            <p>TAILWIND CSS</p>
          </div>

          <div className="flex flex-col space-y-3 mt-5 items-center">
            <Image
              src="assets/images/git.svg"
              alt="Git logo"
              height={60}
              width={60}
            />
            <p>GIT</p>
          </div>

          <div className="flex flex-col space-y-3 mt-5 items-center">
            <Image
              src="assets/images/figma.svg"
              alt="Figma logo"
              height={60}
              width={60}
            />
            <p>FIGMA</p>
          </div>
        </div>

        {/* Other skills */}

        <div className="container grid grid-cols-4 text-sm space-y-5">
          <h2 className="font-bold text-lg col-span-4">OTHER SKILLS</h2>
          <div className="flex flex-col space-y-3 items-center">
            <Image
              src="assets/images/python.svg"
              alt="Python logo"
              height={60}
              width={60}
            />
            <p>Python</p>
          </div>
        </div>
      </section>
    </>
  );
}
