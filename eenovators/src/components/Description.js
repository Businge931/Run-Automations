import styles from "./Description.module.css";

const Description = (props) => {
  return (
    <div className={styles.description}>
      <div className={styles.icon}>{props.icon}</div>
      <h4>{props.title}</h4>
      <p>{props.paragraph}</p>
      {props.children}
      {/* <ul>
        <li>{props.list}</li>
      </ul> */}
    </div>
  );
};

export default Description;
