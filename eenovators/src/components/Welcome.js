import styles from "./Welcome.module.css";

const Welcome = () => {
  return (
    <>
      <div className={styles.welcome_page}>
        {/* <div className={styles.overlay}></div> */}
        <div className={styles.Welcome_div__container}>
          <div className={styles.welcome_div__top}>
            <p id={styles.welcome}>WELCOME TO</p>
            <p id={styles.run}>RUN AUTOMATIONS</p>
          </div>
          <div className={styles.welcome_div__bottom}>
            <p id={styles.welcome_pragrapgh}>
              INNOVATIVE AND RELIABLE ENERGY EFFICIENCY SOLUTIONS
            </p>
          </div>
        </div>
      </div>

      <div className={styles.welcome_paragraph}>
        <p>
          Using our desktop survey, Eenovators Ltd will build an initial report
          of your current energy ‘footprint’ – and the potential energy cost,
          and carbon savings you could make by working with us. It’s completely
          free, and there's no commitment to continue further at this stage.
        </p>
      </div>

      <div className={styles.button}>
        <button>Get your free diagnosis report</button>
      </div>

      <div className={styles.empty_div}></div>

      <div className={styles.description}>
        <h2>WHO WE ARE</h2>
        <p>
          {/* Eenovators is an Energy Consulting firm that is dedicated to offering
          innovative and reliable energy efficiency solutions. Our products and
          services are rooted in engineering and driven by innovation, passion,
          state of the art equipment and world experience.**************** */}
          Powered by the most advanced IOT technologies, and a vast engineering,
          marketing and administrative team, we have become the pioneers in
          design and production of reliable automation systems accross the
          country. Run Automations is committed to leveraging technology to
          simplify any aspect of your business, "Name the problem, and we solve
          it!". We have evolved from a company that was mainly technology
          oriented to one which is consumer centred, ensuring delivery of
          platforms optimized for use by both clients and administrators.
        </p>
      </div>
    </>
  );
};

export default Welcome;
