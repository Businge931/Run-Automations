import logo from "../images/logo1.jpeg";
import styles from "./Header.module.css";
// import solarpannels from "../images/image_17095_full.jpg";

const Header = () => {
  return (
    <div className={styles.header}>
      <img
        src={logo}
        alt="light logo"
        // width="189"
        // height="31"
        className={styles.header_logo}
      />
      <div className={styles.header_links}>
        <p>Home</p>
        <p>Energy Solutions</p>
        <p>Energy Portal</p>
        <p>ESCO</p>
        <p>Training</p>
        <p>WED</p>
        <p>Shop</p>
        <p>Blog</p>
        <p>Contact us</p>
      </div>
    </div>
  );
};

export default Header;
