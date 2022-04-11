import styles from "./Testimonials.module.css";

const Testimaonials = () => {
  return (
    <>
      <p className={styles.testimonial_heading}>CLIENT TESTIMONIALS</p>
      <div className={styles.testimanials}>
        <div className={styles.testimanials_divs}>
          <h4>Amon Mwetegyerize - Manager Panda Auto Garage</h4>
          <p>
            The GPS trackers designed and installed by Run Automations are easy
            to install and come along with a mobile app that is very user
            friendly. This has increased number of customers for my business and
            increased my annual income.
          </p>
        </div>

        <div className={styles.testimanials_divs}>
          <h4>Dr. Robert Ssekitoleko - HOD Biomedical Enginnering MUK</h4>
          <p>
            It is a strong work force that has equiped our biomedical
            engineering students with certified training in fundamentals of
            embedded systems design and trouble shooting of medical equipment.
          </p>
        </div>
        <div className={styles.testimanials_divs}>
          <h4>Mr. Munya - Manager Chicken Xpress Naalya</h4>
          <p>
            The team installed a state of the art intercom system coupled with
            sensor technology for customer vehicle detection and this has
            greatly increased our sales ever since the deployment of the
            project.
          </p>
        </div>
        <div className={styles.testimanials_divs}>
          <h4>Michael Kigozi- NBS Sports Personality</h4>
          <p>
            Run Automations installed a reliable security system which has
            greatly reduced theft in our area.
          </p>
        </div>
      </div>
    </>
  );
};

export default Testimaonials;
