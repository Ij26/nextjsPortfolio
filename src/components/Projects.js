import ProjectCard from "./ProjectCard";
import styles from "../styles/Projects.module.css";

const Projects = () => {
  const projectList = [
    {
      title: "GitHub Repository Tracker",
      description:
        "An Angular 14+ SPA designed to input a GitHub username and showcase the user’s public repositories, followd bt Tailwind CSS for styling and cached API",
      link: "https://repositorytracker.netlify.app/",
    },
    {
      title: "WeatherX",
      description:
        "Majorly uses veu.js along with other front-end technologies this application provides live weather forecast for all loaction followed by air quality, humidity and more",
      link: "https://ij26.github.io/weatherx.github.io/",
    },
    {
      title: "TeamLearners",
      description:
        "A Full-Stack website, with emphasis on Bootstrap and React.js while employing Node.js, Express.js and jQuery. It offers a diverse array for short term certification to users",
      link: "https://ij26.github.io/Teamlearner.github.io/",
    },
    {
      title: "Tour and Travels",
      description:
        "Frontend-based project with fundamental JavaScript codes to plan trips worldwide. It Boasts responsive design and features which allows users to gain travelling experience",
      link: "https://ij26.github.io/World.github.io/",
    },
    {
      title: "Puzzel Game",
      description:
        "Developed using HTML, CSS, and JavaScript focuses on completing a picture of a firefly by rearranging all the blocks, with the game tracking the number of moves made.",
      link: "https://ij26.github.io/puzz.github.io/",
    },
    {
      title: "CRM Portal",
      description:
        "A project for Chark Innovations is a portal developed with Next.js, React,js and Node.js, designed to offer a streamlined interface for users to organize their workflow effectively.",
      link: "https://github.com/Ij26/ChakrFE.github.io/tree/master/Chakr-FE-Intern-Assignment",
    },
    // Add more projects here
  ];

  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.projectGrid}>
        {projectList.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
