import Description from "./Description";
import styles from "./WhoWeAre.module.css";
import team from "../images/team2.jpg";
import { MdOutlineThumbUpAlt } from "react-icons/md";
import classes from "./Description.module.css";
import { TiLightbulb } from "react-icons/ti";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

import Quality from "../images/cards/QUALITY.png";
import flex from "../images/cards/flex.png";
import integrity from "../images/cards/integrity.png";
import partnerships from "../images/cards/PARTNERSHIPS.png";
import reliability from "../images/cards/RELIABILITY.png";
import diversity from "../images/cards/DIVERSITY.png";

const WhoWeAre = (props) => {
  return (
    <>
      <div className={styles.WhoWeAre}>
        <Description
          icon={<MdOutlineThumbUpAlt className={classes.icon} />}
          title="QUALITY"
          paragraph=" Our design processes have been developed on procedures that ensure quality is given at every step of development.It is more than a conversation of Quality."
          image={Quality}
          ishover={true}
        />
        <Description
          icon={<TiLightbulb className={classes.icon} />}
          title="PARTNERSHIPS"
          image={partnerships}
          paragraph="Over the years, we have valued the importance of our customers and though strong professional team we drive value per our customer. We believe in longterm Success of our customers so we remain strategic business partners in their journey."
        />
        <Description
          icon={<AiOutlineFundProjectionScreen className={classes.icon} />}
          title="FLEXIBILITY"
          image={flex}
          paragraph="Businesses have unique needs. Over the years we have tackled and remodelled designs when business demands change in a timely manner and we pride ourselves in ability to adopt and tackle challenges for mutual beneficial outcome."
        />
        <Description
          icon={<AiOutlineFundProjectionScreen className={classes.icon} />}
          title="RELIABILITY"
          image={reliability}
          paragraph="Our Busuness relies on us for quality accuracy and dedication."
        />
        <Description
          icon={<AiOutlineFundProjectionScreen className={classes.icon} />}
          title="INTEGRITY"
          image={integrity}
          paragraph="Run Automations ltd is built on fairness to achieve mutually beneficial outcomes."
        />
        <Description
          icon={<AiOutlineFundProjectionScreen className={classes.icon} />}
          title="VISION"
          image={diversity}
          paragraph="Focused on Advancing in Business Automation needs of today, anticipating the needs of tomorrow."
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
