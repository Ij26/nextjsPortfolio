import styles from "../styles/SkillCard.module.css";

const SkillCard = ({ skill }) => {
  return (
    <div className={styles.card}>
      <h3>{skill.name}</h3>
      <p>{skill.level}</p>
    </div>
  );
};

export default SkillCard;
