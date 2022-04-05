import Description from "./Description";
import styles from "./WhoWeAre.module.css";
import team from "../images/team2.jpg";
import { MdOutlineThumbUpAlt } from "react-icons/md";
import classes from "./Description.module.css";
import { TiLightbulb } from "react-icons/ti";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const WhoWeAre = (props) => {
  return (
    <>
      <div className={styles.WhoWeAre}>
        <Description
          icon={<MdOutlineThumbUpAlt className={classes.icon} />}
          title="EXPERINCE"
          paragraph=" Eenovators’ experience acquired working across several African countries, and gained over multi sector industries, has provided theexpertise to effectively deliver practical solutions across industry."
        />
        <Description
          icon={<TiLightbulb className={classes.icon} />}
          title="INNOVATION"
          paragraph="We offer energy consumers reliable opportunities to resolve their energy challenges, through energy conservation strategies that for sustainable outcomes."
        />
        <Description
          icon={<AiOutlineFundProjectionScreen className={classes.icon} />}
          title="EFFICIENCY"
          paragraph="Eenovators work through the ECS© model that is fashioned around the principles of maximizing operational efficiency, reducing energy costs, and enhancing the sustainability of energy solutions."
        />
      </div>

      <div>
        <p className={styles.promise_heading}>OUR PROMISE</p>
        <p className={styles.promise_paragraph}>
          ENERGY EFFICIENCY, ENERGY SAVINGS, AND ENERGY SUSTAINABILITY
        </p>
        <div className={styles.image}>
          <img src={team} className={styles.team} alt="Our team members" />
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
