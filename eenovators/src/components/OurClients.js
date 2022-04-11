import styles from "./OurClients.module.css";
import img1 from "../images/cc10.jpg";
import img2 from "../images/cc9.jpg";
import img3 from "../images/cc8.jpg";
import img4 from "../images/cc11.jpg";
import img5 from "../images/cc12.jpg";
import img6 from "../images/cc13.jpg";
import img7 from "../images/cc14.jpg";
import img8 from "../images/cc15.jpg";
import img9 from "../images/cc16.jpg";
import img10 from "../images/cc18.jpg";
import img11 from "../images/cc19.jpg";
import img12 from "../images/cc20.jpg";
import img13 from "../images/cc21.jpg";
import img14 from "../images/cc22.jpg";
import img15 from "../images/cc23.jpg";
import img16 from "../images/cc24.jpg";
import img17 from "../images/cc25.jpg";
import img18 from "../images/cc26.jpg";
import img19 from "../images/cc27.jpg";
import img20 from "../images/cc28.jpg";
import img21 from "../images/cc29.jpg";
import img22 from "../images/cc30.jpg";
import img23 from "../images/cc1.jpg";
import img24 from "../images/cc2.jpg";
import img25 from "../images/cc3.jpg";
import img26 from "../images/cc4.jpg";
import img27 from "../images/cc5.jpg";
import img28 from "../images/cc6.jpg";
import img29 from "../images/2.jpg";
import img30 from "../images/3.jpg";
import img31 from "../images/4.jpg";
import img32 from "../images/5.jpg";
import img33 from "../images/1-1.jpg";
import img34 from "../images/cc7.jpg";
import img35 from "../images/cc17.jpg";

import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const OurClients = () => {
  return (
    <>
      <p className={styles.OurClients_heading}>OUR CLIENTS</p>
      <p className={styles.OurClients_paragraph}>
        EENOVATORS IS PROUD TO HAVE PARTNERED WITH
      </p>

      <div className={styles.client_logos}>
        <img src={img1} alt="" className={styles.logos} />
        <img src={img2} alt="" className={styles.logos} />
        <img src={img3} alt="" className={styles.logos} />
        <img src={img4} alt="" className={styles.logos} />
        <img src={img5} alt="" className={styles.logos} />
        <img src={img6} alt="" className={styles.logos} />
        <img src={img7} alt="" className={styles.logos} />
        <img src={img8} alt="" className={styles.logos} />
        <img src={img9} alt="" className={styles.logos} />
        <img src={img10} alt="" className={styles.logos} />
        <img src={img11} alt="" className={styles.logos} />
        <img src={img12} alt="" className={styles.logos} />
        <img src={img13} alt="" className={styles.logos} />
        <img src={img14} alt="" className={styles.logos} />
        <img src={img15} alt="" className={styles.logos} />
        <img src={img16} alt="" className={styles.logos} />
        <img src={img17} alt="" className={styles.logos} />
        <img src={img18} alt="" className={styles.logos} />
        <img src={img19} alt="" className={styles.logos} />
        <img src={img20} alt="" className={styles.logos} />
        <img src={img21} alt="" className={styles.logos} />
        <img src={img22} alt="" className={styles.logos} />
        <img src={img23} alt="" className={styles.logos} />
        <img src={img24} alt="" className={styles.logos} />
        <img src={img25} alt="" className={styles.logos} />
        <img src={img26} alt="" className={styles.logos} />
        <img src={img27} alt="" className={styles.logos} />
        <img src={img28} alt="" className={styles.logos} />
        <img src={img29} alt="" className={styles.logos} />
        <img src={img30} alt="" className={styles.logos} />
        <img src={img31} alt="" className={styles.logos} />
        <img src={img32} alt="" className={styles.logos} />
        <img src={img33} alt="" className={styles.logos} />
        <img src={img34} alt="" className={styles.logos} />
        <img src={img35} alt="" className={styles.logos} />
      </div>

      <footer>
        <div className={styles.footer_div}>
          <p>&copy; Run Automations 2021. All Rights Reserved.</p>
          <p className={styles.footer_link}>Privacy Policy</p>
          <p>|</p>
          <p className={styles.footer_link}>Terms of Use</p>
        </div>
        <div className={styles.footer_icons}>
          <FaFacebookF className={styles.footer_icon} />
          <BsTwitter className={styles.footer_icon} />
        </div>
      </footer>
    </>
  );
};

export default OurClients;
