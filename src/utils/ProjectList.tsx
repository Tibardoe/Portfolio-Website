import Image from "next/image";

const ProjectList = [
  {
    id: 1,
    title: "Blogging Platform",
    gitHubLink: "https://github.com/Tibardoe/Full-Stack-Blogging-Platform",
    description:
      "Freedom Blog Platform is a full-stack web application that allows users to register, log in, and create, edit, and delete blog posts. It also supports Google authentication and user profile management.",
    techStack: [
      {
        image: (
          <Image
            src="assets/images/nodejs.svg"
            alt="Node js"
            width={20}
            height={20}
          />
        ),
        name: "Node js",
      },
      {
        image: (
          <Image
            src="assets/images/postgresql.svg"
            alt="PostgreSQL"
            width={20}
            height={20}
          />
        ),
        name: "PostgreSQL",
      },
      {
        image: (
          <Image
            src="assets/images/reactjs.svg"
            alt="React js"
            width={20}
            height={20}
          />
        ),
        name: "React js",
      },
    ],
    projectDetails: {
      fullDescription:
        "Freedom Blog Platform is a full-stack web application that allows users to register, log in, and create, edit, and delete blog posts. It also supports Google authentication and user profile management.",
      features: [
        "Local authentication with username and password.",
        "Google OAuth 2.0 integration for seamless login.",
        "Persistent user sessions using express-session and PostgreSQL.",
      ],
    },
    images: [
      "/assets/images/home.png",
      "/assets/images/login.png",
      "/assets/images/signup.png",
      "/assets/images/blogs.png",
      "/assets/images/blogs 2.png",
      "/assets/images/edit.png",
      "/assets/images/user page.png",
    ],
  },

  {
    id: 2,
    title: "User Management System",
    gitHubLink: "https://github.com/Tibardoe/User-Management-System",
    description:
      "A basic User Management System App, which is used to track users and edit their profile. As part of my journey to build full stack web apps, I decided to build this basic app.",
    techStack: [
      {
        image: (
          <Image
            src="assets/images/nodejs.svg"
            alt="Node js"
            width={20}
            height={20}
          />
        ),
        name: "Node js",
      },
      {
        image: (
          <Image
            src="assets/images/postgresql.svg"
            alt="PostgreSQL"
            width={20}
            height={20}
          />
        ),
        name: "PostgreSQL",
      },
      {
        image: (
          <Image
            src="assets/images/javascript.svg"
            alt="JavaScript"
            width={20}
            height={20}
          />
        ),
        name: "JavaScript",
      },
    ],
    projectDetails: {
      fullDescription:
        "A basic User Management System App, which is used to track users and edit their profile. As part of my journey to build full stack web apps, I decided to build this basic app.",
      features: [
        "User tracking",
        "Profile update",
        "User authentication",
        "Responsive design",
      ],
    },
    images: [
      "/assets/images/Screenshot 2024-11-29 085753.png",
      "/assets/images/Screenshot 2024-11-29 085808.png",
      "/assets/images/Screenshot 2024-11-29 091517.png",
      "/assets/images/Screenshot 2024-11-29 091625.png",
    ],
  },
];

export default ProjectList;
