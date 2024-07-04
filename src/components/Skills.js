import SkillCard from "./SkillCard";
import styles from "../styles/Skills.module.css";

const Skills = () => {
  const skillList = [
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Advanced" },
    { name: "JavaScript", level: "Advanced" },
    { name: "Bootstrap", level: "Advanced" },
    { name: "C/C++", level: "Advanced" },
    { name: "React.js", level: "Advanced" },
    { name: "Node.js", level: "Intermediate" },
    { name: "Express.js", level: "Intermediate" },
    { name: "Jquery", level: "Intermediate" },
    { name: "Python", level: "Intermediate" },
    { name: "Next.js", level: "Intermediate" },
    { name: "Angular", level: "Beginner" },
    { name: "Tailwind CSS", level: "Intermediate" },
    { name: "Redux", level: "Beginner" },
    { name: "MongoDB", level: "Beginner" },
    { name: "MySQL", level: "Intermediate" },

    // Add more skills here
  ];

  return (
    <section id="skills" className={styles.skills}>
      <h2>Skills</h2>
      <div className={styles.skillGrid}>
        {skillList.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
