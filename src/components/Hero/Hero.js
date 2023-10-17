import Spotlight from "../Spotlight/Spotlight";

import styles from './Hero.module.scss';

const Hero = () => {

  return (
    <section className={`${styles.Hero}`}>
      <div className={`${styles.Content}`}>

        <h1 className={`display-1 ${styles.Title}`}>
          The OK Classic
        </h1>

        <h2 className={`display-2 ${styles.Subtitle}`}>
          An{' '}
          <span className={'fw-bold'}>IGBO</span>
          {' '}bowling tournament
        </h2>

        <h3 className={`display-3 ${styles.Dates}`}>
          April 19-21, 2024
        </h3>
      </div>

      <Spotlight/>

      <div className={`${styles.BackgroundImage}`}></div>
      <div className={`${styles.BackgroundShade}`}></div>
    </section>
  )
}

export default Hero;
