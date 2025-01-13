import HeaderBox from "@/components/HeaderBox";
import NavBar from "@/components/NavBar";

export default function About() {
  return (
    <section className="flex flex-col items-center p-5 w-full space-y-10">
      <HeaderBox>
        <h1>ABOUT ME</h1>
      </HeaderBox>

      <div className="container w-3/5 space-y-5 text-center">
        <p>
          Hi, I’m Benjamin Tibardoe, a passionate Full Stack Developer
          specializing in building responsive, interactive web applications.
          With expertise in Next.js, React, Node.js, Express.js, PostgreSQL, and
          Tailwind CSS, I focus on creating user-centric, scalable solutions
          that solve real-world problems.I’m a self-taught developer with a
          background in Mechanical Engineering (HND). Outside of coding, I enjoy
          learning, reading, and traveling, which helps me stay curious and
          inspired. I’m excited about becoming an ML and AI expert, a tech lead,
          and combining tech with mechanical engineering to build innovative
          solutions. Let’s connect and create something amazing together!
        </p>
      </div>

      <div className="container grid grid-cols-2 w-4/5 gap-10">
        <div className="text-center mb-5">
          <h2 className="font-bold text-xl mb-5">DESIGN</h2>
          <p>
            I specialize in creating visually appealing and user-friendly
            designs using Figma. My design process involves understanding user
            needs and crafting intuitive interfaces that not only look great but
            also provide seamless user experiences. From wireframes and
            prototypes to final designs, I ensure each detail is aligned with
            the overall project goals.
          </p>
        </div>

        <div className="text-center mb-5">
          <h2 className="font-bold text-xl mb-5">DEVELOP</h2>
          <p>
            As a full stack developer, I build robust, scalable web applications
            with a strong focus on clean, efficient code. Using technologies
            like React, Next.js, Node.js, and Express.js, I create dynamic and
            responsive user interfaces and ensure smooth back-end functionality.
            I prioritize performance, security, and maintainability in every
            project to deliver high-quality solutions that meet both user needs
            and business objectives.
          </p>
        </div>

        <div className="text-center col-span-2 w-full mb-20">
          <h2 className="font-bold text-xl mb-5">MAINTENACE</h2>
          <p>
            Ongoing maintenance is key to ensuring that web applications remain
            efficient, secure, and up-to-date. I provide continuous monitoring,
            performance optimization, and regular updates to keep systems
            running smoothly. Whether it’s bug fixes, feature enhancements, or
            addressing user feedback, I ensure that the application stays
            reliable and scalable over time.
          </p>
        </div>
      </div>
    </section>
  );
}
