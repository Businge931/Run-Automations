import styles from "./OurModel.module.css";
import classes from "./Description.module.css";

import { BsHouseDoor } from "react-icons/bs";
import { IoMdCheckboxOutline } from "react-icons/io";
import { MdOutlineLibraryBooks } from "react-icons/md";

const OurModel = (props) => {
  return (
    <div className={styles.ourModel}>
      <p className={styles.ourModel_heading}>OUR MODEL</p>
      <p className={styles.ourModel_paragraph}>
        CLIENT FOCUSED AND SOLUTION ORIENTED
      </p>
      <div className={styles.ourModel_descriptions}>
        <div className={styles.ourModel__description}>
          <div className={styles.ourModel__top}>
            <BsHouseDoor className={styles.icon} />
            <h4>ENERGY PROJECTS</h4>
          </div>
          <ul>
            <li>
              <p>Eagles Energy Management Programme</p>
            </li>
            <li>
              <p>Energy Audits</p>
            </li>
            <li>
              <p>Enegy Efficiency Tools</p>
            </li>
            <li>
              <p>Solar PV Solutions</p>
            </li>
            <li>
              <p>Solar Hot Water Solutions</p>
            </li>
            <li>
              <p>Electricity Monitoring</p>
            </li>
            <li>
              <p>Water Monitoring</p>
            </li>
          </ul>
        </div>

        <div className={styles.ourModel__description}>
          <div className={styles.ourModel__top}>
            <IoMdCheckboxOutline className={styles.icon} />
            <h4>ENERGY TRAINING</h4>
          </div>
          <ul>
            <li>
              <p>Internationally Certified Energy Programmes</p>
            </li>
            <li>
              <p>Customized on site energy training</p>
            </li>
            <li>
              <p>Energy workshops and seminars</p>
            </li>
            <li>
              <p>Industry specific energy Programmes</p>
            </li>
            <li>
              <p>Corperate energy talks for leaders and staff</p>
            </li>
            <li>
              <p>Energy workshops and seminars</p>
            </li>
            <li>
              <p>Energy Awareness Programmes for Schools</p>
            </li>
          </ul>
        </div>

        <div className={styles.ourModel__description}>
          <div className={styles.ourModel__top}>
            <MdOutlineLibraryBooks className={styles.icon} />
            <h4>ENERGY CONSULTING</h4>
          </div>
          <ul>
            <li>
              <p>Energy Finance Consulting</p>
            </li>
            <li>
              <p>Enegy Resource Experts</p>
            </li>
            <li>
              <p>Energy Policy development</p>
            </li>
            <li>
              <p>Energy Research</p>
            </li>
            <li>
              <p>Energy Strategy Development</p>
            </li>
            <li>
              <p>Energy Knowledge Management</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurModel;
