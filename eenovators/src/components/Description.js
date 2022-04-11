import styles from "./Description.module.css";

const Description = (props) => {
  const ishovered = "hover_description";
  return (
    <div className={styles.description}>
      <div className={`${styles.card__side} ${styles.quality_image__div}`}>
        <img src={props.image} className={styles.quality_image} alt="quality" />
        <div className={styles.quality_image__ontop_div}>
          <p>{props.icon}</p>
          <p>{props.title}</p>
        </div>
      </div>

      <div className={`${styles.card__side} ${styles.card_content}`}>
        <div className={styles.icon} ishovered={false}>
          {props.icon}
        </div>
        <h4>{props.title}</h4>
        <p>{props.paragraph}</p>

        {props.children}
      </div>
    </div>
  );
};

export default Description;
